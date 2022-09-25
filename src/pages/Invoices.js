import React, { useEffect, useState } from "react"
import { Container, Table, Modal, Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Invoice(){
	const [ invoices, setInvoices ] = useState([]);
	const [ invoicesList, setInvoicesList] = useState([]);
	const [ id, setId ] = useState("");
	const [ invoiceNo, setInvoiceNo ] = useState("");
	const [ invoiceDate, setInvoiceDate ] = useState("");
	const [ customerName, setCustomerName ] = useState("");
	const [ productName, setProductName ] = useState("");
	const [ productQuantity, setProductQuantity ] = useState("");
	const [ productPrice, setProductPrice ] = useState("");
	const [ showEdit, setShowEdit] = useState(false);
	const [ showAdd, setShowAdd ] = useState(false)
	const [ showDeleteWarning, setShowDeleteWarning ] = useState(false)

	const openAdd = () => setShowAdd(true)
	const closeAdd = () => setShowAdd(false)

	//function for closing the modal for editing course
	const closeEdit = () => {
		setShowEdit(false);
		setId("")
		setInvoiceNo("");
		setInvoiceDate("");
		setCustomerName("");
		setProductName("");
		setProductQuantity("");
		setProductPrice("");
	};

	//function for getting all the user invoices in the database
	const fetchData = () => {
		fetch(`${process.env.REACT_APP_API_URL}/users/getAllInvoice`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setInvoices(data.invoice)
		});
	};
	
	//Initial run of the fetchData upon reload
	useEffect(()=> {
		fetchData();
	}, []);

	//function for getting the invoice information
	const getInvoiceInfo = (id) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/getSpecificInvoice/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data._id)
			setId(data._id);
			setInvoiceNo(data.invoiceNo);
			setInvoiceDate(data.invoiceDate);
			setCustomerName(data.customerName);
			setProductName(data.productName);
			setProductQuantity(data.productQuantity);
			setProductPrice(data.productPrice);
		})
		setShowEdit(true);
	};

	//function for updating invoice
	const updateInvoice = (e) => {
		e.preventDefault();
		fetch(`${process.env.REACT_APP_API_URL}/users/updateInvoice/${id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				invoiceNo: invoiceNo,
				invoiceDate: invoiceDate,
				customerName: customerName,
				productName: productName,
				productQuantity: productQuantity,
				productPrice: productPrice,
				totalInvoiceAmount: (productPrice * productQuantity)
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true){
				closeEdit()
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Invoice updated successfully',
					timer: 4000
				});
				fetchData()
			}else{
				alert("failed")
			};
		});
	};

	//function for adding new Invoice
	const addInvoice = (e) => {
		e.preventDefault()
		fetch(`${process.env.REACT_APP_API_URL}/users/createInvoice`,{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				invoiceNo: invoiceNo,
				invoiceDate: invoiceDate,
				customerName: customerName,
				productName: productName,
				productQuantity: productQuantity,
				productPrice: productPrice,
				totalInvoiceAmount: (productPrice * productQuantity),
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true){
				fetchData()
				closeAdd()
				closeEdit()
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Invoice created successfully',
					timer: 4000
				})
			}else{
				fetchData()
				alert("failed")
			};
		});
	};

	/*function for setting the id to be deleted and opening the warning modal*/
	const deleteInfo = (invoiceId) =>{
		setId(invoiceId)
		setShowDeleteWarning(true)
	}

	/*function for deleting the invoice in the database*/
	const deleteInvoice = (id) => {
		console.log("hello")
		fetch(`${process.env.REACT_APP_API_URL}/users/deleteInvoice/${id}`,{
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === true){
				setShowDeleteWarning(false)
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Invoice deleted successfully',
					timer: 4000
				})
				fetchData()
			}else{
				setShowDeleteWarning(false)
				Swal.fire({
					title: 'Error',
					icon: 'error',
					text: 'Something went wrong please try again later',
					timer: 4000
				});
			};
		});					
	};	

	/*useEffect for to run the component every time there is a change in the invoice data*/
	useEffect(()=> {
		const invoicesArr = invoices.map(invoice => {
			return(
				<tr key={invoice._id}>
					<td>{invoice.invoiceNo}</td>
					<td>{invoice.invoiceDate}</td>
					<td>{invoice.customerName}</td>
					<td>{invoice.productName}</td>
					<td>{invoice.productQuantity}</td>
					<td>{invoice.productPrice.toLocaleString()}</td>
					<td>{invoice.totalInvoiceAmount.toLocaleString()}</td>
					<td className="d-flex justify-content-center">
						<Button className="m-1" size="sm" variant="info" onClick={() => getInvoiceInfo(invoice._id)}>
							Update
						</Button>
						<Button className="m-1" size="sm" variant="danger" onClick={() => deleteInfo(invoice._id)}>
							Delete
						</Button>
					</td>
				</tr>
			);
		});

		setInvoicesList(invoicesArr);
	}, [invoices]);
	
	return(
		<Container style={{minHeight: 400}}>
			<div className="text-center my-4">
				<h2>DashBoard</h2>
				<div className="d-flex justify-content-center">
					<Button variant="info" onClick={openAdd}>Add New Invoice</Button>
				</div>
		</div>
			<Table striped bordered hover responsive="sm" size="sm" className="small text-center">
				<thead>
					<tr>
						<th>Invoice No.</th>
						<th>Date</th>
						<th>Customer Name</th>
						<th>Product Name</th>
						<th>Product Quantity</th>
						<th>Product Price</th>
						<th>Total Invoice Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{invoicesList}
				</tbody>
			</Table>

		{/*Form for updating the invoice*/}
			<Modal show={showEdit} onHide={closeEdit} >
				<Form onSubmit={(e) => updateInvoice(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Update Invoice</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId="invoiceNo">
							<Form.Label className='text-sm'>Invoice Number</Form.Label>
							<Form.Control className='text-sm' type="number" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="invoiceDate">
							<Form.Label className='text-sm'>Invoice Date</Form.Label>
							<Form.Control className='text-sm' type="string" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="customerName">
							<Form.Label className='text-sm'>Customer Name</Form.Label>
							<Form.Control className='text-sm' type="string" value={customerName} onChange={e => setCustomerName(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="productName">
							<Form.Label className='text-sm'>Product Name</Form.Label>
							<Form.Control className='text-sm' type="string" value={productName} onChange={e => setProductName(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="productQuantity">
							<Form.Label className='text-sm'>Product Quantity</Form.Label>
							<Form.Control className='text-sm' type="number" value={productQuantity} onChange={e => setProductQuantity(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="productPrice">
							<Form.Label className='text-sm'>Product Price</Form.Label>
							<Form.Control className='text-sm' type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} required/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Cancel</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
			</Modal>

			{/*Form for Creating New Invoice*/}
			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={(e) => addInvoice(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add New Invoice</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId="invoiceNo">
							<Form.Label className='text-sm'>Invoice Number</Form.Label>
							<Form.Control className='text-sm' type="number" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="invoiceDate">
							<Form.Label className='text-sm'>Invoice Date</Form.Label>
							<Form.Control className='text-sm' type="string" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="customerName">
							<Form.Label className='text-sm'>Customer Name</Form.Label>
							<Form.Control className='text-sm' type="string" value={customerName} onChange={e => setCustomerName(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="productName">
							<Form.Label className='text-sm'>Product Name</Form.Label>
							<Form.Control className='text-sm' type="string" value={productName} onChange={e => setProductName(e.target.value)}required/>
						</Form.Group>
						<Form.Group controlId="productQuantity">
							<Form.Label className='text-sm'>Product Quantity</Form.Label>
							<Form.Control className='text-sm' type="number" value={productQuantity} onChange={e => setProductQuantity(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="productPrice">
							<Form.Label className='text-sm'>Product Price</Form.Label>
							<Form.Control className='text-sm' type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} required/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Cancel</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		
		{/*Form for Deleteing Invoice*/}
		<Modal show={showDeleteWarning} onHide={e => setShowDeleteWarning(false)}>
				<Modal.Header>
					<h5><b>Are you sure you want to delete the Invoice?</b></h5>
				</Modal.Header>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShowDeleteWarning(false)}>Cancel</Button>
				<Button variant="danger" onClick={() => deleteInvoice(id)}>Proceed</Button>
			</Modal.Footer>
		</Modal>
		</Container>
	)
}