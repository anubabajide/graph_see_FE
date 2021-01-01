class NodeClass {
    static count = 0;
    static increaseCount() {
        this.count += 1;
    }
    static create(){
        const div = document.createElement('div');
        div.id = `node-${this.count}`;
        div.className = "node";
        document.body.appendChild(div);
        this.increaseCount();
        return div;
    }

    constructor(x=50, y=50) {
        this.node = this.constructor.create();
        // console.log({height:this.node.clientHeight})
        this.node.style.left = `calc(${x}vw - ${this.node.clientWidth/2}px)`;
        this.node.style.top = `calc(${y}vh  - ${this.node.clientHeight/2}px)`;
    }
    
    connect(nodeB) {
        
    }
}

function createNode() {
    const newNode = new NodeClass();
    const newNode1 = new NodeClass(70, 70);
    const newNode2 = new NodeClass(70, 30);
    const newNode3 = new NodeClass(30, 30);
    const newNode4 = new NodeClass(30, 70);
}