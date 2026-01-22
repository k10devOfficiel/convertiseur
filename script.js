console.log('convertiseur js activé');
let vm1= document.querySelector('.radioF1')
console.log(vm1);

let vm2= document.querySelector('.radioU1')
console.log(vm2);

// VARIABLES DES MONAIS  CONVERTIR
let Ce1= document.querySelector('.radioF2')
console.log(Ce1);
let Ce2= document.querySelector('.radioU2')
console.log(Ce2);
let form= document.querySelector('form')

let inp =document.querySelector('input[type="text"]')

 function verifie(){
 const resultat = document.querySelector('.resultat');
const valueBasse = 650.50
  if (!inp.value.trim()) {
        resultat.textContent = "erreur de saisie";
        return;
    }

    if (isNaN(recupInput)) {
        resultat.textContent = "Veuillez entrer un nombre valide";
        return;
    }
    
    if (vm1.checked && Ce2.checked) {
       let  recupInput =Number(inp.value.trim());
       let resultas = recupInput/valueBasse;
       let conver=resultas.toFixed(2)
         resultat.textContent=conver + " " +"EURO"
       
    } else if (vm2.checked && Ce1.checked) {
        let  recupInput =Number(inp.value.trim());
        let resultas = recupInput*valueBasse;
         let conver=resultas.toFixed(2)
         resultat.textContent=conver + " " +"FRCFA"
    } else if (vm1.checked  && Ce1.checked) {
        let  recupInput =Number(inp.value.trim());
        let  resultat= document.querySelector('.resultat')
         resultat.textContent="c'est la même somme"+" "+ recupInput +" "+ " FRCFA";
        
    } else if (vm2.checked && Ce2.checked) {
        
        let  recupInput =Number(inp.value.trim());
        let  resultat= document.querySelector('.resultat')
         resultat.textContent="c'est la même somme"+" "+ recupInput+" "+ " EURO";
        ;
    }
 }
 form.addEventListener('submit',(e)=>{
e.preventDefault()
verifie()
})

