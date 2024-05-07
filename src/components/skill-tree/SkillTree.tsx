import SkillTreeCanvas from "./SkillTreeCanvas.tsx";

const SkillTree = () => {
  const width = 800;
  const height = 600;

  return (
    <div className="tree-container">
      <SkillTreeCanvas width={width} height={height} />
    </div>
  );
}



export default SkillTree;
