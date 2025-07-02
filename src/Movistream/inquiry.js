import React, { useState, useCallback } from "react";
import { Carousel, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inquiry.css";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (formData.phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
      }
      console.log(formData);
      setFormData({ name: "", phone: "", email: "", msg: "" });
    },
    [formData]
  );

  return (
    <section className="contactus" id="reviews">
      <div className="backimg-testimonial py-5">
        <Container>
          <h2 className="testimonial-center">Reviews</h2>
          <hr />
          <Carousel className="my-4 ">
            <Carousel.Item>
              <div className="testi-box testi-color-1 text-white">
                <h5>"A visually arresting film..."</h5>
                <p><small>- Brady Corbet</small></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testi-box testi-color-2 text-white">
                <h5>"A dazzling adaptation..."</h5>
                <p><small>- Jon M. Chu</small></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testi-box testi-color-3 text-white">
                <h5>"A mesmerizing film..."</h5>
                <p><small>- Steve</small></p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <div className="py-5 bg-dark text-white inquiry1">
        <Container>
          <Row className="justify-content-center inquiry">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center mb-3">Need Anything? Ask Us</h2>
              <hr />
              <h4 className="text-center mb-4">Ask Your Queries</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    name="phone"
                    maxLength={10}
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="msg"
                    rows={3}
                    placeholder="Enter your message"
                    value={formData.msg}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;




