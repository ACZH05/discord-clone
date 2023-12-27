import { Button, Card, Form } from "react-bootstrap"

function RegisterPage() {
    let days = []
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const years = []
    const currentYear = new Date().getFullYear()
    console.log(currentYear)

    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }

    for (let i = currentYear; i >= currentYear - 100; i--) {
        years.push(i)
    }

    return (
        <div>
            <Card className="position-absolute top-50 start-50 translate-middle" style={{background: "#2b2d31", width: "30%", color: "white"}}>
                <Card.Body>
                    <Card.Title className="text-center">Create an account</Card.Title>
                    <Form className="mx-3" style={{color: "#b3b8bf", fontSize: "12px"}}>
                        <Form.Label className="my-2 fw-bold">EMAIL <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="email" className="border-0 mb-3" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />

                        <Form.Label className="my-2 fw-bold">DISPLAY NAME</Form.Label>
                        <Form.Control className="border-0 mb-3" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />

                        <Form.Label className="my-2 fw-bold">USERNAME <span className="text-danger">*</span></Form.Label>
                        <Form.Control className="border-0 mb-3" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />

                        <Form.Label className="my-2 fw-bold">PASSWORD <span className="text-danger">*</span></Form.Label>
                        <Form.Control className="border-0 mb-3" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}} />
                        
                        <Form.Label className="my-2 fw-bold">DATE OF BIRTH <span className="text-danger">*</span></Form.Label>
                        <div id="date" className="d-flex gap-3 mb-3">
                            <Form.Select id="day" className="border-0" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}}>
                                <option disabled selected hidden>Day</option>
                                {days.map((day, id) => (
                                    <option value={day} key={id}>{day}</option>
                                ))}
                            </Form.Select>

                            <Form.Select id="month" className="border-0" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}}>
                                <option disabled selected hidden>Month</option>
                                {months.map((month, id) => (
                                    <option value={month} key={id}>{month}</option>
                                ))}
                            </Form.Select>
                            
                            <Form.Select id="year" className="border-0" style={{backgroundColor: "#1e1f22", color: "#b3b8bf"}}>
                                <option disabled selected hidden>Year</option>
                                {years.map((year, id) => (
                                    <option value={year} key={id}>{year}</option>
                                ))}
                            </Form.Select>
                        </div>

                        <Form.Check className="d-flex align-items-center gap-2 mb-3" label="(Opitional) It&apos;s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time." />

                        <Button className="d-block mt-3 mb-2" style={{width: "100%", background: "#5865f2"}}>Continue</Button>
                        <Form.Label className="mb-3" style={{fontSize: "10px"}}>By registering, you agree to Discord&apos;s Terms of Service and Privacy Policy</Form.Label>
                        
                        <Card.Link className="d-block" href="/login">Already have an account?</Card.Link>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RegisterPage
