var grid = document.getElementById("grid")
var squares = new Array()
for (var i=0;i<16;i++){
  var squareID = "square"+i
  var square = document.getElementById(squareID)
  squares.push(square)
}
// console.log(squares)


window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft" || event.key=="a"){
    moveLeft()
  }
  if (event.key == "ArrowRight" || event.key=="d"){
    moveRight()
  }
  if (event.key == "ArrowDown" || event.key=="s"){
    moveDown()
  }
  if (event.key == "ArrowUp" || event.key=="w"){
    moveUp()
  }
});

function randomNum(min, max) { // does not include the maximum value
	return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomNumber(){
  randomNumber = randomNum(0,10)
  if (randomNumber == 9){
    numberToCreate = 4
  }else{
    numberToCreate = 2
  }
  var avaliableSpaces = new Array()
  for (var i=0;i<squares.length;i++){
    square = squares[i]
    if (square.innerHTML == ""){
      avaliableSpaces.push(square)
    }
  }
  randomNumber = randomNum(0,avaliableSpaces.length)
  newTileSquare = avaliableSpaces[randomNumber]
  newTile = document.createElement("div")
  newTile.classList.add("tile")
  newTile.innerHTML = numberToCreate
  addClass(newTile,numberToCreate)
  newTileSquare.appendChild(newTile)
}

function addClass(tile,newTileNumber){  //also removes the old class
  classes = ["two","four","eight","sixteen","thirtyTwo","sixtyFour","hundredTwentyEight","twoHundredFiftySix","fiveHundredTwelve","thousandTwentyFour","twentyFourtyEight"]
  tile.classList.remove(classes[Math.log2(newTileNumber/2)-1])
  tile.classList.add(classes[Math.log2(newTileNumber)-1])
}

function getTileNumberFromTile(tile){
  start = false
  innerHTML = ""
  for (var i=0;i<tile.length;i++){
    if (start == true){
      if (tile.substring(i,i+1) == "<"){
        start = false
        return innerHTML
      }else{
        innerHTML = innerHTML + tile.substring(i,i+1)
      }

    }else{

      if (tile.substring(i,i+1) == ">"){
        start = true
      }
    }
  }
}


function moveUp(){
  moveMade = false
  for (var j=0;j<3;j++){
    for (var i=0;i<4;i++){
      squareNumber = i+(j+1)*4
      square = squares[squareNumber]
      if (square.innerHTML==""){
      }else{ //so there is a square
        for (var k=1;k<j+2;k++){
          if (squares[squareNumber-k*4].innerHTML == ""){
            tile = square.innerHTML
            square.innerHTML = ""
            squares[squareNumber-k*4].innerHTML = tile
            square = squares[squareNumber-k*4]  //this is so the next square is checked using this one
            moveMade = true
          }else{
            if (squares[squareNumber-k*4].innerHTML == square.innerHTML){  //so the tile numbers are the same
              tile = square.innerHTML
              tileNumber = getTileNumberFromTile(tile)
              newTileNumber = tileNumber * 2
              newTile = document.createElement("div")
              newTile.classList.add("tile")
              newTile.innerHTML = newTileNumber
              addClass(newTile,newTileNumber)
              squares[squareNumber-k*4].innerHTML = ""
              square.innerHTML = ""
              squares[squareNumber-k*4].appendChild(newTile)
              moveMade = true
            }else{
              break
              //don't move
            }
          }
        }
      }
    }
  }
  if (moveMade == true){
    createRandomNumber()
  }
}
function moveDown(){
  moveMade = false
  for (var j=2;j>-1;j--){
    for (var i=0;i<4;i++){
      squareNumber = i+j*4
      square = squares[squareNumber]
      if (square.innerHTML==""){
      }else{ //so there is a square
        for (var k=1;k<(4-j);k++){
          if (squares[squareNumber+k*4].innerHTML == ""){
            tile = square.innerHTML
            square.innerHTML = ""
            squares[squareNumber+k*4].innerHTML = tile
            square = squares[squareNumber+k*4]  //this is so the next square is checked using this one
            moveMade = true
          }else{
            if (squares[squareNumber+k*4].innerHTML == square.innerHTML){  //so the tile numbers are the same
              tile = square.innerHTML
              tileNumber = getTileNumberFromTile(tile)
              newTileNumber = tileNumber * 2
              newTile = document.createElement("div")
              newTile.classList.add("tile")
              newTile.innerHTML = newTileNumber
              addClass(newTile,newTileNumber)
              squares[squareNumber+k*4].innerHTML = ""
              square.innerHTML = ""
              squares[squareNumber+k*4].appendChild(newTile)
              moveMade = true
            }else{
              break
              //don't move
            }
          }
        }
      }
    }
  }
  if (moveMade == true){
    createRandomNumber()
  }
}
function moveLeft(){
  moveMade = false
  for (var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      squareNumber = i+1+j*4
      square = squares[squareNumber]
      if (square.innerHTML==""){
      }else{ //so there is a square
        for (var k=1;k<i+2;k++){
          if (squares[squareNumber-k].innerHTML == ""){
            tile = square.innerHTML
            square.innerHTML = ""
            squares[squareNumber-k].innerHTML = tile
            square = squares[squareNumber-k]  //this is so the next square is checked using this one
            moveMade = true
          }else{
            if (squares[squareNumber-k].innerHTML == square.innerHTML){  //so the tile numbers are the same
              tile = square.innerHTML
              tileNumber = getTileNumberFromTile(tile)
              newTileNumber = tileNumber * 2
              newTile = document.createElement("div")
              newTile.classList.add("tile")
              newTile.innerHTML = newTileNumber
              addClass(newTile,newTileNumber)
              squares[squareNumber-k].innerHTML = ""
              square.innerHTML = ""
              squares[squareNumber-k].appendChild(newTile)
              moveMade = true
            }else{
              break
              //don't move
            }
          }
        }
      }
    }
  }
  if (moveMade == true){
    createRandomNumber()
  }
}
function moveRight(){
  moveMade = false
  for (var i=2;i>-1;i--){
    for(var j=0;j<4;j++){
      squareNumber = i+j*4
      square = squares[squareNumber]
      if (square.innerHTML==""){
      }else{ //so there is a square
        for (var k=1;k<(4-i);k++){
          if (squares[squareNumber+k].innerHTML == ""){
            tile = square.innerHTML
            square.innerHTML = ""
            squares[squareNumber+k].innerHTML = tile
            square = squares[squareNumber+k]  //this is so the next square is checked using this one
            moveMade = true
          }else{
            if (squares[squareNumber+k].innerHTML == square.innerHTML){  //so the tile numbers are the same
              tile = square.innerHTML
              tileNumber = getTileNumberFromTile(tile)
              newTileNumber = tileNumber * 2
              newTile = document.createElement("div")
              newTile.classList.add("tile")
              newTile.innerHTML = newTileNumber
              addClass(newTile,newTileNumber)
              squares[squareNumber+k].innerHTML = ""
              square.innerHTML = ""
              squares[squareNumber+k].appendChild(newTile)
              moveMade = true
            }else{
              break
              //don't move
            }
          }
        }
      }
    }
  }
  if (moveMade == true){
    createRandomNumber()
  }
}

function startGame(){
  createRandomNumber() // create two numbers to start
  createRandomNumber()
}

startGame()
