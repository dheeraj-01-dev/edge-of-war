type battleType = {
  _id: string;
  battleId: number;
  status: string,
  auth?: {
    roomId: string,
    roomPass: string
  }
  settings: {
    gameMode: "Battle Royale" | "Clash Squad";
    map:
      | "BERMUDA"
      | "PURGATORY"
      | "KALAHARI"
      | "ALPINE"
      | "NEXTERA"
      | "BERMUDA REMASTER";
    teamMode: "Solo" | "Duo" | "Squad";
    slots: number;
    ammo: "Limited" | "UN-Limited";
    gunAttributes: "Yes" | "No";
    characterSkill: "Yes" | "No";
    loadout: "Yes" | "No";
    advanceSetting: {
      "Battle Royale": {
        "presetMode": string,
        "revival": string,
        "HP": string,
        "EP": string,
        "Movement Speed": string,
        "Jump Height": string,

        "Environment": string,
        "Limited Ammo": string,
        "Fall Damage": string,
        "Auto Revival": string,
        "Airdrop": string,
        "Zone Shrink Speed": string,
        "Vehicles": string,
        "Out-Of-Zone Damage": string,
        "High Tier Loot Zone": string,
        "UAV": string,
        "Airstrike": string,
        "Airship": string,
        "Generic Enemy Outfit": string,
        "Hide TeamMate Nickname": string,
        "Friendly Fire": string,
        "Precise Aim": string,
        "Character Skill": string,
        "LoadOut": string,
        "Gun Attributes": string,
        "In-Game Mission": string,
        "In-Match Quests": string,
        "Safe Zone Movin": string,
        "Quit-Out Penalty": string,
        "Only Headshot": string
      },
      "Clash Squad": {

        "presetMode": string,
        "Rounds": string,
        "Default Coin": string,
        "Special Mode": string,
        "Special Airdrop": string,
        "HP": string,
        "EP": string,
        "Movement Speed": string,
        "Jump Height": string,

        "Environment": string,
        "Limited Ammo": string,
        "Fall Damage": string,
        "Airdrop": string,
        "High Tier Loot Zone": string,
        "Generic Enemy Outfit": string,
        "Hide TeamMate Nickname": string,
        "Friendly Fire": string,
        "Precise Aim": string,
        "Character Skill": string,
        "LoadOut": string,
        "Gun Attributes": string,
        "In-Match Quests": string,
        "Quit-Out Penalty": string,
        "Only Headshot": string
      },
      "presetMode": string,
      "EP": string,
      "revival": string,
      "Movement Speed": string,
      "HP": "200",
      "Jump Height": string,
      "Environment": string,
      "Auto Revival": string,
      "Vehicles": string,
      "UAV": string,
      "Generic Enemy Outfit": string,
      "Precise Aim": string,
      "Gun Attributes": string,
      "Safe Zone Movin": string,
      "Limited Ammo": string,
      "Airdrop": string,
      "Out-Of-Zone Damage": string,
      "Airstrike": string,
      "Hide TeamMate Nickname": string,
      "Character Skill": string,
      "In-Game Mission": string,
      "Quit-Out Penalty": string,
      "Fall Damage": string,
      "Zone Shrink Speed": string,
      "High Tier Loot Zone": string,
      "Airship": string,
      "Friendly Fire": string,
      "LoadOut": string,
      "In-Match Quests": string,
      "Only Headshot": string
    }
  };
  expire: {
    id: number;
    dateStr: string;
  };
  entry: number;
  winning: {
    _1: number;
    _2: number;
    _3: number;
  };
  teams: [string[]];
  teamswithUserName: [string[]];
};

type responseType<T> = {
  success: boolean;
  error?: string;
  data?: T;
};
// export default battleType;

type decodedUserToken = {
  name: string;
  ffUid: number;
  userName: string;
  id: string;
  iat: number;
  profile: string;
  ffUserName: string;
};

type member = {
  name?: string,
  ffUid: number;
  profile: string;
  userName: string;
  ffUserName: string;
  userToken?: string;
};

type getFriendsApi = {
  length: number;
  friends: member[];
};

type personalInfo = {
  _id: string,
  balance: number,
  name: string,
  ffUid: number,
  ffUserName: string,
  profile: string,
  userName: string,
  email: string,
  friends: {
      closeFriends: member[],
      allFriends: member[]
  },
  createdAt: string,
  updatedAt: string,
  __v: number
}

type notification = {
  _id?: string,
  from: string,
  to: string,
  n_type: string
}

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;