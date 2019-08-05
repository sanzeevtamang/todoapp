import React, { Component } from 'react'
import {bindActionCreator} from 'redux';
import {deleteTask} from '../../actions/';
import {connect} from 'react-redux';

export default class index extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreator({deleteTask}, dispatch);
}

export default connect(()=>{},mapDispatchToProps)(Task);
