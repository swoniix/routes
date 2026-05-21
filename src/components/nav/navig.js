import './navig.css';
import { Link, Outlet } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/reactpage">React</Link>
          </li>
          <li>
            <Link to="/csharp">C#</Link>
          </li>
          <li>
            <Link to="/java">Java</Link>
          </li>
          <li>
            <Link to="/web">Web</Link>
          </li>
          <li>
            <Link to="/python">Python</Link>
          </li>
          <li>
            <Link to="/c">C</Link>
          </li>
          <li>
            <Link to="/cpp">C++</Link>
          </li>
          <li>
            <Link to="/sql">SQL</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export function CH() {
  return (
    <div>
      <h2>C#</h2>
      <p>язык от Microsoft для приложений, игр на Unity, backend-разработки и desktop-программ</p>
    </div>
  )
}
export function Java() {
  return (
    <div>
      <h2>Java</h2>
      <p>кроссплатформенный язык для backend, Android-разработки и корпоративных систем.</p>
    </div>
  )
}
export function Web() {
  return (
    <div>
      <h2>Web</h2>
      <p>направление, связанное с сайтами и веб-приложениями: HTML, CSS, JavaScript, браузеры, frontend и backend.</p>
    </div>
  )
}
export function Python() {
  return (
    <div>
      <h2>Python</h2>
      <p>простой и популярный язык для автоматизации, анализа данных, backend, ИИ и обучения программированию.направление, связанное с сайтами и веб-приложениями: HTML, CSS, JavaScript, браузеры, frontend и backend.</p>
    </div >
  )
}
export function C() {
  return (
    <div>
      <h2>C</h2>
      <p>классический системный язык. Часто используется для операционных систем, драйверов и встроенных устройств.</p>
    </div >
  )
}
export function CPP() {
  return (
    <div>
      <h2>C++</h2>
      <p>расширение C с объектно-ориентированным подходом. Применяется в играх, высоконагруженных системах и графике.</p>
    </div >
  )
}
export function SQL() {
  return (
    <div>
      <h2>SQL</h2>
      <p>язык для работы с базами данных: создание таблиц, выборка, фильтрация и изменение данных.</p>
    </div >
  )
}
export function ReactPage() {
  return (
    <div>
      <h2>React</h2>
      <p>
        JavaScript-библиотека для создания пользовательских интерфейсов, особенно одностраничных веб-приложений.
      </p>
    </div>
  );
}

