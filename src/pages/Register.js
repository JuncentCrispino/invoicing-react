import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect, useHistory, Link } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function Register(){

	const history = useHistory()
	const {user} = useContext(UserContext)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [ registerButton, setRegisterButton ] = useState(false);

	function registerUser(e){
		e.preventDefault()
		fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === false){
				inputUserDetails()
				history.push('/login')
			}else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Email already exist, Please use other email insted."
				});
			}
		});
	};

	function inputUserDetails(e){
		fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstName: firstName, 
				lastName: lastName, 
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true){
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "Registered Successfully"
				});
			}else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Check your details and try again"
				});
			}
		})
	}

	useEffect(()=> {
		if((firstName !== "" && lastName !=="" && password !== "" && email !== "") && (password === verifyPassword)){
			setRegisterButton(true)
		}else{
			setRegisterButton(false)
		}
	}, [email, password, verifyPassword, firstName, lastName])

	if(user.id != null){
		return <Redirect to="/"/>
	}

	return(
		<Container style={{ maxWidth: 600 }}>
			<Form className="mt-3" onSubmit={(e) => registerUser(e)}>

			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Form.Control type="text" placeholder="Enter First Name" value={firstName}  onChange={e => setFirstName(e.target.value)} required/>
			</Form.Group>				
			<Form.Group>
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Last Name" value={lastName}  onChange={e => setLastName(e.target.value)} required/>
			</Form.Group>
				<Form.Group>
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
					<Form.Text className="text-muted">
						We'll Never share your email with anyone else
					</Form.Text>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Verify Password:</Form.Label>
					<Form.Control type="password" placeholder="Verify Password" value={verifyPassword}  onChange={e => setVerifyPassword(e.target.value)} required/>
				</Form.Group>
				{registerButton ?
  
					<Button variant="info" type="submit"><b>Submit</b></Button>
				:

					<Button variant="danger" type="submit" disabled>Submit</Button>
				}	
			</Form>
			<div className="text-muted small mt-4">
				<span>Aleady have an account? </span><span><Link className="text-info"to="/login">Click Here</Link></span>
			</div>
		</Container>
	)
}