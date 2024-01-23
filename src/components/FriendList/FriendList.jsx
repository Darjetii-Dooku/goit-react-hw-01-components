import React from "react";
import css from "./FriendList.module.css"
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({friends}) => {
  return (
    <div>
        <ul className={css.list}>
            <FriendListItem friends = {friends} />
        </ul>
    </div>
  )
}
export default FriendList

