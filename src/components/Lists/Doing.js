import React from 'react';
import uuidv1 from 'uuid/v1';
import { Card } from 'react-bootstrap';
import Task from '../Task/Task';
import { MyContext } from '../../App';




class DoingList extends React.PureComponent {
    render() {

        return (
            <MyContext.Consumer>
                {value =>
                    (
                        <>
                          
                            <Card className="DoingList_card" style={{ marginLeft: '330px' }}>
                                <Card.Body>
                                    <Card.Text> Doing </Card.Text>
                                    {
                                        value.state.data.filter(t => !(t.completed || t.deleted)).map(t => (<Task key={t.id} {...t} ></Task>))
                                    }
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }



};


export default DoingList;
