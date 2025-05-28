import { NavLink } from "react-router-dom";

function Blog({blogItems, setBlogId}){
    return(
        <div>
            <h3>Minu uudised</h3>
            {
                blogItems.map((blog) => {
                    return(
                        <div key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                            <div>
                                <img src={blog.pictureUrl} alt={blog.title} style={{width: '100px', height: '100px'}} />
                            </div>
                            <NavLink 
                                to={`/news/${blog.id}`}
                                onClick={() => setBlogId(blog.id)}
                                >
                                Loe edasi ...
                                </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog;