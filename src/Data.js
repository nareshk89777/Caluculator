import React from 'react'
import { useState } from 'react';
import './common.css'
export default function Data() {
    const [emp,setEmp] = useState([{no:1,name:"Naresh",phNo:8977746952}]);
    
    return (
        <div className="container">
            <h1>Emp Details</h1>
            <div className='phoneBook'>
            <h2>Emp-No: {emp.no}</h2>
            <h2>Emp-Name {emp.name}</h2>
            <h2>Emp-phNo: {emp.phNo}</h2>
            <button onClick={dataAdd()}>Click</button>
            </div>
        </div>
    )
    const dataAdd = ()=>{
        const anotherEmp = {no:2,name:"Ramu",phNo:9658497582}       
        setEmp(emp.push(...emp,anotherEmp));
    }
}

