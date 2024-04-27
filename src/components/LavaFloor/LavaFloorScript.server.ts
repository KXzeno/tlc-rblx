let lava = script.Parent as Part;

function kill(otherPart: Part | BasePart): void {
  let partParent = otherPart.Parent;
  let humanoid: Instance | undefined;
  if (partParent) {
    humanoid = partParent.FindFirstChild('Humanoid');
  }

  if (partParent && humanoid) {
      (humanoid as Humanoid).Health = 1;
  }
}

lava.Touched.Connect(kill)
