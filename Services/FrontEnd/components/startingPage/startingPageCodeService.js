const fs = require("fs");
var path = require("path");
const CRUDConfigurations = require("../../../../CRUD_Config");

let instance = null;
let startingPageFilesFolderPath = __dirname + "../../../../../"+ CRUDConfigurations.reactAppCodeFolderName +"/components/startingPage";

class startingPageCodeService {
  constructor() {} //i am also here if you need me

  static getInstance() {
    if (!instance) {
      instance = new startingPageCodeService();
    }
    return instance;
  }

  GetStartingpageFileCode(schemaTables) {
    var startingPageFileCode = this.getImportsAndReturn(); //imports
    // startingPageFileCode += this.getReturnRemains();
    startingPageFileCode += this.getSpecficNavLinks(schemaTables); // all close braces and exports
    // startingPageFileCode += this.getNavbarFileRemains();
    return startingPageFileCode;
  }

  getImportsAndReturn() {
    var filePath = startingPageFilesFolderPath + "/startingPageImportsAndReturn.txt";
    var code = fs.readFileSync(path.resolve(filePath), "utf8");
    // code += '\n      <Link className="navbar-brand custom-navbar-brand" to="/">\n';
    // code += '        ' + CRUDConfigurations.ProjectAppName+'\n';
    // code += '      </Link>\n';
    return code;
  }

//   getReturnRemains() {
//     var filePath = startingPageFilesFolderPath + "/navbarReturnRemains.txt";
//     var code = fs.readFileSync(path.resolve(filePath), "utf8");
//     return code;
//   }

//   getNavbarFileRemains() {
//     var filePath = startingPageFilesFolderPath + "/navbarFileRemains.txt";
//     var code = fs.readFileSync(path.resolve(filePath), "utf8");
//     return code;
//   }

  getSpecficNavLinks(schemaTables) {
    let tblName,code="";
    if(schemaTables == null ){
      code += '            <Link className="nav-link custom-nav-link" to="/sampleComponent">\n';
      code += '              sampleComponent\n';
      code += '            </NavLink>\n';
      code += '        )}\n';
    }
    else{
      for (var tableId in schemaTables) {
        tblName = schemaTables[tableId].name;
        tblName2 = schemaTables[tableId+1].name 
        code += '            <Link className="nav-link custom-nav-link" to="/'+ tblName.toLowerCase() +'s">\n';
        code += '              '+ tblName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) +'s\n';
        code += '            </Link>\n'
        code += '              </div>\n'
        code += '           </div>\n'
        code += '      </div>\n'
        code += '      )\n'
        code += '     }\n'
        code += '    }\n'
        code += 'export default StartingPage;\n'
      }
    }
    return code;
  }
}

module.exports = startingPageCodeService;
