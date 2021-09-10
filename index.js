const typetextspan = document.querySelector('.type-text');

const textarray = ['Hallo!', 'Olá!', 'Hei!', 'Hola!'];

const typingdelay = 150;
const erasingdelay = 50;
const newtextdelay = 170;

let textarrayindex = 0;
let chartindex = 0;

function type() {
    if (chartindex < textarray[textarrayindex].length) {
        typetextspan.textContent += textarray[textarrayindex].charAt(chartindex);
        chartindex++;
        setTimeout(type, typingdelay);
    } else {
        // eraser
        setTimeout(erase, newtextdelay);
    }
}

function erase() {
    if (chartindex > 0) {
        typetextspan.textContent = textarray[textarrayindex].substring(0, chartindex - 1);
        chartindex--;
        setTimeout(erase, newtextdelay);
    } else {
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, newtextdelay + 250);
});


// code bintang jumbotron

function stars() {
    const jumbo = document.querySelector('.jumbotron')
    for (let i = 0; i <= 90; i++) {
        let star = document.createElement('i');
        star.setAttribute('class', 'i')
        let x = Math.round(Math.random() * innerWidth) * 2;
        let y = Math.round(Math.random() * innerHeight) * 2;

        let duration = Math.random() * 6;
        let size = Math.random() * 2;

        star.style.top = y + 'px';
        star.style.left = x + 'px';

        star.style.animationDuration = 7 + duration + 's';
        star.style.animationDelay = duration + 's';




        jumbo.append(star)

    }

}
stars()


// clock

// clock

function clock() {
    let jam = document.querySelector('.hour');
    let menit = document.querySelector('.menit');
    let detik = document.querySelector('.detik');
    let ampm = document.querySelector('.ampm');
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
  
    // convert jika memakai format 24 am dan pm
    // if (h >= 24) {
    //   h = h - 24;
    //   let am = 'PM';
    // }
    // MULAI DARI 0
  
    h = h < 10 ? '0' + h : h;
  
    m = m < 10 ? '0' + m : m;
  
    s = s < 10 ? '0' + s: s;
    


    jam.innerHTML = h;
    menit.innerHTML = m;
    detik.innerHTML = s;
   
  }
  
  let waktu = setInterval(clock, 1000);

// clock


// animation name
const nama = document.querySelector('.name');

const huruf = [...nama.textContent].map((h,i) => {
   return  `<span class='span_content span${i+1}'>${h}</span>` 
}).join('')

nama.innerHTML = huruf;



// moon scoll


const moon = document.querySelector('.moon');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    moon.style.top = (value / 18) + '%';
    // console.log(value)
})


// moon scroll


// offline mode

window.addEventListener('offline',function(){
    alert(`you are offline if you are offline maybe some of the features of this website don't work`);
})


// offline mode

// oneline mode

window.addEventListener('oneline',function(){
    alert(`you are back online`);
})



// oneline mode