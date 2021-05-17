
import React, { forwardRef, useRef } from 'react';
import Article from "./Article"
import { Link } from 'react-router-dom';
import NavBar from "./NavBar"
function Home() {
	 const articleRef = useRef();

		function handleBackClick() {
			articleRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	return (
		// <div>
		// 	<nav className='home-nav'></nav>
		// 	<main className='home-main'>
		// 		<div className='home-logo'>
		// 			<h2>Welcome</h2>
		// 			<NavBar/>
		// 		</div>
		// 		<div className='home-header'>

		// 		</div>

		// 	</main>
		// 	<Article ref={articleRef} onBackClick={handleBackClick} />
		// </div>
		<div className='welcome'>
			<Link to='/article' className='enterBtn'>
				<img className='bulb' src='images/bulb_cropped.png' alt='bulb' />
			</Link>
			
		</div>
	);
}

export default Home;
