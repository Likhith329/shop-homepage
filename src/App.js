import "./index.css";
import { useState } from "react";

export default function App() {

  const details=[
    {
      name:"Fancy Product",
      rating:false,
      sale:false,
      strike:"",
      actual:"$40.00 - $80.00",
      button:"View options"
    },
    {
      name:"Special Item",
      rating:true,
      sale:true,
      strike:"$20.00",
      actual:"$18.00",
      button:"Add to cart"
    },
    {
      name:"Sale Item",
      rating:false,
      sale:true,
      strike:"$50.00",
      actual:"$25.00",
      button:"Add to cart"
    },
    {
      name:"Popular Item",
      rating:true,
      sale:false,
      strike:"",
      actual:"$40.00",
      button:"Add to cart"
    },
    {
      name:"Sale Item",
      rating:false,
      sale:true,
      strike:"$50.00",
      actual:"$25.00",
      button:"Add to cart"
    },
    {
      name:"Fancy Product",
      rating:false,
      sale:false,
      strike:"",
      actual:"$120.00 - $280.00",
      button:"View options"
    },
    {
      name:"Special Item",
      rating:true,
      sale:true,
      strike:"$20.00",
      actual:"$18.00",
      button:"Add to cart"
    },
    {
      name:"Popular Item",
      rating:true,
      strike:"",
      actual:"$40.00",
      button:"Add to cart"
    }
  ]   

  const [count,setCount]=useState(0);

  function update(){
    setCount(count+1)
  }

  function remove(){
    if(count>0)setCount(count-1)
  }

 return(
  <div>
    
    <nav className="navbar navbar-expand-sm navbar-light  fixed-top">
      <label className="navbar-brand" >Start Bootstrap</label>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" 
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown">Shop</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#" className="dropdown-item">All products</a>
            </li>
            <li>
              <a href="#" className="dropdown-item">Popular items</a>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a href="#" className="dropdown-item">New arrivals</a>
            </li>
          </ul>
        </li>
      </ul>
      <button className="cart-button btn btn-outline-dark" >
        <span><i class="bi bi-cart-fill"></i></span>
        <span>Cart</span>
        <span className="first-badge badge bg-black text-white">{count}</span>
      </button>
    </nav>

    <div className="title">
      <div className="name1">Shop in style</div>
      <div className="namedes">with this shop homepage template</div>
    </div>

    <div className="container-fluid">
      {
        details.map(x=>(
          <Card info={x} update={update} remove={remove}/>
        ))
      }
    </div>

  </div>
 )
}

function Card({info,update,remove}){

  const [show,setShow]=useState("none")
  
  const [show2,setShow2]=useState("none")
  const [k,setK]=useState(0)
  const styles={
    display:show
  }
  const styles2={
    display:show2
  }
  function updateCard(){
    setK(k+1)
  }
  function removeCard(){
    if(k>0)setK(k-1)
  }

  return(
    <div className="card text-center">
      {info.sale==true?<div className="second-badge badge bg-black text-white">Sale</div>:""}
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" ></img>
      <div className="card-body">
        <div className="name">
          {info.name}
        </div>
        {info.rating==true?<div className="rating">⭐⭐⭐⭐⭐</div>:""}
        <div className="price">
          <span className="striked">{info.strike}</span>
          <span className="actual">{info.actual}</span>
        </div>
      </div>
      <div className="button ">

        <button className="btn btn-outline-dark" onClick={()=>{
          if(info.button=="Add to cart"){
            updateCard()
            update()
            setShow2("")
          }
          else{
            setShow(show==""?"none":"")
          }
        }}
        >{info.button}
        </button>
      
        <div className="badge bg-dark text-white" style={styles2}>{k}</div>
        <button className="btn btn-outline-dark" style={styles2} onClick={()=>{
          removeCard()
          remove()
          if(k==1)setShow2("none")
        }}>
        Remove item
        </button>
        <div className="products" style={styles}>
          <div>Product1</div>
          <div>Product2</div>
        </div>
      </div>
    </div>
  )
}


  



