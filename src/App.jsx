const App = () => {
  return (
    <div
      id="quote-box"
      className="max-w-lg max-h-screen overflow-y-auto bg-white text-zinc-800 p-16 rounded-md drop-shadow-lg"
    >
      <blockquote
        id="text"
        className="mb-4 text-xl leading-relaxed before:content-[open-quote] after:content-[close-quote]"
      >
        Design in art, is a recognition of the relation between various things,
        various elements in the creative flux. You can't invent a design. You
        recognize it, in the fourth dimension. That is, with your blood and your
        bones, as well as with your eyes.
      </blockquote>
      <p id="author" className="text-right mb-8">
        &mdash; D. H. Lawrence
      </p>

      <div className="flex">
        <button
          id="new-quote"
          className="px-3 py-2 mr-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 text-white rounded-md border border-b-4 active:border-b border-red-900"
          type="button"
        >
          New quote
        </button>
        <a
          id="tweet-quote"
          className="px-3 py-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 text-white rounded-md border border-b-4 border-red-900"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${'Design in art, is a recognition of...'}" — D. H. Lawrence`
          )}`}
          target="_blank"
          rel="noreferrer nofollow"
        >
          Tweet
        </a>
      </div>
    </div>
  )
}
export default App
