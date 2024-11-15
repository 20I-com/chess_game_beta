// worker.js
const { parentPort, workerData } = require('worker_threads');
// const { test } = require('../../.svn/objects/pack/pane')
const { test } = require('../../.svn/objects/pack/piece')
// const { test } = require('./optimizing')
const end = workerData;
let sum = 0;

for (let i = 0; i <= end; i++) {
  sum += i;
}

setTimeout(()=>{
  parentPort.postMessage(sum);
}, 5000)

