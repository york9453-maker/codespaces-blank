export const taxiScenes = {
taxi: {
  story: "You get into the taxi. The driver starts driving and asks:<br><br>" +
    '"Koja mikhay beri? Goroshnate, ya mostaghim berim hotel?"',
  choices: [
    {
      text: "Goroshnam! Mikhay berim behtarin Tusk Kabab-e Tehran ro peyda konim?",
      nextScene: "tuskKabab"
    },
    {
      text: "Na, goroshnam nist. Berim hotel.",
      nextScene: "hotel"
    }
  ]
},
tuskKabab: {
    story: "the cab driver looks at you confused and says:<br><br>" +
      '"Etefaghan baba-ye man khodesh behtarin Tusk Kabab-e Tehran ro dorost mikone! Miyay emshab ba ma sham bokhori?" <br><br>' +
      "While you have been practising your Farsi before the trip, you don't FULLY understand what the taxi driver said",
      choices: [
      {
        text: "Aaliye! Berim!",
        nextScene: "meetingBaba"
},
        {
          text: "Baba-ye manam Tusk Kabab doost dare!",
          nextScene: "notSureYet"
        }
        
      ]
  },

  meetingBaba: {
    story: "The cab driver smiles and nods. He begins driving away from the airport and down the road. <br><br>" +
    "You watch road signs pass by through the window. After a while, the busy roads give way to quieter streets, and you notice you're getting deeper <br><br>" +
    "into a residential neighbourhood. Eventually, the driver slows down and pulls up in front of an older house tucked behind a metal gate. <br><br>" +
    "He opens the gate, revealing a small courtyard inside. He smiles at you and says, <br><br>" +
    '"Khosh oomadi be <span class="hint" data-hint="my home">khoone-ye man</span>! Bia too, berim sham bokhorim!"<br><br>' +
    "What do you say if you're hungry? <br><br>",
    choices: [
      {
        text: "Merci! Goroshnam",
        nextScene: "enterHouse"

},
      {
        text: "Merci! Goroshnate!",
        nextScene: "wrongHouse"
},
       {
        text: "Merci! Goroshnist!",
        nextScene: "wrongHouse"
}, 
      ]
  },

};