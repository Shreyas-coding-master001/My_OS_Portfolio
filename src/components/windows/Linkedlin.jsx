import React from 'react';
import "./Linkedlin.scss";
import Macwindows from './Macwindows';

const Linkedlin = ({ windowName }) => {
  return (
    <Macwindows width='40vw' windowName={windowName}>
        <div className="My-Profile">
            <div className="top-section">
              <div className="banner">
                <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Programming Screen" />
              </div>
              <div className="profile-photo">
                <img src="https://ik.imagekit.io/fczc2w1de/OS-Portfolio/WhatsApp%20Image%202025-01-08%20at%206.42.02%20PM.jpeg" 
                alt="Shreyas Patil" />

              </div>
            </div>
            <div className="Details-Section">
              <div className="left-side">
                <h3>Shreyas Patil <span>He/Him</span></h3>
                <p>Pursuing Computer Science Engineer @KCCollege | MERN stack | Java | Swing | Pyhton | Machine Learning |AI-enthusiast</p>
                <h5>Kalyan Dombivli, Maharashtra, India</h5>
                <h6>
                  Contact Me : 
                  <br /> 
                  Email - shreyaspatil367@gmail.com
                  <a href="https://linkedin.com/in/shreyas-kumar-7b3b0b1b1"
                    target='_blank'
                  >Visit Me</a>
                </h6>
              </div>
              <div className="right-side">
                <h4>My Experience</h4>
                <ul>
                  <li>Intership - Sapphire Infocom PVT</li>
                  <li>Freelancing - 10+ Successfull Projects</li>
                  <li>Mentors - Sheryians Coding School && Success classes of engineering(Dombivli)</li>
                </ul>
              </div>
            </div>
            <div className="My-Projects">
                <h3>Recent Activites</h3>
                <div className="Recent-Post">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7457733316557905920?collapsed=1" 
                    height="541" width="400" frameBorder="0"
                    allowFullScreen title="Embedded post">
                  </iframe>

                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455981443127689216?collapsed=1" 
                    height="541" width="400" frameBorder="0"
                    allowFullScreen title="Embedded post">
                  </iframe>

                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7413135354964361217?collapsed=1" 
                  height="541" width="400" frameBorder="0"
                  allowFullScreen title="Embedded post">
                  </iframe>

                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401974009912807424?collapsed=1" 
                  height="876" width="504" frameBorder="0"
                  allowFullScreen  title="Embedded post">
                  </iframe>
                </div>
            </div>
        </div>
    </Macwindows>
  )
}

export default Linkedlin
