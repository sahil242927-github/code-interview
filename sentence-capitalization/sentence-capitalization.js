function sentenceCapitalize(sentence) {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ")
    .trim();
}

module.exports = sentenceCapitalize;
