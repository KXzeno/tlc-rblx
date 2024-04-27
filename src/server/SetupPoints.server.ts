import { Players } from '@rbxts/services';

function onCharacterAdded(character: Model, player: Player) {
  player.SetAttribute('IsAlive', true);

  let humanoid = character.WaitForChild('Humanoid') as Humanoid;

  humanoid.Died.Connect(() => {
    let points = player.leaderstats.Points;
    points.Value = 0;
  player.SetAttribute('IsAlive', false);
  });
}

function onPlayerAdded(player: Player) {
  let leaderstats = new Instance('Folder');
  leaderstats.Name = 'leaderstats';
  leaderstats.Parent = player;

  let points = new Instance('IntValue');
  points.Name = 'Points';
  points.Value = 0;
  points.Parent = leaderstats;

  player.SetAttribute('IsAlive', false);

  player.CharacterAdded.Connect((character) => onCharacterAdded(character, player));
}

Players.PlayerAdded.Connect(onPlayerAdded);

do {
  task.wait(1);
  let playersList = Players.GetPlayers();
  for (let i = 0; i < playersList.size(); i++) {
    let player = playersList[i];
    if (player.GetAttribute('IsAlive')) {
      let points = player.leaderstats.Points;
      points.Value++;
    }
    //  let [player, value]: [Player, AttributeValue | undefined] = [playersList[i], 0];
    //  let [descendents1, descendents2, points]: [Instance[], Instance | undefined, Instance | undefined] = [player.GetChildren(), undefined, undefined];
    //  if (descendents1) {
    //    descendents2 = descendents1.find((child: Instance) => child.Name === 'leaderstats');
    //  }
    //  if (descendents2) {
    //    points = descendents2.GetChildren().find(child => child.Name === 'Points');
    //  }
    //  if (points) {
    //     let attr = points.GetChildren().find((child: Instance) => child.HasTag('Value'));
    //     value = attr && attr.GetAttribute('Value');
    //  }
    //  points && value && (value as number)++;
  }
} while (true)

  declare global {
    interface Player extends Model {
      leaderstats: Folder & {
        Points: IntValue;
      }
    }
  }
