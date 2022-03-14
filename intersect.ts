export class Node{
    private value!: number;
    private next!: Node;
    private visited!: boolean;

    constructor(val:number){
        this.value = val;
        this.visited = false;
    }

    setVal(val:number){
        this.value = val;
    }
    setNext(node:Node){
        this.next = node;
    }
    setVisited(val:boolean){
        this.visited = val;
    }

    getVal(){
        return this.value;
    }
    getVisited(){
        return this.visited;
    }
    getNext(){
        return this.next;
    }

}

export function findIntersection(arr1:Node, arr2:Node){
    let tracker:Node = arr1;
    while(tracker !== undefined){
        tracker.setVisited(true);
        tracker = tracker.getNext();
    }
    tracker = arr2;
    while(tracker.getVisited() === false && tracker.getNext() !== undefined){
        tracker = tracker.getNext();
    }
    if(tracker.getVisited() === true){
        console.log("Intersection found at:");
        console.log(tracker);
    }
    else
        console.log("There is no Intersection");
    resetList(arr1);
}

function resetList(node:Node){
    while (node !== undefined){
        node.setVisited(false);
        node = node.getNext();
    }
}