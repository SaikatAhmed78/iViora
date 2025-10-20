import { PresentationControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import MackBookModel16 from "../3D models/Macbook-16";
import MackBookModel14 from "../3D models/Macbook-14";
import { useGSAP } from "@gsap/react";
import {
  fadeMeshes,
  moveGroup,
  OFFSET_DISTANCE,
} from "../../utils/animationUtils";

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const showLargeMacBook = scale === 0.08 || scale === 0.05;

  useEffect(() => {
    if (largeMacBookRef.current) largeMacBookRef.current.position.x = 0;
    if (smallMacBookRef.current) smallMacBookRef.current.position.x = 5;
  }, []);

  useGSAP(() => {
    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);
      fadeMeshes(smallMacBookRef.current, 0);
      fadeMeshes(largeMacBookRef.current, 1);
    } else {
      moveGroup(smallMacBookRef.current, 0);
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);
      fadeMeshes(smallMacBookRef.current, 1);
      fadeMeshes(largeMacBookRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MackBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MackBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
