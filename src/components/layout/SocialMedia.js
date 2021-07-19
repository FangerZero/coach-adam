import './SocialMedia.css';
import twitter from './twitter.png';
import Youtube from './Youtube.jpg';

function SocialMedia() {
  return (
    <div className="SocialMedia">
       <a href="https://twitter.com/coach_a_p"> <img src={twitter} alt="Twitter" width="100" height="100"></img> </a>
       <a href="https://www.youtube.com/channel/UCy2JQOQh8S6GEm7vqqSiYtQ"> <img src={Youtube} alt="Youtube" width="100" height="100"></img></a>
    </div>  
  );
}

export default SocialMedia;