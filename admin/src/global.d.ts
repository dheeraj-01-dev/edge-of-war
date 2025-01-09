type battleType = {
  _id?: string;
  battleId?: number;
  mode: "survival" | "scoring" ,
  status: string;
  auth: {
    roomId: string | number | undefined,
    roomPass: stirng | number | undefined
  },
  settings: {
    gameMode: "Battle Royale"|"Clash Squad",
    map: "BERMUDA"|"PURGATORY"|"KALAHARI"|"ALPINE"|"NEXTERA"|"BERMUDA REMASTER",
    teamMode: "Solo"|"Duo"|"Squad",
    slots: 2 | 12 | 24 | 48,
    advanceSetting: {
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
      'Limited Ammo': 'limited' | "un-limited",
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
    };
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
  teams: string[][];
  positions: string[][] | undefined;
};

type withdrawalRequest = {
  _id: string,
  createdBy: string,
  status: string,
  utr: string | number,
  message: string,
  creditedTo: string,
  creditedBy: string,
  creditedAmount: number,
  amount: number,
  upiId: string,
  contactPhone: string,
  otp: string
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
};

type member = {
  name?: string,
  ffUid: number;
  profile: string;
  userName: string;
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