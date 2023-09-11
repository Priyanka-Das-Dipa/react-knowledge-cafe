import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    // data load
    const [blogs, setBlogs] = useState([])
    useEffect( () =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;