import { File } from "../transpiler/File";
export declare enum AnimationProperties {
    UDim2Pos = "Position",
    CFrame = "CFrame",
    Color3 = "Color",
    Vector3 = "Position",
    Rotation = "Rotation"
}
export declare enum EasingStyles {
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
export declare class Animation {
    name: string;
    file: File;
    start: number;
    end: number;
    property: AnimationProperties;
    easingStyle: EasingStyles;
    val: any;
    constructor(file: File, start: number, end: number, property: AnimationProperties, easingStyle: EasingStyles, val: any);
    private addCode;
}
