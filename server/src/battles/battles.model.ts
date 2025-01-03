import { Schema, model } from "mongoose";

interface schema{
  battleId: number,
  status: string,
  auth: {
    roomId: number,
    roomPass: string
  },
  settings:{
    gameMode: "Battle Royal"|"Clash Squad",
    map: "BERMUDA"|"PURGATORY"|"KALAHARI"|"ALPINE"|"NEXTERA"|"BERMUDA REMASTER",
    teamMode: "1v1"|"2v2"|"4v4",
    slots: number,
    ammo: "Limited"|"UN-Limited",
    gunAttributes: "Yes"|"No",
    characterSkill: "Yes"|"No",
    loadout: "Yes"|"No",
    advanceSetting?: {
      presetMode: 'Classic' | "Grenade" | "Melee" | "Sniper" | "Pistol" | "Hardcore Mode" | "Esports Mode" | "Master Mind" | "Custom Preset",
      EP: '0' | "50" | "200",
      revival: 'Yes' | "No",
      'Movement Speed': '100%' | "50%" | "125%" | "200%",
      HP: '200' | "50" | "500" | "1",
      'Jump Height': '100%' | "200%" | "400%",
      Environment: 'Day' | "Night",
      'Auto Revival': 'No' | "Yes",
      Vehicles: 'Yes' | "No",
      UAV: 'Yes' | "No",
      'Generic Enemy Outfit': 'Yes' | "No",
      'Precise Aim': 'Yes' | "No",
      'Gun Attributes': 'No' | "Yes",
      'Safe Zone Movin': 'No' | "Yes",
      'Limited Ammo': 'Limited' | "UN-Limited",
      Airdrop: 'Yes' | "No",
      'Out-Of-Zone Damage': 'Standard' | "High",
      Airstrike: 'Yes' | "No",
      'Hide TeamMate Nickname': 'No' | "Yes",
      'Character Skill': 'Yes' | "No",
      'In-Game Mission': 'Yes' | "No",
      'Quit-Out Penalty': 'Yes' | "No",
      'Fall Damage': 'Yes' | "No",
      'Zone Shrink Speed': 'Standard' | "Fast",
      'High Tier Loot Zone': 'Yes' | "No",
      Airship: 'Yes' | "No",
      'Friendly Fire': 'No' | "Yes",
      LoadOut: 'Yes' | "No",
      'In-Match Quests': 'No' | "Yes",
      'Only Headshot': 'No' | "Yes"
    }
  },
  expire: {
    id: number,
    dateStr: String
  },
  entry: Number,
  winning: {
    _1: number,
    _2: number,
    _3: number
  },
  positions: string[][],
  roomId: {
    type: number | string,
  },
  roomPass: {
    type: number | string
  }
  teams: string[][],
  teamswithUserName: string[][],
  _1: number,
  _2: number,
  _3: number
}

