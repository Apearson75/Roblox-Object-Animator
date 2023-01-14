"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDim2 = void 0;
class UDim2 {
    value;
    constructor(xScale, xOffset, yScale, yOffset) {
        this.value = `UDim2.new(${xScale}, ${xOffset}, ${yScale}, ${yOffset})`;
    }
}
exports.UDim2 = UDim2;
