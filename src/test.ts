import { Animation, AnimationProperties, EasingStyles } from "./lib/animation/Animation";
import { File } from "./lib/transpiler/File";
import { Color3, CFrame, Vector3 } from "./lib/properties";
import { Animator } from "./lib/animation/Animator";

const file = new File("cool", "./out");
const animator = new Animator(file);

const final = new Color3(100, 200, 100);
const v1 = new Vector3(0, 20, 0);
const v2 = new Vector3(0, 90, 0);
const final2 = new CFrame(v1, v2);

const animation = new Animation(file, 4, AnimationProperties.Color3, EasingStyles.Expo, final);
const animation2 = new Animation(file, 4, AnimationProperties.CFrame, EasingStyles.Expo, final2);
animator.addAnimation(animation);
animator.addAnimation(animation2);

animator.exportAnimationsToFile();

file.save();