import React from 'react'
import css from './FriendListItem.module.css'

const FriendListItem = ({friends}) => {
    console.log(friends);
    return (
       friends.map(friend => 
                <li key={friend.id} className={css.item}>
                <span className={friend.isOnline ? css.online : css.ofline}></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.friend_name}>{friend.name}</p>
              </li>
            )
    )
  }

export default FriendListItem