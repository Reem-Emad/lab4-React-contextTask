import React from 'react';
import uuidv1 from 'uuid/v1';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MyContext } from '../../App';

class AddTask extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (addTask) => 
    (e) => {
      e.preventDefault();
      if (!this.state.data) return;
      const task =
      {
        body: this.state.data, completed: false, deleted: false, id: uuidv1(),
      };
      addTask(task);
      this.setState({ data: '' });
  }
  handleChange(event) {

    event.preventDefault();
    const data = event.target.value;
    this.setState({ data: data });

  }
  render() {
    return (

      <MyContext.Consumer>
        {value =>
          (
            <>
              <Form className="AddTaskForm" onSubmit={this.handleSubmit(value.addTask)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Enter New Task</Form.Label>
                  <Form.Control type="text" placeholder="Enter Task" onChange={this.handleChange} value={this.state.data} />
                </Form.Group>
                <Button style={{ marginLeft: '270px' }} variant="primary" type="submit" className="AddTaskForm_btn">
                  Add
          </Button>
              </Form>
            </>
          )
        }
      </MyContext.Consumer>
    )
  }
}

export default AddTask;