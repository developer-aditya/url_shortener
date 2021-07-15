import React, { useContext, useState } from 'react';
import UrlList from './UrlList';
import urlContext from '../context/urlContext/urlContext';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

const UserPage = () => {
	const { addUrl } = useContext(urlContext);
	const [long, setLong] = useState('');

	const submit = (e) => {
		e.preventDefault();
		if (
			/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				long,
			)
		)
			addUrl({ long })
				.then((res) => {
					M.toast({
						html: 'Url Added Sucessfully...',
					});
					setLong('');
				})
				.catch((err) => {
					M.toast({
						html: `${err.response.status}! ${
							err.response.data.error || 'Internal Server Error'
						}`,
					});
				});
		else
			M.toast({
				html: 'Please Enter Proper Link',
			});
	};

	return (
		<div className='grey lighten-4 userPage'>
			<div className='container'>
				<div className='row'>
					<div className='col s12'>
						<form id='link' name='link' onSubmit={(e) => submit(e)}>
							<div className='row'>
								<div className='col s8 m9'>
									<div className='bar'>
										<input
											className='searchbar'
											type='text'
											title='Search'
											value={long}
											onChange={(e) => setLong(e.target.value)}
											placeholder='Shorten Your Link...'
										/>
									</div>
								</div>
								<div className='col s4 m3'>
									<button
										type='submit'
										form='link'
										style={{
											width: '100%',
											backgroundColor: '#af7764',
											textTransform: 'capitalize',
											fontSize: '1.25rem',
											borderRadius: '5px',
										}}
										className='btn btn-large wave-effect'
									>
										Shred...
									</button>
								</div>
							</div>
						</form>
						<UrlList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
