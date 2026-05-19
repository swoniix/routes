import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

import {
  MainPage, CH, Java, Web, Python, C, CPP, SQL, ReactPage
} from './components/nav/navig';

import ChapterPage from './components/sidebar/chappage';
import { chapterLoader } from './components/sidebar/chapdata';
import Sidebar from './components/sidebar/sidebar';

const Root = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <MainPage />
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<ReactPage />} />
      <Route
        path="chapters/:chapterId"
        element={<ChapterPage />}
        loader={chapterLoader} />

      <Route path="csharp" element={<CH />} />
      <Route path="java" element={<Java />} />
      <Route path="web" element={<Web />} />
      <Route path="python" element={<Python />} />
      <Route path="c" element={<C />} />
      <Route path="cpp" element={<CPP />} />
      <Route path="sql" element={<SQL />} />
      <Route path="reactpage" element={<ReactPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;