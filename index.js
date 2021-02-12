class NodeClass {
    static count = 0;
    static RADIUS = 4;
    static allNodes = [];
    static increaseCount() {
        this.count += 1;
    }
    
    static createNode(x, y){
        const circleCode = 
        `
        <circle id="node-${this.count}" cx="${x}" cy="${y}" r="${this.RADIUS}" class="node">
        </circle>
        `;
        this.increaseCount();
        document.querySelector("#graph").insertAdjacentHTML("beforeEnd", circleCode);
        const node = document.querySelector(`#node-${this.count-1}`);
        return node;
    }
    
    constructor(x=50, y=50) {
        this.node = this.constructor.createNode(x, y);        
        this.x = x;
        this.y = y;
        NodeClass.allNodes.push(this);
    }
    
    getOffset(node){
        const d = Math.sqrt((node.x-this.x)**2 + (node.y-this.y)**2);
        const d2 = d - this.constructor.RADIUS;
        
        const ratio = d2 / d;

        const dx = (node.x - this.x) * ratio;
        const dy = (node.y - this.y) * ratio;

        const x2 = this.x + dx;
        const y2 = this.y + dy;

        const x1 = node.x - dx;
        const y1 = node.y - dy;

        return {x1, x2, y1, y2};
    }

    createConnections(){
        NodeClass.allNodes.forEach(element => {
            if (element !== this) {
                this.connect(element);
            }
        });
    }

    connect(node) {
        const {x1, x2, y1, y2} = this.getOffset(node);
        const path = `
        <path d=" M ${x1} ${y1} L ${x2} ${y2}" class="line"/>
        `
        document.querySelector("#graph").insertAdjacentHTML("beforeEnd", path);
    }
}

function createNode() {
    const newNode1 = new NodeClass(70, 70);
    const newNode2 = new NodeClass(70, 30);
    const newNode3 = new NodeClass(30, 30);
    const newNode4 = new NodeClass(30, 70);
    const newNode5 = new NodeClass(50, 80);
    const newNode6 = new NodeClass(80, 50);
    const newNode7 = new NodeClass(20, 50);
    const newNode8 = new NodeClass(50, 20);
    // const newNode = new NodeClass(10, 15);
    [newNode1, newNode2, newNode3, newNode4, newNode5, newNode6, newNode7, newNode8].forEach(el => {
        el.createConnections();
    })
}