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

    const worldWidth = props.bounds.maxX - props.bounds.minX;
    const worldHeight = props.bounds.maxY - props.bounds.minY;

    const viewport = new PixiViewport({
      screenWidth: width,
      screenHeight: height,
      worldWidth: worldWidth,
      worldHeight: worldHeight,
      ticker: ticker,
      events: events,
    });

    // TODO: Zooming becomes slower when zooming in more
    viewport
      .drag()
      .pinch()
      .wheel({ smooth: 3 })
      .decelerate()
      .clampZoom({
        minWidth: 500,
        minHeight: 500,
        maxWidth: worldWidth + 500, // TODO: + 500 does not seem to work
        maxHeight: worldHeight + 500, // TODO: + 500 does not seem to work
      });

    viewport.moveCenter(0, 0);

    return viewport;
  },
});

const Viewport = (props: ViewportProps) => {
  const app = useApp();
  return <PixiComponentViewport app={app} {...props} />;
};

export default Viewport;
