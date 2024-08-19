// src/components/Dashboard.jsx

const Dashboard = ({ user }) => {
    return (
     <div>
     <main>
        { <h1>Welcome, {user.username}</h1> }
        <video autoPlay muted loop id="myVideo">
      <source src="https://videos.pexels.com/video-files/3769033/3769033-hd_1920_1080_25fps.mp4" type="video/mp4" />
    </video> 
      </main>
      </div>
    );
  };
  
  export default Dashboard;