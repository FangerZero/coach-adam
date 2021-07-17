import './Video.css';
import myVideo from './intro-maker-with-logo-reveal-featuring-a-cool-explosion-400-el1.mp4';

function Video() {
    return (
        <div className="Video">    
            <video height="400px" muted loop autoPlay>
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video;