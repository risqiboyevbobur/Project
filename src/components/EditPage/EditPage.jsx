import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


export default function EditPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(name, location, price, img, sale);

  const getOne = (id) => {
    axios.get(`http://localhost:3000/data/${id}`).then((data) => {
      setName(data.data.name);
      setLocation(data.data.location);
      setPrice(data.data.price);
      setSale(data.data.sale);
      setImg(data.data.img);
    });
  };

  useEffect(() => {
    getOne(id);
    //eslint-disable-next-line
  }, []);

  const editAllData = () => {
    let obj = {
      name: name,
      location: location,
      price: price,
      sale: sale,
      img: img,
    };
    axios.put(`http://localhost:3000/data/${id}`, obj).then((res) => {
       alert("successfully edited")
      navigate("/tableone");
    });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <h1>Welcome to edit page</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
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
                  value={location}
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
                  value={price}
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
                  value={sale}
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
                  value={img}
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

              {name.length < 1 ? (
                <Button style={{ width: "100%" }} variant="primary">
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={editAllData}
                  style={{ width: "100%" }}
                  variant="primary"
                >
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
