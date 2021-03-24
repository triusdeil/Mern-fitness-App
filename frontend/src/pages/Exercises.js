import React, { Component } from 'react'
import ExercisesList from '../component/ExerciseList'
import Welcome from '../component/Welcome'
import Button from '../component/Button'
export default class exercises extends Component {
        state={
                data:[],
                loading: true,
                erro:null
            }
            
        async componentDidMount(){
            await this.fetchExercises()
        }

        fetchExercises = async () =>{
            
                let res = await fetch('http://localhost:4000/api/exercises')
                let data = await res.json()

            this.setState({
                data
            })
        }

    render() {
        return (
            <React.Fragment>
                <Welcome
                    username="triusdeil"
                />

                <ExercisesList
                exercises= {this.state.data}
                />

                <Button
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
                />
            </React.Fragment>
        )
    }
}
