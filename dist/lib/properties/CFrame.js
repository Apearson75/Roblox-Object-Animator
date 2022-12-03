"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFrame = void 0;
class CFrame {
    value;
    constructor(pos, lookAt) {
        this.value = `CFrame.new(${pos.value}, ${lookAt.value})`;
    }
}
exports.CFrame = CFrame;
