const fs = require("fs");
var path = require("path");
const CRUDConfigurations = require("../../../../CRUD_Config");

let instance = null;
let FormFolderPath = __dirname + "../../../../../" + CRUDConfigurations.reactAppCodeFolderName + "/components/form";

class formsCodeService {
    constructor() {
    } //i am also here if you need me

    static getInstance() {
        if (!instance) {
            instance = new formsCodeService();
        }
        return instance;
    }

    GenerateFormCode(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        var formCode = this.getImports(schemaTable, schemaRelations); //imports
        formCode += this.generateClassAndState(schemaTable, schemaRelations);
        formCode += this.generateJoiScheema(schemaTable, schemaRelations);
        formCode += this.generatePopulateFormMethod(schemaTable, schemaRelations);
        formCode += this.generateComponentDidMount(tblName, schemaRelations);
        formCode += this.getFormMethods();//
        formCode += this.generateSubmitMethod(tblName, schemaRelations);
        formCode += this.generateRenderMethod(schemaTable, schemaRelations);
        formCode += this.generateCloseAndExport(tblName);
        return formCode;
    }

    getImports(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        let firstTable, secondTable;
        var filePath = FormFolderPath + "/imports.txt";
        var code = fs.readFileSync(path.resolve(filePath), "utf8");
        code = code.concat('import { save' + tblName + ', get' + tblName + ' } from "../../services/' + tblName.toLowerCase() + 'Service";\n');
        if (schemaRelations != null) {
            var tabs =[]
            for (var index in schemaRelations) {
                

    if (tabs.includes(schemaRelations[index].secondTable)) {
                    continue;
                }
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    if (schemaRelations[index].secondTable=='Amounttype'){
                        console.log("reached" )
                    }    
                    secondTable = schemaRelations[index].secondTable;
                        code += 'import { get' + secondTable + 's } from "../../services/' + secondTable.toLowerCase() + 'Service";\n';
                        tabs.push(schemaRelations[index].secondTable)
                }
                
            }
        }
        code += '\n';
        return code;
    }

    generateClassAndState(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let firstTable, secondTable, relationType, firstTableColumn;
        let code = 'class create' + tblName + ' extends Component{\n\n';
        code += ' constructor(props){\n' +
            'super(props);\n';
        

            if (schemaRelations != null) {
                for (var index in schemaRelations) {
                    firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                    if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                        secondTable = schemaRelations[index].secondTable;
                        firstTableColumn = schemaRelations[index].firstTableColumn;
                        code += '    this.populate' + firstTableColumn + 's = ' + 'this.populate' + firstTableColumn + 's.bind(this)'+';\n';
                    }
                }
            }
        
          code += '}';
        code += '  state = {\n';
        code += '    data: {'
        for (var column in tblColumns) {
            code = code.concat(
                ' ' + tblColumns[column].name + ': "",'
            );
        }
        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        code = code.concat(
                            ' ' + firstTableColumn + 'Ids: [],'
                        );
                    } else if (relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "select" || relationType.toLowerCase() == "onetomany") {
                        code = code.concat(
                            ' ' + firstTableColumn + 'Id: "",'
                        );
                    }
                }
            }
        }
        code += ' },\n';
        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    code += '    ' + firstTableColumn + 's: [],\n';
                }
            }
        }
        code += '    errors: {}\n';
        code += '  };\n\n';
        return code;
    }

    generateJoiScheema(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let firstTable, secondTable, relationType, firstTableColumn;
        let typeMethod = "";
        let requiredMethod = "";
        let minMethod = "";
        let maxMethod = "";
        let regexMethod = "";
        let code = '  scheema = {\n';
        code += '    _id: Joi.string(),\n';
        for (var column in tblColumns) {
            typeMethod = this.getJoiTypeMethod(tblColumns[column].type);
            if((tblColumns[column].hasOwnProperty('min') && tblColumns[column].hasOwnProperty('max'))){
                minMethod = "     .min(" +tblColumns[column].min+")";
                maxMethod = "     .max(" +tblColumns[column].max+")";
                
            }
            else{
                minMethod = "";
                maxMethod = "";
            }
            if((tblColumns[column].hasOwnProperty('regex'))){
                regexMethod = "      .regex(" +tblColumns[column].regex+")";
            } else {
                regexMethod = "";
            }

            if (tblColumns[column].hasOwnProperty('required')) {
                if (tblColumns[column].required === true) {
                    requiredMethod = "      .required()";
                } else {
                    if (tblColumns[column].type !== "number") {
                        requiredMethod = "      .allow('').allow(null)\n";
                    }
                }
            } else {
                if (tblColumns[column].type !== "number") {
                    requiredMethod = "      .allow('').allow(null)\n";
                }
            }
            code = code.concat(
                '    ' + tblColumns[column].name + ':  Joi.' + typeMethod + '\n' + requiredMethod + '\n' + minMethod + '\n' + maxMethod + '\n' + regexMethod +
                '      .label("' + tblColumns[column].name + '"),\n'
            );
            requiredMethod = "";
        }

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    firstTableColumn = schemaRelations[index].firstTableColumn
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        code = code.concat(
                            '    ' + firstTableColumn + 'Ids:  Joi.array()\n' +
                            '      .label("' + firstTableColumn + 'Ids"),\n'
                        );
                    } else if (relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "select" || relationType.toLowerCase() == "onetomany") {
                        code = code.concat(
                            '    ' + firstTableColumn + 'Id:  Joi.string()\n' +
                            '      .required()\n' +
                            '      .label("' + firstTableColumn + 'Id"),\n'
                        );
                    }
                }
            }
        }

        code += '    createdAt: Joi.date()\n';
        code += '      .label("createAt")\n';
        code += '  };\n\n';
        return code;
    }

    getJoiTypeMethod(scheemaType) {
        if (scheemaType == "number") {
            return "number()";
        } else if (scheemaType == "text" || scheemaType == "password") {
            return "string()";
        } else if (scheemaType == "date") {
            return "date()";
        } else if (scheemaType == "email") {
            return "string().email()";
        } else if (scheemaType == "bool") {
            return "boolean()";
        // } else if (schemaType == "datetime") {
        //     return "alternatives().try(Joi.date(), Joi.string().regex(/^([01]?[0-9]):([0-5][0-9]) ([AaPp][Mm])/))"
        // }
        }else if (schemType == "time") {
            return "Joi.string().regex(/^([0-2]?[0-9]):([0-5][0-9])/)"
        }
        
    }

    generatePopulateFormMethod(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        let firstTable, secondTable, firstTableColumn;
        let code = '  async populateForm() {\n';
        code += '    try {\n';
        code += '      const ' + tblName.toLowerCase() + 'Id = this.props.match.params.id;\n';
        code += '      if(' + tblName.toLowerCase() + 'Id!=="new"){\n';
        code += '        const { data } = await get' + tblName + '(' + tblName.toLowerCase() + 'Id);\n';
        code += '        this.setState({ data });\n';
        code += '      }    \n';
        code += '    } \n';
        code += '    catch (ex) {\n';
        code += '      if (ex.response && ex.response.status === 404) {\n';
        code += '        this.props.history.replace("/not-found"); \n';
        code += '      }\n';
        code += '    }\n';
        code += '  }\n\n';

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    code += '  async populate' + firstTableColumn + 's() {\n';
                    code += '    const { data: ' + firstTableColumn + 's } = await get' + secondTable + 's();\n';
                    code += '    this.setState({ ' + firstTableColumn + 's: ' + firstTableColumn + 's });\n';
                    code += '  }\n\n';
                }
            }
        }
        return code;
    }

    generateComponentDidMount(tblName, schemaRelations) {
        let firstTable, secondTable, firstTableColumn;
        let code = '  async componentDidMount() {\n';
        code += '    await this.populateForm();\n';
        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    code += '    await this.populate' + firstTableColumn + 's();\n';
                }
            }
        }
        code += '  }\n\n';
        return code;
    }

    getFormMethods() {
        var filePath = FormFolderPath + "/formMethods.txt";
        var code = fs.readFileSync(path.resolve(filePath), "utf8");
        return code;
    }

    generateSubmitMethod(tblName, schemaRelations) {
        let firstTable, secondTable, relationType;

        let code = '  handleSubmit = async (event) => {\n';
        code += '    event.preventDefault();\n';
        code += '    const errors = this.validate();\n';
        code += '    this.setState({ errors: errors ? errors : {} });\n';
        code += '    if (errors) return;\n';
        code += '    await save' + tblName + '(this.state.data);\n';
        code += '    this.props.history.push("/' + tblName.toLowerCase() + 's");\n';
        code += '  };\n\n';

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    if (relationType.toLowerCase() == "checkbox") {
                        code += '  handleCheckBoxChange = event => {\n';
                        code += '    const data = { ...this.state.data };\n';
                        code += '    if(event.currentTarget.checked===true){\n';
                        code += '      data[event.currentTarget.name].push(event.currentTarget.value);\n';
                        code += '    }\n';
                        code += '    else{\n';
                        code += '      data[event.currentTarget.name] = data[event.currentTarget.name].filter(function(current){\n';
                        code += '     return current !== event.currentTarget.value;\n';
                        code += '     });\n';
                        code += '   }\n';
                        code += '     this.setState({ data: data});\n';
                        code += '  };\n\n';
                        break;
                    } else if (relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        code += '  handleMultiSelectChange = event => {\n';
                        code += '    const data = { ...this.state.data };\n';
                        code += '    var options = event.target.options;\n';
                        code += '    data[event.currentTarget.name] = []; //remove old selected values\n';
                        code += '    for (var i = 0, l = options.length; i < l; i++) {\n';
                        code += '      if (options[i].selected) { //add new selected values\n';
                        code += '        data[event.currentTarget.name].push(options[i].value); \n';
                        code += '      }\n';
                        code += '    }\n';
                        code += '    this.setState({ data: data});\n';
                        code += '  };\n\n';
                        break;
                    }
                }
            }
        }

        return code;
    }

    generateRenderMethod(schemaTable, schemaRelations) {
        let firstTable, secondTable, relationType, secondTableColumn, firstTableColumn;
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let code = '  render() {\n';
        code += '    return (\n';
        code += '      <div className="content">\n';
        code += '        <h1>' + tblName + ' Form</h1>\n';
        code += '        <form onSubmit={this.handleSubmit}>\n\n';
        for (var column in tblColumns) {
            code = code.concat(
                '          <div className="form-group">\n' +
                '              <label htmlFor="' + tblColumns[column].name + '">' +
                tblColumns[column].name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + "</label>\n" +
                '              <input' + '\n'
            );
            if (tblColumns[column].type.toLowerCase() === "date") {
                code = code.concat('                value={this.state.data["' + tblColumns[column].name + '"].substring(0, 10)}\n');
            } else {
                code = code.concat('                value={this.state.data["' + tblColumns[column].name + '"]}\n');
            }
            code = code.concat(
                '                onChange={this.handleChange}\n' +
                '                name="' + tblColumns[column].name + '"\n' +
                '                id="' + tblColumns[column].name + '"\n' +
                '                type="' + tblColumns[column].type + '"\n' +
                '                className="form-control"\n' +
                '              />\n' +
                '              {this.state.errors["' + tblColumns[column].name + '"] && <div className="alert alert-danger">{this.state.errors["' + tblColumns[column].name + '"]}</div>}\n' +
                '          </div>\n\n'
            );

        }

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    secondTableColumn = schemaRelations[index].secondTableColumn;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "onetomany") {
                        code = code.concat(
                            '          <div className="form-group">\n' +
                            '              <label htmlFor="' + firstTableColumn + 'Id">' +
                            '          ' + firstTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + " <a target=\"_blank\" href=\"/" + secondTable + 's/new">Add New</a>  <a href=\"javascript:void(0)\" onClick={this.populate'+firstTableColumn+'s}> Refresh</a> </label>\n' +
                            '              <select' + '\n' +
                            '                value={this.state.data["' + firstTableColumn + 'Id"]}\n' +
                            '                onChange={this.handleChange}\n' +
                            '                name="' + firstTableColumn + 'Id"\n' +
                            '                id="' + firstTableColumn + 'Id"\n' +
                            '                className="form-control"\n' +
                            '                  >\n' +
                            '                  <option value="" disabled defaultValue>\n' +
                            '                     Select ' + secondTable + '\n' +
                            '                  </option>\n' +
                            '                  {this.state.' + firstTableColumn + 's.map(' + secondTable + ' => (\n' +
                            '                    <option key={' + secondTable + '._id} value={' + secondTable + '._id}>\n' +
                            '                      {' + secondTable + '.' + secondTableColumn + '}\n' +
                            '                    </option>\n' +
                            '                  ))}\n' +
                            '              </select>\n' +
                            '              {this.state.errors["' + firstTableColumn + 'Id"] && <div className="alert alert-danger">{this.state.errors["' + firstTableColumn + 'Id"]}</div>}\n' +
                            '          </div>\n\n'
                        );
                    } else if (relationType.toLowerCase() == "radio") {
                        code = code.concat(
                            '          <div className="form-group">\n' +
                            '            <section className="section-preview">\n' +
                            '              <label className="mr-2">' + firstTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + " " + secondTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + "</label> <a target=\"_blank\" href=\"/" + secondTable + 's/new">Add New</a>  <a href=\"this.populate'+firstTableColumn+'s();">Refresh</a>  : </label> \n' +
                            '              {this.state.' + secondTable + 's.map(' + secondTable + ' => (\n' +
                            '                  <div key={' + secondTable + '._id} className="custom-control custom-radio custom-control-inline">\n' +
                            '                    <input \n' +
                            '                      type="radio" value={' + secondTable + '._id} onChange={this.handleChange} \n' +
                            '                      className="custom-control-input" id={' + secondTable + '._id} name="' + secondTable + 'Id" \n' +
                            '                      checked = {this.state.data["' + secondTable + 'Id"] === ' + secondTable + '._id ? true:false}\n' +
                            '                    />\n' +
                            '                    <label className="custom-control-label" htmlFor={' + secondTable + '._id}>{' + firstTableColumn + '.' + secondTableColumn + '}</label>\n' +
                            '                  </div>\n' +
                            '                ))}\n' +
                            '            </section>\n' +
                            '          </div> \n'
                        );
                    } else if (relationType.toLowerCase() == "checkbox") {
                        code = code.concat(
                            '          <div className="form-group">\n' +
                            '              <label htmlFor="' + firstTableColumn + 'Ids"> ' + firstTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + 's</label>\n' +
                            '              <section className="section-preview form-group">\n' +
                            '                  {this.state.' + secondTable + 's.map(' + secondTable + ' => (\n' +
                            '                    <div key={' + secondTable + '._id} className="custom-control custom-checkbox custom-control-inline">\n' +
                            '                        <input \n' +
                            '                          type="checkbox" value={' + secondTable + '._id} onChange={this.handleCheckBoxChange}\n' +
                            '                          className="custom-control-input" id={' + secondTable + '._id} name="' + secondTable + 'Ids"\n' +
                            '                          checked = {this.state.data["' + firstTableColumn + 'Ids"].includes(' + secondTable + '._id)}\n' +
                            '                        />\n' +
                            '                        <label className="custom-control-label" htmlFor={' + firstTableColumn + '._id}>{' + firstTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + '.' + secondTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + '}</label>\n' +
                            '                    </div>\n' +
                            '                  ))}\n' +
                            '              </section>\n' +
                            '          </div>\n'
                        );
                    } else if (relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") { 
                        code = code.concat(
                            '          <div className="form-group">\n' +
                            '              <label htmlFor="' + firstTableColumn + 'Ids">' +
                            '           ' + firstTableColumn.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) + " <a target=\"_blank\" href=\"/" + secondTable + 's/new">Add New</a> <ahref=\"javascript:void(0)\" onClick={this.populate'+firstTableColumn+'s} > Refresh</a>\n' +"</label>\n" +
                            '              <select' + '\n' +
                            '                value={this.state.data["' + firstTableColumn + 'Id"]}\n' +
                            '                onChange={this.handleMultiSelectChange}\n' +
                            '                multiple\n' +
                            '                name="' + firstTableColumn + 'Ids"\n' +
                            '                id="' + firstTableColumn + 'Ids"\n' +
                            '                className="form-control"\n' +
                            '                  >\n' +
                            '                  {this.state.' + firstTableColumn + 's.map(' + secondTable + ' => (\n' +
                            '                    <option \n' +
                            '                       key={' + secondTable + '._id} value={' + secondTable + '._id}\n' +
                            '                       selected = {this.state.data["' + firstTableColumn + 'Ids"].includes(' + secondTable + '._id)}>\n' +
                            '                      {' + secondTable + '.' + secondTableColumn + '}\n' +
                            '                    </option>\n' +
                            '                  ))}\n' +
                            '              </select>\n' +
                            '          </div>\n\n'
                        );
                    }
                }
            }
        }
        code += '          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>\n\n';
        code += '        </form>\n';
        code += '      </div>\n';
        code += '    );\n';
        code += '  }\n';
        return code;
    }

    generateCloseAndExport(tblName) {
        let code = '}\n\n';
        code += 'export default create' + tblName + ';';
        return code;
    }

}

module.exports = formsCodeService;
