"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = exports.File = void 0;
const fs_1 = __importDefault(require("fs"));
const Table_1 = require("../properties/Table");
class File {
    name;
    code = "";
    path;
    constructor(name, path) {
        this.name = name;
        this.path = path;
        this.createLocal(name, new Table_1.Table({}).data);
        this.createLocal("TS", this.callFunction('game:GetService', ["'TweenService'"]));
        this.createLocal('obj', 'script.Parent');
    }
    save() {
        this.addCode(`return ${this.name}`);
        fs_1.default.writeFileSync(`${this.path}/${this.name}.lua`, this.code);
    }
    get luaCode() {
        return this.code + `return ${this.name}`;
    }
    addCode(code) {
        this.code += code + "\n";
    }
    createLocal(name, val) {
        const variable = `local ${name} = ${val}`;
        this.addCode(variable);
    }
    callFunction(func, args) {
        const parsedArgs = args.join(', ');
        return `${func}(${parsedArgs})`;
    }
}
exports.File = File;
function randomName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.randomName = randomName;
