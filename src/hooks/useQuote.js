import { useState, useEffect } from 'react'
import quoteService from '../services/quoteService'

const useQuote = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    quoteService.newQuote().then(setQuote)
  }, [])

  const newQuote = () => {
    quoteService.newQuote().then(setQuote)
  }

  return [quote, newQuote]
}

export default useQuote
