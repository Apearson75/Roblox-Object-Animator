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
        this.animations.forEach(anim => {
            func.addCode(`${anim.name}:Play()`);
        });
        this.file.addCode(func.code);
    }
}