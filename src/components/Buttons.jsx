const Buttons = ({ quote, onNewQuote }) => {
  const handleNewQuoteClick = () => {
    onNewQuote()
  }

  return (
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
  )
}

export default Buttons
