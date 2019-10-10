import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<label>LatLong:</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
