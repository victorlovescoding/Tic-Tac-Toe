const rule = document.getElementById('rule')
const startBtn = document.getElementById('startBtn')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
const e = document.getElementById('e')
const f = document.getElementById('f')
const g = document.getElementById('g')
const h = document.getElementById('h')
const i = document.getElementById('i')
const lineA = document.getElementById('lineA')
const lineB = document.getElementById('lineB')
const lineC = document.getElementById('lineC')
const lineD = document.getElementById('lineD')
const lineE = document.getElementById('lineE')
const lineF = document.getElementById('lineF')
const lineG = document.getElementById('lineG')
const lineH = document.getElementById('lineH')
const whoTurn = document.getElementById('whoTurn')


const endGameAlert = document.getElementById('endGameAlert')
const againBtn = document.getElementById('againBtn')
const winner = document.getElementById('winner')

const TicTacToe = document.getElementById('TicTacToe')
const winnerContainer = document.getElementById('winnerContainer')

const box = document.querySelectorAll('.box')
let num = 0
startBtn.addEventListener('click',()=>{
    rule.style.display="none"
    
})

TicTacToe.addEventListener('mousedown',(e)=>{  
    
    addSignToBoard(e)
    if(TicTacToe.className="fa-solid fa-o"){ //避免TicTacToe新增O造成跑版
        TicTacToe.className=""
    }
     checkOWin()
     checkXWin()
     
     
     checkEven(num)
     num++
     restart(num)
      
 })

function addSignToBoard(e){
    if(num%2 == 0 && e.target.className===""){  
        whoTurn.innerHTML="輪到 X"   
        e.target.className="fa-solid fa-o"       
    }else if(num%2 !== 0 && e.target.className===""){
        whoTurn.innerHTML="輪到 O"   
        e.target.className="fa-solid fa-x"    
    }
}


function checkOWin(){
    if(a.className==="fa-solid fa-o" && b.className==="fa-solid fa-o" && c.className==="fa-solid fa-o"){ //check O
        lineA.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
        
    }else if(d.className==="fa-solid fa-o" && e.className==="fa-solid fa-o" && f.className==="fa-solid fa-o"){
        lineB.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(g.className==="fa-solid fa-o" && h.className==="fa-solid fa-o" && i.className==="fa-solid fa-o"){
        lineC.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(a.className==="fa-solid fa-o" && d.className==="fa-solid fa-o" && g.className==="fa-solid fa-o"){ //直的
        lineD.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(b.className==="fa-solid fa-o" && e.className==="fa-solid fa-o" && h.className==="fa-solid fa-o"){ 
        lineE.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(c.className==="fa-solid fa-o" && f.className==="fa-solid fa-o" && i.className==="fa-solid fa-o"){ 
        lineF.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(a.className==="fa-solid fa-o" && e.className==="fa-solid fa-o" && i.className==="fa-solid fa-o"){ //斜的
        lineH.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }else if(c.className==="fa-solid fa-o" && e.className==="fa-solid fa-o" && g.className==="fa-solid fa-o"){ //斜的
        lineG.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="O Win!"
        num = 0
    }
}

function checkXWin(){
    if(a.className==="fa-solid fa-x" && b.className==="fa-solid fa-x" && c.className==="fa-solid fa-x"){ //check O
        lineA.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
        
        
        
    }else if(d.className==="fa-solid fa-x" && e.className==="fa-solid fa-x" && f.className==="fa-solid fa-x"){
        lineB.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(g.className==="fa-solid fa-x" && h.className==="fa-solid fa-x" && i.className==="fa-solid fa-x"){
        lineC.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(a.className==="fa-solid fa-x" && d.className==="fa-solid fa-x" && g.className==="fa-solid fa-x"){ //直的
        lineD.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(b.className==="fa-solid fa-x" && e.className==="fa-solid fa-x" && h.className==="fa-solid fa-x"){ 
        lineE.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(c.className==="fa-solid fa-x" && f.className==="fa-solid fa-x" && i.className==="fa-solid fa-x"){ 
        lineF.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(a.className==="fa-solid fa-x" && e.className==="fa-solid fa-x" && i.className==="fa-solid fa-x"){ //斜的
        lineH.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }else if(c.className==="fa-solid fa-x" && e.className==="fa-solid fa-x" && g.className==="fa-solid fa-x"){ //斜的
        lineG.style.display="block"
        endGameAlert.style.display="block"
        winner.textContent="X Win!"
        num = 0
    }
    

}


function checkEven(num){
    if(a.className!="" && b.className!="" && c.className!="" && d.className!=""  && e.className!="" && f.className!="" && g.className!="" && h.className!="" && i.className!="" &&`${endGameAlert.style.display="none"}`){
        
        endGameAlert.style.display="block"
        winner.textContent="平手!"
        num = 0  
    }

}

// function alertWinner(winner){
//     const div =document.createElement('div')
    
//     div.id = "winnerContainer"
//     div.innerHTML = `
//     <h2 id="winner">${winner} <span>Win!</span></h2>
//     <div id="btnContainer">
//         <button id="okBtn">OK</button>
//         <button id="againBtn">Again</button>
//     </div>
//     `
//     endGameAlert.appendChild(div)
    
// }
//e.target.innerHTML===0 || e.target.innerHTML===X

function restart(){
    
    againBtn.addEventListener('click',(num)=>{
        endGameAlert.style.display="none"
        a.className=""
        b.className=""
        c.className=""
        d.className=""
        e.className=""
        f.className=""
        g.className=""
        h.className=""
        i.className=""
        
        lineA.style.display="none"
        lineB.style.display="none"
        lineC.style.display="none"
        lineD.style.display="none"
        lineE.style.display="none"
        lineF.style.display="none"
        lineG.style.display="none"
        lineH.style.display="none"
    })
}