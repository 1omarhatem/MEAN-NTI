
import chalk from "chalk";
import figlet from "figlet";
import fs from "fs";
import getGreeting from "./greeting.js";


const userName = "Ahmed";

fs.writeFile('name.txt', userName, (err) => {
  if (err) {
    console.error("Error writing name to file:", err);
    return;
  }

  console.log(chalk.yellow("Name written to file."));

  fs.readFile('name.txt', 'utf8', (err, name) => {
    if (err) {
      console.error("Error reading name:", err);
      return;
    }

    const greetingMessage = getGreeting(name.trim());

    // Step 4: Make greeting big using figlet
    figlet(greetingMessage, (err, bigText) => {
      if (err) {
        console.error("Error using figlet:", err);
        return;
      }

      // Step 5: Style it with chalk
      const styledText = chalk.green(bigText);
      console.log(styledText);

      // Step 6: Save the greeting to output.txt
      fs.writeFile('output.txt', bigText, (err) => {
        if (err) {
          console.error("Error writing greeting:", err);
          return;
        }

        console.log(chalk.blue("Greeting saved to output.txt!"));
      });
    });
  });
});