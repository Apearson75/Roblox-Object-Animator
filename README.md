# Roablox

## Example Code

```javascript
import * as roablox from "roablox";

const file = new roablox.File("Animation", "./"); // Create Lua Module Script.
const animator = new roablox.Animator(file); // Init Animator.

const v = new roablox.Vector3(0, 20, 0); // Create Roblox Vector3.

// Create a Tween that lasts for 5secs and has a Quint Easing Style.
const anim = new roablox.Animation(file, 5, roablox.AnimationProperties.Vector3, roablox.EasingStyles.Quint, v);

animator.addAnimation(anim); // Add Animation to Animator.
animator.exportAnimationsToFile(); // Create Lua Play function and add to file.

file.save(); // Save file.
```

## Output
```lua
local Animation = {}
local TS = game:GetService('TweenService')
local obj = script.Parent
local mkrLv = TS:Create(obj, TweenInfo.new(5, 5), {Position = Vector3.new(0, 20, 0),})
function Animation.Play()
mkrLv:Play()
end
return Animation
```