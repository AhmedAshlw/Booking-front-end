// src/components/Dashboard.jsx

import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div>
      <main>
        <div className="vCont">
         
          <div className="videoCont">
            <video  autoPlay muted loop id="myVideo">
              <source
                src="https://videos.pexels.com/video-files/3769033/3769033-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
