import React from 'react'
import {Link} from '@reach/router'

const List = ({listState, deleteHandler}) =>{
    return(
        <div>
            {listState.map((item, i) => (
                <div key={i}>
                    <p>
                        <Link to={"/" + item._id}>
                            Detail: {item.title}
                        </Link>
                    </p>
                    <p>
                        <Link to={"/" + item._id + "/edit"}>
                            Update: {item.title}
                        </Link>
                    </p>
                    <p>
                        <button onClick={()=> deleteHandler(item._id)}>Delete</button>
                    </p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}
export default List;