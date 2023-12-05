let translationMap = new Map([
    ['hello', 'dumela'],
    ['goodbye', 'gabotse'],
    ['thank you', 'tankie'],
    ['yes', 'eya'],
    ['no', 'aowa'],
    ['please', 'kgopela'],
    ['sorry', 'ncese'],
    ['excuse me', 'oreng'],
    ['I love you', 'Kea go rata'],
    ['happy', 'thaba']
  ]);
  
  // Prompt the user for a word to translate
  let wordToTranslate = prompt('Enter a word to translate:');
  
  // If the word is in the translation map, output the translation
  if (translationMap.has(wordToTranslate.toLowerCase())) {
    alert(`${wordToTranslate} in Sepedi is ${translationMap.get(wordToTranslate.toLowerCase())}.`);
  } else {
    alert(`Sorry, ${wordToTranslate} is not in our translation map.`);
  }