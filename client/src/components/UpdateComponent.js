import React, {useEffect, useState} from 'react'
import {navigate} from "@reach/router"
import axios from 'axios'


const UpdateComponent = ({id}) =>{

    const [detailState, setDetailState] = useState({

    })
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const changeHandler = e => {
        setDetailState({
            ...detailState,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:8000/api/product/"+id, detailState)
            .then(res => {
                console.log("NEW OBJECT CAME BACK: ",res)
                navigate("/" + res.data._id)
            })
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrors(errorArr)
            })
    }

    return(
        <div>
            <h1>Update Comp</h1>
            <h1>Product Manager</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        Title:
                        <input type="text" name="title" value={detailState.title} onChange={changeHandler} />
                    </p>
                    <p>
                        Price:
                        <input type="number" name="price" value={detailState.price} onChange={changeHandler} />
                    </p>
                    <p>
                        Description:
                        <input type="text" name="description" value={detailState.description} onChange={changeHandler} />
                    </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        </div>
    )
}
export default UpdateComponent;