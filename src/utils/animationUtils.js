import gsap from "gsap";

export const ANIMATION_DURATION = 1;
export const OFFSET_DISTANCE = 5;

export const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
        ease: "power2.out",
      });
    }
  });
};

export const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
    ease: "power2.inOut",
  });
};
