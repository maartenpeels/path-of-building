import Canvas from "../canvas/Canvas.tsx";
import treeData from "../../assets/skill-tree/data.json";

import {ZoomTransform} from "d3-zoom";
import {useState} from "react";
import {Group, Tree} from "../../types/TreeType.ts";

type SkillTreeCanvasProps = {
  width: number;
  height: number;
}

const SkillTreeCanvas = (props: SkillTreeCanvasProps) => {
  const [tree] = useState(treeData as Tree);

  const drawGroup = (context: CanvasRenderingContext2D, group: Group) => {
    context.beginPath();
    context.arc(group.x, group.y, 50, 0, 2 * Math.PI);
    context.fill();
  }

  const draw = (context: CanvasRenderingContext2D, transform: ZoomTransform) => {
    context.save();
    context.fillStyle = "black";
    context.clearRect(0, 0, props.width, props.height);
    context.rect(0, 0, props.width, props.height);
    context.fill();
    context.translate(transform.x, transform.y);
    context.scale(transform.k, transform.k);

    context.fillStyle = "white";
    const groups = tree.groups;
    for (const group of Object.values<Group>(groups)) {
      drawGroup(context, group);
    }

    context.restore();
  }

  return (
    <Canvas canvasWidth={props.width} canvasHeight={props.height} draw={draw} />
  );
}

export default SkillTreeCanvas;
