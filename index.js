'use strict';

const Notifier = require('@runnerty/module-core').Notifier;
class consoleNotifier extends Notifier {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    notification.mode = notification.mode ? notification.mode.toString() : 'info';
    notification.message = notification.message ? notification.message.toString() : '';
    this.logger.log(notification.mode, notification.message);
    this.end();
  }
}

module.exports = consoleNotifier;
