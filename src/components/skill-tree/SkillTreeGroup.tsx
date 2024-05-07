import {Group} from "../../types/TreeType.ts";
import { PixiComponent} from "@pixi/react";
import { Graphics } from '@pixi/graphics';

type SkillTreeGroupProps = {
  group: Group;
}

// For now draw a circle
interface CircleProps {
  x: number;
  y: number;
  radius: number;
  color: number;
}
const Circle = PixiComponent<CircleProps, Graphics>('Circle', {
  create: () => new Graphics(),
  applyProps: (ins, _, props) => {
    ins.x = props.x;
    ins.beginFill(props.color);
    ins.drawCircle(props.x, props.y, props.radius);
    ins.endFill();
  },
});

const SkillTreeGroup = (props: SkillTreeGroupProps) => {
  console.log(props.group);
  return (
    <Circle x={props.group.x} y={props.group.y} radius={50} color={0xffffff} />
  );
}

export default SkillTreeGroup;
