import {Group} from "../../types/TreeType.ts";
import SkillTreeSkill from "./SkillTreeSkill.tsx";

type SkillTreeGroupProps = {
  group: Group;
}

const SkillTreeGroup = (props: SkillTreeGroupProps) => {


  return (
    <SkillTreeSkill x={props.group.x} y={props.group.y} radius={50} />
  );
}

export default SkillTreeGroup;
