import React, { Component } from 'react'
import './App.css';
import Stopwatch from './components/Stopwatch/StopWatch';
import Calendar from './components/Calendar/CalendarForm';

export default App;
export default class App extends React.Component {
	state = {
		date: null
	};

	handleDateChange = date => this.setState({ date });

	render() {
		const { date } = this.state;

		return (
			<div>
				{date && <p>Вибрана дата: {date.toLocaleDateString()}</p>}

				<Calendar
					onChange={this.handleDateChange}
				/>
			</div>
		);
	}
}

