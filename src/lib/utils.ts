export const parseText = (text: string) => {
  // Replace **bold** with <span class="font-extrabold">
  const boldParsed = text.replace(
    /\*\*(.*?)\*\*/g,
    '<span class="font-extrabold text-dark-200">$1</span>'
  )

  // Replace __italic__ with <span class="italic">
  const italicParsed = boldParsed.replace(
    /__(.*?)__/g,
    '<span class="italic text-dark-200">$1</span>'
  )

  return italicParsed
}
