console.log('Hello World!');
const mainContainer = document.getElementById('entryBox')
const startBtn = document.getElementById('entryBtn')

const question= document.createElement("p");
const C1= document.createElement('div')
const C2= document.createElement('div')
const C3= document.createElement('div')
const C4= document.createElement('div')
const nextQ= document.createElement('div')
const submit= document.createElement('div')


let i = 0
const questionList = [
"Which one of these is the hottest?",
    "Who is more fine shyt?",
    "Who is the best in bed here?",
   "Who is the best here to put ur thing in (dick)",
   "Whos Juans crush?"
]

const c1List=[
    'Reze',
    'Nadine',
    'Tsunade',
    'Juan',
    'Faye'
]
const c2List=[
    'Makima',
    'Catherine',
    'Sakura',
    'Maam gensci',
    'Fayes sister'
]
const c3List=[
    'Yoru',
    'Precious',
    'Juan',
    'Maam css',
    'Fayes sister'
]
const c4List=[
    'Juan',
    'Windwindchant',
    'Anya',
    'Sir advicer',
    'Fayes sister'
]

const msg1 = [
    "CORRECT. Reze is the hottest obviously",
    "VERY WRONG. The fuck?",
    "VALID. because of her tities",
    "WRONG. down bad for me huh?",
    "WRONG. You though? her sister is so much better"
];

const msg2 = [
    "WRONG. Fuck makima",
    "CORRECT. I mean shes the best looking in the class not my type tho",
    "WRONG. Fuck that flat fraud",
    "CORRECT. fuck shes hot thic ass",
    "CORRECT. Shes georgous and nonchalant exactly my type."
];

const msg3 = [
    "WRONG. I mean she fine but reze is on a different league",
    "WRONG. No bro",
    "WRONG. I mean. if that dick is veiny and big i guess ill consider it",
    "WRONG. She hot too but gen sci better",
    "CORRECT. Shes georgous and nonchalant exactly my type"
];

const msg4 = [
    "R- r- really?👉👈😖",
    "KINDA WRONG. She fine too",
    "CORRECT. WE are all fucking anya",
    "WRONG. you alone on this one lil bro",
    "CORRECT. Shes georgous and nonchalant exactly my type"
];


startBtn.addEventListener("click",() => {
  mainContainer.innerHTML = "";
 
  question.textContent = questionList[i]
  mainContainer.appendChild(question)
 
  
  C1.className="choices"
  C1.textContent='Reze'
  mainContainer.appendChild(C1)
  
  C2.className='choices'
  C2.textContent='Makima'
  mainContainer.appendChild(C2)
  
  C3.className='choices'
  C3.textContent='Yoru'
  mainContainer.appendChild(C3)
  
  C4.className='choices'
  C4.textContent='Juan'
  mainContainer.appendChild(C4)
  
  
});

const fridge = [C1,C2,C3,C4]
let lock = false

fridge.forEach(button => {
    button.addEventListener("click", () => {
        
        if(lock) return
        lock = true
        
        nextQ.className='nextQ'
  nextQ.textContent='Next Question'
  mainContainer.appendChild(nextQ)
  
  switch (button) {
  case C1:
    question.textContent=msg1[i]
    break;
case C2:
    question.textContent=msg2[i]
    break;
case C3:
    question.textContent=msg3[i]
    break;
case C4:
    question.textContent=msg4[i]
    break;
  }
  
  C1.style.backgroundColor='red'
  C2.style.backgroundColor='red'
  C3.style.backgroundColor='red'
  C4.style.backgroundColor='red'
  
 
 switch (i) {
  case 0:
    C1.style.backgroundColor='green'
    break;
  case 1:
    C2.style.backgroundColor='green'
    break;
  case 2:
    C4.style.backgroundColor='green'
    break;
  case 3:
    C2.style.backgroundColor='green'
    break;
    case 4:
    C2.style.backgroundColor='green'
    C3.style.backgroundColor='green'
    C4.style.backgroundColor='green'
    break;
    
}
 
    });
});

function load(){
    question.textContent = questionList[i]
    C1.textContent= c1List[i]
    C2.textContent= c2List[i]
    C3.textContent= c3List[i]
    C4.textContent= c4List[i]
}

nextQ.addEventListener("click", () => {
    mainContainer.removeChild(nextQ);
    
    lock = false
    
  C1.style.backgroundColor='blue'
  C2.style.backgroundColor='blue'
  C3.style.backgroundColor='blue'
  C4.style.backgroundColor='blue'
    
    i++
    
    load()
      if (i == questionList.length) {
      i = 0
      mainContainer.innerHTML = "";
      question.innerText = "Click here to submit youre answers"
      submit.className='nextQ'
      submit.innerText='Submit'
  mainContainer.appendChild(question)
  mainContainer.appendChild(submit)
  }
});

submit.addEventListener("click", () => { 
    mainContainer.removeChild(submit)
    question.innerText = "LOL, i just installed a malware on youre phone"
    const img = document.createElement('img');
    img.src='/Images/sya.jpg'
    mainContainer.appendChild(img)
});
