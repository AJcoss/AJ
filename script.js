let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F3168218B-297D-48DB-B5E8-DF4AAF831AC4.jpeg?v=1586214937867",
    name: "Jordy Martinez",
    quote: "It's called a now and later 'cause you eat it now, and want it later.",
    superlative: "Best Hair"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F7F0C177F-E292-48CC-B7F4-43B9B9D1B6E7.jpeg?v=1586211616921",
    name: "Anthony Bello",
    quote: "My dream is to get struck by lightning.",
    superlative: "Most Likely to love animals"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F6ADC1145-0E0B-4A87-B5DE-7A1223E37CF4.jpeg?v=1586211913942",
    name: "Thierno Diallo",
    quote: "I'm sorry women.",
    superlative: "Most Respectful to Women"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F576EC917-327E-4C9D-80A7-3E6B71699DAD.jpeg?v=1586211918714",
    name: "Nicholas Hylton",
    quote: "I thought I'd evolve into something greater over the years, but I was always lengendary.",
    superlative: "Best Mom Lover"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F5A8D4C1B-A192-4D14-83A3-79FBDCC554B2.jpeg?v=1586211930658",
    name: "Mahel Napo",
    quote: "Can I help you?",
    superlative: "Most Likely to Simp"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F9A59381A-6E85-4286-99DB-67056A38EB9F.jpeg?v=1586211938438",
    name: "Farid Oumorou",
    quote: "Does anyone else work out on Sundays?",
    superlative: "Best Body Builder"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F6AD7775E-9982-4A3F-B968-81E52D594FCA.jpeg?v=1586211948874",
    name: "Yadira Carillo",
    quote: "Achievement Unlocked: Escaped Place of Confinement",
    superlative: "Best Style"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2FC6037536-2F33-4711-92B3-2CB231450A37.jpeg?v=1586213161641",
    name: "Lesroy Roberts",
    quote: "So it's nap time?",
    superlative: "Most Friendly"
  },
  {
    profileimage: "https://cdn.glitch.com/ec7c8f7c-784d-4240-8121-52687edeecbe%2F892CDD7A-5CBC-4265-958C-C3F8977F260E.jpeg?v=1586217988497",
    name: "Alexis J. Coss",
    quote: "You technically don't own a dollar, you're just borrowing it.",
    superlative: "Most Talented"
  }
]

let count = 0
document.querySelector ("#pic").src = students[count].profileimage
document.querySelector ("#name").innerHTML = students[count].name
document.querySelector ("#quote").innerHTML = students[count].quote
document.querySelector ("#superlative").innerHTML = students[count].superlative
let lastStudent = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  
  
   if(count > lastStudent){
    count = 0
  }
  
  document.querySelector ("#pic").src = students[count].profileimage
  document.querySelector ("#name").innerHTML = students[count].name
  document.querySelector ("#quote").innerHTML = students[count].quote
document.querySelector ("#superlative").innerHTML = students[count].superlative
  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  
  if(count < 0){
    count = lastStudent
  }
  
  document.querySelector ("#pic").src = students[count].profileimage
  document.querySelector ("#name").innerHTML = students[count].name
  document.querySelector ("#quote").innerHTML = students[count].quote
document.querySelector ("#superlative").innerHTML = students[count].superlative
  
 
})

