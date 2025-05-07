class Component {
    #main = null
    constructor(tag) {
        this.#main = document.getElementById("main")
        this.tag = tag
        this.build()
    }

    build() {
        this.component = document.createElement(this.tag)
    }

    render() {
        this.#main.appendChild(this.component)
    }
}

export default Component
