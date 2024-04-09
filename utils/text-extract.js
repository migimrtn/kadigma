import { alternative, reply, trigger } from "../data/data";

function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function output(input) {
  let response;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

//compare arrays
//then search keyword
//then random alternative

  if (compare(trigger, reply, text)) {
    response = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    response = robot[Math.floor(Math.random() * robot.length)];
  } else {
    response = alternative[Math.floor(Math.random() * alternative.length)];
  }

  return response
}

export {
  compare,
  output
}