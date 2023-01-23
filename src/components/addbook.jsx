import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css';

const AddBook = () => {
    let[title,setTitle]=useState("")
    let[categories,setCategories]=useState("")
    let[authors,setAuthors]=useState("")
    let[longDescription,setLongDescription]=useState("")
    let[shortDescription,setShortDescription]=useState("")
    let[pagecount,setPagecount]=useState("")
    let[thumbnailUrl,setThumbnailUrl]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={title,authors,longDescription,shortDescription,pagecount,thumbnailUrl}
        fetch("http://localhost:4000/books",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert(`book added successfully`)
        navigate('/admin/book-list')
    }
    let reset=()=>{
        setTitle("")
        setCategories("")
        setAuthors("")
        setLongDescription("")
        setShortDescription("")
        setPagecount("")
        setThumbnailUrl("")
    }
    return ( 
        <div className="addbook">
            <div className="form_inputs">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" value={title} placeholder="enter title" onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="text" value={categories} placeholder="enter categories" onChange={(e)=>setCategories(e.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="text" value={authors} placeholder="enter authors" onChange={(e)=>setAuthors(e.target.value)} />
                    </div>
                    <div className="long">
                       <textarea className="form-control" type="text" placeholder="enter longDescription" value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <div className="short">
                    <textarea className="form-control" type="text" placeholder="enter shortDescription" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <div className="page">
                        <input type="text" value={pagecount} placeholder="enter pagecount" onChange={(e)=>setPagecount(e.target.value)} />
                    </div>
                    <div className="thumbnail">
                        <input type="text"  value={thumbnailUrl} placeholder="enter thumbnailUrl" onChange={(e)=>setThumbnailUrl(e.target.value)}/>
                    </div>
                    <div className="but_list">
                        <button>Submit</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
export default AddBook;