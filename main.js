let userNumber = prompt("telefon raqamni kiriting ?");
let phoneCode = [
  "91  beline operatori ",
  "90  beline operatori ",
  "99  uzmobile operatori",
  "95  uzmobile operatori",
  "97  mobiuz operatori",
  "88  mobiuz operatori",
  "94  Usell operatori",
  "93  Usell operatori",
  "55  Usell operatori",
  "77  uy telefoni",
];
if (userNumber.length < 9 || userNumber.length > 9) {
  alert("raqam noto'g'ri kiritildi");
} else {
  let count = phoneCode.map((item) => {
    if (userNumber.slice(0, 2) == item.slice(0, 2)) {
      return item.slice(3);
    }
  });
  const result = "+998 " + userNumber + count.join("");
  console.log(result);
}





//karta turini aniqlash


let card =prompt("karta raqamini kiriting")
let cardCode=["8600  Uzcard kartasi","9860  humo kartasi"]
if(card.length!==16){
  alert("karta raqam hato kiritildi")
}else{
  let count =cardCode.map((item)=>{
  if(card.slice(0,4)==item.slice(0,4)){
    return item.slice(5,)
  }
  
  })
  const result =card+count.join('')
  alert(result) 
}

