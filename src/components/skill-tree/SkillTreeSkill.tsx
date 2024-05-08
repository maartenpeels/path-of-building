import { PixiComponent} from "@pixi/react";
import { Graphics } from '@pixi/graphics';
import '@pixi/events';
import {useState} from "react";

type SkillTreeSkillProps = {
  x: number;
  y: number;
  radius: number;
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

  return (
    <Circle x={props.x} y={props.y} radius={props.radius} setHover={setIsHovered} color={isHovered ? hoverColor : baseColor} />
  );
}

export default SkillTreeSkill;
