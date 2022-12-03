import { Animation, AnimationProperties } from "./lib/Animation";
import { File } from "./lib/transpiler/File";
import { Color3 } from "./lib/properties/Color3";
import { Animator } from "./lib/Animator";
import { Vector3 } from "./lib/properties/Vector3";

const file = new File("cool", "./out");
const animator = new Animator(file);

const final = new Color3(100, 200, 100);
const final2 = new Vector3(0, 0, 0);

const animation = new Animation(file, 4, AnimationProperties.Color3, final);
const animation2 = new Animation(file, 4, AnimationProperties.Vector3, final2);
animator.addAnimation(animation);
animator.addAnimation(animation2);

animator.exportAnimationsToFile();

file.save();