import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Form from './Form'
import List from './List'

const AppComponent = () =>{

    const [formState, setFormState] = useState({
        title:'',
        price:0,
        description:''
    })
    const [listState, setListState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const changeForm = e => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/products",formState )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Form changeForm={changeForm} handleSubmit={handleSubmit} formState={formState} />
            <List listState={listState} />
        </div>
    )
}
export default AppComponent;