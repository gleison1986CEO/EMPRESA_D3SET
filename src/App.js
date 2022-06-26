import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddPessoas from "./componentes/AddPessoas";
import Lista_Pessoas from "./componentes/Lista_Pessoas";
import "./App.css";

function App() {
  const [Pessoas_ID, setPessoas_ID] = useState("");

  const getPessoas_IDHandler = (id) => {
    console.log("Este documento foi editado: ", id);
    setPessoas_ID(id);
  };
  return (
    <>
      <Navbar  className="header">
        <Container>
          <Navbar.Brand style={{color:'#ffffff',}}className="home">TESTE EMPRESA 24 HORAS Firebase SDK 9 || 2022 Gleison Silveira</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Lista_Pessoas getPessoas_ID={getPessoas_IDHandler} />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddPessoas id={Pessoas_ID} setPessoas_ID={setPessoas_ID} />
          </Col>
        </Row>
      </Container>
      <Navbar  className="header">
      <Container>
          <Navbar.Brand style={{color:'#ffffff',}}className="home">D3SET DEV. Gleison 2022</Navbar.Brand>
        </Container>
        </Navbar>
     
    </>
  );
}

export default App;
