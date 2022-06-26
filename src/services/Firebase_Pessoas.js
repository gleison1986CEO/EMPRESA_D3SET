//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9

//"firebase": "^9.6.0",
//NPM INSTALL FIREBASE

import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const D3SET_CollectionRef = collection(db, "D3SET");
//Adcionar novos usuários
//Adcionar novos usuários
//Adcionar novos usuários

class Firebase_Pessoas {
  addPessoas = (novoUsuario) => {
    return addDoc(D3SET_CollectionRef, novoUsuario);
  };
//Adcionar novos usuários
//Adcionar novos usuários
//Adcionar novos usuários

//Atualizar
  updatePessoas = (id, updatedPessoa) => {
    const PessoaDOC = doc(db, "D3SET", id);
    return updateDoc(PessoaDOC, updatedPessoa);
  };
//Atualizar

//Deletar
  deletePessoas = (id) => {
    const PessoaDOC = doc(db, "D3SET", id);
    return deleteDoc(PessoaDOC);
  };
//Deletar

//Listar
  getAllPessoas = () => {
    return getDocs(D3SET_CollectionRef);
  };

  getPessoas = (id) => {
    const PessoaDOC = doc(db, "D3SET", id);
    return getDoc(PessoaDOC);
  };
  //Listar
}

//Exportar Firebase
export default new Firebase_Pessoas();


//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9
//PADRÃO IMPORT FIREBASE SDK9

//"firebase": "^9.6.0",
//NPM INSTALL FIREBASE