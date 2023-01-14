export class UDim2 {
    value: string;

    constructor(xScale: number, xOffset: number, yScale: number, yOffset: number) {
        this.value = `UDim2.new(${xScale}, ${xOffset}, ${yScale}, ${yOffset})`;
    }
}