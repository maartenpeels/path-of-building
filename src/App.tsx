import treeData from "./assets/skill-tree/data.json";
import SkillTree from "./components/skill-tree/SkillTree.tsx";
import {Tree} from "./components/skill-tree/types/TreeType.ts";

import './App.css';

function App() {
  return (
    <div className="container">
      <SkillTree tree={treeData as Tree} />
    </div>
  )
}

export default App
