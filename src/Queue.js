//https://www.tutorialspoint.com/The-Queue-Class-in-Javascript

export default class Queue {
   constructor(maxSize) {
      // Set default max size if not provided
      //Function/constructor overloading is not supported in ECMAScript.
      if (isNaN(maxSize)) {
         maxSize = 10;
      }
      this.maxSize = maxSize;
      // Init an array that'll contain the queue values.
      this.container = [];
    }

   // Helper function to display all values while developing
   display() {
      console.log(this.container);
   }
   // Checks if queue is empty
   isEmpty() {
      return this.container.length === 0;
   }
   // checks if queue is full
   isFull() {
      return this.container.length >= this.maxSize;
   }
   enqueue(element) {
      // Check if Queue is full
      if (this.isFull()) {
         console.error("Queue Overflow!");
         throw Error("Queue Overflow!")
      }
      // Since we want to add elements to end, we'll just push them.
      this.container.push(element);
   }
   dequeue() {
      // Check if empty
      if (this.isEmpty()) {
         console.log("Queue Underflow!");
         throw Error("Queue Underflow!");
      }
      return this.container.shift();
   }
   peek() {
      if (this.isEmpty()) {
         console.log("Queue Underflow!");
         throw Error("Queue Underflow!");
      }
      return this.container[0];
   }
   clear() {
      this.container = [];
   }
}