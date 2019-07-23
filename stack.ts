
/**
 * Class implementation of Stack data structure.
 */
export class Stack<T> {
    private _stack : T[];
    public _id : number = 0;

    constructor() {
        this._stack = new Array<T>();
    }

    /**
     * Gets the id of the stack.
     * @returns Returns the id of the stack.
     */
    get id() : number {
        return this._id;
    }

    /**
     * Sets the id of the stack.
     */
    set id( id : number ) {
        this._id = id;
    }

    /**
     * Gets the number of elements in the stack.
     * @returns Returns the length or number of elements in the stack.
     */
    get length() : number {
        return this._stack.length;
    }

    /**
     * Empties the stack.
     */
    public clear() : void {
        this._stack = new Array<T>();
    }

    /**
     * Returns the element at a specific index without popping it.
     * @param index The index of the element.
     * @returns Returns the object at the specified index.
     */
    public peek( index : number ) : T {
        if(index < 0) {
            throw new Error("Invalid negative index.");
        }
        if(index >= this._stack.length) {
            throw new Error("Index out of bounds.");
        }
        return this._stack[index];
    }

    /**
     * Obtains the element at the top of the stack.
     * @returns Returns the object at the top of the stack.
     */
    public top() : T {
        if(this._stack.length==0) {
            throw new Error("Top: Underflow");
        }
        return this._stack[this._stack.length-1];
    }

    /**
     * Pops the element at the top of the stack.
     * @returns Returns the element at the top of the stack and removes it from the stack.
     */
    public pop() : T {
        if(this._stack.length==0) {
            throw new Error("Pop: Underflow");
        }
        let re : T = this._stack[this._stack.length-1];
        this._stack.pop();
        return re;
    }

    /**
     * Checks if the stack is empty.
     * @returns Returns true if the stack is empty or false otherwise.
     */
    public isEmpty() : boolean {
        return this._stack.length == 0;
    }

    /**
     * Pushes an element to the top of the stack.
     * @param value The object to be pushed to the stack.
     */
    public push( value : T ) {
        this._stack.push(value);
    }
}