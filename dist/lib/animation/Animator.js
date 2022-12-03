"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animator = void 0;
const Function_1 = require("../transpiler/Function");
class Animator {
    file;
    animations = [];
    constructor(file) {
        this.file = file;
    }
    addAnimation(animation) {
        this.animations.push(animation);
    }
    // Exports Play Function to file
    exportAnimationsToFile() {
        const func = new Function_1.Function(`${this.file.name}.Play`);
        this.animations.forEach(anim => {
            func.addCode(`${anim.name}:Play()`);
        });
        this.file.addCode(func.code);
    }
}
exports.Animator = Animator;
