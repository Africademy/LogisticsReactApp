let instance = null;

class routesCodeService {
    constructor() {
    } //i am also here if you need me

    static getInstance() {
        if (!instance) {
            instance = new routesCodeService();
        }
        return instance;
    }

    GetRouteModelCode(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        var modelFileCode = this.getImports(tblName, schemaRelations); //imports
        modelFileCode += this.getIndexRoute(tblName);
        modelFileCode += this.getSpecificRecordRoute(schemaTable, schemaRelations);
        modelFileCode += this.getPostRoute(schemaTable, schemaRelations);
        modelFileCode += this.getDeleteRecordRoute(tblName);
        modelFileCode += this.getPutRoute(schemaTable, schemaRelations);
        modelFileCode += this.getExpots();
        return modelFileCode;
    }

    getImports(tableName, schemaRelations) {
        let imprtStatmnts = 'const express = require("express");\n';
        imprtStatmnts += 'const router = express.Router(); \n';
        imprtStatmnts += 'const verify = require("./verifyToken"); \n';
        imprtStatmnts = imprtStatmnts.concat('const ' + tableName + ' = require("../models/' + tableName + '");\n');
        if (schemaRelations != null) {
            var tabs =[]
            for (var index in schemaRelations) {
                // get each realtions firstTable and if its same as the currentTable i.e tableName then this relation belongs to current table
                if (tabs.includes(schemaRelations[index].secondTable)) {
                    continue;
                }
                if (tableName === schemaRelations[index].firstTable) {
                    
                        imprtStatmnts += 'const ' + schemaRelations[index].secondTable + '= require("../models/' + schemaRelations[index].secondTable + '");\n';

                }
                tabs.push(schemaRelations[index].secondTable)
            }
        }
        imprtStatmnts += '\n';
        return imprtStatmnts;
    }

    getIndexRoute(tblName) {
        let route = "";
        route += 'router.get("/", verify, async (req, res) => {\n';
        route = route.concat(
            '  try {\n' +
            '    const ' + tblName + 's' + ' = await ' + tblName + '.find();\n' +
            '    res.json(' + tblName + 's' + ');\n' +
            '  } catch (ex) {\n' +
            '    res.status(400).json({ message: ex.message });' + "\n" +
            '  }\n});\n\n'
        );
        return route;
    }

