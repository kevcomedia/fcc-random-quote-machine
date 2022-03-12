const Quote = ({ quote }) => {
  const { text, author } = quote

  return (
    <>
      <blockquote
        id="text"
        className="mb-4 text-lg md:text-xl leading-normal md:leading-relaxed before:content-[open-quote] after:content-[close-quote]"
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
