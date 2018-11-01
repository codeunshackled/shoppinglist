import React from 'react';

class List extends React.Component {
	render() {
		console.log(this.props.list)
		return(
			<div className="list-group">
				{this.props.list.map((el) =>
					<p key={el} className="list-group-item list-group-item-action list-group-item-primary">{el}</p>
				)}			 
			</div>
		)
	}
}

export default List;