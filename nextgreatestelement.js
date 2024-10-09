function nextGreatestElement(arr) {
    let result = new Array(arr.length).fill(-1);  // Initialize result array with -1 (default if no greater element found)
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than the element at the stack's top, update the result for that element
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = arr[i];
        }
        // Push current index to stack
        stack.push(i);
    }

    return result;
}

// Example usage:
let arr = [4, 5, 2, 10, 8];
console.log(nextGreatestElement(arr));  
// Output: [ 5, 10, 10, -1, -1 ]
