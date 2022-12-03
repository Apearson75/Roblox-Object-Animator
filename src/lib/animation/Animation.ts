import { File, randomName } from "../transpiler/File";
import { Table } from "../properties/Table";

// Properties that the animation can use
export enum AnimationProperties {
    CFrame = "CFrame",
    Color3 = "Color",
    Vector3 = "Position"
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
    time: number;
    property: AnimationProperties;
    easingStyle: EasingStyles;
    final: any;
    init: any | undefined;

    constructor(file: File, time: number, property: AnimationProperties, easingStyle: EasingStyles, final: any, init?: any) {
        this.file = file;
        this.time = time;
        this.final = final;
        this.property = property;
        this.easingStyle = easingStyle;
        this.init = init;
        this.name = randomName(5);

        this.addCode();
    }

    private addCode() {
        const TweenInfo = this.file.callFunction('TweenInfo.new', [this.time, this.easingStyle]);
        const call = this.file.callFunction("TS:Create", ["obj", TweenInfo, new Table({[this.property]: this.final.value}).data]);
        this.file.createLocal(this.name, call);
    }
}