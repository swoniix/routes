import './sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/chapOne">Chapter 1</NavLink>
          </li>
          <li>
            <NavLink to="/chapTw">Chapter 2</NavLink>
          </li>
          <li>
            <NavLink to="/chapTh">Chapter 3</NavLink>
          </li>
          <li>
            <NavLink to="/chapF">Chapter 4</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;