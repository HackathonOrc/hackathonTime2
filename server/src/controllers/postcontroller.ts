import { Request, Response } from "express";

import Post from "../models/post";
import User from "../models/user";

export default class PostController {
  createPost = async (req: Request, res: Response) => {
    try {
      const checkUser = await User.findOne({ userName: req.body.userName });

      if (!checkUser)
        return res.status(404).json({ message: "Usuário não encontrado" });

      await Post.create(req.body);
      return res.status(200).send({ message: "Post criado" });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };

  getAllPosts = async (req: Request, res: Response) => {
    try {
      const posts = await Post.find({});

      return res.status(200).send({ posts: posts.reverse() });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };

  deletePost = async (req: Request, res: Response) => {
    try {
      const checkPost = await Post.findOne({ _id: req.params.id });

      if (!checkPost)
        return res.status(404).json({ message: "Post não encontrado" });

      if (checkPost.userName !== req.params.userName)
        return res.status(400).json({ message: "Usuário não habilitado" });

      await Post.deleteOne({ _id: req.params.id });
      return res.status(200).send({ message: "Post deletado" });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };

  like = async (req: Request, res: Response) => {
    try {
      const checkPost = await Post.findOne({ _id: req.body.id });

      if (!checkPost)
        return res.status(404).json({ message: "Post não encontrado" });

      if (checkPost.likes.includes(req.body.userName))
        return res.status(400).json({ message: "Post já curtido" });

      var likes = checkPost.likes.concat(req.body.userName);

      await checkPost.update({ likes });

      return res.status(200).send({ message: "Post curtido" });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };

  dislike = async (req: Request, res: Response) => {
    try {
      const checkPost = await Post.findOne({ _id: req.body.id });

      if (!checkPost)
        return res.status(404).json({ message: "Post não encontrado" });

      if (!checkPost.likes.includes(req.body.userName))
        return res.status(400).json({ message: "Post já discurtido" });

      var likes = [...checkPost.likes];
      likes.splice(likes.indexOf(req.body.userName));

      await checkPost.update({ likes });

      return res.status(200).send({ message: "Post descurtido" });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };
}
