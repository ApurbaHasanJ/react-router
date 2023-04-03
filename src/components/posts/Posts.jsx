import React from 'react';
import './posts.css'
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div >
            <h2>All post are here: {posts.length}</h2>
            <div className='posts'>
                {
                    posts.map(post => <SinglePost
                    key={post.id}
                    post={post}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;