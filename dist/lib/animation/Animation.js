"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = exports.EasingStyles = exports.AnimationProperties = void 0;
const File_1 = require("../transpiler/File");
const Table_1 = require("../properties/Table");
// Properties that the animation can use
var AnimationProperties;
(function (AnimationProperties) {
    AnimationProperties["CFrame"] = "CFrame";
    AnimationProperties["Color3"] = "Color";
    AnimationProperties["Vector3"] = "Position";
})(AnimationProperties = exports.AnimationProperties || (exports.AnimationProperties = {}));
;
var EasingStyles;
(function (EasingStyles) {
    EasingStyles[EasingStyles["Linear"] = 0] = "Linear";
    EasingStyles[EasingStyles["Sine"] = 1] = "Sine";
    EasingStyles[EasingStyles["Back"] = 2] = "Back";
    EasingStyles[EasingStyles["Quad"] = 3] = "Quad";
    EasingStyles[EasingStyles["Quart"] = 4] = "Quart";
    EasingStyles[EasingStyles["Quint"] = 5] = "Quint";
    EasingStyles[EasingStyles["Bounce"] = 6] = "Bounce";
    EasingStyles[EasingStyles["Elastic"] = 7] = "Elastic";
    EasingStyles[EasingStyles["Expo"] = 8] = "Expo";
    EasingStyles[EasingStyles["Circular"] = 9] = "Circular";
    EasingStyles[EasingStyles["Cubic"] = 10] = "Cubic";
})(EasingStyles = exports.EasingStyles || (exports.EasingStyles = {}));
class Animation {
    name;
    file;
    time;
    property;
    easingStyle;
    final;
    init;
    constructor(file, time, property, easingStyle, final, init) {
        this.file = file;
        this.time = time;
        this.final = final;
        this.property = property;
        this.easingStyle = easingStyle;
        this.init = init;
        this.name = (0, File_1.randomName)(5);
        this.addCode();
    }
    addCode() {
        const TweenInfo = this.file.callFunction('TweenInfo.new', [this.time, this.easingStyle]);
        const call = this.file.callFunction("TS:Create", ["obj", TweenInfo, new Table_1.Table({ [this.property]: this.final.value }).data]);
        this.file.createLocal(this.name, call);
    }
}
exports.Animation = Animation;
