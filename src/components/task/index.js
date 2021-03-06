import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {deleteTask} from '../../actions/';
import {connect} from 'react-redux';

class Task extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button class="btn waves-effect waves-light" onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch);
}

export default connect(()=>{},mapDispatchToProps)(Task);
