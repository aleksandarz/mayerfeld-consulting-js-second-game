
export const choices = ["Rock", "Paper", "Scissors"];

export const computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Delete the code below whe finished with testing
console.log(computerPlay());