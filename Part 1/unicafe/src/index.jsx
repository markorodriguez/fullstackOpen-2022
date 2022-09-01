import React, { useState } from 'react'
import ReactDOM from "react-dom"

const Statistic = ({text, value}) => 
  <>
    {text}
    {value}
  </>

const Statistics = ({good, neutral, bad}) => {

  const totalScore = good + neutral + bad
  const averageScore = (good - bad) / totalScore
  const positiveScore = ((good / totalScore) * 100) + "%"

 
  return (
    <div>
      {
        totalScore !== 0 ? <table border={1}>
        <tbody>
          <tr>
            <td><Statistic text="good" /></td>
            <td><Statistic value={good} /></td>
          </tr>
          <tr>
            <td><Statistic text="neutral" /></td>
            <td><Statistic value={neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text="bad" /></td>
            <td><Statistic value={bad} /></td>
          </tr>
          <tr>
            <td><Statistic text="total" /></td>
            <td><Statistic value={totalScore} /></td>
          </tr>
          <tr>
            <td><Statistic text="average" /></td>
            <td><Statistic value={averageScore} /></td>
          </tr>
          <tr>
            <td><Statistic text="positive" /></td>
            <td><Statistic value={positiveScore}/></td>
          </tr>
        </tbody>
      </table> : <h2>No feedback given</h2>
      }
    </div>
  )
}

const Button = ({click, text}) => (
  <button onClick={click}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button click={() => setGood(good + 1)} text="good" />
      <Button click={() => setNeutral(neutral + 1)} text="neutral" />
      <Button click={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)