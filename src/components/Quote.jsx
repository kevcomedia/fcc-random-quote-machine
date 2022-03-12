const Quote = ({ text, author }) => {
  return (
    <>
      <blockquote
        id="text"
        className="mb-4 text-xl leading-relaxed before:content-[open-quote] after:content-[close-quote]"
      >
        {text}
      </blockquote>
      <p id="author" className="text-right">
        &mdash; {author}
      </p>
    </>
  )
}

export default Quote
