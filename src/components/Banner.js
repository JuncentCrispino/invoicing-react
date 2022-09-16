import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

export default function Banner({ bannerProps }) {
	const { title, content, destination, label } = bannerProps
	const { user } = useContext(UserContext);

	return (
		<Jumbotron style={{paddingTop: '100px'}}>
			<h1>{title}</h1>
			<p>{content}</p>
			{user.id != null ? (
				<>
					<Link className="btn homebtn" to="/invoices">Create Invoice</Link>
				</>
			) : (
				<>
					<Link className="btn homebtn" to={destination}>{label}</Link>
				</>
			)}
		</Jumbotron>
	)
}