//React imports
import React, { useState, useContext, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';

//Misc Imports
import UserContext from '../UserContext';
import Swal from 'sweetalert2'

export default function Login() {

	const [email, setEmail] = useState('');;
	const [password, setPassword] = useState('');
	const { user, setUser } = useContext(UserContext);
	const [loginButton, setLoginButton] = useState(false);

	/*function for user login*/
	function loginUser(e) {
		e.preventDefault()
		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (typeof data.access !== "undefined") {
					localStorage.setItem('token', data.access);
					retrieveUserDetails(data.access);

				} else {
					Swal.fire({
						title: "Authentication failed",
						icon: "error",
						text: "Check your login details and try again"
					});
				};
			});
	};

	/*after the login, we should set the global user using setUser*/
	const retrieveUserDetails = (token) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				setUser({
					id: data._id,
					isAdmin: data.isAdmin
				});
			});
	};

	useEffect(() => {
		if (email !== '' && password !== '') {
			setLoginButton(true)
		} else {
			setLoginButton(false)
		}
	}, [email, password])

	if (user.id != null) {
		return <Redirect to="/" />

	}

	return (
		<Container className='auth-container'>
			<div className='div-form'>
				<Form className="mt-3" onSubmit={(e) => loginUser(e)}>
					<Form.Group>
						<Form.Label className='text-sm'>Email Address</Form.Label>
						<Form.Control className='text-sm' type='email' placeholder='john@example@email.com' size='sm' value={email} onChange={e => setEmail(e.target.value)} required />
					</Form.Group>
					<Form.Group>
						<Form.Label className='text-sm'>Password</Form.Label>
						<Form.Control className='text-sm' type='password' placeholder='Enter Password' size='sm' value={password} onChange={e => setPassword(e.target.value)} required />
					</Form.Group>
					{loginButton ?
						<Button variant="info" type='submit' size='sm'><b>Login</b></Button>
						:
						<Button variant="danger" type="submit" size='sm' disabled>Login</Button>
					}
				</Form>
				<div className="text-muted small mt-4">
					<span>Don't have an account Yet? </span><span><Link className="text-info" to="/register">Click Here</Link></span>
				</div>
			</div>
		</Container>
	);
};