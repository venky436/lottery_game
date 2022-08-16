let box = document.querySelectorAll('.col')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let big_btn = document.querySelector('#big')
let small_btn = document.querySelector("#small");
let triple_btn = document.querySelector("#triple");



let big_bet = document.querySelector('.big-bet')





let form = document.querySelector('#form')
let bet_input = document.querySelector('#bet-input')

let bet_box = document.querySelector('.bet-box')



let timeTag = document.querySelector('#time')


let total_money_tag = document.querySelector('#total-money')

let total_money = 10000
let idd;
let numbers = [1,2,3,4,5,6]
let one = 0;
let two = 0;
let three = 0;
addEventListener('load',()=>{
  total_money_tag.textContent = total_money
})


// Big Btn functionality
big_btn.addEventListener('click',(e)=>{
  let left = e.clientX
  let top = e.clientY
  bet_box.style.left = `${left}px`
  bet_box.style.top = `${top}px`;
  bet_box.style.display = 'block';

  form.addEventListener('submit',(e)=>{

    e.preventDefault()
    if(total_money < 0 || total_money == 0){
       bet_box.style.display = " none";
      return alert('You Have no money to bet')
    }
   
    big_bet.textContent = bet_input.value
   total_money -=bet_input.value
    
    total_money_tag.textContent = total_money
    big_bet.style.display = 'block'
    big_bet.textContent= "";


    bet_box.style.display = ' none'
  })
})


// setTimeout(()=>{
//     setInterval(()=>{

//     },1000)
//     Main()
// },10000)





function Main(){
let Id = setInterval(()=>{
    clearInterval(idd)
    count = 0
          

   
    box.forEach((ele,index)=>{

        ele.classList.add('active')
         if (ele.classList.contains("active")) {
           time.textContent = "";
           big_btn.style.opacity = '0.4'
           small_btn.style.opacity = '0.4'
           triple_btn.style.opacity = '0.4'


           one = Math.trunc(
               Math.random() * 6 + 1
             )
            two = Math.trunc(
               Math.random() * 6 + 1
             )
             three = Math.trunc(
               Math.random() * 6 + 1
             )


           setTimeout(() => {
            
             img1.src = `./Images/dice-${one}.png`;
             img2.src = `./Images/dice-${two}.png`;
              img3.src = `./Images/dice-${three}.png`;
           }, 1000);


          //  Leaving
           setTimeout(() => {
             img1.src = "";
             img2.src = "";
             img3.src = "";

             ele.classList.remove("active");


             
               big_bet.style.display = 'none'
                big_btn.style.opacity = "1";
                small_btn.style.opacity = "1";
                triple_btn.style.opacity = "1";
                

           }, 3000);
         } 
         


    })
    setTimeout(()=>{

        idd = setInterval(() => {
          count++;
          time.textContent = count;
        }, 1000);
        if((one+two+three) > 10){
          total_money+=bet_input.value * 2
          total_money_tag.textContent(total_money)
        }
    },3000)

   
    
},9000)

}

Main();