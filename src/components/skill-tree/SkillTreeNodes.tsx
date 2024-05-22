import SkillTreeSkill from "./SkillTreeSkill.tsx";
import SkillTreeData from "./models/SkillTreeData.ts";

interface SkillTreeNodesProps {
  treeData: SkillTreeData;
}

const SkillTreeNodes = ({treeData}: SkillTreeNodesProps) => {
  return (
    <>
      {Object.values(treeData.nodes).map((node) => (
        <SkillTreeSkill x={node.x} y={node.y} radius={20} node={node} key={node.id} />
      ))}
    </>
  );
}

export default SkillTreeNodes;
