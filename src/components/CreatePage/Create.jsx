import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import createDate from "../dynamicAxios/dynamicAxios";

export default function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  console.log(name, location, price, img, sale);

  const createAllData = async () => {
    let obj = {
      name: name,
      location: location,
      price: price,
      sale: sale,
      img: img,
    };

    let url = "http://localhost:3000/data";
    await createDate(url, obj).then((res) => {
      if (res.status === 201) {
        alert("Successfully created");
        setName("");
        setPrice("");
        setSale("");
        setImg("");
        setLocation("");
        navigate("/tableone");
      }
    });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
                {name.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                {location.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                {price.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sale"
                  onChange={(e) => setSale(e.target.value)}
                />
                {sale.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image"
                  onChange={(e) => setImg(e.target.value)}
                />
                {img.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>

              {name.length < 1 ? <Button
               
                style={{ width: "100%" }}
                variant="primary"
              >
                Submit
              </Button> : <Button
                onClick={createAllData}
                style={{ width: "100%" }}
                variant="primary"
              >
                Submit
              </Button>}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
