// src/components/Landing.jsx
// import '.../Landing.css';
import "./Landing.css";

const Landing = () => {
    return (
      <div>
        <main>
    <div>
            <video autoPlay muted loop id="myVideo">
          < source src="https://videos.pexels.com/video-files/6839669/6839669-sd_506_960_25fps.mp4-" type="video/mp4" />
        </video> 
        </div>
          <h1>Hello, you are on the landing page for visitors.</h1>
          <h3>
            If you sign up for a new account, you will have the ability to sign in
            and see your super secret dashboard.
          </h3>
        </main>
       
        <div>

        </div>
      </div>
    );
  };
  
  export default Landing;