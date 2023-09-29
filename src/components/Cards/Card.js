import React from 'react';
import './Card.css';
import {Link } from "react-router-dom";

function Card( {results, page}) {
    console.log(results);
    let display ;
    if(results){
       display = results.map(x=>{
        let {id, name, image, location, status} =x;
        return (
        <Link 
        style={{textDecoration: "none"}} 
        to={`${page} ${id}`} 
        key={id} 
        className='col-lg-4 col-md-6 col-12  position-relative mb-4 text-dark'
        >
            <div className='cards d-flex justify-content-center flex-column'>
                <img src={image} alt='..' className='img-fluid img' />
                <div className='content' style={{padding:'10px'}}>
                    <div className='fs-4 fw-bold mb-4'>{name}</div>
                    <div>
                        <div className='fs-6'>Last location</div>
                        <div className='fs-5'>{location.name}</div>
                    </div>
                </div>
            </div>
            {(()=>{
                if( status === "Alive"){
                return(
                    <div className='badge bg-success position-absolute'>{status}</div>
            )}
                else if( status === "Dead"){
                    return(
                    <div className='badge bg-danger position-absolute'>{status}</div>
            )}
                else{
                    return(
                    <div className='badge bg-secondary position-absolute'>{status}</div>
            )}
            })()}
            
        </Link>)
       }) 
    }else{
        display = "No Charecters found :/" 
    }
  return (
    <>
        {display}
    </>
  )
}

export default Card