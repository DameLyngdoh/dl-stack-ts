# Stack for TypeScript
A stack implementation written in TypeScript with the general stack operations. Refer to the documentation or the code for a complete reference. The documentation for this project was generated using [typedoc](https://github.com/TypeStrong/typedoc).

## Example
The following code snippet is an example of how to use the class. The methods invoked here are not exhaustive of the methods of the stack.

```typescript
// Initializes a new stack for numbers
let stack : Stack<number> = new Stack<number>();

// Push some numbers to the stack
stack.push(33);
stack.push(4);
stack.push(11);
stack.push(8);

// Peek the second element in the stack
let thirdElement = stack.peek(3);

// Pop a number
let n : number = stack.pop();

// Get the top number in the stack
let top : number = stack.top();
```
