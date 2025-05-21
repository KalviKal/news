import { useParams } from "react-router-dom";

function BlogDetails() {
    const {postId} = useParams()
    return (
        <div>
        <h1>Blog Details</h1>
        <p>This is the blog details page.</p>
        {postId}
        </div>
    );
}

export default BlogDetails;