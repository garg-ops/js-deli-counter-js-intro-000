var katzDeliLine = [];


let takeANumber = (currentLine, name) => {
  currentLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
