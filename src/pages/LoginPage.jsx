import { Button, Card, Form } from "react-bootstrap";

export default function AuthPage() {
  return (
    <Card className="position-absolute top-50 start-50 translate-middle" style={{width: "30%", background: "#2b2d31", color: "white"}}>
        <Card.Body>
            <Card.Title className="text-center">Welcome Back!</Card.Title>
            <Card.Subtitle className="text-center text-secondary mb-3">We&apos;re so excited to see you again!</Card.Subtitle>

            <Form className="mx-3" style={{color: "#b3b8bf", fontSize: "12px"}}>
                <Form.Label className="mb-2 fw-bold">EMAIL OR PHONE NUMBER <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" className="border-0 mb-3" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />

                <Form.Label className="mb-2 fw-bold">PASSWORD <span className="text-danger">*</span></Form.Label>
                <Form.Control type="password" className="border-0 mb-1" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />

                <Card.Link href="#">Forgot your password?</Card.Link>

                <Button className="d-block mt-3" style={{width: "100%", background: "#5865f2"}}>Log In</Button>

                <div className="mt-2">Need an account? <Card.Link href="#">Register</Card.Link></div>
            </Form>
        </Card.Body>
    </Card>
  )
}
