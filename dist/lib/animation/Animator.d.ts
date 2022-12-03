import { Animation } from "./Animation";
import { File } from "../transpiler/File";
export declare class Animator {
    private file;
    animations: Animation[];
    constructor(file: File);
    addAnimation(animation: Animation): void;
    exportAnimationsToFile(): void;
}
