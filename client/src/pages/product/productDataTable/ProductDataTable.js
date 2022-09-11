import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/navbar/NavBar';
import Datatable from 'react-data-table-component';
import './productDataTable.css'
import DatatableHeadContainer from '../../../containers/datatableHeadContainer/DatatableHeadContainer';
import SecondaryButton from '../../../components/buttons/secondaryButton/SecondaryButton';
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';

const url = 'http://localhost:3001/api/v1/products/';
const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };

const axios = require('axios');

export default function ProductDataTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const columns = [
    {
      name: "Id",
      selector: row => row.id
    },
    {
      name: "Name",
      selector: row => row.name
    },
    {
      name: "Description",
      selector: row => row.description
    },
    {
      name: "Price",
      selector: row => row.price
    },
    {
      name: "Action",
      cell: (row) =>
        <div className='prueba'>
          <div className='prueba1'>
            <PrimaryButton text='Edit' onClick={() => navigate('/EditProduct/' + row.id)} />
          </div>
          <div className='prueba1'>
            <SecondaryButton text='Remove' onClick={() => DeleteRow(row)} />
          </div>
        </div>
    }
  ]

  useEffect(() => {
    axios.get(url, config)
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele.id != value.data.id;
    });
  }

  function DeleteRow(rowId) {
    axios.delete(url + rowId.id, config)
      .then(response => {
        setProducts(arrayRemove(products, response))
      });
  }

  return (
    <div>
      <Navbar />
      <div className='product-datatable-container'>
        <DatatableHeadContainer text='Create Product' title='Product Datatable' navigate={'/create-product'} />
        <div className='product-datatable'>
          <Datatable
            columns={columns}
            data={products}
            pagination />
        </div>
        <button className='product-dataTable-return-button' onClick={() => navigate('/')}>Return</button>
      </div>
    </div>
  )
}