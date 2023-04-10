import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import "./Navbar/NavbarBobur.css";
import "./Hotel.css";
import createDate from "../dynamicAxios/dynamicAxios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footers from "./Footer/Footer";

export default function Hotel({ setShow, size }) {
  const [value, setValue] = useState("");
  console.log(value);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/data");
    const FinalData = await response.json();
    setUsers(FinalData);
  };
  const [show1, setShow1] = useState(false);
  console.log(show1);
  const handleShow = () => setShow1(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [sale, setSale] = useState();
  const [img, setImg] = useState("");
  const [amount, setAmount] = useState();
  console.log(name, price, img, sale);
  const createAllData = async (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      price: price,
      sale: sale,
      img: img,
      amount: amount,
    };

    let url = "http://localhost:3000/data";
    await createDate(url, obj)
      .then((res) => {
        if (res.status === 201) {
          alert("Successfully created");
          setName("");
          setPrice("");
          setSale("");
          setImg("");
          setAmount("");
        }
      })
      .then(() => {
        setShow1(false);
      });
  };
  useEffect(() => {
    createAllData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const { t } = useTranslation();

  const handle = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      {/* <Container>
        <Row className="mt-4 justify-content-between">
          <Col xs={4}>
            <div className="nav_left">
              <div className="logo-image">
                <img className="first_logo" src={icon} alt="" />
              </div>
              <div className="left-info-text">
                <h5 className="num">+7 (495) 677-17-79</h5>
                <p className="every">Ежедневно с 10:00 до 20:00 </p>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="icons mt-3">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-apple"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </Col>
          <Col xs={5}>
            <div className="right_div">
              <div className="flag_div">
                <img src={icon2} className="flag" alt="" />
              </div>
              <div className="flex_icons">
                <div className="image_div">
                  <img src={icon3} className="personal" alt="" />
                </div>
                <p className="text-icon mt-3">Личный кабинет</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="buttons_header">
        <Container>
          <Row className="justify-content-center mt-3">
            <div className="flex-box-bg">
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="big">
        <h1 className="just">
          Забронируйте уникальное <br /> жилье быстро и просто
        </h1>
        <br />
        <p className="and">Лучший способ арендовать квартиру</p>
      </div>
      <div className="bigger"> */}

      <input
        placeholder={t("text.search")}
        className="inp"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* </div> */}

      {/* <div className="section">
        <Container>
          <Row className="justify-content-between mt-5">
            <Col xs={2}>
              <h1 style={{ cursor: "pointer" }} className="logo">
                QPICK
              </h1>
            </Col>
            <Col xs={3}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                >
                  Выбрать модель телефона
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                >
                  Apple
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">iPhone 12</Dropdown.Item>
                  <Dropdown.Item href="#">iPhone 12 Max</Dropdown.Item>
                  <Dropdown.Item href="#">iPhone 13</Dropdown.Item>
                  <Dropdown.Item href="#">iPhone 13 Max</Dropdown.Item>
                  <Dropdown.Item href="#">iPhone 13 Pro Max</Dropdown.Item>
                  <Dropdown.Item href="#">iPhone 14</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Menu>
                <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                >
                  INOI
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">INOI</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                >
                  Nokia
                </Dropdown.Toggle>

                <Dropdown.Menu>
                </Dropdown.Menu>
              </Dropdown>
                </Dropdown.Menu>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={6}>
              <DropdownButton
                variant="success"
                id="dropdown-basic-button"
                title="Change language"
              >
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Uzbek</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={1}>
              <div className="icon">
                <div className="cart">
                  <span>
                    <i class="fas fa-cart-plus"></i>
                  </span>
                  <span>0</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="section">
        <Container>
          <Row className="justify-content-between mt-5">
            <Col xs={1}>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => setShow(true)}
                className="logo"
              >
                QPICK
              </h1>
            </Col>
            <div className="col-2">
              <Link to="/create">
                <Button variant="primary" onClick={handleShow}>
                  {t("text.text_paragraph")}
                </Button>
              </Link>
            </div>
            <Col xs={6}>
              <DropdownButton
                variant="success"
                id="dropdown-basic-button"
                title="Change language"
              >
                <Dropdown.Item onClick={() => handle("uz")} href="#/action-1">
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handle("ru")} href="#/action-2">
                  Russian
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handle("en")} href="#/action-3">
                  Uzbek
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={1}>
              <div className="icon">
                <div onClick={() => setShow(false)} className="cart">
                  <span>
                    <i class="fas fa-cart-plus fa-bounce fa-lg"></i>
                  </span>
                  <i class="fa-sharp fa-solid fa-0 fa-beat fa-lg"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-fluid mt-5 ">
        <div style={{marginLeft:'70px'}} className="row text-center">
          {users
            .filter((res) => {
              return res.name.toLocaleLowerCase() === " "
                ? value
                : res.name.toLocaleLowerCase().includes(value);
            })
            .map((curElem) => {
              console.log(curElem);
              return (
                <div className="col-10 col-md-4 mt-5">
                  <Card
                    className="card mb-5"
                    style={{ width: "380px", height: "450px" }}
                  >
                    <i
                      // onClick={clicked}
                      style={{ paddingTop: "20px", marginRight: "260px" }}
                      class="fa fa-heart fa-beat "
                    ></i>

                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={curElem.img}
                    />
                    <Card.Body>
                      <div style={{ display: "flex" }} className="kkbig">
                        <Card.Title>{curElem.name}</Card.Title>
                        <Card.Title
                          style={{ marginLeft: "175px", color: "#FFA542" }}
                        >
                          {curElem.price}
                          <br />
                          <p
                            style={{
                              fontSize: "13px",
                              textDecorationLine: "line-through",
                              textAlign: "center",
                            }}
                          >
                            {curElem.sale}
                          </p>
                          <p>{curElem.amount}</p>
                        </Card.Title>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          gap: "15px",
                        }}
                        className="stars"
                      >
                        <i
                          style={{ color: "yellow" }}
                          className="fas fa-star start"
                        ></i>
                        <p style={{ color: "gray" }}>{curElem.reyting}</p>
                        <p>Price - {curElem.price}$</p>

                        <Button
                          style={{ marginLeft: "90px" }}
                          variant="success "
                        >
                          Add
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
      <Footers/>
    </div>
  );
}
