import React, { useState } from 'react'

export default function useNumber(initialValue, min ,max) {
const [count, setCount] = useState(initialValue)

const plus = () => setCount(count < max ? count + 1 :max)
const minus = () => setCount(count > min ? count - 1 :min)
const reset = () => setCount(initialValue)

  return [count, { plus, minus, reset }]
}
