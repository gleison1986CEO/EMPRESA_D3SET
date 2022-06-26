import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import Firebase_Pessoas from "../services/Firebase_Pessoas";

const AddPessoas = ({ id, setPessoasID}) => {
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS


  const [Nome, setNome] = useState("");
  const [Data_Nascimento, setData_Nascimento] = useState("");
  const [Numero_Telefone, setNumero_Telefone] = useState("");

  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS
  //lISTA DE DADOS ADCIONAR NO BANCO DE DADOS

  //MENSAGEM DE ERRO OU ADCIONADO
  const [mensagem, setMessage] = useState({ error: false, msg: "" });
 //MENSAGEM DE ERRO OU ADCIONADO

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (Nome === "" || Data_Nascimento === "") {
      setMessage({ error: true, msg: "Todos os campos estão vazios" });
      return;
    }
    //adciona usuario
    //adciona usuario
    //adciona usuario
    //adciona usuario


    const novoUsuario = {
      Nome,
      Data_Nascimento,
      Numero_Telefone,
    };

    //adciona usuario
    //adciona usuario
    //adciona usuario
    //adciona usuario
    console.log(novoUsuario);
   
    
    try {
      if (id !== undefined && id !== "") {
        await Firebase_Pessoas.updatePessoas(id, novoUsuario);
        setPessoasID("");
        setMessage({ error: false, msg: "Atualizado com Sucesso" });
      } else {
        await Firebase_Pessoas.addPessoas(novoUsuario);
        setMessage({ error: false, msg: "Usuário adcionad com sucesso para D3SET" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.mensagem });
    }

    setNome("");
    setData_Nascimento("");
    setNumero_Telefone("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await Firebase_Pessoas.getPessoas(id);
      //console.log("Novo Numero Salvo com Sucesso!", docSnap.data());
      setNome(docSnap.data().Nome);
      setData_Nascimento(docSnap.data().Data_Nascimento);
      setNumero_Telefone(docSnap.data().Numero_Telefone);
    } catch (err) {
      setMessage({ error: true, msg: err.mensagem });
    }
  };

  useEffect(() => {
    console.log("O ID é: ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
// Inicio da screen
// Inicio da screen
// Inicio da screen
// Inicio da screen

  return (
    <>
      <div style={{
        width:'100%',
      }}
      
      >
        {mensagem?.msg && (
          <Alert
            variant={mensagem?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {mensagem?.msg}
          </Alert>
        )}
<div style={{
          padding:13,
          backgroundColor:'#ffffff',
          border:'none',
          width:'100%',
          marginTop:30,
          maxWidth:500,
          borderRadius:15,
          padding:13,
          color:"",
        }}>
        <Form 
        style={{
          Width:300,
          }} onSubmit={handleSubmit}>
          <Form.Group className="mb-20" controlId="formNome">
            <InputGroup>
              <InputGroup.Text 
              style={{
                backgroundColor:'#5c00e6', 
                border:'none', 
                borderRadius:12,
                width:100,
                marginRight:8,
                padding:11,
                textAlign:'center',
                color:'#ffffff',
                marginBottom:13,
              }}
              id="formNome">Nome :</InputGroup.Text>
              <Form.Control
               style={{
                backgroundColor:'#ffff', 
                border:'none', 
                borderRadius:12,
                width:120,
                padding:7,
                textAlign:'center',
                color:'#000000',
              }}
                type="text"
                placeholder="Nome de Usuário"
                value={Nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formData_Nascimento">
            <InputGroup>
              <InputGroup.Text 
              
              style={{
                backgroundColor:'#5c00e6', 
                border:'none', 
                borderRadius:12,
                width:120,
                marginRight:8,
                padding:11,
                textAlign:'center',
                color:'#ffffff',
              }}id="formData_Nascimento">Data Nasc.:</InputGroup.Text>
              <Form.Control

style={{
  backgroundColor:'#ffff', 
  border:'none', 
  borderRadius:12,
  width:100,
  padding:11,
  textAlign:'center',
  color:'#000000',
}}
                type="date"
                placeholder="Data de Nascimento"
                value={Data_Nascimento}
                onChange={(e) => setData_Nascimento(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNumero_Telefone">
            <InputGroup>
              <InputGroup.Text 
              
              style={{
                backgroundColor:'#5c00e6', 
                border:'none', 
                borderRadius:12,
                width:120,
                marginRight:8,
                padding:11,
                textAlign:'center',
                color:'#ffffff',
              }}
              id="formNumero_Telefone">Telefone:</InputGroup.Text>
              <Form.Control

style={{
  backgroundColor:'#ffff', 
  border:'none', 
  borderRadius:12,
  width:100,
  padding:11,
  textAlign:'center',
  color:'#000000',
}}
                type="number"
                placeholder="Numero de Telefone"
                value={Numero_Telefone}
                onChange={(e) => setNumero_Telefone(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button 
             style={{
              backgroundColor:'#00b300', 
              border:'none', 
              borderRadius:12,
              width:'100%',
              marginBottom:10,
              padding:11,
              textAlign:'center',
              color:'#ffffff',
            }}
            variant="primary" type="Submit">
              Adcionar
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button 
             style={{
              backgroundColor:'#3333cc', 
              border:'none', 
              borderRadius:12,
              width:'100%',
              marginBottom:10,
              padding:11,
              textAlign:'center',
              color:'#ffffff',
            }}
            variant="primary" type="Submit">
             Atualizar
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </>
  );
};

export default AddPessoas;

// Inicio da screen
// Inicio da screen
// Inicio da screen
// Inicio da screen