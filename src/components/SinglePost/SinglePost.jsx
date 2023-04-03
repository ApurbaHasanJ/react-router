import React from 'react';
import './SinglePost.css'
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {
    // console.log(post);
    const {body, id, userId, title} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>Id: {id}</h2>
            <h3>Title: {title}</h3>
            <h6>User ID: {userId}</h6>
            <div className='details'>
                <Link to={`/post/${id}`}>Show Details</Link>
                <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
                <button onClick={handleNavigation}>With Button Handler</button>
            </div>
        </div>
    );
};

export default SinglePost;