import {Row, Col} from 'react-bootstrap';

export default function Highlights(){
	return(
		<Row>
			<Col xs={12} md={4} className='mb-3'>
				<div className="card-highlight">
					<div>
						<h5>Heading 1</h5>
						<hr className="hr-highlight"/>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
						</div>
					</div>
				</div>
			</Col>
			<Col xs={12} md={4} className='mb-3'>
				<div className="card-highlight">
					<div>
						<h5>Heading 2</h5>
						<hr className="hr-highlight"/>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
						</div>
					</div>
				</div>
			</Col>
			<Col xs={12} md={4} className='mb-3'>
				<div className="card-highlight">
					<div>
						<h5>Heading 3</h5>
						<hr className="hr-highlight"/>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
						</div>
					</div>
				</div>
			</Col>
		</Row>
	);
};