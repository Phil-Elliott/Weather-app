const Weather = ({ locationInfo, weatherInfo, condition }) => {
	return (
		<div className="info-container">
			<div>
				<h1>{locationInfo.name}</h1>
				<h1>{weatherInfo.temp_f} °</h1>
			</div> 
			<div>
				<h1>{condition.text}</h1>
				<img src={condition.icon} />
			</div>
		</div>
	)
}

export default Weather