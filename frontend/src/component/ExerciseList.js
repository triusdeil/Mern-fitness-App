import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
            <div className="">
                 {exercises.map((exercises) => (
                     <Card
                        key={exercises._id}
                        title={exercises.title}
                        description={exercises.description}
                        img={exercises.img}
                        leftColor={exercises.leftColor}
                        rightColor={exercises.rightColor}
                     />
                 ))}
            </div>
)

export default ExerciseList