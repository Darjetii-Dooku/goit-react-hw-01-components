import React from "react";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    console.log(friends);
  return (
    <div>
        <ul class="friend-list">
            {friends.map(friend => 
                <li key={friend.id} className={css.item}>
                <span className={friend.isOnline ? css.online : css.ofline}></span>
                <img className={css.avatar} src="" alt="User avatar" width="48" />
                <p className={css.friend_name}></p>
              </li>
            )}
        </ul>
    </div>
  )
}
export default FriendList

