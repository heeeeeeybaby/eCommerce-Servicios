// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQFIfes0fbmoLIjlXu4gRbJid44CRsD6s",
  authDomain: "react-2023-73a32.firebaseapp.com",
  projectId: "react-2023-73a32",
  storageBucket: "react-2023-73a32.appspot.com",
  messagingSenderId: "270591067922",
  appId: "1:270591067922:web:7bde01f27dc41922ccd5cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Hacer un CRUD de productos, es decir operaciones que puedo hacer con mi BDD, create, read, update, delete. 

//Collection, añade una colección

//AddDoc, permite añadir un documento


const db = getFirestore() //Esto es para consultar la Base de datos

//PARA CREAR PRODUCTOS
export const cargarBDD = async () =>{
  const promise = await fetch('./json/servicios.json')
  const productos = await promise.json() //Esto me devuelve un array
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      //Los datos de la BDD están alojados en Prod, que vienen del archivo JSON y los llamo aquí. 

      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      descripcion: prod.descripcion,
      minFilm: prod.minFilm,
      minHighlights: prod.minHighlights,
      fotos: prod.fotos,
      preparativos: prod.preparativos,
      horasCobertura: prod.horasCobertura,
      equipo: prod.equipo,
      entrega: prod.entrega,
      valorOferta: prod.valorOferta,
      valorNormal: prod.valorNormal,
      stock: prod.stock,
      img: prod.img
    })
  } )
}

export const updateProduct = async(id) => {
  await updateDoc(doc(db, "producto", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}