import React from 'react'
import './styles/Button.css'
import {Link} from 'react-router-dom'

export default function Button(props) {
    return (
        <Link to="/exercise/new">
            <img src={props.img} className="Fitness-Add" alt=""/>
        </Link>
    )
}
