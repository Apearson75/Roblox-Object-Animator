export declare class Function {
    name: string;
    private functionCode;
    constructor(name: string);
    get code(): string;
    addCode(code: string): void;
}
