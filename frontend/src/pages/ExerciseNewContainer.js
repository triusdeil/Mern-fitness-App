import React, { Component } from 'react'
import ExerciseForm from '../component/ExerciseForm'
import Card from '../component/Card'
import '../component/styles/ExerciseNew.css'
export default class ExerciseNew extends Component {
    
    state={
        form:{
            title : '',
            description: '',
            leftColor:'',
            rightColor:'',
            img:''
        },
        loading:false,
        error:null
    }

     //Events
    //Almacenar informacion en el estado
    //Escuchar y escribir en el form
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    //post
    handleSubmit = async e =>{
        this.setState({
            loading:true
        })
        e.preventDefault()
        try {
            let config = {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:4000/api/exercises', config)
            let json = res.json()

           this.setState({
               loading:false
           })

           this.props.history.push('/exercise')
        } catch (error) {
            this.setState({loading:false,
            error})
        }
    }


    render() {
        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExerciseForm 
                        onChange={this.handleChange}
                        form = {this.state.form}
                        onSubmit = {this.handleSubmit}
                    />
                </div>
            </div>
            
        )
    }
}
