const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  postType: {
    type: String,
    required: [true, "Only allowed for image and video formats"],
    enum: ["image", "video"],
  },
  post: {
    type: String, // Corrected type to `String`
    required: [true, "Post content is required"], // Added custom error message
  },
  comments: {
    type: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
          required: true,
        },
        comment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comments",
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [], // Initialize as an empty array
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId], // Array of user IDs who liked the post
    ref: "Users",
    default: [],
  },
  shares: {
    type: Number,
    default: 0,
    min: [0, "Shares cannot be negative"], // Added validation for non-negative shares
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
