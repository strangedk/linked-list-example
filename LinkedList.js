const LinkedItem = (value) => {
  let _data = value;
  let _next = null;

  return {
    set data(value) { _data = value; },
    get data() { return _data },
    set next(value) { _next = value; },
    get next() { return _next; },
  }
}

const LinkedList = () => {
  let _head = null;
  let _tail = null;

  const add = (value) => {
    const item = LinkedItem(value);
    if (!_head) {
      _head = _tail = item;
    } else {
      _tail.next = item;
      _tail = item;
    }
  }

  return {
    add,
    get head() { return _head; },
  };
}

let list = LinkedList();
list.add(1);
list.add(2);
list.add(7);

for (let item = list.head; item; item = item.next)
  console.log(`Item: ${item.data}`)
