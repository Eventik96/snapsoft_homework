function displayRecursive(root, parentDiv) {
  let folder = document.createElement("div");
  folder.innerHTML = "<b>></b>📁 " + root.name;
  folder.style = "margin-left:2em;";
  parentDiv.appendChild(folder);
  if (root.children.length == 0) {
    folder.innerHTML = root.name;
    return;
  }
  root.children.forEach(child => {
    displayRecursive(child, folder);
  });
}
