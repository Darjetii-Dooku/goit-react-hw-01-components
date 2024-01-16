import React from "react";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    console.log(friends);
  return (
    <div>
        <ul className={css.list}>
            {friends.map(friend => 
                <li key={friend.id} className={css.item}>
                <span className={friend.isOnline ? css.online : css.ofline}></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.friend_name}>{friend.name}</p>
              </li>
            )}
        </ul>
    </div>
  )
}
export default FriendList

