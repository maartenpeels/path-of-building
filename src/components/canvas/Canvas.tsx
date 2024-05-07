import {useEffect, useRef} from "react";
import * as d3 from "d3";
import {ZoomTransform} from "d3-zoom";


type CanvasProps = {
  canvasWidth: number;
  canvasHeight: number;
  draw: (context: CanvasRenderingContext2D, transform: ZoomTransform) => void;
}

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const zoom = d3.zoom<HTMLCanvasElement, unknown>().on("zoom", ({transform}) => {
      context.save();
      props.draw(context, transform as ZoomTransform);
      context.restore();
    });
    d3.select<HTMLCanvasElement, unknown>('canvas').call(zoom);

    props.draw(context, d3.zoomIdentity);
  }, [props, props.canvasHeight, props.canvasWidth]);

  return (
    <canvas ref={canvasRef} width={props.canvasWidth} height={props.canvasHeight} />
  );
}

export default Canvas;
