import { Vector3 } from "./Vector3";

export class CFrame {
    value: string;

    constructor(pos: Vector3, lookAt: Vector3) {
        this.value = `CFrame.new(${pos.value}, ${lookAt.value})`;
    }
}