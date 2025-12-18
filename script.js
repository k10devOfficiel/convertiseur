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
    
    if (vm1.checked && Ce2.checked) {
        const valueBasse = 650.50
       let  recupInput =Number(inp.value.trim());
       let resultas = recupInput/valueBasse;
        let  resultat= document.querySelector('.resultat')
         resultat.textContent=resultas + "" +"EURO"
       
    } else if (vm2.checked && Ce1.checked) {
        const valueBasse = 650.50
        let  recupInput =Number(inp.value.trim());
        let resultas = recupInput*valueBasse;
        let  resultat= document.querySelector('.resultat')
         resultat.textContent=resultas + "" +"FRCFA"
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

