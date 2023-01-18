export declare class File {
    name: string;
    code: string;
    path: string;
    constructor(name: string, path: string);
    get luaCode(): string;
    addCode(code: string): void;
    createLocal(name: string, val: string): void;
    callFunction(func: string, args: any[]): string;
}
export declare function randomName(length: number): string;
