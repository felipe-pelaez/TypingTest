import { useEffect, useRef, useState } from 'react'
import './App.css'
import letter from "./assets/letter.svg"
import arrow from "./assets/arrow.svg"
import moon from "./assets/moon.svg"
import clock from "./assets/time.svg"
import useLenguage from './hooks/useLenguage'
import EndGame from './Pages/EndGame'
import arrow2 from "./assets/arrow2.svg"


function App() {
  const [Lenguage, setLenguage] = useState("english")
  const { text, call} = useLenguage()
  const [time, setTime] = useState(60)
  const [time2, setTime2] = useState(60)
  const [lenguageState, setLenguageState] = useState(false)
  const [timeState, setTimeState] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [correct, setCorrect] = useState(0)
  const [correctCaracter, setCorrectCaracter] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [startTime, setStartTime] = useState(performance.now())
  const [palabrasPorMinuto, setPalabrasPorMinuto] = useState(0)
  const [caracteresPorMinuto, setCaracteresPorMinuto] = useState(0)
  const [Difficulty, setDifficulty] = useState("easy")
  const [showDifficulty, setShowDifficulty] = useState(false)
  const [letterIndex, setLetterIndex] = useState(0)
  const [color, setColor] = useState("")
  const [inputLength, setInputLength] = useState(0)
  const [position, setPosition] = useState(0)
  const inputRef = useRef(null);




  useEffect(() => {

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer); 
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });

    }, 1000);

    if(time > 0)
    {
      inputRef.current.focus();
    }
  
    return () => clearInterval(timer); 
  }, [Lenguage, time]);

  useEffect(()=>{
    call(Lenguage, Difficulty);
  }, [Lenguage, Difficulty])

  useEffect(() => {
    setTime(time2);
    setWordIndex(0)
    setLetterIndex(0)
    setPalabrasPorMinuto(0)
    setCaracteresPorMinuto(0)
    setCorrect(0)
    setCorrectCaracter(0)


    if(time > 0)
    {
      inputRef.current.focus();
    }
  }, [Lenguage, Difficulty]);
  
  function rotar(param) {
    const flecha = document.querySelector('#' + param);
    if (flecha.classList.contains('rotate')) {
      flecha.classList.remove('rotate');
      flecha.classList.add('animacion');
    } else {
      flecha.classList.remove('animacion');
      flecha.classList.add('rotate');
    }
  }

 function changeLenguage()
 {
  setLenguageState(!lenguageState)
  rotar("flechaLenguage")
 }

 function changeTime()
 {
   setTimeState(!timeState)
   rotar("flechaTime")
 }

 useEffect(()=>{
    setStartTime(time2 - time)
    const wpm = (Math.round((60 * correct) / startTime))
    setPalabrasPorMinuto(isNaN(wpm) ? 0 : wpm );
    if (palabrasPorMinuto > 0 && palabrasPorMinuto % 10 === 0) {
      setPalabrasPorMinuto(palabrasPorMinuto + 6);
    }

    const Cpm = (Math.round((60 * correctCaracter) / startTime))
    setCaracteresPorMinuto(isNaN(Cpm) ? 0 : Cpm);
  }, [time])

 
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const newArray = text.split(" ");
    const newArray2 = text.split("");
    let index;

    
    if(newValue.length <= newArray[wordIndex].length)
    {
      setInputValue(newValue);
    }
    
    if (letterIndex > 0 && newArray2[letterIndex - 1] === " " && newArray2[letterIndex] !== newValue[0] && newValue.length <= newArray[wordIndex].length && newValue.length <= newArray[wordIndex].length ) {
      index = letterIndex + 1
      setLetterIndex(letterIndex + 1);
    }
  
    if (newValue.length > inputLength && newArray2[letterIndex + 1] !== " " &&  newValue.length <= newArray[wordIndex].length  ) {
      index = letterIndex + 1
      setLetterIndex(letterIndex + 1);  
    }
    
    if (newValue.length < inputLength) {
      index = letterIndex - 1
      setLetterIndex(letterIndex - 1);
      console.log(letterIndex + " " + newValue.length)
    }
  
    if (newArray2[letterIndex + 1] === " " && newValue.length > inputLength &&  newValue.length <= newArray[wordIndex].length ) {
      index = letterIndex + 1
      setLetterIndex(letterIndex + 1);  
    }

    console.log(newArray2[index - 1] + "d " + newValue[newValue.length - 1] + " d")

    if (newArray2[index - 1] == newValue[newValue.length - 1] || newArray2[index - 1] == undefined && newValue[newValue.length - 1] == " ") {
      setColor("#0cf70c");
    }
    else if (newArray2[index - 1] != newValue[newValue.length - 1] ) {
      setColor("#fa4141");
    }
  
    if (newArray[wordIndex] + " " === newValue) {
      setInputValue("");
      setCorrect(correct + 1);
      setCorrectCaracter(correctCaracter + newArray[wordIndex].length);
      setWordIndex(wordIndex + 1);
      setInputLength(0);
      setLetterIndex(letterIndex + 1)
      setPosition(position + newArray[wordIndex].length + 1)
    } 
    else {
      setInputLength(newValue.length);
    }
  };

  

