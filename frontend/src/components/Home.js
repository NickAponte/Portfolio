import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div>
			<nav className='home-nav'>
				
			</nav>
			<main className='home-main'>
				<div className='home-logo'>
					<h2>Welcome</h2>
					
				</div>
				<div className='home-header'>
					<p>
						A Customer Relationship Management (or CRM) app is used to keep
						track of all of your company's relationships with current and future
						customers and clients. Our version, Hound, is a simple and easy to
						use version of the classic technology that has been at the root of
						all customer based companies for decades. Just sign up, add a
						prospect and their information, move them over to the clients page,
						and see how easy it can be to keep track of all of your important
						business contacts!
					</p>
				</div>
			</main>
		</div>
	);
}

export default Home;
