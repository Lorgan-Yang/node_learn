const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};

class MyPromise {
  #result;
  #state = PROMISE_STATE.PENDING;
  #callbacks = [];

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }
  #resolve(data) {
    if (this.#state !== PROMISE_STATE.PENDING) return;
    this.#result = data;
    this.#state = PROMISE_STATE.FULFILLED;
    queueMicrotask(() => {
      this.#callbacks.forEach((cb) => cb());
    });
  }

  #reject(data) {
    if (this.#state !== PROMISE_STATE.PENDING) return;
    this.#result = data;
    this.#state = PROMISE_STATE.REJECTED;
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(() => {
          resolve(onFulfilled(this.#result));
        });
      }
      if (this.#state === PROMISE_STATE.FULFILLED) {
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result));
        });
      }
    });
  }
}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("ding");
  }, 1000);
});

mp.then((result) => {
  console.log("xx1", result);
  return "xxxx33";
}).then((result) => {
  console.log("xx2", result);
});
console.log(mp);
