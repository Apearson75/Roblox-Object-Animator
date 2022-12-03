# Roablox

## Example Code

```javascript
import * as roablox from "roablox";

const file = new roablox.File("Animation", "./"); // Create Lua Module Script.
const animator = new roablox.Animator(file); // Init Animator.

const v = new roablox.Vector3(0, 20, 0); // Create Roblox Vector3.
const c = new roablox.Color3(200, 100, 70); // Create Roblox Color3.

// Create a Tween that lasts for 5secs and has a Quint Easing Style.
const anim = new roablox.Animation(file, 0, 5, roablox.AnimationProperties.Vector3, roablox.EasingStyles.Quint, v);
// Create a Tween that starts from 2secs and lasts 2secs and has a Cubic Easing Style.
const anim2 = new roablox.Animation(file, 2, 4, roablox.AnimationProperties.Color3, roablox.EasingStyles.Cubic, c);


// Add Animations to Animator
animator.addAnimation(anim);
animator.addAnimation(anim2);

animator.exportAnimationsToFile(); // Create Lua Play function and add to file.

file.save(); // Save file.
```

## Output
```lua
local Animation = {}
local TS = game:GetService('TweenService')
local obj = script.Parent
local NsQVl = TS:Create(obj, TweenInfo.new(5, 5), {Position = Vector3.new(0, 20, 0),})
local SyovL = TS:Create(obj, TweenInfo.new(4, 10), {Color = Color3.new(0.7843137254901961, 0.39215686274509803, 0.27450980392156865),})
function Animation.Play()
NsQVl:Play()
wait(2)
SyovL:Play()
end
return Animation

```