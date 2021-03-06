function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  let first = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${first}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineOrder = new Array();
    let i = 1;
    lineOrder.push("1. " + katzDeliLine[0])
    while (i < katzDeliLine.length) {
      lineOrder.push(" " + (i+1) + ". " + katzDeliLine[i])
      i += 1
    }
  }
  return `The line is currently: ${lineOrder}`
}