    getSpecificRecordRoute(schemaTable, schemaRelations) {
        let route = "";
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let firstTable, secondTable, relationType, firstTableColumn;

        route += 'router.get("/:id", verify, async (req, res) => {\n';
        route = route.concat(
            '  try {\n' +
            '    const ' + tblName.toLowerCase() + ' = await ' + tblName + '.findById(req.params.id);\n'
        );

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    firstTableColumn = schemaRelations[index].relationType;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            '    let ' + firstTableColumn.toLowerCase() + 'Ids = new Array();\n' +
                            '    for(var i=0; i<' + firstTable.toLowerCase() + '.' + firstTableColumn + '.length; i++){\n' +
                            '      ' + firstTableColumn.toLowerCase() + 'Ids.push(' + firstTable.toLowerCase() + '.' + firstTableColumn + 's[i].Id);\n' +
                            '    }\n'
                        );
                    }

                }
            }
        }

        route = route.concat('    res.json({\n');
        route = route.concat(
            "        _id: " + tblName.toLowerCase() + "._id,\n"
        );

        for (var column in tblColumns) {
            route = route.concat(
                "        " + tblColumns[column].name + ": " + tblName.toLowerCase() + "." + tblColumns[column].name + ",\n"
            );
        }

        if (schemaRelations != null) {
            for (var index in schemaRelations) {
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    firstTableColumn = schemaRelations[index].firstTableColumn
                    if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "onetomany") {
                        route = route.concat(
                            "        " + firstTableColumn + "Id: " + firstTable.toLowerCase() + "." + firstTableColumn + ".Id,\n"
                        );
                    } else if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            "        " + firstTableColumn + "Ids: " + firstTableColumn.toLowerCase() + "Ids,\n"
                        );
                    }
                }
            }
        }

        route = route.concat(
            "        createdAt: " + tblName.toLowerCase() + ".createdAt" + "\n"
        );

        route = route.concat('    });\n' +
            '  } catch (ex) {\n' +
            '    res.status(400).json({ message: ex.message });' + "\n" +
            '  }\n});\n\n'
        );
        return route;
    }

    getPostRoute(schemaTable, schemaRelations) {
        let route = "";
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let firstTable, secondTable, relationType, secondTableColumn, firstTableColumn;

        route += 'router.post("/", verify, async (req, res) => {\n';
        route += '  try {\n';

        if (schemaRelations != null) { //if not passed by user
            // var tabs =[]
            for (var index in schemaRelations) { //so we have all the relations
                // if (tabs.includes(schemaRelations[index].secondTable)) {
                //     continue;
                // }
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    secondTableColumn = schemaRelations[index].secondTableColumn;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            '    let ' + firstTableColumn.toLowerCase() + 's = new Array();\n' +
                            '    for(var i=0; i<req.body.' + firstTableColumn + 'Ids.length; i++){\n' +
                            '      const ' + firstTableColumn.toLowerCase() + ' = await ' + secondTable + '.findById(req.body.' + firstTableColumn + 'Ids[i]);\n' +
                            '      ' + firstTableColumn.toLowerCase() + 's.push(\n' +
                            '        {\n' +
                            '          Id: ' + firstTableColumn.toLowerCase() + '._id,\n' +
                            '          Name: ' + firstTableColumn.toLowerCase() + '.' + secondTableColumn + '\n' +
                            '        }\n' +
                            '      );\n' +
                            '    }\n'
                        );
                    } else if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "onetomany") {
                        route += '    const ' + firstTableColumn.toLowerCase()+'s = await ' + secondTable + '.findById(req.body.' + firstTableColumn + 'Id);\n';
                    }
                    // tabs.push(schemaRelations[index].secondTable)
                }

            }
        }

        route += "    const " + tblName.toLowerCase() + " = new " + tblName + " ({\n";
        for (var column in tblColumns) {
            route = route.concat(
                "        " + tblColumns[column].name + ": " + "req.body." + tblColumns[column].name + "," + "\n"
            );
        }

        if (schemaRelations != null) { //if not passed by user
            for (var index in schemaRelations) { //so we have all the relations
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    secondTableColumn = schemaRelations[index].secondTableColumn;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            "        " + firstTableColumn + ": " + secondTable.toLowerCase() + "s,\n"
                        );
                    } else if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "onetomany") {
                        route = route.concat(
                            "        " + firstTableColumn + ": [{\n" +
                            "          Id: " + firstTableColumn.toLowerCase()+"s._id,\n" +
                            "          Name: " + firstTableColumn.toLowerCase()+ "s." + secondTableColumn + "\n" +
                            "        }],\n"
                        );
                    }
                }
            }
        }

        route += '    });\n';
        route = route.concat(
            '    const saved' + tblName + ' = await ' + tblName.toLowerCase() + '.save();\n' +
            '    res.status(200).json(saved' + tblName + ');\n' +
            '  } catch (ex) {\n' +
            '    res.status(400).json({ message: ex.message });' + "\n" +
            '  }\n});\n\n'
        );
        return route;
    }

    getDeleteRecordRoute(tblName) {
        let route = "";
        route += 'router.delete("/:id", verify, async (req, res) => {\n';
        route = route.concat(
            '  try {\n' +
            '    const removed' + tblName + ' = await ' + tblName + '.remove({ _id: req.params.id });\n' +
            '    res.json(removed' + tblName + ');\n' +
            '  } catch (ex) {\n' +
            '    res.status(400).json({ message: ex.message });' + "\n" +
            '  }\n});\n\n'
        );
        return route;
    }

    getPutRoute(schemaTable, schemaRelations) {
        let tblName = schemaTable.name;
        let tblColumns = schemaTable.columns;
        let route = "";
        let firstTable, secondTable, relationType, secondTableColumn, firstTableColumn;

        route += 'router.put("/:id", verify, async (req, res) => {\n';
        route += '  try {\n';

        if (schemaRelations != null) { //if not passed by user
            var tabs =[]
            for (var index in schemaRelations) { //so we have all the relations
                if (tabs.includes(schemaRelations[index].secondTable)) {
                    continue;
                }
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    secondTableColumn = schemaRelations[index].secondTableColumn;
                    firstTableColumn = schemaRelations[index].firstTableColumn;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            '    let ' + firstTableColumn.toLowerCase() + 's = new Array();\n' +
                            '    for(var i=0; i<req.body.' + secondTable + 'Ids.length; i++){\n' +
                            '      const ' + firstTableColumn.toLowerCase() + ' = await ' + secondTable + '.findById(req.body.' + firstTableColumn + 'Ids[i]);\n' +
                            '      ' + secondTable.toLowerCase() + 's.push(\n' +
                            '        {\n' +
                            '          Id: ' + firstTableColumn.toLowerCase() + '._id,\n' +
                            '          Name: ' + firstTableColumn.toLowerCase() + '.' + secondTableColumn + '\n' +
                            '        }\n' +
                            '      );\n' +
                            '    }\n'
                        );
                    } else if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "onetomany") {
                        route += '    const ' + firstTableColumn.toLowerCase() + ' = await ' + secondTable + '.findById(req.body.' + firstTableColumn + 'Id);\n';
                    }
                    tabs.push(schemaRelations[index].secondTable)
                }
            }
        }


        route += "    const updated" + tblName + " = await " + tblName + ".updateOne(\n";
        route += "      { _id: req.params.id },\n      {\n        $set:{\n";
        for (var column in tblColumns) {
            route = route.concat(
                "             " + tblColumns[column].name + ": " + "req.body." + tblColumns[column].name + ",\n"
            );
        }


        if (schemaRelations != null) { //if not passed by user
            for (var index in schemaRelations) { //so we have all the relations
                firstTable = schemaRelations[index].firstTable; // get each realtions firstTable
                if (tblName == firstTable) { // if its same as the currentTable i.e tblName then this relation belongs to current table
                    secondTable = schemaRelations[index].secondTable;
                    relationType = schemaRelations[index].relationType;
                    secondTableColumn = schemaRelations[index].secondTableColumn;
                    if (relationType.toLowerCase() == "checkbox" || relationType.toLowerCase() == "multiselect" || relationType.toLowerCase() == "manytomany") {
                        route = route.concat(
                            "        " + firstTableColumn + "s: " + secondTable.toLowerCase() + "s,\n"
                        );
                    } else if (relationType.toLowerCase() == "select" || relationType.toLowerCase() == "radio" || relationType.toLowerCase() == "onetomany") {
                        route = route.concat(
                            "             " + firstTableColumn + ": {\n" +
                            "              Id: " + "req.body."+ firstTableColumn.toLowerCase() + ".id,\n" +
                            "              Name: " + "req.body."+ firstTableColumn.toLowerCase() + "." + secondTableColumn + "\n" +
                            "             },\n"
                        );

                    }
                }
            }
        }

        route += '\n        }\n      }\n    );\n';
        route = route.concat(
            '    res.json(updated' + tblName + ');\n' +
            '  } catch (ex) {\n' +
            '    res.status(400).json({ message: ex.message });' + "\n" +
            '  }\n});\n\n'
        );
        return route;
    }

    getExpots() {
        let eportStatmnts = 'module.exports = router;';
        return eportStatmnts;
    }
}

module.exports = routesCodeService;
