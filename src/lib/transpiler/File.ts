import fs from "fs";
import { Table } from "../properties/Table";

export class File {
    name: string;
    code: string = "";
    path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;

        this.createLocal(name, new Table({}).data);
        this.createLocal("TS", this.callFunction('game:GetService', ["'TweenService'"]));
        this.createLocal('obj', 'script.Parent');
    }

    save() {
        this.addCode(`return ${this.name}`);
        fs.writeFileSync(`${this.path}/${this.name}.lua`, this.code);
        console.log(this.code);
    }

    addCode(code: string) {
        this.code += code + "\n";
    }

    createLocal(name: string, val: string) {
        const variable = `local ${name} = ${val}`;
        this.addCode(variable);
    }

    callFunction(func: string, args: any[]) {
        const parsedArgs = args.join(', ');
        return `${func}(${parsedArgs})`;
    }

    // createFunction(name: string, args: []): Function {
    //     return new Function(name, args);
    // }
}

export function randomName(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}