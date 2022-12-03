"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
class Function {
    name;
    functionCode = "";
    constructor(name) {
        this.name = name;
        this.addCode(`function ${name}()`);
    }
    get code() {
        return this.functionCode + "end";
    }
    addCode(code) {
        this.functionCode += code + "\n";
    }
}
exports.Function = Function;
