const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let questions = [
//   "What's your name? Nicknames are also acceptable :) ",
//   "What's an activity you like doing?",
//   "What do you listen to while doing that?",
//   "Which meal is your favourite (eg: dinner, brunch, etc.)",
//   "What's your favourite thing to eat for that meal?",
//   "Which sport is your absolute favourite?",
//   "What is your superpower? What you are amazing at!"
// ];

let answers = [];

  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    answers.push(`So your name is ${answer}`);

    rl.question("What's an activity you like doing?", (answer) => {
      answers.push(`You like to ${answer}`);

      rl.question("What do you listen to while doing that?", (answer) => {
        answers.push(`You listened ${answer}`);

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)",
          (answer) => {
            answers.push(`Would you like to get ${answer} right now? ;) `);

            rl.question(
              "What's your favourite thing to eat for that meal?",
              (answer) => {
                answers.push(`I know that you love ${answer}`);

                rl.question(
                  "Which sport is your absolute favourite?",
                  (answer) => {
                    answers.push(`And your passion is to do ${answer}`);

                    rl.question(
                      "What is your superpower? What you are amazing at!",
                      (answer) => {
                        answers.push(`I am surprised that ${answer} is your superpower!`);
                            console.log(answers);
                          rl.close();
                        });
                      });
                  });
              });
          });
      });
  });
