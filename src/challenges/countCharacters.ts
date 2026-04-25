function countCharacters(word: string) {
  const result: Record<string, number> = {};

  for (const char of word) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

module.exports = { countCharacters };
