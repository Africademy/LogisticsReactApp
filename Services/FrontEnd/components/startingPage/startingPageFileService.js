const fs = require("fs");

const startingPageFileCodeService = require("./startingPageCodeService");

let instance = null;
let startingPageFileCodeServiceInst = null;

class startingPageFileService {
  constructor() {
    startingPageFileCodeServiceInst = startingPageFileCodeService.getInstance();
  }

  static getInstance() {
    if (!instance) {
      instance = new startingpageFileService();
    }
    return instance;
  }

  generateStartingpageFile(schemaTables, folderPath, fileName) {
    try {
      let startingPageFileCode = startingPageFileCodeServiceInst.GetStartingpageFileCode(schemaTables); //generate App file COde

      //now create the file and write the code inside it
      fs.writeFile(folderPath + "/" + fileName, startingPageFileCode, err => {
        if (err) {
          console.log(err);
        }
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

module.exports = startingpageFileService;