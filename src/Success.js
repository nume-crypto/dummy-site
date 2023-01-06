import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Book1 from './assets/book1.png';

const Success = () => {
	const [num, setNum] = useState(100);
	useEffect(() => {
		let timer1 = setTimeout(() => setNum(0), 2 * 1000);
		return () => {
			clearTimeout(timer1);
		};
	}, []);
	return (
		<div
			className="App"
			style={{
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				background: '#e4f2e8',
			}}>
			<Confetti numberOfPieces={num} width={window.innerWidth} height={window.innerHeight} />
			<div style={{ background: '#a8deed', width: '600px', padding: 24, borderRadius: 8 }}>
				<h1>Thank you for your purchase!</h1>
				<img style={{ maxWidth: '100px', width: 'auto' }} src={Book1} alt="book1" />
				<p>So Good They Can't Ignore You</p>
				<button
					onClick={() => window.location.replace('/')}
					style={{
						padding: 16,
						margin: 16,
						color: '#fff',
						background: '#5f337a',
						border: 'none',
						borderRadius: 8,
						cursor: 'pointer',
					}}>
					Go back to the shop
				</button>
			</div>
		</div>
	);
};

export default Success;
