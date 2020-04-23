import  Queue  from "../src/Queue.js";

var q = null;

beforeEach(() => {

});

//Mocking a method
it('Should throw overflow exception When queue is full', () => {
    var q = new Queue(1000);
    var mySpy = jest.spyOn(Queue.prototype, "isFull")
    mySpy.mockReturnValue(true)
    expect(() => {
        q.enqueue("a");
    }).toThrow(Error("Queue Overflow!"))
});

it('Should throw underflow exception', () => {
    var q = new Queue();

    var mySpy = jest.spyOn(Queue.prototype, "isEmpty")
    mySpy.mockReturnValue(true)
    expect(() => {
        q.dequeue();
    }).toThrow(Error("Queue Underflow!"))
});