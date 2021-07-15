import React, { useEffect, useContext } from 'react';
import urlContext from '../context/urlContext/urlContext';

import M from '../../node_modules/materialize-css/dist/js/materialize.min';

const UrlList = () => {
	const { urls, loading, getUrls, deleteUrl, updateUrl } =
		useContext(urlContext);

	useEffect(() => {
		getUrls();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {}, [urls]);

	const updateItem = (e, id, short, longOriginal) => {
		e.preventDefault();
		let long = document.getElementById(id).value;

		let error = '';
		if (longOriginal === long) error = 'Please Enter a New Long Url';
		if (
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				long,
			)
		)
			error = 'Please Enter A Proper Link';

		if (error === '')
			updateUrl({ long, short }, id)
				.then((res) => {
					M.toast({
						html: 'Update Success...',
					});
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
				html: `${error}`,
			});
	};

	const deleteItem = (e, id) => {
		e.preventDefault();
		deleteUrl(id)
			.then((res) => {
				M.toast({
					html: 'Delete Success...',
				});
			})
			.catch((err) => {
				M.toast({
					html: `${err.response.status}! ${
						err.response.data.error || 'Internal Server Error'
					}`,
				});
			});
	};

	return (
		<ul className='collection with-header' style={{ borderRadius: '8px' }}>
			<li
				className='collection-header center white-text'
				style={{ backgroundColor: '#0c374b' }}
			>
				<p className='flow-text' style={{ margin: '0.75rem 0' }}>
					Shortened URLs
				</p>
			</li>
			{loading ? (
				<li className='collection-item'>
					<div
						className='progress'
						style={{
							width: '75%',
							padding: '0.5rem 0',
							margin: '1rem auto',
						}}
					>
						<div className='indeterminate'></div>
					</div>
				</li>
			) : urls.length ? (
				<React.Fragment>
					<li
						className='collection-item center grey-text row hide-on-small-only'
						style={{ padding: '1.5rem 0' }}
					>
						<div className='col s6'>Long URLs</div>
						<div className='col s6'>Shortened URLs</div>
					</li>
					{urls.map((url, index) => (
						<li className='collection-item' key={index}>
							<div className='row' style={{ marginBottom: '0rem' }}>
								<div
									className='col s12 m6'
									style={{ padding: '0.25rem' }}
								>
									<div className='bar'>
										<input
											id={`${url._id}`}
											className='searchbar'
											type='text'
											defaultValue={url.long}
										/>
									</div>
								</div>

								<div
									className='col s12 m6'
									style={{ padding: '0.25rem' }}
								>
									<div className='bar'>
										<input
											className='searchbar'
											type='text'
											value={`https://urlshred.herokuapp.com/${url.short}`}
											readOnly
										/>
									</div>
								</div>
								<div className='col s12 center'>
									<button
										onClick={(e) =>
											updateItem(e, url._id, url.short, url.long)
										}
										className='btn-floating btn-large wave-effect light-blue lighten-1'
									>
										<i className='fas fa-pen'></i>
									</button>
									<button
										onClick={(e) => deleteItem(e, url._id)}
										className='btn-floating btn-large wave-effect red lighten-1'
										style={{ marginLeft: '0.5rem' }}
									>
										<i className='far fa-trash-alt'></i>
									</button>
								</div>
							</div>
						</li>
					))}
				</React.Fragment>
			) : (
				<li
					className='collection-item center grey-text'
					style={{ padding: '1.5rem 0' }}
				>
					Oops! No URLs Found...
				</li>
			)}
		</ul>
	);
};

export default UrlList;
