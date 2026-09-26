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
  }

};