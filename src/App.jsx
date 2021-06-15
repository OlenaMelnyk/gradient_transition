import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [fopacity, setFopacity] = useState(1);
  const [sopacity, setSopacity] = useState(0);

  const toggle = () => {
    setFopacity(fopacity === 0 ? 1 : 0);
    setSopacity(sopacity === 0 ? 1 : 0);
  };

  return (
    <div>
      <div className="block1">
        <span>Linear:</span>
        <div
          className="f1 start_bgr line linear linear__visible"
          style={{ opacity: fopacity }}
        />
        <div className="s1 end_bgr line linear" style={{ opacity: sopacity }} />
      </div>

      <div className="block2">
        <span>cubic 0.3 0.5 0.3 0.5</span>
        <div
          className="f2 start_bgr line visible cubic1 cubic1__visible"
          style={{ opacity: fopacity }}
        />
        <div className="s2 end_bgr line cubic2" style={{ opacity: sopacity }} />
      </div>

      <div className="block3">
        <span>cubic 0.1 0.8 0.1 0.9</span>
        <div
          className="f3 start_bgr line visible cubic2 cubic2__visible"
          style={{ opacity: fopacity }}
        />
        <div className="s3 end_bgr line cubic2" style={{ opacity: sopacity }} />
      </div>

      <div className="mix1 start_bgr line" />
      <div className="mix2 end_bgr line" />
      <button
        className="toggle_button"
        type="button"
        onClick={toggle}
      >
        Toggle
      </button>
    </div>
  );
};
