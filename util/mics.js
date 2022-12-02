

export function parseAPIError(error) {

    const message = { error: '', detail: "" }
  
    if (error?.response?.data?.message) {
      message.error = error.response.data.message
      message.detail = error.response.data.data
    } else if (error?.response?.status) {
      message.error = error.response.statusText
    } else {
      message.error = error.message
    }
  
    return message
  }
  
  
  
  export function isEmpty(obj) {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.length < 1
      }
      return Object.keys(obj).length < 1
    } return true
  }
  
  
  export function isDeepEmpty(obj) {
  
    const value = true
    if (!obj) return value
    const keys = Object.keys(obj)
    if (keys.length == 0) return value
    for (let i = 0; i < keys.length; i++) {
      // if (obj[keys[i]]) {
      if (!isEmpty(obj[keys[i]])) {
        return false
      }
    }
    return value
  }