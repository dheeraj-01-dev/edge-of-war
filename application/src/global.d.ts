type battleType = {
  _id: string,
  battleId: number,
  settings:{
    gameMode: "Battle Royale"|"Clash Squad",
    map: "BERMUDA"|"PURGATORY"|"KALAHARI"|"ALPINE"|"NEXTERA"|"BERMUDA REMASTER",
    teamMode: "Solo"|"Duo"|"Squad",
    slots: number,
    ammo: "Limited"|"UN-Limited",
    gunAttributes: "Yes"|"No",
    characterSkill: "Yes"|"No",
    loadout: "Yes"|"No",
  }
  expire: {
    id: number,
    dateStr: string
  },
  entry: number,
  winning: {
    _1: number,
    _2: number,
    _3: number
  },
  teams: [string[]]
};

type responseType<T> = {
  success: boolean,
  error?: string
  data?: T
}
// export default battleType;

type decodedUserToken = {
  name: string,
  ffUid: number,
  userName: string,
  id: string,
  iat: number
}