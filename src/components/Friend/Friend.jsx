import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    // console.log(friend);
    const {name, address, company, email,phone, website,username,id} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>
        </div>
    );
};

export default Friend;