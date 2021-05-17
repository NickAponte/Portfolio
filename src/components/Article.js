import React, { forwardRef, useRef } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import '../styles/article.css';
const Article = forwardRef(({ onBackClick }, ref) => {
 const articleRef = useRef();

  const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	return (
		<div>
			<article>
				<h1 className="title">
					Hello, My Name is Nicholas Aponte.  I am a Software Engineer
				</h1>
				<h2 className="title">Here are some of my recent projects!</h2>

				<div className='section'>
					<h2>BitInfo</h2>
					<p>
						Welcome to Bitinfo, a Bitcoin forum/question board 
						where users can make accounts and post/answer questions from the community
					</p>
					<img src = "images/BitinfoHome.png"/>
					<a href= "https://github.com/NickAponte/BitcoinInfo-frontend" target="blank">Check it out on my Github</a>
				</div>
				<div className='section'>
					<h2>Hound</h2>
					<p>
						Hound is a company client/prospect tracker allowing employees to add the information of their clients, add notes
						about their progress, and move prospective clients into real clients.
					</p>
					<img  src='images/hound.gif' alt='hound-demo' />
					<a href= "https://github.com/Los-Borrachos/frontend" target="blank">Check it out on my Github</a>
				</div>
				<div className='section'>
					<h2>Urban Weather</h2>
					<p>
						Urban weather brings city forecasts to your fingertips! 
						Add cities to your favorites and store them in localstorage to come back to your favorites later!
					</p>

					<img  src='images/urbanweather.gif' alt='hound-demo' />
					<a href= "https://github.com/NickAponte/UrbanWeather" target="blank">Check it out on my Github</a>
				</div>
				<div className='section'>
					<h2>Air Hockey</h2>
					<p>
						The classic game of air-hockey brought to you on the browser!
						The game features two player one-keyboard action using the WASD and directions keys for player 1 and 2

					</p>

					<img  src='images/hockey.gif' alt='hound-demo' />
					<a href= "https://github.com/NickAponte/Air-Hockey-phaser.io" target="blank">Check it out on my Github</a>
				</div>
				<div className='section'>
					<h2>Simon</h2>
					<p>
						Simon the memory game comes to a browser near you! Play the classic memory game and try to beat your highscore saved locally on your browser!

					</p>

					<img  src='images/simon.gif' alt='hound-demo' />
					<a href= "https://github.com/NickAponte/Simon-The-Game" target="blank">Check it out on my Github</a>
				</div>
				<button className = "backUp" onClick={scrollToTop}>Back to the top</button>
			</article>
		</div>
	);
});
export default Article;
