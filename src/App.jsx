import { useState, useEffect } from 'react'
import Quote from './components/Quote'
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

      <div className="flex mb-2">
        <button
          id="new-quote"
          className="px-3 py-2 mr-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 text-white rounded-md border border-b-4 active:border-b border-red-900"
          type="button"
          onClick={handleNewQuoteClick}
        >
          New quote
        </button>
        {quote && (
          <a
            id="tweet-quote"
            className="px-3 py-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 text-white rounded-md border border-b-4 border-red-900"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" — ${quote.author}`
            )}`}
            target="_blank"
            rel="noreferrer nofollow"
          >
            Tweet
          </a>
        )}
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
