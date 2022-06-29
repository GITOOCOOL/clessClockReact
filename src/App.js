import { useState } from "react"
import Button from "./Button" 
import Dashboard from "./Dashboard"

const App = () => {
  const [timer1, setTimer1] = useState(10)
  const [timer2, setTimer2] = useState(10)
  const [whoseTurn, setWhoseTurn] = useState(0)
  const [turnStatusTable, setTurnStatusTable] = useState(
    {
      player1: 'rest',
      player2: 'rest'
    }
  )


  setTimeout(()=>{
    if(whoseTurn === 1){
      if(timer1 > 0){
        setTimer1(timer1 - 1)
        return
      }
      setTurnStatusTable({player1:'freeze', player2:'win'})
    }
    
    else if(whoseTurn === 2){
      if(timer2 > 0){
        setTimer2(timer2-1)
        return
      }
      setTurnStatusTable({player1:'win', player2:'freeze'})
    }
    else if(whoseTurn === 0) {
      return
    }
    else return
    
  },1000)


  const handleClick1 = () => {
    if(turnStatusTable.player2==='freeze' || turnStatusTable.player1==='freeze') return
    setWhoseTurn(2)
    setTurnStatusTable({player1:'rest',player2:'active'})
  }

  const handleClick2 = () => {
    if(turnStatusTable.player2==='freeze' || turnStatusTable.player1==='freeze') return
    setWhoseTurn(1)
    setTurnStatusTable({player1:'active',player2:'rest'})

  }

  const resetHandle = () => {
    setTurnStatusTable({player1:'rest',player1:'rest'})
    setTimer1(10)
    setTimer2(10)
    setWhoseTurn(0)
  } 
  const settingsHandle = () => {
    console.log('settings clicked')
  }
  return (
    <div className="container">
      {/* <Settings /> */}
      <Button timer={timer1} handleClick={handleClick1} turn = {turnStatusTable.player1}/>
      <Dashboard settingsHandle={settingsHandle} resetHandle={resetHandle}/>
      <Button timer={timer2} handleClick={handleClick2} turn={turnStatusTable.player2}/>
    </div>
  )
}

export default App