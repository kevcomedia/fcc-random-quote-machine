import { useState, useEffect } from 'react'
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
        <>
          <blockquote
            id="text"
            className="mb-4 text-xl leading-relaxed before:content-[open-quote] after:content-[close-quote]"
          >
            {quote.text}
          </blockquote>
          <p id="author" className="text-right mb-8">
            &mdash; {quote.author}
          </p>
        </>
      )}

      <div className="flex">
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
    </div>
  )
}
export default App
