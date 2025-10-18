import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.5;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>NeoMac Pro</h1>
        <img src="/title.png" alt="" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Order Now</button>

      <p>
        Experience innovation at your fingertips — starting at $1,499 or $125/mo
      </p>
    </section>
  );
};

export default Hero;
