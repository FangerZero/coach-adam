import './SocialMedia.css';
import twitter from './Twitter_sm.png';
import Youtube from './YouTube_sm.png';

function SocialMedia() {
  return (
    <div className="SocialMedia">
       <a href="https://twitter.com/coach_a_p"><img src={twitter} alt="Twitter"></img> </a>
       <a href="https://www.youtube.com/channel/UCy2JQOQh8S6GEm7vqqSiYtQ"> <img src={Youtube} alt="Youtube"></img></a>
    </div>  
  );
}

export default SocialMedia;