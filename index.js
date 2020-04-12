function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newperson}. You are number ${katzDeliLine.length + 1} in line.`
}