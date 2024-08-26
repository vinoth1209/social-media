const postModel = require("../models/Posts");

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.posts = async (req, res, next) => {
  const { title, postType, post, comments, likes, shares } = req.body;

  const userPost = await postModel.create({
    title,
    postType,
    post,
    comments,
    likes,
    shares,
  });
  res.send(userPost);
};

exports.gethomePosts = async (req, res, next) => {
  const { id } = req.query;

  const userPost = await postModel.find({});
  res.send(userPost);
};

exports.postLikes = async (req, res, next) => {
  const { id, like_id } = req.body;

  try {
    const post = await postModel.findById({ _id: id }).select("likes");
    console.log(id, like_id, post);
    if (post?.likes.includes(like_id)) {
      const result = await postModel.updateOne(
        { _id: id },
        { $pull: { likes: like_id } } // remove the like_id to the likes array
      );
      console.log("Like remove:", post, result);
      res.send(result);

      return;
    } else {
      const result = await postModel.updateOne(
        { _id: id },
        { $push: { likes: like_id } } // Add the like_id to the likes array
      );
      console.log("Like Added:", post, result);
      res.send(result);
    }
  } catch (error) {
    console.error("Error adding like:", error);
  }
};
