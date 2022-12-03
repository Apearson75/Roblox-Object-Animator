export class Function {
    name: string;
    functionCode: string = "";

    constructor (name: string) {
        this.name = name;
        this.addCode(`function ${name}()`)
    }

    get code() : string {
        return this.functionCode + "end";
    }
    
    addCode(code: string) {
        this.functionCode += code + "\n";
    }
}