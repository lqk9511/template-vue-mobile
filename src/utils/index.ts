const uuidv4 = require('uuid/v4')
export const UUID = (): string => uuidv4()

export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => localStorage.getItem(key)
