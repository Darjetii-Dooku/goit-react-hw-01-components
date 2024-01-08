import React from 'react'
import css from "./Profile.module.css"


const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.username}>{username}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stat}>
      <span className={css.stat_name}>Followers </span>
      <span className={css.stat_value}>{stats.followers}</span>
    </li>
    <li className={css.stat}>
      <span className={css.stat_name}>Views </span>
      <span className={css.stat_value}>{stats.views}</span>
    </li>
    <li className={css.stat}>
      <span className={css.stat_name}>Likes </span>
      <span className={css.stat_value}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile