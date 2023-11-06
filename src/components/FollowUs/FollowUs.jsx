import { ReactComponent as Facebook } from '../../images/facebook-icon.svg';
import { ReactComponent as Youtube } from '../../images/youtube-icon.svg';
import { ReactComponent as Twitter } from '../../images/twitter-icon.svg';
import { ReactComponent as Instagram } from '../../images/instagram-icon.svg';
import css from './FollowUs.module.css';

const FollowUs = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Follow us</p>
      <ul className={css.list}>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Youtube />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;
