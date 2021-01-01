class NodeClass {
    constructor() {
        this.node = this.constructor.create();
    }
    static count = 0;
    static increaseCount() {
        this.count += 1;
    }
    static create(){
        const div = document.createElement('div');
        div.id = this.count;
        div.className = "node";
        document.body.appendChild(div);
        this.increaseCount();
        return div;
    }
}

function createNode() {
    const newNode = new NodeClass();
}