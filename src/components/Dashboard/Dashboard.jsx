// src/components/Dashboard.jsx

import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div>
      <main>
        <div className="welcoming">{<h1>Welcome, {user.username}</h1>}</div>
        <div className="videoCont">
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://videos.pexels.com/video-files/3769033/3769033-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
