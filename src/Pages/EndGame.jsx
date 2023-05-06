import React from 'react'

const EndGame = ({palabrasPorMinuto, caracteresPorMinuto}) => {
  return (
    <section style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{backgroundColor:"#222222", width:"35vw", height:"25vh", borderRadius:"20px", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column", position:"relative", bottom:"10vw"}}>
       <div style={{fontSize:"1.5vw", fontWeight:"500", backgroundColor:"white", width:"90%", borderRadius:"15px", height:"38%", display:"flex", alignItems:"center", justifyContent:"space-around"}}> <div>YOUR WORD TYPING SPEED IS:</div> <div style={{color:"#DC5353", fontWeight:"500"}}>{palabrasPorMinuto} WPM</div></div>
       <div style={{fontSize:"1.5vw", fontWeight:"500", backgroundColor:"white", width:"90%", borderRadius:"15px", height:"38%",  display:"flex", alignItems:"center", justifyContent:"space-around"}}><div>YOUR CHARACTER TYPING SPEED IS:</div>  <div style={{color:"#76E7CC", fontWeight:"500"}}>{caracteresPorMinuto} CPM</div></div>
      </div>
        <div onClick={() => window.location.reload()} style={{backgroundColor:"#222222", color:"white", fontSize:"2vw", width:"15vw", display:"flex", height:"5vw", alignItems:"center", justifyContent:"center", borderRadius:"10px", cursor:"pointer"}}>Try again</div>
    </section>
  )
}

export default EndGame
