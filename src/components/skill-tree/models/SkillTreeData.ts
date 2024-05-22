import {Group, Node, Tree} from "../types/TreeType.ts";

class SkillNode {
  id: string;
  node: Node;
  group: Group;
  orbitRadii: number[];
  orbitAngles: {[p: number]: Array<number>};

  orbit: number;
  arc: number;
  x: number;
  y: number;

  constructor(id: string, node: Node, group: Group, orbitRadii: number[], orbitAngles: {[p: number]: Array<number>}) {
    this.id = id;
    this.node = node;
    this.group = group;
    this.orbitRadii = orbitRadii;
    this.orbitAngles = orbitAngles;

    this.orbit = this.node.orbit || 0;
    this.arc = this.getArc(this.node.orbitIndex || 0);
    this.x = this.getX(this.arc);
    this.y = this.getY(this.arc);
  }

  private getArc(oidx: number): number {
    if (this.orbitAngles[this.orbit] !== undefined && this.orbitAngles[this.orbit].length > oidx) {
      return this.orbitAngles[this.orbit][oidx];
    }

    return 0;
  }

  private getX(arc: number): number {
    if (this.orbitRadii.length > this.orbit && this.group !== undefined) {
      return (this.group.x) - (this.orbitRadii[this.orbit]) * Math.sin(-arc);
    }

    return 0;
  }

  private getY(arc: number): number {
    if (this.orbitRadii.length > this.orbit && this.group !== undefined) {
      return (this.group.y) - (this.orbitRadii[this.orbit]) * Math.cos(-arc);
    }

    return 0;
  }
}

class SkillTreeData {
  tree: Tree;
  nodes: { [id: string]: SkillNode } = {};

  constructor(tree: Tree) {
    console.debug('SkillTreeData constructor');
    this.tree = tree;
    this.initNodes();
  }

  private initNodes() {
    const orbitAngles = this.getOrbitAngles();

    for (const id in this.tree.nodes) {
      const groupId = this.tree.nodes[id].group || 0;
      this.nodes[id] = new SkillNode(id, this.tree.nodes[id], this.tree.groups[groupId], this.tree.constants.orbitRadii, orbitAngles);
    }
  }

  private getOrbitAngles() {
    const skillsPerOrbit = this.tree.constants.skillsPerOrbit;
    const degrees: { [orbit: number]: Array<number> } = {};

    for (const orbit in skillsPerOrbit) {
      const skills = skillsPerOrbit[orbit];
      degrees[orbit] = [];

      if (skills === 16) {
        degrees[orbit] = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]
      } else if (skills === 40) {
        degrees[orbit] = [0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 135, 140, 150, 160, 170, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260, 270, 280, 290, 300, 310, 315, 320, 330, 340, 350]
      } else {
        for (let i = 0; i < skills; i++) {
          degrees[orbit].push(360 * i / skills);
        }
      }
    }

    const radians: { [orbit: number]: Array<number> } = {};
    const conversion = Math.PI / 180;
    for (const orbit in degrees) {
      const angles = degrees[orbit];
      radians[orbit] = [];
      for (const angle of angles) {
        radians[orbit].push(angle * conversion);
      }
    }

    return radians;
  }
}

export default SkillTreeData;
export {SkillNode}
