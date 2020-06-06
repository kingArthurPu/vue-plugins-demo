import Notification from './notification'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice ({ content = '', ok = { text: '确定', callback: function () {} }, cancel = { text: '取消', callback: function () {} } }) {
  const instance = getMessageInstance()
  instance.add({
    type: 'confirm',
    content,
    ok,
    cancel
  })
}

export default function (options) {
  return notice(options)
}
