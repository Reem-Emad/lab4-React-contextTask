import React from 'react';
import { Card } from 'react-bootstrap';
import Task from '../Task/Task';
import { MyContext } from '../../App';

class DoneList extends React.PureComponent {
    render() {
        return (
            <MyContext.Consumer>
                {value =>
                    (
                        <>
                            <Card className="DoingList_card">
                                <Card.Body>
                                    <Card.Text> Done </Card.Text>
                                    {
                                        value.state.data.filter(t => (t.completed && !t.deleted)).map(t => (<Task key={t.id} {...t} ></Task>))
                                    }
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }

}


export default DoneList;
