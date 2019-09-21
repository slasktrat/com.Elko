const Homey = require('homey');
const {default: PQueue} = require('p-queue');

const queue = new PQueue({concurrency: 1, timeout: 3000});

class ElkoApp extends Homey.App {
  
  onInit() {
    this.log('Elko App is running!');
  }

  queuedCall(callback) {
    return queue.add(() => callback());
  }
}

module.exports = ElkoApp;