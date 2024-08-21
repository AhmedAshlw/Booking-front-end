// src/components/Landing.jsx
// import '.../Landing.css';
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <main>
        <div className="vhomeCont">
          <div className="starter">
            <h1>
            There is no sincere love than the love of food
            </h1>
          </div>
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

export default Landing;
