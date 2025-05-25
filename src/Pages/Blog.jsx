import { NavLink } from "react-router-dom";

function Blog({blogItems}){
    return(
        <div>
            <h3>Minu uudised</h3>
            {
                blogItems.map((blog) => {
                    return(
                        <div key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                            <NavLink to={`/news/${blog.id}`}>Loe edasi ...</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog;