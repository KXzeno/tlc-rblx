'use strict';
import { Workspace } from "@rbxts/services";

let MAX_HEALTH = 100;

let healthPickupsFolder = Workspace.WaitForChild('HealthPickups');
let healthPickups = healthPickupsFolder.GetChildren();

function onTouchHealthPickup(otherPart: Part, healthPickup: Part) {

  let character = otherPart.Parent as Model; 
  let humanoid = character.FindFirstChildWhichIsA('Humanoid') as Humanoid;
  if (humanoid) {
    humanoid.MaxHealth = MAX_HEALTH;
  }
}

/** TODO: Fix unrecognized type of 'val'
 *
 * @remarks
 * Embedded scripts below the iteration are comparisons of working code
 * vs the file's compiled code. Modification toward base script via using
 * workspace instead of imported did not work.
 *
 * This issue also lead to the realization that I need to delay
 * my journey until I master TypeScript; creating types and annotations do
 * not compile into luau when it should, and `--!strict` isn't predefined. My
 * surface-level guess says it has to do with d.ts files or global 
 * declarations.
 *
 * I will return.
 * @see {@link https://create.roblox.com/docs/tutorials/scripting/intermediate-scripting/creating-a-health-pickup}
 */
for (let [_, val] of ipairs(healthPickups)) {
  (val as Part).Touched.Connect((otherPart: BasePart | Part) => {
    onTouchHealthPickup(otherPart as Part, val as Part);
  });
}
/**
  local MAX_HEALTH = 100

  local healthPickupsFolder = workspace:WaitForChild("HealthPickups")
  local healthPickups = healthPickupsFolder:GetChildren()

  local function onTouchHealthPickup(otherPart, healthPickup)
  local character = otherPart.Parent
  local humanoid = character:FindFirstChildWhichIsA("Humanoid")
  if humanoid then
  humanoid.Health = MAX_HEALTH
  end
  end

  for _, healthPickup in ipairs(healthPickups) do
  healthPickup.Touched:Connect(function(otherPart)
  onTouchHealthPickup(otherPart, healthPickup)
  end)
  end
 */
/**
  local MAX_HEALTH = 100
  local healthPickupsFolder = Workspace:WaitForChild("HealthPickups")
  local healthPickups = healthPickupsFolder:GetChildren()
  local function onTouchHealthPickup(otherPart, healthPickup)
  local character = otherPart.Parent
  local humanoid = character:FindFirstChildWhichIsA("Humanoid")
  if humanoid then
  humanoid.MaxHealth = MAX_HEALTH
  end
  end
  for _, val in ipairs(healthPickups) do
  val.Touched:Connect(function(otherPart)
  onTouchHealthPickup(otherPart, val)
  end)
  end
 */
