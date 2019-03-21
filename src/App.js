import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './components/AddTask/Form';
import DoingList from './components/Lists/Doing';
import DoneList from './components/Lists/Done';
import DeletedList from './components/Lists/Deleted';
export const MyContext = React.createContext({ data: [] });

class App extends React.PureComponent
{
    state={
            data:[],        
    }
    addTask=(task)=>{
        const {data} = this.state;
        this.setState({data: [...data,task]});
    }
    updateData=(newData)=>{
        this.setState({data: newData});
    }
    render(){
        const value={
            state: this.state,
            addTask: this.addTask,
            updateData: this.updateData
        }
    return (
        <>
            <MyContext.Provider value={value}>
                <AddTask />
                <DoingList/>
                <DoneList/>
                <DeletedList/>
            </MyContext.Provider>
        </>
    )
    }
}
export default App;




