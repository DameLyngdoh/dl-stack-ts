"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class implementation of Stack data structure.
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this._id = 0;
        this._stack = new Array();
    }
    Object.defineProperty(Stack.prototype, "id", {
        /**
         * Gets the id of the stack.
         * @returns Returns the id of the stack.
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id of the stack.
         */
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "length", {
        /**
         * Gets the number of elements in the stack.
         * @returns Returns the length or number of elements in the stack.
         */
        get: function () {
            return this._stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Empties the stack.
     */
    Stack.prototype.clear = function () {
        this._stack = new Array();
    };
    /**
     * Returns the element at a specific index without popping it.
     * @param index The index of the element.
     * @returns Returns the object at the specified index.
     */
    Stack.prototype.peek = function (index) {
        if (index < 0) {
            throw new Error("Invalid negative index.");
        }
        if (index >= this._stack.length) {
            throw new Error("Index out of bounds.");
        }
        return this._stack[index];
    };
    /**
     * Obtains the element at the top of the stack.
     * @returns Returns the object at the top of the stack.
     */
    Stack.prototype.top = function () {
        if (this._stack.length == 0) {
            throw new Error("Top: Underflow");
        }
        return this._stack[this._stack.length - 1];
    };
    /**
     * Pops the element at the top of the stack.
     * @returns Returns the element at the top of the stack and removes it from the stack.
     */
    Stack.prototype.pop = function () {
        if (this._stack.length == 0) {
            throw new Error("Pop: Underflow");
        }
        var re = this._stack[this._stack.length - 1];
        this._stack.pop();
        return re;
    };
    /**
     * Checks if the stack is empty.
     * @returns Returns true if the stack is empty or false otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this._stack.length == 0;
    };
    /**
     * Pushes an element to the top of the stack.
     * @param value The object to be pushed to the stack.
     */
    Stack.prototype.push = function (value) {
        this._stack.push(value);
    };
    return Stack;
}());
exports.Stack = Stack;
