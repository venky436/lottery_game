let box = document.querySelectorAll(".col");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let big_btn = document.querySelector("#big");
let small_btn = document.querySelector("#small");
let triple_btn = document.querySelector("#triple");
let even_btn = document.querySelector("#even");
let odd_btn = document.querySelector("#odd");



let big_bet = document.querySelector(".big-bet");
let small_bet = document.querySelector(".small-bet");
let triple_bet = document.querySelector(".triple-bet");
let even_bet = document.querySelector(".even-bet");
let odd_bet = document.querySelector(".odd-bet");




let form = document.querySelector("#form");
let bet_input = document.querySelector("#bet-input");

let bet_box = document.querySelector(".bet-box");

let timeTag = document.querySelector("#time");

let total_money_tag = document.querySelector("#total-money");

let total_money = 10000;
let idd;
let numbers = [1, 2, 3, 4, 5, 6];



// Dice values storing (current)
let one = 0;
let two = 0;
let three = 0;

// current btn event storing
let currentBtn = "";

// current bet storing
let big = 0;
let small = 0;
let triple = 0;
let even = 0;
let odd = 0;


// Intial time
let intialTime;
let ttt = 0;

// ON LOAd
addEventListener("load", () => {
  total_money_tag.textContent = total_money;
  setTimeout(() => {
    intialTime = setInterval(() => {
      ttt++;
      timeTag.textContent = ttt;
      if (ttt == 10) {
        clearInterval(intialTime);
        timeTag.textContent = "";
      }
    }, 1000);
  }, 4000);
});

// Big Btn functionality
big_btn.addEventListener("click", (e) => {
  currentBtn = "big";
  let left = e.clientX;
  let top = e.clientY;
  bet_box.style.left = `${left}px`;
  bet_box.style.top = `${top}px`;
  bet_box.style.display = "block";
});

//Small Btn
small_btn.addEventListener("click", (e) => {
  currentBtn = "small";
  let left = e.clientX;
  let top = e.clientY;
  bet_box.style.left = `${left}px`;
  bet_box.style.top = `${top}px`;
  bet_box.style.display = "block";
});

// Triple btn
triple_btn.addEventListener("click", (e) => {
  currentBtn = "triple";
  let left = e.clientX;
  let top = e.clientY;
  bet_box.style.left = `${left}px`;
  bet_box.style.top = `${top}px`;
  bet_box.style.display = "block";
});
// Even Btn
even_btn.addEventListener("click", (e) => {
  currentBtn = "even";
  let left = e.clientX;
  let top = e.clientY;
  bet_box.style.left = `${left}px`;
  bet_box.style.top = `${top}px`;
  bet_box.style.display = "block";
});
// Odd Btn
odd_btn.addEventListener("click", (e) => {
  currentBtn = "odd";
  let left = e.clientX;
  let top = e.clientY;
  bet_box.style.left = `${left}px`;
  bet_box.style.top = `${top}px`;
  bet_box.style.display = "block";
});

// Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if(total_money < 0 || total_money == 0){
  //    bet_box.style.display = " none";
  //   return alert('You Have no money to bet')
  // }else{

  total_money -= Number(bet_input.value);
  total_money_tag.textContent = total_money;
  // big_bet.textContent= "";

  if (currentBtn == "big") {
    big += Number(bet_input.value);
    big_bet.textContent = big;
    big_bet.style.display = "block";
    bet_box.style.display = "none";
    bet_input.value = "";
  }
  if (currentBtn == "small") {
    small += Number(bet_input.value);
    small_bet.textContent = small;
    small_bet.style.display = "block";
    bet_box.style.display = "none";
    bet_input.value = "";
  }
  if (currentBtn == "triple") {
    triple += Number(bet_input.value);
    triple_bet.textContent = triple;
    triple_bet.style.display = "block";
    bet_box.style.display = "none";
    bet_input.value = "";
  }
  if(currentBtn == 'even'){
    even += Number(bet_input.value)
    even_bet.textContent = even
    even_bet.style.display = 'block'
    bet_box.style.display = 'none'
    bet_input.value = "";
  }
  if(currentBtn == 'odd'){
     odd += Number(bet_input.value);
     odd_bet.textContent = odd;
     odd_bet.style.display = "block";
     bet_box.style.display = "none";
     bet_input.value = "";

  }
  // }
});

// setTimeout(()=>{
//     setInterval(()=>{

//     },1000)
//     Main()
// },10000)

function Main() {
  // clearInterval(intialTime);


  let Id = setInterval(() => {
    clearInterval(idd);
    count = 0;

    box.forEach((ele, index) => {
      ele.classList.add("active");

      if (ele.classList.contains("active")) {
        time.textContent = "";

        big_btn.style.opacity = "0.4";
        big_btn.childNodes[3].setAttribute("disabled", true);

        small_btn.style.opacity = "0.4";
        small_btn.childNodes[3].setAttribute("disabled", true);

        triple_btn.style.opacity = "0.4";
        triple_btn.childNodes[3].setAttribute("disabled", true);

        even_btn.style.opacity = "0.4";
        even_btn.childNodes[3].setAttribute("disabled", true);

        odd_btn.style.opacity = "0.4";
        odd_btn.childNodes[3].setAttribute("disabled", true);

        bet_box.style.display = "none";

        one = Math.trunc(Math.random() * 6 + 1);
        two = Math.trunc(Math.random() * 6 + 1);
        three = Math.trunc(Math.random() * 6 + 1);

        setTimeout(() => {
          img1.src = `./Images/dice-${one}.png`;
          img2.src = `./Images/dice-${two}.png`;
          img3.src = `./Images/dice-${three}.png`;
        }, 1000);

        setTimeout(() => {
          img1.src = "";
          img2.src = "";
          img3.src = "";
          ele.classList.remove("active");
        }, 3000);
      }
    });

    //  Leaving
    setTimeout(() => {
      idd = setInterval(() => {
        count++;
        time.textContent = count;
      }, 1000);

      currentBtn = "";
      big_bet.textContent = "";
      small_bet.textContent = "";

      big_bet.style.display = "none";
      small_bet.style.display = "none";
      triple_bet.style.display = "none";

      big_btn.style.opacity = "1";
      small_btn.style.opacity = "1";
      triple_btn.style.opacity = "1";
      even_btn.style.opacity = "1";
      odd_btn.style.opacity = "1";

      bet_input.value = "";

      big_btn.childNodes[3].disabled = false;
      small_btn.childNodes[3].disabled = false;
      triple_btn.childNodes[3].disabled = false;
      even_btn.childNodes[3].disabled = false;
      odd_btn.childNodes[3].disabled = false;
    }, 3000);

    // Money adding if win
    setTimeout(() => {
      if (one + two + three < 10 || one + two + three == 10) {
        total_money += small * 2;
        total_money_tag.textContent = total_money;
        small_btn.style.backgroundColor = 'green'
        small_btn.style.color = "white";
        setTimeout(()=>{
          small_btn.style.backgroundColor = "white";
          small_btn.style.color = "black";

        },1000)

      }
      if (one + two + three > 10) {
        total_money += big * 2;
        total_money_tag.textContent = total_money;
      }
      if (one == two && two == three && three == one) {
        total_money += triple * 30;
        total_money_tag.textContent = total_money;
      }
      if ((one + two + three) % 2 === 0) {
        total_money += even * 2;
        total_money_tag.textContent = total_money;
      }
      if ((one + two + three) % 2 === 1) {
        total_money += odd * 2;
        total_money_tag.textContent = total_money;
      }
      big = 0;
      small = 0;
      triple = 0;
    }, 4000);
  }, 14000);
}

Main();
