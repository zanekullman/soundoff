console.log("Soundoff | Hello World!");

const registerSettings = () => {
  game.settings.register("soundoff", "volume", {
    name: "Soundoff.volume",
    hint: "Soundoff.volumehint",
    scope: "client",
    config: true,
    range: {
      min: 0,
      max: 100,
      step: 10,
    },
    default: 60,
    type: Number,
  });
}

const volume = () => {
  return game.settings.get("soundoff", "volume") / 100.0;
}

function soundoff_logAlert(so_arg1, so_arg2) {
  const d = new Date();
  console.log("Soundoff | Alert! | " + d);
  AudioHelper.play({ src: "md.mp3", volume: volume()})
}

Hooks.on("renderChatMessage", soundoff_logAlert);
Hooks.once("ready", registerSettings);