import React from 'react'
import Part from './Part'

export default function Content({parts}) {
  return (
    <div>
        {parts.map((part, index)=>{
         return  <Part key={index} part={part.name} exercises={part.exercises} />
        })}
    </div>
  )
}
