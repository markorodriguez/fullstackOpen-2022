import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [highestValue, setHighestValue] = useState(0);
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const copyScores = scoresArray;
  const mostVotedIndex = copyScores.indexOf(Math.max(...copyScores));

  useEffect(() => {
    console.log(copyScores);
  }, [copyScores]);

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p> {props.anecdotes[selected]}</p>

      <button
        onClick={() => {
          copyScores[selected] = copyScores[selected] + 1;
          console.log(Math.max(...copyScores));
          setHighestValue(Math.max(...copyScores));
        }}
      >
        vote
      </button>

      <button
        onClick={() => {
          setSelected(random(0, anecdotes.length - 1));
        }}
      >
        Next anecdote
      </button>

      <h1>Anecdote with most votes</h1>

      {highestValue !== 0 ? (
        <div>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>Votes: {copyScores[mostVotedIndex]} </p>
        </div>
      ) : (
        <p>You haven't voted yet</p>
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const scoresArray = new Uint8Array(anecdotes.length);

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
