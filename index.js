const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr) {
  let lookup = arr.find(game => game.result === "W")
  return lookup ? lookup.year : undefined
}
