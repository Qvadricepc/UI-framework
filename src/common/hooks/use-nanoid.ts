import { v4 as uuidv4 } from 'uuid'
import { useRef } from 'react'

export const useNanoid = () => {
  const ref = useRef(uuidv4())

  return ref.current
}
