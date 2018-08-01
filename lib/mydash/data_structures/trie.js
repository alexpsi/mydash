class Node {
    constructor(value) {
        this.value = value;
        this.children = {};
    }

    addChild(value) {
        this.children[value] = new Node(value);
    }

    getChild(value) {
        return this.children[value];
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        value.split('').reduce((node, x) => {
            let c = node.getChild(x);
            if (!c) { node.addChild(x); c = node.getChild(x); }
            return c;
        }, this.root);
    }

    find(value) {
        return value.split('').reduce((node, x) => {
            if (!node) return null;
            let c = node.getChild(x);
            return c ? c : null;
        }, this.root);
    }
}

const t = new Trie();

console.log(t.find('derp'))
t.insert('dorp')

t.insert('derp')
console.log(t.find('dorp'))
console.log(t.find('derp'))


console.log(t.find('d'))
console.log('derpdrpepre')