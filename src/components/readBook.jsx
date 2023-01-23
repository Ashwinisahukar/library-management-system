import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/readbook.css';

const ReadBook = () => {
    let[book,setBook]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            setBook(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <div className="whole">
            <div className="title">
            <p>{book.title}</p>
            </div>
            <div className="short">
            <p >{book.shortDescription}</p>
            </div>
            <div className="long">
            <p>{book.longDescription}</p>
            </div>
            </div>
        </div>
     );
}
export default ReadBook;