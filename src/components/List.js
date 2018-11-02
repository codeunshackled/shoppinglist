import React from 'react';

class List extends React.Component {
	render() {
		console.log(this.props.list)
		return (
				<ul  className="list-group">
				{Object.keys(this.props.list).map((index) =>
					
 
						<li key={index} className="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-center">
							<button name="remove" value={index} onClick={() => this.props.removeItem(index)} type="submit" className="btn btn-primary btn-sm">REMOVE</button>
							<span style={{marginLeft: "10px"}}>{this.props.list[index].item}</span>
							<button type="button" class="btn btn-secondary btn-xs ml-auto p-2" style={{"margin-right": "5px","font-size": "10px", "font-weight": "bold","paddingTop": "1px","paddingBottom": "1px"}} onClick={() => this.props.addQuantity(index)} >MORE</button>
							<span class="badge badge-primary badge-pill">{this.props.list[index].quantity}</span>
						</li>
					
				)}
				</ul>	 
			
		)
	}
}
export default List;

