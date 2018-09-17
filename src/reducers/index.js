export const initialState = {
  books: {
    title: 'название книги',
    description: 'описание',
    year: 'год издания',
    image: 'изображение обложки',
    author: 'имена авторов'
  },
  listView: false
};

export const rootReducer = (state = initialState) => {
  return state;
};
