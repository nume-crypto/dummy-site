import React from 'react';
import { useNavigate } from 'react-router-dom';
import Book1 from './assets/book1.png';
import Book2 from './assets/book2.png';
import Book3 from './assets/book3.png';
import Book4 from './assets/book4.png';

const Shop = () => {
    const navigate = useNavigate();
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<div style={{ padding: '8px', backgroundColor: '#F3F3F3' }}>
				<h3 style={{ fontSize: '20px', fontWeight: 700 }}>Second hand E-Books</h3>
			</div>
			<div
				style={{
					display: 'grid',
					gridRow: 'auto',
					gridTemplateColumns: '1fr 1fr',
					marginTop: '72px',
					gridGap: '40px',
				}}>
				<div style={{ height: '325px' }}>
					<img src={Book1} alt="book1" style={{ height: '250px', cursor:'pointer' }} onClick={()=>navigate('/item')} />
					<p>Deep Work: Rules for Focused Sucess...</p>
					<p>
						<b>$20.50</b>
					</p>
				</div>
				<div style={{ height: '325px' }}>
					<img src={Book2} alt="book2" style={{ height: '250px', cursor:'pointer' }} onClick={()=>navigate('/item')} />
					<p>Deep Work: Rules for Focused Sucess...</p>
					<p>
						<b>$20.50</b>
					</p>
				</div>
				<div style={{ height: '325px' }}>
					<img src={Book3} alt="book3" style={{ height: '250px', cursor:'pointer' }} onClick={()=>navigate('/item')} />
					<p>Deep Work: Rules for Focused Sucess...</p>
					<p>
						<b>$20.50</b>
					</p>
				</div>
				<div style={{ height: '325px' }}>
					<img src={Book4} alt="book4" style={{ height: '250px', cursor:'pointer' }} onClick={()=>navigate('/item')} />
					<p>Deep Work: Rules for Focused Sucess...</p>
					<p>
						<b>$20.50</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Shop;
