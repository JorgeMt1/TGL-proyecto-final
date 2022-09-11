import DatatableHeadContainer from '../../../containers/datatableHeadContainer/DatatableHeadContainer';
import SecondaryButton from '../../../components/buttons/secondaryButton/SecondaryButton';
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/navbar/NavBar';
import Datatable from 'react-data-table-component';
import './customerDatable.css'

const url = 'http://localhost:3001/api/v1/customers/';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

const axios = require('axios');

export default function CustomerDatatable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const columns =[
    {
      name: "Id",
      selector: row => row.id
    },
    {
      name: "Name",
      selector: row => row.name
    },
    {
      name: "Lastname",
      selector: row => row.lastName
    },
    {
      name: "Phone",
      selector: row => row.phone
    },
    {
      name: "User-Email",
      selector: row => row.user.email
    },
    {
      name: "UserId",
      selector: row => row.userId
    },
    {
      name: "Action",
      cell:(row) => 
      <div className='prueba'>
          <div className='prueba1'>
            <PrimaryButton text='Edit' onClick={() => navigate('/EditCustomer/' + row.id)} />
          </div>
          <div className='prueba1'>
            <SecondaryButton text='Remove' onClick={() => DeleteRow(row)} />
          </div>
        </div>
    }
  ]
  useEffect(() =>{
    axios.get(url, config)
    .then(response=>{
      setProducts(response.data)})
    .catch(error => {
      console.log(error);
    });
  }, [])

  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele.id != value.data.id; 
    });
  }

  function DeleteRow(rowId){
    console.log(rowId.id)
    axios.delete(url + rowId.id, config)
    .then(response => {
      setProducts(arrayRemove(products, response))
    });
  }
  
  return (
    <div>
      <Navbar />
      <div className='customer-datatable-container'>
        <DatatableHeadContainer text='Create Customer' title='Customer Datatable' navigate={'/signup'} />
        <div className= 'user-datatable'>
          <Datatable
          columns={columns}
          data={products}
          pagination/>
        </div>
        <button className='user-dataTable-return-button' onClick={() => navigate('/')}>Return</button>
      </div>
    </div>
  )
}