import mongoose, { Schema, model } from "mongoose";

const friendsLimit = (val :any)=>{
  return val.length <=200;
}
const closeFriendsLimit = (val :any)=>{
  return val.length <=10;
}

interface schema{
  balance: Number,
  name: string,
  ffUid: Number,
  ffUserName: string,
  profile: string,
  userName: string,
  phone: Number,
  email: string,
  // guild: Schema.Types.ObjectId,
  friends: {
    closeFriends: Schema.Types.ObjectId,
    allFriends: Schema.Types.ObjectId
  },
  // team: Schema.Types.ObjectId,
  upcomingBattles: [Schema.Types.ObjectId],
  password: string,
  createAt: string
}

const userSchema = new Schema<schema>({
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  name: {
    type: String,
    required: [true, "please enter your name...."],
  },
  ffUid: {
    type: Number,
    required: [true, "please enter your free fire uid...."]
  },
  ffUserName: {
    type: String,
    required: [true, "please enter your free fire userName...."]
  },
  profile: {
    type: String,
    default: "http://127.0.0.1:3000/banner/default-banner.jpg"
  },
  phone: {
    type: Number,
    unique: true,
    // required: [true, "Please enter your phone number...."],
  },
  userName: {
    type: String,
    required: [true, "please choose a username for your account...."],
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please enter your email...."]
  },
  friends: {
    closeFriends: {
      type: [{type: Schema.ObjectId, ref: "users"}],
      validate: [closeFriendsLimit, "max no. of close friends reached"]
    },
    allFriends: {
      type: [{type: Schema.ObjectId, ref: "users"}],
      validate: [friendsLimit, "max no. of friends reached."]
    }
  },
  // team: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "teams"
  // },
  password: {
    type: String,
    required: [true, "please choose a password...."]
  }
}, {timestamps: true});

export const userModel = model("users", userSchema)