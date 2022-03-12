import Quote from './components/Quote'
import Buttons from './components/Buttons'
import Credits from './components/Credits'
import useQuote from './hooks/useQuote'

const App = () => {
  const [quote, newQuote] = useQuote()

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
        <Buttons quote={quote} onNewQuote={newQuote} />
      </div>

      <Credits />
    </div>
  )
}
export default App
