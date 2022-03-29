import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,email,username}=props.friend;
    
    const navigate=useNavigate();
    const showFriendDetails=()=>{
 const path=`/friend/${id}`;
 navigate(path);
    }
    return (
        <div>
           
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{username}</p>
            <button onClick={showFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;