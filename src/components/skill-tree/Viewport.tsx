import React from "react";
import * as PIXI from "pixi.js";
import { PixiComponent, useApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";

export interface ViewportProps {
  width: number;
  height: number;
  bounds: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const { width, height } = props;
    const { ticker } = props.app;
    const { events } = props.app.renderer;

    const viewport = new PixiViewport({
      screenWidth: width,
      screenHeight: height,
      worldWidth: props.bounds.maxX - props.bounds.minX,
      worldHeight: props.bounds.maxY - props.bounds.minY,
      ticker: ticker,
      events: events,
    });

    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate();

    return viewport;
  },
});

const Viewport = (props: ViewportProps) => {
  const app = useApp();
  return <PixiComponentViewport app={app} {...props} />;
};

export default Viewport;
