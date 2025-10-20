import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />

        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Quantum Core</h2>

            <div className="space-y-5 mt-7 p-10">
              <p>
                Meet the all-new{" "}
                <span className="text-white">M4 Processor</span>, engineered to
                redefine speed, efficiency, and creativity.
              </p>

              <p>
                Experience seamless performance on iPad Pro—write, design, and
                innovate with unmatched fluidity. Power meets portability in a
                sleek, ultra-thin design.
              </p>

              <p>
                The advanced display engine delivers vivid colors, sharp
                contrast, and next-level brightness. Coupled with a next-gen
                GPU, enjoy stunning visuals with hardware-accelerated ray
                tracing for immersive graphics.
              </p>

              <p className="text-primary cursor-pointer hover:underline">
                Explore the full potential of Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up To</p>
              <h3>4x Faster</h3>
              <p>Pro rendering performance compared to M2</p>
            </div>
            <div className="space-y-2">
              <p>Up To</p>
              <h3>1.5x Faster</h3>
              <p>CPU performance than M2 for demanding tasks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
