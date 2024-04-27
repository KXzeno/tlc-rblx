let platform = script.Parent as Part;

let isTouched: boolean = false;

function fade() {
  if (platform && !isTouched) {
    isTouched = true;
    for (let i = 0; i < 10; i++) {
      platform.Transparency = i / 10;
      task.wait(0.1);
    }

    platform.CanCollide = false;
    task.wait(3);
    platform.CanCollide = true;
    platform.Transparency = 0;
    isTouched = false;
  }
}

if (platform) {
  platform.Touched.Connect(fade);
}
