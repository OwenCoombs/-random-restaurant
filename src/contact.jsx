import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactPage() {
  return (
    <div className="container border border-dark d-felx justify-content-center" id="maincontainer">
        <div className="text-center ">
             <div>
                <h1>Contact Us</h1>
             </div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Messege</Form.Label>
                <Form.Control type="password" placeholder="Your Messege" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    </div>
  );
}

export default ContactPage;