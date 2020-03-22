import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Form from './Form'
import List from './List'
import { navigate } from '@reach/router'

const AppComponent = () =>{

    const [formState, setFormState] = useState({
        title:'',
        price:0,
        description:''
    })
    const [listState, setListState] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const changeForm = e => {
        console.log("EVENT NAME: ", e.target.name)
        console.log("EVENT VAL: ", e.target.value)
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    // CREATE FUNCTIONALITY
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/products",formState )
            .then(res => console.log(res))
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrors(errorArr)
            })
    }

    const removeFromDom = (prodId) =>{
        setListState(
            listState.filter(item => item._id != prodId)
        )
    }


    const deleteHandler = (prodId) =>{
        axios.delete("http://localhost:8000/api/product/"+prodId)
            .then(res => {
                removeFromDom(prodId)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Form changeForm={changeForm} handleSubmit={handleSubmit} formState={formState} errors={errors} />
            <List listState={listState} deleteHandler={deleteHandler} />
        </div>
    )
}
export default AppComponent;