import express, { Application, NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.get("/api/blogs", async (req: Request, res: Response) => {
	const blogs = await prisma.post.findMany();
	res.json(blogs);
});

app.get("/api/blog/:id", async (req: Request, res: Response) => {
	console.log(req.params);

	const id = req.params.id;
	const blog = await prisma.post.findUnique({
		where: {
			id,
		},
	});
	res.json(blog);
});

app.listen(5000, () => {
	console.log("Running on port:5000");
});

module.exports = app;
