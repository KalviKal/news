import { useParams } from "react-router-dom";
import useFetchBlogPostDetails from "../hooks/useFetchBlogPostDetails";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function BlogDetails() {

    const renderOption = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (<img
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt="??"
        />)
        }
    }
    }


    const {postId} = useParams()
    const {blogDetails, loading, error} = useFetchBlogPostDetails(postId)
    if (loading) {
        return <div>Loading...</div>
    }


    let errorJsx

    if (error) {
        errorJsx = <div className="alert alert-danger" role="alert"> Error</div>
    }

    return (
        <div>
            {errorJsx}
            <h3>{blogDetails.title}</h3>
            <div>
                <img src={blogDetails.pictureUrl} alt={blogDetails.title} style={{width: '100px', height: '100px'}} />
            </div>
            <p>Autor: {blogDetails.authorName}</p>
            <div>
                {documentToReactComponents(blogDetails.content, renderOption)}
            </div>

        </div>
    );
}

export default BlogDetails;