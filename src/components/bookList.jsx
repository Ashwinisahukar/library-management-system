import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css';

const BookList = () => {
    let[books,setBooks]=useState([])
    //to fetch the value
    let location=useLocation()

    let navigate=useNavigate()
     useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:4000/books")
            let data= await response.json()
            setBooks(data);
        }
        fetchData()
    },[books])
    //delete a book from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }
    let read=(id)=>{
        if(location.pathname == '/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
        }else{
            navigate(`/user/book-list/${id}`)
        }
    }
    return ( 
        <div className="bookList">
            <h1 className="head">BookList:{books.length}</h1>
            <div className="books_section">
                {books.map(data=>(
                    <div className="thumb">
                    <div className="thumbnail">
                  <a href={data.thumbnailUrl}> <img height="200" width="150" src={data.thumbnailUrl} alt=""/> </a>  
                </div>   
                    <div className="book_card">
                        <h4> title: {data.title}</h4>
                        <h5>authors: {data.authors.toString()}</h5>
                        <h6>PageCount: {data.pageCount}</h6>
                        <h6>Catogary: {data.categories}</h6>
                        <button onClick={()=>read(data.id)}>Read more</button>
                        { location.pathname == '/admin/book-list' && <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                    </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
export default BookList;