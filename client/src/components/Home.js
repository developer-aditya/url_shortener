import React from 'react';
import image from '../img.png';

const Home = () => {
	return (
		<div className='centerImage'>
			<div className='container'>
				<div className='row'>
					<div className='col s12 m8' style={{ color: 'white' }}>
						<h1>Short links, big results</h1>
						<p>
							URL shortening is a technique on the World Wide Web in
							which a Uniform Resource Locator may be made substantially
							shorter and still direct to the required page. This is
							achieved by using a redirect which links to the web page
							that has a long URL.
						</p>
						<div style={{ marginTop: '4rem' }}></div>
						<a className='btn btn-large brown' href='#show-pricing'>
							Get Started for Free
						</a>
					</div>
					<div className='col s12 m4' style={{ marginTop: '2rem' }}>
						<img
							src={image}
							alt='brand'
							style={{
								width: '100%',
								height: 'auto',
							}}
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
