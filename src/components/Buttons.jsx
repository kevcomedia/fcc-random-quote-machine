import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Buttons = ({ quote, onNewQuote }) => {
  const handleNewQuoteClick = () => {
    onNewQuote()
  }

  const buttonClasses =
    'px-3 py-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 text-white rounded-md border border-b-4 active:border-b border-red-900'

  return (
    <div className="flex">
      <button
        id="new-quote"
        className={`mr-2 ${buttonClasses}`}
        type="button"
        onClick={handleNewQuoteClick}
      >
        <FontAwesomeIcon className="mr-1" icon={faArrowsRotate} /> New quote
      </button>
      {quote && (
        <a
          id="tweet-quote"
          className={buttonClasses}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" — ${quote.author}`
          )}`}
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FontAwesomeIcon className="mr-1" icon={faTwitter} /> Tweet
        </a>
      )}
    </div>
  )
}

export default Buttons
