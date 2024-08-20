import css from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.box}>
      <div className={css.profileContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileUsername}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Followers</span>
          <span className={css.profileStatValue}>{followers}</span>
        </li>

        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Views</span>
          <span className={css.profileStatValue}>{views}</span>
        </li>

        <li className={css.profileStat}>
          <span className={css.profileStatLabel}>Likes</span>
          <span className={css.profileStatValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
