import React from 'react';
import { Card } from 'react-bootstrap';
import Task from '../Task/Task';
import { MyContext } from '../../App';

class DeletedList extends React.PureComponent {
    render() {
        return (
            <MyContext.Consumer>
                {value =>
                    (
                        <>
                            <Card className="DoingList_card">
                                <Card.Body>
                                    <Card.Text> Deleted </Card.Text>
                                    {
                                        value.state.data.filter(t => (t.deleted)).map(t => (<Task key={t.id} {...t} ></Task>))
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


export default DeletedList;
