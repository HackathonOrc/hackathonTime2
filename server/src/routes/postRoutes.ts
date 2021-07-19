import { Request, Response, Router } from "express";

import PostController from "../controllers/postcontroller";

const postController = new PostController();

const postRoutes = Router();

postRoutes.post("/create", (req: Request, res: Response) => {
  postController.createPost(req, res);
});

postRoutes.get("/all", (req: Request, res: Response) => {
  postController.getAllPosts(req, res);
});

postRoutes.delete("/delete/:id/:userName", (req: Request, res: Response) => {
  postController.deletePost(req, res);
});

postRoutes.put("/like", (req: Request, res: Response) => {
  postController.like(req, res);
});

postRoutes.patch("/dislike", (req: Request, res: Response) => {
  postController.dislike(req, res);
});

export default postRoutes;
