import React from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
	getStyle = () => {
		
			return {
				backgroundColor: '#f4f4f4',
				padding: '10px',
				borderBottom: '1px #ccc dotted',
				textDecoration: this.props.todo.completed === true ? 'line-through' : 'none'
			}

}


	render() {
		const { id, title } = this.props.todo;  /*<= destructuring */
		return (
			<div style={this.getStyle()} >
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {' '}
					 { title } 
					 <button style={btnStyle} onClick={this.props.delTodo.bind (this, id)}>	X </button>
				</p>
			</div>
			)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
	backgroundColor: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}



export default TodoItem