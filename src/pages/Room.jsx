import React from 'react';
import './Room.css';

function Room() {
  return (
    <div className="room-wrapper">

      <div className="left-sidebar">
        <h2 className="room-title">Room Title</h2>
        <p className="joined-count">Joined: 34</p>
        <ul className="member-list">
          <li>Member 1</li>
          <li>Member 2</li>
          <li>Member 3</li>
          
        </ul>
      </div>


      <div className="center-area">
        <h3>People Joined</h3>
        <div className="people-grid">
          <div className="person">
            <img src="https://uploads-ssl.webflow.com/606b1a109c3b857f6d84ad01/60b8fb956f01c6e5e16ec69f_Man_Waving_Facing%20Forward_Video_Call_750.jpg" alt="Person 1" />
          </div>
          <div className="person">
            <img src="https://thumbs.dreamstime.com/b/online-teacher-s-portrait-happy-handsome-man-wearing-headset-waving-hand-to-webcam-gesturing-hello-smiling-sitting-222516557.jpg" alt="Person 2" />
          </div>
          <div className="person">
            <img src="https://th.bing.com/th/id/OIP.6WofovKm-_661_6VICSr1gHaE7?rs=1&pid=ImgDetMain" alt="Person 3" />
          </div>
          <div className="person">
            <img src="https://thumbs.dreamstime.com/b/online-communication-video-call-internet-meeting-concept-positive-young-arab-man-calling-his-friend-webcam-speaking-to-230852077.jpg" alt="Person 4" />
          </div>
          <div className="person">
            <img src="https://img.freepik.com/premium-photo/portrait-young-business-man-work-video-call-while-staying-home_58466-15489.jpg" alt="Person 5" />
          </div>
          <div className="person">
            <img src="https://thumbs.dreamstime.com/b/young-handsome-man-standing-over-isolated-background-smiling-friendly-offering-handshake-as-greeting-welcoming-successful-270316659.jpg" alt="Person 6" />
          </div>
        </div>
      </div>

      
      <div className="right-sidebar">
        <div className="host-section">
          <h4>Host</h4>
          <img src="https://media.istockphoto.com/id/1472986779/photo/successful-hispanic-businessman-smiling-and-looking-at-camera-portrait-of-satisfied-man-in.webp?b=1&s=170667a&w=0&k=20&c=HLsYsEXz6nnfRX2lBNLOVkuELovkHNr3UUE5sKggMOQ=" alt="Host" />
        </div>
        <div className="participant-section">
          <h4>Participant</h4>
          <img src="https://media.istockphoto.com/id/1811793787/photo/influencer-does-smart-light-bulb-video.webp?b=1&s=170667a&w=0&k=20&c=uq5ALilyo_0e-38tqJHFtAD_FNLJRdbbH3553g-kS9M=" alt="Participant" />
        </div>
      </div>

      
      <div className="bottom-controls">
        <div className="control-section">
          <button className="control-button">End</button>
        </div>
        <div className="control-section">
          <button className="control-button">Camera</button>
        </div>
        <div className="control-section">
          <button className="control-button">Mic</button>
        </div>
      </div>
    </div>
  );
}

export default Room;
