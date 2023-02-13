import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Chandur",
    lastName: "D",
    email: "chandur@gmail.com",
    password: "Test@123",
    picturePath: "chandur.png",
    friends: [],
    location: "Colombo, LK",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Atheeb",
    lastName: "M",
    email: "atheeb@gmail.com",
    password: "atheeb@123",
    picturePath: "atheeb.jpeg",
    friends: [],
    location: "Colombo, LK",
    occupation: "Tech Recruiter",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Chandur",
    lastName: "D",
    location: "Colombo, LK",
    description: "random description",
    picturePath: "600x200.jpeg",
    userPicturePath: "chandur.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Atheeb",
    lastName: "M",
    location: "Colombo, LK",
    description: "description",
    picturePath: "post3.png",
    userPicturePath: "atheeb.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: ["random comment 1", "coool", "Nice"],
  },
];
