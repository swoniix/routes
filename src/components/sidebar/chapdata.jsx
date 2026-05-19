const chapters = [
  {
    id: 'chapOne',
    title: 'Chapter 1',
    subtitle: 'Introduction',
    text: 'Это первая глава. Здесь вводный текст.'
  },
  {
    id: 'chapTw',
    title: 'Chapter 2',
    subtitle: 'Components',
    text: 'Это вторая глава. Здесь текст про компоненты.'
  },
  {
    id: 'chapTh',
    title: 'Chapter 3',
    subtitle: 'State and Props',
    text: 'Это третья глава. Здесь текст про state и props.'
  },
  {
    id: 'chapF',
    title: 'Chapter 4',
    subtitle: 'Router',
    text: 'Это четвертая глава. Здесь текст про React Router.'
  }
];

export function chapterLoader({ params }) {
  const chapter = chapters.find((item) => item.id === params.chapterId);

  return chapter;
}