const quotes = [
  {
    text: "Design in art, is a recognition of the relation between various things, various elements in the creative flux. You can't invent a design. You recognize it, in the fourth dimension. That is, with your blood and your bones, as well as with your eyes.",
    author: 'D. H. Lawrence',
  },
  {
    text: 'As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment.',
    author: 'Steven Heller',
  },
  {
    text: "Stop. I'm not going to take any more input until I've made something with what I got.",
    author: 'Merlin Mann',
  },
  {
    text: 'Nothing will crush your creative career like the weight of trying to make it a masterpiece. Leave the art to the stuff you make, let the career be a big messy experiment.',
    author: 'Andy J. Pizza',
  },
  {
    text: 'I am always doing that which I can not do, in order that I may learn how to do it.',
    author: 'Pablo Picasso',
  },
  {
    text: 'Usage is like oxygen for ideas.',
    author: 'Matt Mullenweg',
  },
  {
    text: 'If design becomes your life, you can be sure a lot of people will be making their living thanks to your designs.',
    author: 'Andrés Contenti',
  },
  {
    text: 'Everything we do communicates.',
    author: 'Pete Episcopo',
  },
]

const newQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return Promise.resolve(quotes[randomIndex])
}

export default { newQuote }
