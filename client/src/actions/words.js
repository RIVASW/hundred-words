export const toggleWord = (wordId) => {
  return {
    type: 'TOGGLE_WORD',
    wordId,
  };
};

export const toggleTranslation = (translationId) => {
  return {
    type: 'TOGGLE_WORD',
    translationId,
  };
};

export const toggleWords = () => {
  return {
    type: 'TOGGLE_WORDS',
  };
};

export const toggleTranslations = () => {
  return {
    type: 'TOGGLE_TRANSLATIONS',
  };
};
