import {Stage} from "@pixi/react";
import treeData from "../../assets/skill-tree/data.json";
import {Tree} from "../../types/TreeType.ts";
import {useState} from "react";
import SkillTreeGroup from "./SkillTreeGroup.tsx";
import Viewport from "./Viewport.tsx";

const SkillTree = () => {
  const [tree] = useState(treeData as Tree);

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="tree-container">
      <Stage width={width} height={height} options={{backgroundColor: 0x000000}}>
        <Viewport width={width} height={height}
                  bounds={{minX: tree.min_x, maxX: tree.max_x, minY: tree.min_y, maxY: tree.max_y}}>
          {Object.entries(tree.groups).map(([id, group]) => (
            <SkillTreeGroup key={id} group={group}/>
          ))}
        </Viewport>
      </Stage>
    </div>
  );
}


export default SkillTree;
