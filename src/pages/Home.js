import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import {Container} from 'react-bootstrap';

export default function Home(){
	const data = {
		title: "Invoice Database Web App",
		content: "Free For All and No Advertisements!",
		destination: "/register",
		label: "Signup Now!"
	};
	return(
		<div>
			<Banner bannerProps={data}/>
			<Container>
				<Highlights/>
			</Container>
		</div>
	);
};  