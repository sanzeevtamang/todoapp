import React, { Component } from 'react'
import {connect} from 'react-redux';

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
                {this.props.tasks.map((task,index) => <task key={index} task={task} />)}
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