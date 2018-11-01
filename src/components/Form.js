import React from 'react';

const Form = (props) => {
	return (
		<form onSubmit={props.addToList}>
			<div className="form-group">
				<div className="input-group mb-3">
    		<input name="addItem" type="text" className="form-control" placeholder="Add To Your Shopping List"/>
    		<div className="input-group-append">
    			<button className="btn btn-primary" type="submit">ADD TO LIST</button>
  			</div>
  			</div>
  		</div>
		</form>
	)
}

export default Form;