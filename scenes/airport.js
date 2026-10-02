import { taxiScenes } from "./taxi";

export const airportScenes = {

  airport: {
    story: "You arrive in Tehran alone. You grab your backpack and walk out of the airport.",
    question: "What does the taxi driver mean?",
    choices: [
      {
        text: "Hello! Welcome!",
        nextScene: "correctWelcome"
      },
      {
        text: "Hello! Where are you going?",
        nextScene: "confusedDriver"
      },
      {
        text: "Hello! How are you?",
        nextScene: "conversation"
      }
    ]
  },

  correctWelcome: {
    story: "You got it! Khosh oomadi means Welcome!<br><br>" +
      "You smile at the driver and say, 'Salam! Merci'<br><br>" +
      "He grabs your backpack and puts it in the trunk",
    choices: [
      {
        text: "Get in the taxi",
        nextScene: "taxi"
      }
    ]
  },

  confusedDriver: {
    story: "You smile confidently at the driver, thinking he asked where you're going.<br><br>" +
    '"Tehran!" you reply proudly.<br><br>' +
    "The driver pauses, he looks confused.<br><br>" +
    '"Tehran...?" he repeats, slightly amused.<br><br>' +
    "You have a feeling that wasn't what he asked.",
    choices: [
      {
      text: "Ask what he said",
      nextScene: "askScene"
      },
      {
        text: "Pretend everything is fine",
        nextScene: "pretendScene"
      }
    ]
  },

  askScene: { 
   story: '"Bebakhshid, chi goftin?"<br><br>' +
    "The driver slows down and repeats himself:<br><br>" +
    '"Khosh oomadi!"<br><br>' +
    "Oh, he was welcoming you!",

  },
   pretendScene: {
    story: "You smile and nod confidently, pretending you understood.<br><br>" +
    "The driver studies your face for a second.<br><br>" +
    '"Ohhh, Farsi balad nisti!"<br><br>' +
    "He slows down and carefully repeats himself.<br><br>" +
    '"Khosh... oomadi!"<br><br>' +
    "Oh... Welcome.<br><br>" +
    "He gestures for me to get into the taxi",
    choices:[
      {
        text: "Get into the taxi",
      nextScene: "taxi"
      }
    ]
   },
};