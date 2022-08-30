// random number algorithm.
const randomNumber = (number) => {
    return Math.floor(Math.random() * number)
  };
  
// functions of objects containing 3 arrays. This is to pull 1 from each for a message.
  const weekDay = {
    miles: ['4', '6.2', '8'],
    type: ['intervals', 'tempo run', 'recovery run'],
    area: ['Smash it!', 'Work hard, Play hard!', 'No pain, no gain!']
  };

    const weekEnd = {
    miles: ['10', '12', '13.1'],
    type: ['long run at race day pace', 'long run, slow and steady'],
    area: ['Slow and steady wins the race!', 'No pain, no gain!', 'You got this!']
  };
  

  // To store the messages.
  let weekDayMessage = [];
  let weekEndMessage = [];
  

  // using number algorithm to randomly select 1 value from each key in object array.
  for (let key in weekDay) {
    let randomValue = randomNumber(weekDay[key].length)
    switch(key) {
      case 'miles':
        weekDayMessage.push(`Your aim today is to run a total of ${weekDay[key][randomValue]} miles and `)
        break
      case 'type':
        weekDayMessage.push(`your type of run is going to be: ${weekDay[key][randomValue]}.`)
        break
      case 'area':
        weekDayMessage.push(` ${weekDay[key][randomValue]}`)
        break
      default:
        weekDayMessage.push('There is not enough info.')
    };
  };

  for (let key in weekEnd) {
    let randomValue = randomNumber(weekEnd[key].length)
    switch(key) {
      case 'miles':
        weekEndMessage.push(`Your aim for the weekend is to run: ${weekEnd[key][randomValue]} miles.`)
        break
      case 'type':
        weekEndMessage.push(`Your type of run is going to be: ${weekEnd[key][randomValue]}.`)
        break
      case 'area':
        weekEndMessage.push(`${weekEnd[key][randomValue]}`)
        break
      default:
        weekEndMessage.push('There is not enough info.')
    };
  };
  

// using functions to console log the messages
  const runDay = (run) => {
    const logMessage = weekDayMessage.join('')
    console.log(logMessage);
  };

  const runEnd = (run) => {
    const logMessage = weekEndMessage.join('\n')
    console.log(logMessage);
  };
  

// calling the messages
  runDay(weekDayMessage);
  runEnd(weekEndMessage);