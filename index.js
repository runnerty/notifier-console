"use strict";

const Notification = global.NotificationClass;

class consoleNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    notification.mode = (notification.mode)?notification.mode.toString():"info";
    notification.message = (notification.message)?notification.message.toString():"";
    this.logger(notification.mode, notification.message);
    this.end();
  }
}

module.exports = consoleNotifier;