import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white', textDecoration: 'none'
    }
    const siteTitle = `Chigozie's Cook Book`;

  return (
    <div style={{
        background: 'gold',
         paddingTop: '8px',
    }}>
        <nav>
            <ul className="nav-link" style={{
                listStyle: 'none', 
                display: 'flex',
                justifyContent: 'space-evenly'
                }}>
                 <Link style={navStyle} to="/">
                     <li>
                <h1 style={navStyle}>{siteTitle}</h1>
                     </li>
                  </Link>
                <Link style={navStyle} to="/about" >
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/signup" >
                    <li>Signup</li>
                </Link>
                <Link style={navStyle} to="/contact" >
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
      
    </div>
  );
}
export default Nav;