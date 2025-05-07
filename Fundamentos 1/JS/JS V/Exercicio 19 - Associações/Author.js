import Post from "./Post.js"
class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }
    addPost(title, content){
        const post = new Post(this, title, content)
        this.posts.push(post)
        console.log(post)
    }
}

const Vitor = new Author("Vítor Henrique")

Vitor.addPost("Teste 1 - Title", "Conteudo do post...")
Vitor.posts[0].addComment(Vitor.name, "Conteudo do comentario...")
Vitor.posts[0].addComment(Vitor.name, "Conteudo do comentario 2...")

console.log(Vitor)
console.log(Vitor.posts[0])

