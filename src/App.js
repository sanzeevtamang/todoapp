import React, { Component } from 'react';
import Header from "./components/header/";
import TaskBar from "./components/taskbar/";
import TaskList from "./components/tasklist/";

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <Header />
                <TaskBar />
                <TaskList />
                
            </div>
        )
    }
}
