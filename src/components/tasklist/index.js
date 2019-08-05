import React, { Component } from 'react';
import {connect} from 'react-redux';
import Task from '../task/'

class TaskList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.tasks.map((task,index) => <Task key={index} task={task} />)}
                </tbody>
            </table>

        )        
    }
}

function mapStateToProps(state){
    return {
        tasks:state.tasks
    }
}
export default connect(mapStateToProps)(TaskList)