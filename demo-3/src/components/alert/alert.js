import Notification from './notification'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice ({ duration = 1500, content = '' }) {
  const instance = getMessageInstance()
  const name = instance.add({
    type: 'alert',
    content,
    duration
  })

  return {
    clear () {
      instance.remove(name)
    }
  }
}

export default {
  info (options) {
    return notice(options)
  }
}
