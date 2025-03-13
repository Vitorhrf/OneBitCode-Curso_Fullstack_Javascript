import Comment from './Comment.js'

class Post {
    constructor(author, title, content){
        this.author = author
        this.title = title
        this.content = content
        this.comments = []
    }
    addComment(author, content){
        this.comments.push(new Comment(author, content))
    }
}

export default Post