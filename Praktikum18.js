class stack {
    constructor() { 
        this.items = [];
        }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Abis";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Abis";
        }   
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        console.log(this.items.join(" <- "));
    }
}

let Stack = new stack();
Stack.push(10);
Stack.push(20);
Stack.push(30);
Stack.printStack();

console.log("Teratas: " + Stack.peek());
console.log("pop: " + Stack.pop());
Stack.printStack();


