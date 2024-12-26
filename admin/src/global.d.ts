type battleType = {
  _id?: string;
  battleId?: number;
  status: string;
  auth: {
    roomId: string | number | undefined,
    roomPass: stirng | number | undefined
  },
  settings: {
    gameMode: string;
    advanceSetting: any;
    map: string;
    teamMode: string;
    slots: number;
    ammo: string;
    gunAttributes: string;
    characterSkill: string;
    loadout: string;
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