function changeTheme() {
  const texts = document.querySelectorAll(".text");
  const inputs = document.querySelectorAll("input");
  const speeds = document.querySelectorAll(".speed");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");

  texts.forEach(text => text.classList.toggle("dark"));
  inputs.forEach(input => input.classList.toggle("dark"));
  nav.classList.toggle("dark");
  speeds.forEach(speed => speed.classList.toggle("dark"));
  body.classList.toggle("dark");
}

  function changeDifficulty()
  {
    rotar("flechaDifficulty")
    setShowDifficulty(!showDifficulty)
  }




  return (
    <>
      {time == 0 ? <EndGame palabrasPorMinuto={palabrasPorMinuto} caracteresPorMinuto={caracteresPorMinuto}/> : 
      <div>
           <div className='nav' style={{backgroundColor:"#FFFFFF", color:"#6D6C6C", width:"50vw", borderRadius:"10px", height:"5vw", position:"absolute", top:"1vw", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <div style={{fontSize:"1.3vw"}} onClick={() => changeLenguage()}><img style={{width:"2.5vw"}} src={letter}/> Lenguage <img id='flechaLenguage' style={{width:"1.2vw"}} src={arrow} alt="" /></div>
      {lenguageState && 
      <>
        <div className='leng' style={{position:"absolute", top:"5.5vw",left :"0.5vw" ,zIndex:"3", width:"15vw", display:"flex", flexDirection:"column", height:"32vw", backgroundColor:"#524F4F", fontSize:"1.5vw"}}>
        <div onClick={() => { setLenguage("spanish"); setLenguageState(false) }}>Spanish</div>
          <div onClick={() => { setLenguage("english"); setLenguageState(false) }}>English</div>
          <div onClick={() => { setLenguage("german"); setLenguageState(false) }}>German</div>
          <div onClick={() => { setLenguage("french"); setLenguageState(false) }}>French</div>
          <div onClick={() => { setLenguage("italian"); setLenguageState(false) }}>Italian</div>
          <div onClick={() => { setLenguage("portuguese"); setLenguageState(false) }}>Portuguese</div>
        </div>
      </>
      }
      <div style={{fontSize:"1.3vw"}} onClick={() => changeTheme()}><img style={{width:"2vw"}} src={moon}/> Change theme</div>
      <div style={{fontSize:"1.3vw"}} onClick={() => changeTime()}><img style={{width:"2.5vw"}} src={clock}/>{time2} Seconds <img id='flechaTime' style={{width:"1.2vw"}} src={arrow} alt="" /></div>
      {timeState && 
      <>
        <div className='time' style={{position:"absolute", top:"5.5vw",left :"34vw" ,zIndex:"3", width:"15vw", display:"flex", flexDirection:"column", height:"20vw", backgroundColor:"#524F4F", fontSize:"1.5vw"}}>
        <div onClick={() => { setTime(15); setTimeState(false) ; setTime2(15) }}>15 Seconds</div>
          <div onClick={() => { setTime(30); setTimeState(false) ; setTime2(30)}}>30 Seconds</div>
          <div onClick={() => { setTime(60); setTimeState(false) ; setTime2(60) }}>60 Seconds</div>
          <div onClick={() => { setTime(90); setTimeState(false) ; setTime2(90)}}>90 Seconds</div>
        </div>
      </>
      }
     </div>
     <div style={{backgroundColor:"#222222", color:"#E5E5E5", width:"12vw", height:"4vw", position:"absolute", top:"6.5vw", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-around", fontSize:"1.3vw"}}><div style={{color:"#DC5353", fontSize:"2vw"}}>{time}</div> Seconds left</div>
     <div style={{backgroundColor:"#222222", color:"#E5E5E5", width:"35vw", height:"4vw", position:"absolute", top:"6.5vw", left:"40vw" ,borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-around", fontSize:"1.3vw"}}>Did you know that the average typing speed is <div style={{fontSize:"1.5vw", color:"#76E7CC"}}>35 WPM ?</div></div>
     <div className='text' style={{backgroundColor:"#F9FCFF", height:"30vw", width:"50vw", borderRadius:"5px", fontSize:"1.3vw", position:"relative", top:"3vw"}}>
      <div style={{width:"70%", position:"relative", top:"0.4vw", left:"1.5vw"}}>
      {text.split('').map((char, index) => (
  <span
    key={index}
    style={{
      backgroundColor: letterIndex - 1 === index ? color : null,
      color: index < position ? 'transparent' : 'inherit',
    }}
  >
    {char}
  </span>
))}

      <div style={{position:"absolute", width:"8vw", left:"66vw", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"4.5vw", bottom:"19vw", left:"39.7vw"}}>
        <div style={{position:"relative", left:"1vw"}}>Word Speed</div>
        <div className='speed' style={{backgroundColor:"#222222", borderRadius:"5px", height:"2.5vw", color:"#E5E5E5", display:"flex", alignItems:"center", justifyContent:"space-around"}}>{palabrasPorMinuto}WPM</div>
      </div>
      <div style={{position:"absolute", width:"8vw", left:"66vw", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"4.5vw", bottom:"2vw", left: "39.7vw"}}>
        <div style={{position:"relative", left:"-1.8vw", width:"10vw"}}>Character Speed</div>
        <div className='speed' style={{backgroundColor:"#222222", borderRadius:"5px", height:"2.5vw", color:"#E5E5E5", display:"flex", alignItems:"center", justifyContent:"space-around" }}>{caracteresPorMinuto}CPM</div>
      </div>
      <div style={{position:"absolute", width:"8vw", left:"66vw", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"4.5vw", bottom:"10vw", left:"39.7vw"}}>
      <div style={{position:"relative", left:"4.8vw", width:"10vw"}}>Level</div>
        <div onClick={() => changeDifficulty()}  className='speed' style={{backgroundColor:"#222222", borderRadius:"5px", height:"2.5vw", color:"#E5E5E5", display:"flex", alignItems:"center", justifyContent:"space-around", cursor:"pointer" }}>{Difficulty} <img id='flechaDifficulty' style={{width:"1.5vw"}} src={arrow2} alt="" /> </div>
      </div>
      </div>
      {showDifficulty && 
        <div style={{zIndex:"3", width:"15vw", display:"flex", flexDirection:"column", height:"15vw", backgroundColor:"#524F4F", position: "absolute", bottom: "-3vw", left:"36vw", borderRadius: "10px", justifyContent:"space-around", alignItems:"center"}}>
          <div style={{zIndex: "4", backgroundColor:"#f4f4f4", height:"3vw", width:"80%", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"black"}} onClick={() => { setDifficulty("easy"); setShowDifficulty(!showDifficulty)}}>Easy</div>
          <div style={{zIndex: "4", backgroundColor:"#f4f4f4", height:"3vw", width:"80%", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"black"}} onClick={() => { setDifficulty("medium"); setShowDifficulty(!showDifficulty)}}>Medium</div>
          <div style={{zIndex: "4", backgroundColor:"#f4f4f4", height:"3vw", width:"80%", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"black"}} onClick={() => { setDifficulty("hard"); setShowDifficulty(!showDifficulty)}}>Hard</div>
        </div>
      }
      <input ref={inputRef} value={inputValue} onChange={handleInputChange} type="text" placeholder='type...' style={{position:"absolute", top:"30.5vw", height:"3vw", border:"none", borderRadius:"10px", width:"50vw", fontFamily:"karla", fontSize:"1.5vw"}} />
      </div>
      </div>
      }
    </>
  )
}

export default App
