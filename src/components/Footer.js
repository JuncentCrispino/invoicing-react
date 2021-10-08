import { Link } from 'react-router-dom'

export default function Footer(){
	return (
		<footer class="footer font-small">

			<div class="footer-copyright text-center py-3">© 2019 Copyright:

				<Link to="./" class="a-link"> Test App </Link>

			</div>

		</footer>
	)
}
