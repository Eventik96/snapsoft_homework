class TreeItem {
  name; //string
  children = []; //array of TreeItems
  constructor(name) {
    this.name = name;
  }

  addChild(child) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].name == child.name) {
        var flag = true;
        return this.children[i];
      }
    }
    if (!flag) {
      this.children.push(child);
      return child;
    }
  }

  getChildren() {
    return this.children;
  }
}
