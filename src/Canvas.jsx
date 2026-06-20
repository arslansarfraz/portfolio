import React, {useEffect} from "react";
import {useCanvas} from "./CanvasContext";

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    isDrawMode,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onPointerDown={startDrawing}
      onPointerUp={finishDrawing}
      onPointerLeave={finishDrawing}
      onPointerMove={draw}
      ref={canvasRef}
      className='canva'
      style={{
        // Click-through while browsing so scroll/drag/select work everywhere;
        // only captures input (mouse, touch, stylus) in draw mode.
        pointerEvents: isDrawMode ? "auto" : "none",
        touchAction: isDrawMode ? "none" : "auto",
      }}
    />
  );
}
