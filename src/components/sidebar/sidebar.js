import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <li><Link to="/chapters/chapOne">Chapter 1</Link></li>
          <li><Link to="/chapters/chapTw">Chapter 2</Link></li>
          <li><Link to="/chapters/chapTh">Chapter 3</Link></li>
          <li><Link to="/chapters/chapF">Chapter 4</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;