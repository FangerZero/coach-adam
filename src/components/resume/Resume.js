import './Resume.css';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from './Coach AP Professional Resume[5].pdf';

function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    };

    const windowWidth = () => {
        return window.innerWidth < 1000 ? window.innerWidth : 1000;
    }
    
    return(
        <div id="resume" className="Resume">
            <h1>About Coach AP</h1>
            <p>Adam Plageman better known as Coach A.P. became the Head Strength and Conditioning Coach for the Minnesota State Community and Technical College football team in January 2021.  In the fall, he’ll also serve as the Defensive Backs Coach.</p>
            <p>Before M-State, Coach A.P. was a strength and conditioning intern with the University of Iowa football team.  He was the defensive backs coach and assistant strength and conditioning coach with Mayville State University.  He was also a strength and conditioning coach with Yutan Sports Academy and a defensive backs coach at Yutan High School. </p>
            <p>Coach A.P. was an assistant defensive backs and linebackers coach at the College Gridiron Showcase down in Fort Worth, Texas.  He started his coaching career as the Defensive Coordinator with the Omaha Stockmen Amateur football team.</p>
            <p>Coach A.P. will complete his Master’s of Science in Sports Coaching remotely from West Virginia University in December of 2021.  He received his B.S. from Northern State University where he was a member of the track and field program where he is a school record holder in the triple jump.</p>
            <p>He is a Certified Strength and Conditioning Specialist through the National Strength and Conditioning Association and holds his USAW-Level 1 certification.  In his spare time, he likes to train his Olympic lifts, go hiking, and spend time playing with his cat Addie.</p>
            <Document className="Resume-pdf" file={pdfFile} options={options}>
                <Page pageNumber={1} width={windowWidth()} />
            </Document>
        </div>
    );
}

export default Resume