import {Stage} from "@pixi/react";
import treeData from "../../assets/skill-tree/data.json";
import {Tree} from "../../types/TreeType.ts";
import {useLayoutEffect, useRef, useState} from "react";
import SkillTreeGroup from "./SkillTreeGroup.tsx";
import Viewport from "./Viewport.tsx";

import './SkillTree.css';

const SkillTree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tree] = useState(treeData as Tree);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, []);

  console.log(dimensions);

  return (
    <div className="tree-container" ref={containerRef}>
      <Stage width={dimensions.width} height={dimensions.height} options={{backgroundColor: 0x000000}}>
        <Viewport width={dimensions.width} height={dimensions.height}
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
