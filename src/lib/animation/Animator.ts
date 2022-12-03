import { Animation } from "./Animation";
import { File } from "../transpiler/File";
import { Function } from "../transpiler/Function";

export class Animator {
    private file: File;
    animations: Animation[] = [];

    constructor(file: File) {
        this.file = file;
    }

    addAnimation(animation: Animation) {
        this.animations.push(animation);
    }

    // Exports Play Function to file
    exportAnimationsToFile() {
        const func = new Function(`${this.file.name}.Play`);

        // Sort Animations by start time
        const sortedAnims = this.animations.sort((a, b) => {
            return a.start - b.start;
        });

        // Group the sorted animations by there start time
        const timeSort: any = {};
        sortedAnims.forEach(anim => {
            const start = anim.start;
            if (timeSort["" + start as keyof any] === undefined) {
                timeSort["" + start as keyof any] = [anim];
            } else {
                timeSort["" + start as keyof any].push(anim);
            }
        });

        const timeSortKeys = Object.keys(timeSort);
        timeSortKeys.forEach((time, i) => {
            timeSort[time].forEach((anim: Animation) => {
                func.addCode(`${anim.name}:Play()`);
            });
            if (timeSort[timeSortKeys[i+1]] !== undefined) {
                func.addCode(`wait(${timeSortKeys[i+1]})`);
            }
        })

        // this.animations.forEach(anim => {
        //     func.addCode(`${anim.name}:Play()`);
        // });
        this.file.addCode(func.code);
    }
}