type battleType = {
  _id: string,
  battleId: number,
  settings:{
    gameMode: "Battle Royale"|"Clash Squad",
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