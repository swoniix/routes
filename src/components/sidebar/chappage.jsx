import { Link, useLoaderData } from 'react-router-dom';

export default function ChapterPage() {
  const chapter = useLoaderData();
  console.log(chapter);

  return (
    <div className="Main chapter-page">
      <div>
        <Link to="/">Back</Link>
      </div>

      <h2>{chapter.title}</h2>
      <h3>{chapter.subtitle}</h3>
      <p>{chapter.text}</p>
    </div>
  );
}