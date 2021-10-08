import { Navbar, Nav} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

export default function NavBar(){
	const { user, unsetUser } = useContext(UserContext);
	const history = useHistory();

	const logout = () => {
		unsetUser();
		history.push('/login');
	};

	let rightNav = (!user.id) ? (
		<>
			<Link className="nav-link" to='/register'>Register</Link>
			<Link className="nav-link" to="/login">Log In</Link>
		</>
	) : (
		<>
			<Link className="nav-link" to="/invoices">Invoices</Link>
			<Nav.Link onClick={logout}>Logout</Nav.Link>
		</>
	);

	return(
		<Navbar bg="light" expand="lg">
		  <Link className="navbar-brand" to="/">Test App</Link>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Link className="nav-link" to="/">Home</Link> 
		    </Nav>
		    <Nav>
		    {rightNav}
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}