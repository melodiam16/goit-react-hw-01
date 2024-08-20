import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  const friendsStatus = clsx(
    css.friendStatus,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={`${css.box} ${friendsStatus}`}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={css.friendStatus}> {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
