import { useState } from 'react'

export default function useStorage(loacalName) {
  const [data, setdata] = useState(window.localStorage.getItem(loacalName));

  const changeValue = (key, value) => {
    window?.localStorage.setItem(key, value);
    setdata(value)
  }

  const remove = (key) => {
    localStorage.remove(key)
    setdata(null)
  }
  return [data, { changeValue, remove }]
}
