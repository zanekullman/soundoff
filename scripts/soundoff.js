console.log("Soundoff | Hello World!");

//Must register in settings option also
const Soundoff_Effects = {
  "MOUSEDROID": "modules/soundoff/sounds/mouse_droid.mp3",
  "BFCLASSIC": "modules/soundoff/sounds/ui_planetzoom.wav"
}

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


  //Must register above in the dictonary (breaking DRY rule)
  game.settings.register("soundoff", "sound", {
    name: "Soundoff.sfx",
    hint: "Soundoff.sfxhint",
    scope: "client",
    config: true,
    type: String,
    default: "MOUSEDROID",
    choices: {
      "MOUSEDROID": "Soundoff.mousedroid",
      "BFCLASSIC": "Soundoff.bfclassic"
    }
  });
}

const volume = () => {
  console.log("soundoff | " + game.settings.get("soundoff", "volume") / 100.0)
  return game.settings.get("soundoff", "volume") / 100.0;
}

const get_sound_effect = () => {
  return Soundoff_Effects[game.settings.get("soundoff", "sound")]
}

function soundoff_logAlert(so_arg1, so_arg2) {
  const d = new Date();
  console.log("Soundoff | Alert! | " + d);
  AudioHelper.play({ src: get_sound_effect(), volume: volume()})
}

Hooks.on("chatMessage", soundoff_logAlert);
Hooks.once("ready", registerSettings);