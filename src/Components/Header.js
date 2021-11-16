import React, { useState } from 'react'

const Header = ({ getQuery }) => {
	const [text, setText] = useState('')

	const change = (e) => {
		setText(e)
		getQuery(e)
	}

	return (
		<div className='header-container'>
			<h1>Weather App</h1>
			<input
				className='search'
				type="search"
				placeholder='Search'
				value={text}
				onChange={(e) => change(e.target.value)}
			/>
		</div>
	)
}

export default Header
