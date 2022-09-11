import React from 'react'
import './categoryDatatable.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/NavBar'
import SecondaryButton from '../../../components/buttons/secondaryButton/SecondaryButton';
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import DatatableHeadContainer from '../../../containers/datatableHeadContainer/DatatableHeadContainer';

import Datatable from 'react-data-table-component';

const url = 'http://localhost:3001/api/v1/categories/';
const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };

const axios = require('axios');

export default function CategoryDataTable() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
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
      name: "Action",
      cell: (row) =>
        <div className='prueba'>
          <div className='prueba1'>
            <PrimaryButton text='Edit' onClick={() => navigate('/EditCategory/' + row.id)} />
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
        setCategories(response.data)
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
        setCategories(arrayRemove(categories, response))
      });
  }
  return (
    <div>
      <Navbar />
      <div className='category-datatable-container'>
        <DatatableHeadContainer text='Create Category' title='Category Datatable' navigate={'/create-category'} />
        <div className='category-datatable'>
          <Datatable
            columns={columns}
            data={categories}
            pagination />
        </div>
        <button className='category-dataTable-return-button' onClick={() => navigate('/')}>Return</button>
      </div>
    </div>
  )
}