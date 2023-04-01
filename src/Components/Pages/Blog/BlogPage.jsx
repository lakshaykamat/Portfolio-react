import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios';
const BlogPage = () => {
    const [blogPost, setBlogPost] = useState(null)
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://portfilio-blog-page.onrender.com/api/blog',
        headers: {},
        data: data
    };

    async function makeRequest () {
        try {
            const response = await axios.request(config);
            setBlogPost(response.data)
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
            {!blogPost ? <h1>Loading...</h1> :
                <div className='max-w-3xl mx-4  md:mx-auto my-6 flex flex-col gap-6'>
                    <h1 className='text-4xl font-bold'>Work in Progress...</h1>
                    <div className='flex gap-2 flex-wrap'>
                        <div className=' bg-gray-600 flex items-center gap-2 justify-between  text-lg text-white'>
                            <span className='py-1 pl-2 '>General</span>
                            <span className=' py-1  bg-gray-700 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>React</span>
                            <span className=' py-1  bg-gray-600 px-2'>11</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>React native</span>
                            <span className=' py-1  bg-gray-600 px-2'>15</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>
                        <div className='rounded bg-gray-500  flex items-center gap-2 justify-between px-2 text-lg text-white'>
                            <span className='py-1 '>PHP</span>
                            <span className=' py-1  bg-gray-600 px-2'>1</span>
                        </div>

                    </div>
                    {blogPost.map((item, index) => {
                        return <BlogCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            date={item.date}
                            id={item._id}
                        />
                    })}
                </div>
            }
        </>
    )
}

export default BlogPage
