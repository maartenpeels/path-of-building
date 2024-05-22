import {Stage} from "@pixi/react";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import SkillTreeNodes from "./SkillTreeNodes.tsx";
import Viewport from "./Viewport.tsx";
import {Tree} from "./types/TreeType.ts";

import './SkillTree.css';
import SkillTreeData from "./models/SkillTreeData.ts";


interface SkillTreeProps {
  tree: Tree;
}

const SkillTree = ({tree}: SkillTreeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [treeData, setTreeData] = useState(new SkillTreeData(tree));

  useEffect(() => {
    setTreeData(new SkillTreeData(tree));
  }, [tree]);

  // TODO: View not resized when window is resized
  useLayoutEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, [containerRef]);

  return (
    <div className="tree-container" ref={containerRef}>
      <Stage width={dimensions.width} height={dimensions.height} options={{backgroundColor: 0x000000}}>
        <Viewport width={dimensions.width} height={dimensions.height}
                  bounds={{minX: tree.min_x, maxX: tree.max_x, minY: tree.min_y, maxY: tree.max_y}}>
          <SkillTreeNodes treeData={treeData}/>
        </Viewport>
      </Stage>
    </div>
  );
}


export default SkillTree;
