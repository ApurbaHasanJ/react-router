import React from 'react';
import './PostDetails.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetails = useLoaderData()
    const {id, userId,title, name, body} = postDetails;

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Details About Your Post: {id}</h2>
            <h3>{name}</h3>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetail;