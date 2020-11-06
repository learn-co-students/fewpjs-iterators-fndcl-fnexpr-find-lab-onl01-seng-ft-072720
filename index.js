const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
 if (!result) {
 return undefined}
 else {
 return result.year }
}