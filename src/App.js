import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { MainPage, CH, Java, Web, Python, C, CPP, SQL, ReactPage } from './components/nav/navig';

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<ReactPage />} />
          <Route path="csharp" element={<CH />} />
          <Route path="java" element={<Java />} />
          <Route path="web" element={<Web />} />
          <Route path="python" element={<Python />} />
          <Route path="c" element={<C />} />
          <Route path="cpp" element={<CPP />} />
          <Route path="sql" element={<SQL />} />
          <Route path="reactpage" element={<ReactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;