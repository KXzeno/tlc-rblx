import { makeHello } from "shared/module";

let platform = script.Parent as Part;

function disappear(truthy: boolean, num: number): void {
  platform.CanCollide = truthy;
  platform.Transparency = num;
}

// disappear(true, 1);

function appear(truthy: boolean, num: number): void {
  platform.CanCollide = truthy;
  platform.Transparency = num;
}

while (true) {
  task.wait(3);
  disappear(false, 1);
  task.wait(3);
  appear(true, 0);
}
