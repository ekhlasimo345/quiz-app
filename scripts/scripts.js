let questions=
[
   {  
      questionNumber1: "What is the force that pulls objects toward the Earth?" , 
         text:" Magnetism " ,
         text:" Gravity ",
         text:" Electricity",  
         text:" Wind  ",

         correctAnswer:"Gravity"
   },
   {
      questionNumber2: "What do we call frozen water?"  ,
         text:" Ice"  ,
         text:" Steam" , 
         text:" Rain " ,
         text:" Fog ",

         correctAnswer:"Ice"
   },
   {
      questionNumber3: "What happens when you mix red and blue light?"  ,
         text:" Green  ",
         text:" Yellow " ,
         text:" Purple " ,
         text:" Orange  ",
   
         correctAnswer:"Purple"
   },
   {
      questionNumber4: "Which one of these is a source of light?" ,
         text:" The Moon  ",
         text:" A Mirror  ",
         text:" A Flashlight ",  
         text:" A Rock " ,

         correctAnswer:"A Flashlight"
   },
   {     
      questionNumber5: "What do we use to measure temperature?" , 
         text:" Ruler  ",
         text:" Scale  ",
         text:" Thermometer  ", 
         text:" Clock  ",

         correctAnswer:"Thermometer"
   },
   {      
      questionNumber6: "What is the chemical formula for water?" , 
         text:" O₂  ",
         text:" H₂O   ",
         text:" CO₂  ",
         text:" NaCl  ",

         correctAnswer:"H₂O"
   },
   {      
      questionNumber7: "What is the color of most leaves?",  
         text:" Yellow  ",
         text:" Blue  ",
         text:" Green  ", 
         text:" Red  ",

         correctAnswer:"Green"
   },
   {     
      questionNumber8: "Which of these is a gas?",  
         text:" Ice  ",
         text:" Water  ",
         text:" Oxygen " , 
         text:" Sand  ",

         correctAnswer:"Oxygen"
   },
   {     
      questionNumber9: "What happens when you mix blue and yellow paint?",  
         text:" Red  ",
         text:" Green  ", 
         text:" Purple " ,
         text:" Orange  ",

         correctAnswer:"Green"
   },
   {     
      questionNumber10: "What do we call a change where a new substance is formed?",
         text:" Physical change  ",
         text:" Chemical change   ",
         text:" Color change  ",
         text:" Size change  ",

         correctAnswer:"Chemical change"
   },
   {     
      questionNumber11: "What is the name of the outer part of a tree?" ,
         text:" Skin  ",
         text:" Shell  ",
         text:" Bark   ",
         text:" Trunk  ",

         correctAnswer:"Bark"
   },
   {     
      questionNumber12: "What is the name of the organ that pumps blood in our body?" , 
         text:" Brain  ",
         text:" Stomach  ",
         text:" Heart   ",
         text:" Lungs  ",

         correctAnswer:"Heart"
   },
   {     
      questionNumber13: "Which animal is the largest on Earth?",
         text:" Elephant  ",
         text:" Blue Whale ",
         text:" Giraffe ",
         text:" Shark ",

         correctAnswer:"Blue Whale"
   },
   {     
      questionNumber14: "What do bees collect from flowers?" , 
         text:" Water  ",
         text:" Pollen  ",
         text:" Leaves " ,
         text:" Seeds  ",

         correctAnswer:"Pollen"
   },
   {     
      questionNumber15: "Which of these animals lays eggs?", 
         text:" Dog  ",
         text:" Cat  ",
         text:" Snake  ",
         text:" Horse ",

         correctAnswer:"Snake"
   },
   {     
      questionNumber16: "What is the name of the star at the center of our Solar System?", 
         text:" The Moon  ",
         text:" The Sun   ",
         text:" The Earth  ",
         text:" Mars  ",

         correctAnswer:"The Sun"
   },
   {     
      questionNumber17: "What do we call a scientist who studies space?",
         text:" Geologist  ",
         text:" Astronomer  ",
         text:" Biologist  ",
         text:" Chemist  ",

         correctAnswer:"Astronomer"
   },
   {     
      questionNumber18: "What are rocks that fall from space called?" , 
         text:" Asteroids " ,
         text:" Comets  ",
         text:" Meteors  ", 
         text:" Planets  ",

         correctAnswer:"Meteors"
   },
   {     
      questionNumber19:"Which season comes after summer?",
         text:" Winter  ",
         text:" Spring  ",
         text:" Fall (Autumn)",   
         text:" Summer  ",

         correctAnswer:"Fall (Autumn)"
   },
   {     
      questionNumber20: "What do we call the shape of the Earth?" , 
         text:" Flat  ",
         text:" Cube  ",
         text:" Sphere ",  
         text:" Pyramid ", 

         correctAnswer:"Sphere"
   },
   {     
      questionNumber21: "What is the name of the gas we breathe in to stay alive?",
         text:" Carbon dioxide"  ,
         text:" Oxygen  ",
         text:" Helium  ",
         text:" Hydrogen ", 

         correctAnswer:"Oxygen"
   },
   {     
      questionNumber22: "What do you call a baby dog?"  ,
         text:" Kitten " ,
         text:" Calf " ,
         text:" Pup (Puppy)",   
         text:" Cub " ,

         correctAnswer:"Pup (Puppy)"
   },
   {     
      questionNumber23: "What do plants need to make their own food?",  
         text:" Sunlight "  ,
         text:" Rocks  ",
         text:" Sand  ",
         text:" Wind  ",

         correctAnswer:"Sunlight"
   },
   {     
      questionNumber24: "What is the name of the largest ocean on Earth?",
         text:" Atlantic Ocean"  ,
         text:" Indian Ocean"  ,
         text:" Pacific Ocean"  , 
         text:" Arctic Ocean"  ,

         correctAnswer:"Pacific Ocean"
   },
   {     
      questionNumber25: "What sense do we use our ears for?",
         text:" Sight " ,
         text:" Smell  ",
         text:" Hearing" ,  
         text:" Taste"  ,

         correctAnswer:"Hearing" ,
   }
]     

const printQuestions = questions.map(() => {
   return `
   <div class="question">
      <h2>${questions.questionNumber1}</h2
      <ul
         <li>${questions.text}</li>
         <li>${questions.text}</li>
         <li>${questions.text}</li>
         <li>${questions.text}</li>
      </ul>
   </div>
   `;
})