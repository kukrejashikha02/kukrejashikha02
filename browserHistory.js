// The below code is an implementation of add/remove and view features in the browser history
// History is a doubly linked list which maintains the order of urls
class History {
  prev;
  next;
  url;
  constructor(url) {
    this.prev = null;
    this.next = null;
    this.url = url;
  }
  // This function will get executed if there is a duplicate url entry in the browser history
  remove() {
    if (this.prev !== null) {
      this.prev.next = this.next;
    }
    if (this.next !== null) {
      this.next.prev = this.prev;
    }
    this.next = null;
    this.prev = null;
  }
}
// Using hashmap to access duplicate url in O(1) search time
const hashMap = new Map();
// Used to keep track of the last node
let last;

// Add function adds non duplicate urls to the hashmap
function add(url) {
  let history = hashMap.get(url);
  if (history) {
    if (history === last) {
      last = history.prev;
    }
    history.remove();
  } else {
    history = new History(url);
    hashMap.set(url, history);
  }
  if (last) {
    last.next = history;
    history.prev = last;
  }
  last = history;
}
// View function is used to view the browser history in the order of most recent to least recent
function view() {
  const result = [];
  let current = last;
  while (current !== null) {
    console.log("CURRENT NODE IS ", current.url);
    result.push(current.url);
    current = current.prev;
  }
}

add("https://www.google.com/");
add("https://www.linkedin.com/feed/");
add("https://stackoverflow.com/questions/30222791/throttle-debounce-functions");
add("https://www.google.com/");
view();
