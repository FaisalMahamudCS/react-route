import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';

const Friends = () => {
const [friends,SetFriends]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=>SetFriends(data))
},[])

    return (
        <div>

            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
            <h2>This is friend page</h2>
        </div>
    );
};

export default Friends;