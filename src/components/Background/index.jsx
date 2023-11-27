// StarsBackground.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const Background = () => {
	const starSize = 10;
	const starMoveSpeed = 0.001;
	const starCount = 100;
	const [stars, setStars] = useState([]);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// Function to update the cursor position
		const updateCursorPosition = (e) => {
			setCursorPosition({ x: e.clientX, y: e.clientY });
		};

		// Attach event listener to update cursor position
		window.addEventListener('mousemove', updateCursorPosition);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('mousemove', updateCursorPosition);
		};
	}, []);

	useEffect(() => {
		// Generate stars when the component mounts
		const generateStars = () => {
			const starsArray = [];
			for (let i = 0; i < starCount; i++) {
				starsArray.push({
					id: i,
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight,
					z: Math.random() * 100,
				});
			}
			setStars(starsArray);
		};

		generateStars();
	}, []);

	return (
		<div className='stars-background'>
			{stars.map((star) => (
				<div
					key={star.id}
					className='star'
					style={{
						left:
							star.x +
							(cursorPosition.x - window.innerWidth / 2) *
								starMoveSpeed *
								star.z,
						top:
							star.y +
							(cursorPosition.y - window.innerHeight / 2) *
								starMoveSpeed *
								star.z,
						width: `${star.z / starSize}px`,
						height: `${star.z / starSize}px`,
					}}
				></div>
			))}
		</div>
	);
};

export default Background;
