import React from 'react';
import './style.css';

function Home() {
	return (
		<div>
			<div className='name'>
				<div className='overlap-group'>
					<div className='text-wrapper'>AERONE</div>
					<div className='div'>PAMINTUAN</div>
				</div>
			</div>
			<div className='text-wrapper-2'>👋 Hi, I’m</div>
			<div className='picture'>
				<div className='overlap'>
					<div className='frame'>
						<img className='image' alt='Image' src='image-6.png' />
					</div>
					<img className='img' alt='Image' src='image-5.png' />
				</div>
			</div>
		</div>
	);
}

export default Home;
