import React from 'react';
import { useNavigate } from 'react-router-dom';
import Book1 from './assets/book1.png';
import Book2 from './assets/book2.png';
import Book3 from './assets/book3.png';
import Book4 from './assets/book4.png';

const Shop = () => {
	const books = [
		{
			name: 'So Good They Can’t Ignore You',
			price: '0.25',
			img: Book1,
		},
		{
			name: 'Outliers',
			price: '0.25',
			img: Book2,
		},
		{
			name: 'The Mom Test',
			price: '0.25',
			img: Book3,
		},
		{
			name: 'Deep Work: Rules for Focused Sucess',
			price: '0.25',
			img: Book4,
		},
	];
	const navigate = useNavigate();
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<div style={{ padding: '8px', backgroundColor: '#F3F3F3' }}>
				<h3 style={{ fontSize: '20px', fontWeight: 700 }}> {process.env.REACT_APP_NAME}'s Second hand E-Books</h3>
			</div>
			<div
				style={{
					display: 'grid',
					gridRow: 'auto',
					gridTemplateColumns: '1fr 1fr',
					gridGap: '10px',
					maxWidth: '1024px',
					margin: 'auto',
					marginTop: '56px',
				}}>
				{books.map((book) => (
					<div style={{ height: '325px' }} key={book.name}>
						<img
							src={book.img}
							alt={book.name}
							style={{ height: '250px', cursor: 'pointer' }}
							onClick={() => navigate('/item', { state: book })}
						/>
						<p>{book.name}</p>
						<p>
							<b>${book.price}</b>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
