"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color3 = void 0;
class Color3 {
    value;
    constructor(r, g, b) {
        this.value = `Color3.new(${r / 255}, ${g / 255}, ${b / 255})`;
    }
}
exports.Color3 = Color3;
