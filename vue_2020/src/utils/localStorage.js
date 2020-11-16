
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
  let result = localStorage.getItem(key)
  if (!result || result === 'undefined'  || result === 'null') {
    result = null
  } else {
    result = JSON.parse(result)
  }
  return result
}

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}