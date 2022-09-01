import React from 'react'

export default function Total({parts}) {


    const sum = parts.reduce((accumulator, object) => {
        return accumulator + object.exercises;
      }, 0);

  return (
    <p>Number of excercises {sum}</p>
  )
}
