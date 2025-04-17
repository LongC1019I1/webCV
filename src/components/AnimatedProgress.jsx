import React, { useEffect, useState } from "react";

const AnimatedProgress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="progress gradient-bar">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default AnimatedProgress;
