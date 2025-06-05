import React, { useRef, useEffect, useState } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 1.0,
          color: 0xb21616,
          color2: 0x611919,
          backgroundColor: 0x101010,
          size: 0.7,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default VantaBackground;
