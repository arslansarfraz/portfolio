import React, {useContext, useEffect, useRef, useState} from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({children}) => {
  const [selectedColor, setSelectedColor] = useState("black");

  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

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
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({nativeEvent}) => {
    if (!isDrawing) {
      return;
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
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
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
