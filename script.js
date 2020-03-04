var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame () {
  $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')

  renderBox()
}

function renderBox () {
  var box = document.createElement ('div')

  box.style.height = box.style.width = '50px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'

  $game.insertAdjacentElement()
}