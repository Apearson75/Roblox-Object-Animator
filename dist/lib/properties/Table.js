"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    JSONdata;
    parsedTable = [];
    data = "";
    constructor(JSONdata) {
        this.JSONdata = JSONdata;
        this.convertToTable();
    }
    convertToTable() {
        const keys = Object.keys(this.JSONdata);
        keys.forEach(key => {
            const val = this.JSONdata[key];
            this.parsedTable.push(`${key} = ${val}`);
        });
        this.data = "{";
        this.parsedTable.forEach(val => {
            this.data += val + ",";
        });
        this.data += "}";
    }
}
exports.Table = Table;
