import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios';
const BlogPage = () => {
    const [blogPost, setBlogPost] = useState(null)
    const [blogCategory, setBlogCategory] = useState(null)

    let data = '';
    let blogConfig = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://portfilio-blog-page.onrender.com/api/blog',
        headers: {},
        data: data
    };
    let categoryConfig = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://portfilio-blog-page.onrender.com/api/category/',
        headers: {}
    };

    async function fetchBlog () {
        try {
            const response = await axios.request(blogConfig);
            setBlogPost(response.data)
            console.log(JSON.stringify(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }

    async function fetchCategory () {
        try {
            const response = await axios.request(categoryConfig);
            setBlogCategory(response.data)
            console.log(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlog();
        fetchCategory()
    }, [])


    return (
        <>
            <div className='max-w-3xl mx-4  md:mx-auto my-6 flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Blog</h1>

                <div className='flex gap-2 flex-wrap'>
                {!blogCategory ? <h1>Loading...</h1> : 
                 blogCategory.map((item,index)=>{
                    return <div key={index} className='bg-gray-600 flex items-center gap-2 justify-between  text-lg text-white'>
                        <span className='py-1 pl-2 '>{item.name}</span>
                        <span className=' py-1  bg-gray-700 px-2'>{item.blogCount} </span>
                    </div>
                }) 
                    
                }
                </div>

                {!blogPost ? <h1>Loading..</h1> : blogPost.map((item, index) => {
                    return <BlogCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        date={new Date(item.publishedAt ).toDateString()}
                        id={item._id}
                    />
                })}
            </div>
        </>
    )
}

export default BlogPage
