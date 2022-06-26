import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Firebase_Pessoas from "../services/Firebase_Pessoas";

const Lista_Pessoas = ({ getPessoas_ID }) => {

  //Lista de Pessoas
  //Lista de Pessoas
  //Lista de Pessoas
  //Lista de Pessoas
  const [doc, setPessoas] = useState([]);
  const [Busca_, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  useEffect(() => {
    getPessoas_Lista();
  }, []);

  //Pegar Lista de Pessoas
  const getPessoas_Lista = async () => {
    const data = await Firebase_Pessoas.getAllPessoas();
    console.log(data.docs);
    setPessoas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //Pegar Lista de Pessoas

  //Deletar
  const deleteHandler = async (id) => {
    await Firebase_Pessoas.deletePessoas(id);
    getPessoas_Lista();
  };
  //Deletar

  //Busca com USEEFFECT()
  //Busca com USEEFFECT()
  //Busca com USEEFFECT()
  useEffect(() => {
    const fetchData_Pessoas = async () => {

       const data = await Firebase_Pessoas.getAllPessoas();
      setPessoas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id,  })));
    };

    fetchData_Pessoas();
  }, []);
  //Busca com USEEFFECT()
  //Busca com USEEFFECT()
  //Busca com USEEFFECT()

  //Lista de dados que podem ser buscados no campo
  //Lista de dados que podem ser buscados no campo
  //Lista de dados que podem ser buscados no campo

  useEffect(() => {
    setFilteredContacts(
      doc.filter(
        (usuarios) =>
        usuarios.Nome.toLowerCase().includes(Busca_.toLowerCase()) ||
        usuarios.Data_Nascimento.toLowerCase().includes(Busca_.toLowerCase()) || 
        usuarios.Numero_Telefone.toLowerCase().includes(Busca_.toLowerCase())
      )
    );
  }, [Busca_, doc]);

  //Lista de dados que podem ser buscados no campo
  //Lista de dados que podem ser buscados no campo
  //Lista de dados que podem ser buscados no campo


  //RETORNO DOS DADOS
  //RETORNO DOS DADOS
  //RETORNO DOS DADOS
  //RETORNO DOS DADOS
  //RETORNO DOS DADOS
  
  return (
    <>
    <input
     style={{
      backgroundColor:'#ffffff', 
      border:'none', 
      borderRadius:38,
      width:'100%',
      marginRight:8,
      padding:12,
      marginTop:20,
      marginBottom:20,
      textAlign:'center',
      color:'#A5A5A5',
    }}
          type="text"
          placeholder="Buscar Usuário / Numero de Telefone"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
       
      </div>
      <div className="mb-2">
        <Button 
        style={{
          backgroundColor:'#ffffff', 
          border:'none', 
          borderRadius:38,
          width:'100%',
          maxWidth:220,
          marginRight:8,
          padding:14,
          marginTop:20,
          marginBottom:20,
          textAlign:'center',
          float:'right',
          color:'#5c00e6',
        }}
        variant="dark edit" onClick={getPessoas_Lista}>
          Atualizar Listagem
        </Button>
      </div>

  <div style={{
          padding:30,
          backgroundColor:'#5c00e6',
          border:'none',
          borderRadius:15,
          padding:13,
          color:"",
        }}>
      <Table style={{
          padding:20,
          backgroundColor:'#ffffff',
          border:'none',
          borderRadius:5,
          padding:13,
          color:"#5c00e6",
        }}>
        <thead style={{
          padding:20,
          backgroundColor:'#5c00e6',
          border:'none',
          borderRadius:5,
          padding:13,
          color:"#ffffff",
        }}>
          <tr>
            <th>ID</th>
            <th>Nome de Usuário</th>
            <th>Numero de Telefone</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {filteredContacts.map((doc, index) =>  {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.Nome}</td>
                <td>{doc.Numero_Telefone}</td>
                <td>{doc.Data_Nascimento}</td>
                <td>
                  <Button
                   style={{
                    backgroundColor:'#3333cc', 
                    border:'none', 
                    borderRadius:12,
                    width:'100%',
                    maxWidth:100,
                    marginBottom:10,
                    padding:4,
                    textAlign:'center',
                    color:'#ffffff',
                  }}
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getPessoas_ID(doc.id)}
                  >
                    Ver Dados
                  </Button>
                  <Button
                  style={{
                    backgroundColor:'#CF190C', 
                    border:'none', 
                    borderRadius:12,
                    width:'100%',
                    maxWidth:100,
                    marginBottom:10,
                    padding:4,
                    textAlign:'center',
                    color:'#ffffff',
                  }}
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Deletar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default Lista_Pessoas;

//RETORNO DOS DADOS
//RETORNO DOS DADOS
//RETORNO DOS DADOS
//RETORNO DOS DADOS
//RETORNO DOS DADOS
//RETORNO DOS DADOS
