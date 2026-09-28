import {airportScenes}from "./scenes/airport.js";
import { taxiScenes } from "./scenes/taxi.js";
const scenes = {
    ...airportScenes,
    ...taxiScenes
};

function showScene(sceneName) {

  const scene = scenes[sceneName];

  document.getElementById("story").innerHTML = scene.story;

  document.getElementById("choices").innerHTML = "";

  scene.choices.forEach(function(choice) {

    const choiceButton = document.createElement("button");

    choiceButton.innerHTML = choice.text;

    choiceButton.onclick = function() {
      showScene(choice.nextScene);
    };

    document.getElementById("choices").appendChild(choiceButton);

  });
}
const startButton = document.getElementById("startButton");
startButton.onclick = function() {
  showScene("airport");
  startButton.style.display = "none";
};