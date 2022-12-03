export class Color3 {
    value: string;

    constructor(r: number, g: number, b: number) {
        this.value = `Color3.new(${r/255}, ${g/255}, ${b/255})`;
    }
}