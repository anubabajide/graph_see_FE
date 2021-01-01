class NodeClass {
    static count = 0;
    static increaseCount() {
        this.count += 1;
    }
    static createNode(){
        const div = document.createElement('div');
        div.id = `node-${this.count}`;
        div.className = "node";
        document.body.appendChild(div);
        this.increaseCount();
        return div;
    }
    
    constructor(x=50, y=50, neighbors = []) {
        this.node = this.constructor.createNode();
        
        // console.log({height:this.node.clientHeight})
        this.x = x;
        this.y = y;
        this.node.style.left = `calc(${x}vw - ${this.node.clientWidth/2}px)`;
        this.node.style.top = `calc(${y}vh  - ${this.node.clientHeight/2}px)`;
        this.createConnections(neighbors)
    }
    
    createConnections(nodes){
        console.log(nodes)
        for (let idx in nodes){
            this.connect(nodes[idx]);
        }
    }
    connect(node) {
        const line = `
        <line x1="calc(${this.x}vw)" y1="calc(${this.y}vh)" x2="calc(${node.x}vw)" y2="calc(${node.y}vh)" stroke="black"/>
        `
        document.querySelector("#graph").insertAdjacentHTML("beforeEnd", line);

    }
}

function createNode() {
    const newNode1 = new NodeClass(70, 70);
    const newNode2 = new NodeClass(70, 30);
    const newNode3 = new NodeClass(30, 30);
    const newNode4 = new NodeClass(30, 70);
    const newNode = new NodeClass(undefined, undefined,[newNode1, newNode2, newNode3, newNode4]);
}