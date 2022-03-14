import {Node, findIntersection}from "./intersect";

const node1 = new Node(12);
const node2 = new Node(20);
const node3 = new Node(13);
const node4 = new Node(25);
const node5 = new Node(52);
const node6 = new Node(34);
const node7 = new Node(16);
const node8 = new Node(7);

//list 1
node1.setNext(node2);
node2.setNext(node3);
node3.setNext(node4);
node4.setNext(node7);
node7.setNext(node8);

//list 2
node5.setNext(node6);
node6.setNext(node7);
//node7 => node8

findIntersection(node1,node5);
findIntersection(node5,node1);