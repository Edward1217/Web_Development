import { useState } from 'react'
const Button =({text,onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Paragraf =  ({ text, votes }) => (
    <div>
        <p>{text}</p>
        <p>has {votes} votes</p>
    </div>
)
const MostVotedJoke = ({jokes, points}) => {
    const maxVotes = Math.max(...points)
    const maxVotedIndex = points.indexOf(maxVotes)
    if (maxVotes === 0) {
        return (
            <div>
                <p>no votes yet</p>
            </div>
        )

    }
    return (
        <Paragraf text={jokes[maxVotedIndex]} votes={maxVotes}/>
    )
}


function App() {


    const jokes = [
        'How many programmers does it take to change a light bulb? None - That is a hardware problem',
        'All programmers are playwrights, and all computers are lousy actors.',
        'The generation of random numbers is too important to be left to chance.',
        'I just saw my life flash before my eyes and all I could see was a close tag',
        'The computer is mightier than the pen, the sword, and usually, the programmer.',
        'A programmer had a problem. He thought to himself, "I know, I’ll solve it with threads!" has Now problems. two he',
        '!false is funny because it is true'
  ]
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(Array(jokes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)
  const handleNextJoke =() => {
            if (selected < 4) {
                setSelected(selected + 1);
            } else {
                setSelected(0)
            }
  }
  const handleVoteJoke =() => {
      const copy = [...points]
      copy[selected] = copy[selected] + 1
      setPoints(copy)
  }
  const handleMax =() => {
      let index = maxIndex
      index = points.indexOf(Math.max(...points))
      setMaxIndex(index)
  }
  return (
      <>
          <h1>Joke of the day</h1>
          {jokes[selected]}

          <div>
              <Button text='vote' onClick={()=>{handleVoteJoke(); handleMax();}}/>
              <Button text='next joke' onClick={handleNextJoke}/>
          </div>
          <h1>Joke with most votes</h1>
          <MostVotedJoke jokes={jokes} points={points}/>

      </>


  )
}

export default App
