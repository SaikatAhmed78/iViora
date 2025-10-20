import clsx from "clsx";
import useMacbookStore from "../store/maclineStore";
import { Canvas } from "@react-three/fiber";
import StudioLights from "../components/studio/StudioLights";
import ModelSwitcher from "../components/three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProduceFrame = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2 className="text-4xl font-semibold mb-4 tracking-tight">
        Discover Every Detail
      </h2>

      <div className="controls">
        <div>
          {/* <p className="text-neutral-400">
            MacBook Pro — Available in 14-inch and 16-inch models, finished in
            Space Gray and Deep Black.
          </p> */}

          <div className="flex-center gap-5 mt-6">
          
            <div className="color-control flex gap-3">
              <div
                onClick={() => setColor("#adb5bd")}
                className={clsx(
                  "w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ring-2 ring-transparent hover:ring-white/50 hover:scale-110",
                  "bg-neutral-300",
                  color === "#adb5bd" &&
                    "ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                )}
                title="Space Gray"
              />

              <div
                onClick={() => setColor("#2e2c2e")}
                className={clsx(
                  "w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ring-2 ring-transparent hover:ring-white/50 hover:scale-110",
                  "bg-neutral-900",
                  color === "#2e2c2e" &&
                    "ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                )}
                title="Deep Black"
              />
            </div>

   
            <div className="size-control flex gap-3">
              <button
                onClick={() => setScale(0.06)}
                className={clsx(
                  "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 backdrop-blur-sm",
                  scale === 0.06
                    ? "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-105"
                    : "bg-transparent text-white border-white/30 hover:border-white/60 hover:scale-105"
                )}
              >
                14”
              </button>

              <button
                onClick={() => setScale(0.08)}
                className={clsx(
                  "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 backdrop-blur-sm",
                  scale === 0.08
                    ? "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-105"
                    : "bg-transparent text-white border-white/30 hover:border-white/60 hover:scale-105"
                )}
              >
                16”
              </button>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{
          position: [0, 2, 5],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProduceFrame;
