import  Queue  from "../src/Queue.js";

var q = null;
beforeEach(()=>{
    q = new Queue()
});
afterEach(() => {
    q.clear();
    q = null;
});
test('Queue is Empty on init', () => {
    expect(q.isEmpty()).toBe(true);
});

test('Default size is 10', () => {
    expect(q.isEmpty()).toBe(true);
    
});