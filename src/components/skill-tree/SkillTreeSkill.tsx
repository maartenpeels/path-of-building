import { PixiComponent} from "@pixi/react";
import { Graphics } from '@pixi/graphics';
import '@pixi/events';
import {useEffect, useState} from "react";
import {SkillNode} from "./models/SkillTreeData.ts";

type SkillTreeSkillProps = {
  x: number;
  y: number;
  radius: number;
  node: SkillNode;
}

// For now draw a circle
interface CircleProps {
  x: number;
  y: number;
  radius: number;
  color: number;
  setHover: (isHovered: boolean) => void;
}
const Circle = PixiComponent<CircleProps, Graphics>('Circle', {
  create: () => new Graphics(),
  applyProps: (ins, _, props) => {
    ins.beginFill(props.color);
    ins.drawCircle(props.x, props.y, props.radius);
    ins.endFill();

    // Mouse events
    ins.interactive = true;
    ins.on('mouseenter', () => props.setHover(true));
    ins.on('mouseleave', () => props.setHover(false));
  },
});

const SkillTreeSkill = (props: SkillTreeSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseColor = 0xffffff;
  const hoverColor = 0xff0000;

  useEffect(() => {
    if (!isHovered) return;

    const stats = props.node.node.stats?.map((stat) => stat || "").join(', ');
    console.log(`${props.node.node.name}: ${stats}`);
  }, [isHovered, props.node.node.name, props.node.node.stats]);

  return (
    <Circle x={props.x} y={props.y} radius={props.radius} setHover={setIsHovered} color={isHovered ? hoverColor : baseColor} />
  );
}

export default SkillTreeSkill;
