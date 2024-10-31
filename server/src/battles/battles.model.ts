import { Schema, model } from "mongoose";

interface team{
  teamId: string,
  leader: string,
  participants: Array<string>
}

interface schema{
  battleId: number,
  settings:{
    gameMode: "Battle Royal"|"Clash Squad",
    map: "BERMUDA"|"PURGATORY"|"KALAHARI"|"ALPINE"|"NEXTERA"|"BERMUDA REMASTER",
    teamMode: "1v1"|"2v2"|"4v4",
    slots: number,
    ammo: "Limited"|"UN-Limited",
    gunAttributes: "Yes"|"No",
    characterSkill: "Yes"|"No",
    loadout: "Yes"|"No",
  }
  expire: {
    id: number,
    year: number,
    month: number, 
    date: number,
    hour: number,
    minute: number,
    second: number
  },
  entry: number,
  winning: {
    _1: number,
    _2: number,
    _3: number
  },
  teams: Array<team>
}

const battleSchema = new Schema<schema>({
  battleId: {
    type: Number,
    required: true,
    unique: true,
  },
  settings: {
    gameMode: {
      type: String,
      required: true,
      default: "Battle Royal",
      enum: {
        values: ["Battle Royal", "Class Squad"],
        message: "gameMode `{VALUE}` not supported!"
      }
    },
    map: {
      type: String,
      required: true,
      default: "BERMUDA",
      enum: {
        values: ["BERMUDA", "KALAHARI", "PURGATORY", "ALPINE", "NEXTERA", "BERMUDA REMASTER"],
        message: "map `{VALUE}` not supported!"
      }
    },
    teamMode: {
      type: String,
      required: true,
      default: "2v2",
      enum: {
        values: ["1v1", "2v2", "4v4"],
        message: "teamMode `{VALUE}` not supported!"
      }
    },
    slots: {
      type: Number,
      required: true,
      default: 24
    },
    ammo: {
      type: String,
      required: true,
      default: "Limited",
      enum: {
        values: ["Limited", "UN-Limited"],
        message: "ammo `{VALUE}` not supported!"
      }
    },
    gunAttributes: {
      type: String,
      required: true,
      default: "No",
      enum: {
        values: ["No", "Yes"],
        message: "gunAttributes `{VALUE}` not supported!"
      }
    },
    characterSkill: {
      type: String,
      required: true,
      default: "Yes",
      enum: {
        values: ["No", "Yes"],
        message: "characterSkill `{VALUE}` not supported!"
      }
    },
    loadout: {
      type: String,
      required: true,
      default: "Yes",
      enum: {
        values: ["No", "Yes"],
        message: "loadout `{VALUE}` not supported!"
      }
    }
  },
  expire: {
    id: {type: Number, required: true},
    year: {type: Number, required: true},
    month: {type: Number, required: true},
    date: {type: Number, required: true},
    hour: {type: Number, required: true},
    minute: {type: Number, required: true},
    second: {type: Number, required: true, default: 0}
  },
  entry: {
    type: Number,
    required: true,
  },
  winning: {
    _1: {
      type: Number,
      required: true,
    },
    _2: {
      type: Number,
    },
    _3: {
      type: Number,
    },
  },
  teams: [
    { 
      type: Array<string>,
      ref: "users",
    }
  ]
}, { timestamps: true })

const battleModel = model("battles", battleSchema);

export default battleModel