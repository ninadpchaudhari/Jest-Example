import  Queue  from "../src/Queue.js";
jest.mock("../src/Queue.js")


beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Queue.mockClear();
});

it('Should call the constructor once', () => {
    const q = new Queue();
    q.enqueue("abc");
    q.enqueue("");
    expect(Queue).toHaveBeenCalledTimes(1);
    const QueueInstance = Queue.mock.instances[0];
    //console.log(QueueInstance.maxSize)
    const enqueueInstance = QueueInstance.enqueue;
    //console.log(enqueueInstance.mock.calls)
    //expect(isFullInstance).toHaveBeenCalledTimes(1);
    expect(enqueueInstance.mock.calls.length).toBe(2);
});

if("Should check if peek calls isEmpty", () => {
    const q = new Queue();
    const mySpy = jest.spyOn(Queue.prototype, 'isEmpty')
    expect(() => {
        Error("Queue Underflow!")
    })
    expect(mySpy).toHaveBeenCalled()
});