const battleSchema = new Schema<schema>({
  battleId: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: "upcoming",
    enum: {
      values: ["upcoming", "live", "completed"],
      message: "status `{VALUE}` not supported!"
    }
  },
  settings: {
    gameMode: {
      type: String,
      required: true,
      default: "Battle Royale",
      enum: {
        values: ["Battle Royale", "Clash Squad"],
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
        values: ["Solo", "Duo", "Squad"],
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
    },
    advanceSetting: {
      presetMode: {
        type: String,
        required: true,
        default: "Classic",
        enum: {
          values: ['Classic', "Grenade", "Melee", "Sniper", "Pistol", "Hardcore Mode", "Esports Mode", "Master Mind", "Custom Preset"],
          message: "presetMode `{VALUE}` not supported!"
        }
      },
      EP: {
        type: String,
        required: true,
        default: "0",
        enum: {
          values: ['0', "50", "200"],
          message: "EP `{VALUE}` not supported!"
        }
      },
      revival: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "revival `{VALUE}` not supported!"
        }
      },
      'Movement Speed': {
        type: String,
        required: true,
        default: "100%",
        enum: {
          values: ['100%', "50%", "125%", "200%"],
          message: "Movement Speed `{VALUE}` not supported!"
        }
      },
      HP: {
        type: String,
        required: true,
        default: "200",
        enum: {
          values: ['200', "50", "500", "1"],
          message: "HP `{VALUE}` not supported!"
        }
      },
      'Jump Height': {
        type: String,
        required: true,
        default: "100%",
        enum: {
          values: ['100%', "200%", "400%"],
          message: "Jump Height `{VALUE}` not supported!"
        }
      },
      Environment: {
        type: String,
        required: true,
        default: "Day",
        enum: {
          values: ['Day', "Night"],
          message: "Environment `{VALUE}` not supported!"
        }
      },
      'Auto Revival': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Auto Revival `{VALUE}` not supported!"
        }
      },
      Vehicles: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Vehicles `{VALUE}` not supported!"
        }
      },
      UAV: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "UAV `{VALUE}` not supported!"
        }
      },
      'Generic Enemy Outfit': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Generic Enemy Outfit `{VALUE}` not supported!"
        }
      },
      'Precise Aim': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Precise Aim `{VALUE}` not supported!"
        }
      },
      'Gun Attributes': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Gun Attributes `{VALUE}` not supported!"
        }
      },
      'Safe Zone Movin': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Safe Zone Movin `{VALUE}` not supported!"
        }
      },
      'Limited Ammo': {
        type: String,
        required: true,
        default: "Limited",
        enum: {
          values: ['Limited', "UN-Limited"],
          message: "Limited Ammo `{VALUE}` not supported!"
        }
      },
      Airdrop: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Airdrop `{VALUE}` not supported!"
        }
      },
      'Out-Of-Zone Damage': {
        type: String,
        required: true,
        default: "Standard",
        enum: {
          values: ['Standard', "High"],
          message: "Out-Of-Zone Damage `{VALUE}` not supported!"
        }
      },
      Airstrike: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Airstrike `{VALUE}` not supported!"
        }
      },
      'Hide TeamMate Nickname': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Hide TeamMate Nickname `{VALUE}` not supported!"
        }
      },
      'Character Skill': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Character Skill `{VALUE}` not supported!"
        }
      },
      'In-Game Mission': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "In-Game Mission `{VALUE}` not supported!"
        }
      },
      'Quit-Out Penalty': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Quit-Out Penalty `{VALUE}` not supported!"
        }
      },
      'Fall Damage': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Fall Damage `{VALUE}` not supported!"
        }
      },
      'Zone Shrink Speed': {
        type: String,
        required: true,
        default: "Standard",
        enum: {
          values: ['Standard', "Fast"],
          message: "Zone Shrink Speed `{VALUE}` not supported!"
        }
      },
      'High Tier Loot Zone': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "High Tier Loot Zone `{VALUE}` not supported!"
        }
      },
      Airship: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "Airship `{VALUE}` not supported!"
        }
      },
      'Friendly Fire': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Friendly Fire `{VALUE}` not supported!"
        }
      },
      LoadOut: {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "LoadOut `{VALUE}` not supported!"
        }
      },
      'In-Match Quests': {
        type: String,
        required: true,
        default: "Yes",
        enum: {
          values: ['Yes', "No"],
          message: "In-Match Quests `{VALUE}` not supported!"
        }
      },
      'Only Headshot': {
        type: String,
        required: true,
        default: "No",
        enum: {
          values: ['Yes', "No"],
          message: "Only Headshot `{VALUE}` not supported!"
        }
      }
    }
  },
  auth: {
    type: {
      roomId: {
        type: Number,
      },
      roomPass: {
        type: String
      }
    },
    _id: false
  },
  expire: {
    id: {type: Number, required: true},
    dateStr: {type: String, required: true}
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
  positions: [
    {
      type: Array<string>,
      ref: "users"
    }
  ],
  teams: [
    { 
      type: Array<string>,
      ref: "users",
    }
  ],
  teamswithUserName: [
    { 
      type: Array<string>,
      ref: "users",
    }
  ],
  _1: { type: Number },
  _2: { type: Number },
  _3: { type: Number },

}, { timestamps: true })

const battleModel = model("battles", battleSchema);

export default battleModel