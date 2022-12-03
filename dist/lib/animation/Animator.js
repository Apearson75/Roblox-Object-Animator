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
        // Sort Animations by start time
        const sortedAnims = this.animations.sort((a, b) => {
            return a.start - b.start;
        });
        // Group the sorted animations by there start time
        const timeSort = {};
        sortedAnims.forEach(anim => {
            const start = anim.start;
            if (timeSort["" + start] === undefined) {
                timeSort["" + start] = [anim];
            }
            else {
                timeSort["" + start].push(anim);
            }
        });
        const timeSortKeys = Object.keys(timeSort);
        timeSortKeys.forEach((time, i) => {
            timeSort[time].forEach((anim) => {
                func.addCode(`${anim.name}:Play()`);
            });
            if (timeSort[timeSortKeys[i + 1]] !== undefined) {
                func.addCode(`wait(${timeSortKeys[i + 1]})`);
            }
        });
        // this.animations.forEach(anim => {
        //     func.addCode(`${anim.name}:Play()`);
        // });
        this.file.addCode(func.code);
    }
}
exports.Animator = Animator;
