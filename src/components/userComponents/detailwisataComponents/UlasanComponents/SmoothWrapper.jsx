import { useEffect, useRef } from "react";

export default function SmoothWrapper({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "scale(0.97)";
    el.style.transition = "all 0.25s ease";

    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "scale(1)";
    });
  }, []);

  return cloneWithRef(children, ref);
}

function cloneWithRef(element, ref) {
  return {
    ...element,
    ref: ref,
  };
}
