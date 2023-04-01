import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles  from './BlogBody.module.css'
import { useParams } from 'react-router-dom';
const BlogRead = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null)
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://portfilio-blog-page.onrender.com/api/blog/${id}`,
        headers: {}
    };

    async function makeRequest () {
        try {
            const response = await axios.request(config);
            setBlog(response.data)
            console.log(JSON.stringify(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        makeRequest();
    }, [])
    return (
        <>
            {!blog ? <h1>Loading...</h1> :
                <div className="container mx-auto py-8 .rotate-45">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
                        {/* <img src={blog.image} alt={blog.title} className="outline my-4" /> */}
                        <p className="text-gray-700 text-sm mb-4">{blog.date}</p>
                        <div className={styles['article-body']}  dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogRead
