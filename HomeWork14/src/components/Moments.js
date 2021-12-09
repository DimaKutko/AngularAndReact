import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";

export default function Moments(props) {
  let titleRef = React.createRef();
  const handlerSubmit = (event) => {
    event.preventDefault();
    
    var value = titleRef.current.value;
    if (value.length > 0) {
      props.action.addMoment(value);
      titleRef.current.value = null;
    }
  };

  let commentRef = React.createRef();
  const handlerSubmit2 = (event) => {
    event.preventDefault();

    var value2 = commentRef.current.value;
    if (value2.length > 0) {
      props.action.addComment(commentRef.current.id, value2);
    }
  };

  return (
    <Container>
      <Container>
        <h2>Moments</h2>
      </Container>
      <Container>
        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>New moment</Form.Label>
            <Form.Control type="text" ref={titleRef} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Container>
      <br />
      <Container>
        <Table striped bordered hover size="sm">
          <tbody>
            {props.state.map((u) => (
              <tr>
                <td>
                  <div>
                    <h2>{u.title}</h2>
                    <Form onSubmit={handlerSubmit2}>
                      <Form.Group className="mb-3">
                        <Form.Label>Comment: {u.comment}</Form.Label>
                        <Form.Control type="text" ref={commentRef} id={u.id} />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Update
                      </Button>
                    </Form>
                    <br />
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={() => props.action.removeMoment(u)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
