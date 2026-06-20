import React, {useContext, useEffect, useRef, useState} from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({children}) => {
  const [selectedColor, setSelectedColor] = useState("black");

  const [isDrawing, setIsDrawing] = useState(false);
  const [isDrawMode, setIsDrawMode] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // Toggle a body class so the pencil cursor / no-select only apply while drawing.
  useEffect(() => {
    document.body.classList.toggle("draw-mode", isDrawMode);
    return () => document.body.classList.remove("draw-mode");
  }, [isDrawMode]);

  const toggleDrawMode = () => setIsDrawMode(prev => !prev);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Works for mouse, touch and stylus (pointer) events.
  const getCoords = nativeEvent => {
    if (typeof nativeEvent.offsetX === "number") {
      return {x: nativeEvent.offsetX, y: nativeEvent.offsetY};
    }
    const rect = canvasRef.current.getBoundingClientRect();
    const point = nativeEvent.touches ? nativeEvent.touches[0] : nativeEvent;
    return {x: point.clientX - rect.left, y: point.clientY - rect.top};
  };

  useEffect(() => {
    prepareCanvas();
    window.addEventListener("resize", prepareCanvas);
    return () => window.removeEventListener("resize", prepareCanvas);
  }, []);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = selectedColor;
    }
  }, [selectedColor]);

  useEffect(() => {
    window.onload = () => {
      prepareCanvas();
    };
    window.addEventListener("resize", prepareCanvas);
    return () => window.removeEventListener("resize", prepareCanvas);
  }, []);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.width = window.innerWidth * 2;
    canvas.height = document.documentElement.scrollHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${document.documentElement.scrollHeight}px`;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({nativeEvent}) => {
    if (!isDrawMode) return;
    const {x, y} = getCoords(nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (!isDrawing) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({nativeEvent}) => {
    if (!isDrawing || !isDrawMode) {
      return;
    }
    const {x, y} = getCoords(nativeEvent);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
        selectedColor,
        setSelectedColor,
        isDrawMode,
        toggleDrawMode,
        clearCanvas,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
