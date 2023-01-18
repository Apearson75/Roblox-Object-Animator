import { File, randomName } from "../transpiler/File";
import { Table } from "../properties/Table";

// Properties that the animation can use
export enum AnimationProperties {
    UDim2Pos = "Position",
    CFrame = "CFrame",
    Color3 = "Color",
    Vector3 = "Position",
    Rotation = "Rotation"
};

export enum EasingStyles {
    Linear = 0,
    Sine = 1,
    Back = 2,
    Quad = 3,
    Quart = 4,
    Quint = 5,
    Bounce = 6,
    Elastic = 7,
    Expo = 8,
    Circular = 9,
    Cubic = 10
}

export class Animation {
    name: string;
    file: File;
    start: number;
    end: number;
    property: AnimationProperties;
    easingStyle: EasingStyles;
    val: any;

    constructor(file: File, start: number, end: number, property: AnimationProperties, easingStyle: EasingStyles, val: any) {
        this.file = file;
        this.start = start;
        this.end = end;
        this.val = val;
        this.property = property;
        this.easingStyle = easingStyle;
        this.name = randomName(5);

        this.addCode();
    }

    private addCode() {
        const TweenInfo = this.file.callFunction('TweenInfo.new', [this.end, this.easingStyle]);
        const call = this.file.callFunction("TS:Create", ["obj", TweenInfo, new Table({[this.property]: this.val.value}).data]);
        this.file.createLocal(this.name, call);
    }
}