import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";

import Paper from "@mui/material/Paper";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function TableoneRow() {
  const { t } = useTranslation();

  const handle = (lang) => {
    i18next.changeLanguage(lang);
  };
  const [rows, setRows] = useState();
  console.log(rows);
  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  const getAllData = (id) => {
    let url = `http://localhost:3000/data${id}`;
    axios.get(url).then((data) => setRows(data?.data));
  };

  const [value, setValue] = useState(""); 
  console.log(value,setValue);
  const [users, setUsers] = useState([]); 

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/data");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/data/${id}`)
      .then((res) => alert("Successfully deleted"));
    setUsers(users.filter((el) => el.id !== id));
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <DropdownButton
              variant="success"
              id="dropdown-basic-button"
              title={t("text.title")}
            >
              <Dropdown.Item onClick={() => handle("en")} href="#/action-1">
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handle("ru")} href="#/action-2">
                Russian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handle("uz")} href="#/action-3">
                Uzbek
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center mt-5 mb-5">
          <Col xs={8}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("text.img")}</TableCell>
                    <TableCell align="right">
                      <b>{t("text.names")}</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{t("text.location")}</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{t("text.price")}</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{t("text.sale")}</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{t("text.edit")}</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{t("text.delete")}</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img style={{width:"180px", height:"130px", borderRadius:"10px"}} src={row?.img} alt="" />
                      </TableCell>
                      <TableCell align="right">{row?.name}</TableCell>
                      <TableCell align="right">{row?.location}</TableCell>
                      <TableCell align="right">{row?.price}</TableCell>
                      <TableCell align="right">{row?.sale}</TableCell>
                      <Link to={`/tableone/edit/${row.id}`}>
                        <TableCell align="right">
                          <Button
                            style={{ marginTop: "65px" }}
                            variant="contained"
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </Link>
                      <TableCell align="right">
                        {" "}
                        <Button
                          onClick={() => deleteData(row.id)}
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
