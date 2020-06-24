function getWritableFolderStructure(readableFolders, writableFolders) {
  //syntax: /root/folder/.... etc
  // /root/-al kezdődjön, ha nem Error
  // a végén az utolsó folder-nél közömbös hogy van-e /

  var root = new TreeItem("root");

  //Ha / az utolsó karakter akkor kiszedjük hogy egységes legyen mindenhol
  for (let i = 0; i < readableFolders.length; i++) {
    if (readableFolders[i].slice(readableFolders[i].length - 1) === "/") {
      readableFolders[i] = readableFolders[i].slice(0, -1);
    }
  }
  for (let i = 0; i < writableFolders.length; i++) {
    if (writableFolders[i].slice(writableFolders[i].length - 1) === "/") {
      writableFolders[i] = writableFolders[i].slice(0, -1);
    }
  }

  for (let i = 0; i < writableFolders.length; i++) {
    let actPath = writableFolders[i].split("/");
    if (actPath[0].length > 0 || actPath[1] !== "root") {
      throw new Error(
        "writableFolders " + i + " element is not a correct absolute path!"
      );
    }

    if (isInclude(actPath)) {
      var actFolder = root;
      for (let j = 2; j < actPath.length; j++) {
        if (actPath[j].length) {
          let subFolder = new TreeItem(actPath[j]);

          actFolder = actFolder.addChild(subFolder);
        }
      }
    }
  }

  //olvasható-e a folderünk összes szülő folder-je
  function isInclude(path) {
    if (path.length <= 3) {
      return true;
    }
    for (let i = 2; i < path.length - 1; i++) {
      let tempPath = path.slice(0, i + 1).join("/");
      if (!readableFolders.includes(tempPath)) {
        return false;
      }
    }
    return true;
  }

  return root;
}
