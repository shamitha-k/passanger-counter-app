
let paragraph=document.getElementById("para")
let point=document.getElementById("firstclass")
let count=0 

console.log(paragraph)

function mark(){
  count+=1
  point.innerText=count
  
}

function save(){
  let number=count + " - "
  paragraph.textContent += number
  console.log(count)
  point.textContent=0
  count=0
}
