
const gameS = {
    turn: true,
    xTurn: [],
    yTurn: [],
    combination:
    [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

var game = document.getElementById('game')
game.addEventListener('click', function(event)
{
    const isDisable = event.target.classList.contains('disbale')
    const cValue = event.target.dataset.value
    console.log(cValue)
    if(!isDisable)
    {
        gameS.turn === true? gameS.xTurn.push(cValue): gameS.yTurn.push(cValue)

        event.target.classList.add('disable')
        event.target.classList.add(gameS.turn? 'x': 'o')   
        gameS.turn = !gameS.turn

        checkWin()
    }
}
)

function checkWin()
{
    gameS.combination.forEach(winningState => {
        //console.log(winningState)
       const xWins = winningState.every(state => gameS.xTurn.includes(state))
       const oWins = winningState.every(state => gameS.yTurn.includes(state))
    
    let Wstate = document.createElement('h1')
    let game = document.getElementById('game')
    if (xWins || oWins)
    {
       // let Wstate = document.createElement('h1')
        //let game = document.getElementById('game')
       if(xWins)
       {
           Wstate.innerHTML = "User X Wins"
           document.getElementById('state').appendChild(Wstate)
       }
       else
       {
        Wstate.innerHTML = "User 0 Wins"
        document.getElementById('state').appendChild(Wstate)
       }
       game.style.pointerEvents = 'none'
    }
})
}