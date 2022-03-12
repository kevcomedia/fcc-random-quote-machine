import { useState, useEffect } from 'react'
import Quote from './components/Quote'
import Buttons from './components/Buttons'
import quoteService from './services/quoteService'

const App = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    setQuote(quoteService.newQuote())
  }, [])

  const handleNewQuoteClick = () => {
    setQuote(quoteService.newQuote())
  }

  return (
    <div
      id="quote-box"
      className="w-full max-w-lg max-h-screen overflow-y-auto bg-white text-zinc-800 p-16 rounded-md drop-shadow-lg"
    >
      {quote && (
        <div className="mb-8">
          <Quote quote={quote} />
        </div>
      )}

      <div className="mb-2">
        <Buttons quote={quote} onNewQuote={handleNewQuoteClick} />
      </div>

      <p className="text-zinc-500">
        <small>
          API from{' '}
          <a
            className="underline focus:outline-none focus:ring focus:ring-red-400"
            href="https://quotesondesign.com/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Quotes on Design
          </a>
        </small>
      </p>
    </div>
  )
}
export default App
