import Notification from './notification'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice ({ duration = 1500, content = '' }) {
  const instance = getMessageInstance()
  instance.add({
    content,
    duration
  })
}

export default {
  info (options) {
    return notice(options)
  }
}
