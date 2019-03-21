import React from 'react';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MyContext } from '../../App';


class Task extends React.PureComponent {


    handleDelete=(data,updateData)=> (e)=> {
        const copy=data.slice();
        copy.forEach(t => {
          if(t.id===e.currentTarget.dataset.id)
          {
        t.deleted=!t.deleted;
          }
        });
        
        updateData(copy);

    }
    handleComplete= (data,updateData) => (e) => {
      
        const copy=data.slice();
        copy.forEach(t => {
          if(t.id===e.currentTarget.dataset.id)
          {
        t.completed=!t.completed;
          }
        });
        
        updateData(copy);

    }
    render() {

        const { body, id } = this.props;
        const Donebtntxt = this.props.completed ? 'Undo' : 'Done';
        const Deletebtntxt = this.props.deleted ? 'Undelete' : 'Delete';

        return (
            <MyContext.Consumer>
                {value =>
                    (

                        <>
                            <Card className="Task_card">
                                <Card.Body style={{ display: 'flex' }}>
                                    <Card.Text >{body}</Card.Text>
                                    {!this.props.deleted && <Button variant="primary" className="Task_btn" style={{ backgroundColor: '#328A3B', borderColor: '#328A3B' }} data-id={id} onClick={this.handleComplete(value.state.data,value.updateData)}>{Donebtntxt}</Button>}
                                    <Button variant="primary" className="Task_btn" style={{ backgroundColor: '#D93738', borderColor: '#D93738' }} data-id={id}  onClick={this.handleDelete(value.state.data,value.updateData)} >{Deletebtntxt}</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </MyContext.Consumer>

        )
    }
}




export default Task;
