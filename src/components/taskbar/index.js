import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';

class TaskBar extends Component {
    render() {
        return (
            <div>
                <input  type="text" ref="task" placeholder = "add your Tasks Here" />
                <button class="btn waves-effect waves-light" onClick={()=> this.props.addTask(this.refs.task.value)}>Add Task
                </button>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask},dispatch);

}
 

export default connect(()=>{},mapDispatchToProps)(TaskBar);