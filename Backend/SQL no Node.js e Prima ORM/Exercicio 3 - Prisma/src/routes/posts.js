const { Router } = require("express");
const prisma = require("../database");

const router = Router()

router.get("/", async (req, res) => {
    const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } })
    res.json(posts)
})

router.get("/:id", async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { id: +req.params.id },
        include: { author: true }
    })
    res.status(201).json(post)
})

router.post("/", async (req, res) => {
    const { title, slug, content, published, authorId } = req.body
    const newPost = await prisma.post.create({
        data: { 
            title,
            slug,
            content,
            published: Boolean(published),
            authorId: Number(authorId)
        }
    })
    res.status(201).json(newPost)
})

router.put("/:id", async (req, res) => {
    const { title, slug, content, published } = req.body
    const alteredPost = await prisma.post.update({
        data: {
            title,
            slug,
            content,
            published: Boolean(published)
        },
        where: {
            id: +req.params.id
        }
    })
    res.json(alteredPost)
})

router.delete("/:id", async (req, res) => {
    const deletedPost = await prisma.post.delete({ where: { id: +req.params.id }})
    res.json(deletedPost)
})
module.exports = router