import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = (props) => {
    const [showState, setState] = useState(false);
    const getDescription = () => {
        showState ? setState(false) : setState(true)
        console.log(showState)
    }
    return (
            <Card>
                <Card.Img variant="top" src={props.img} style={{width:'150px'}}/>
                <Card.Body>
                <Card.Title>{props.model}</Card.Title>
                <Card.Text>
                    {showState === true ? <p>{props.description}</p> : null}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><Button size="sm" variant="primary" onClick={getDescription}>{showState === true ? 'Hide' : 'Detail'}</Button>{' '}</small>
                    <small className="text-muted"><Link to={`/car/${props.id}`}>Перейти</Link></small>
                </Card.Footer>
            </Card>
    )
}
export default Car;
