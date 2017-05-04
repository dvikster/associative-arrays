hero1 = {
    'name':'SpiderMan',
    'xp' : 38,
    'img' : 'http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Pic.png',
    'damage' : [5,9,11],
    'hit': function (a) {
        if (a==1) return 0;
        if (a==2 || a==3) return this.damage[0];
        if (a==4 || a==5) return this.damage[1];
        if (a==6) return this.damage[2];
    }
}

hero2 = {
    'name':'SupermanMan',
    'xp' : 45,
    'img' : 'http://www.fightersgeneration.com/np6/char2/superman-mkvsdc-white.jpg',
    'damage' : [4,8,12],
    'hit': function (a) {
        if (a==1) return 0;
        if (a==2 || a==3) return this.damage[0];
        if (a==4 || a==5) return this.damage[1];
        if (a==6) return this.damage[2];
    }
}

//var rand = min - 0.5 + Math.random() * (max - min + 1)
//rand = Math.round(rand);
//return rand;

function kubik() {
    var rand = 0.5 + Math.random() * 6;   //0-6
    rand = Math.round(rand);
    return rand;
}


init()  // начальный вывод
function init() {
    document.querySelector('.hero1 h2').innerHTML=hero1.name;
    document.querySelector('.hero1 .xp').innerHTML=hero1.xp;
    document.querySelector('.hero1 img').src=hero1.img;
}

init2()
function init2() {
    document.querySelector('.hero2 h2').innerHTML=hero2.name;
    document.querySelector('.hero2 .xp').innerHTML=hero2.xp;
    document.querySelector('.hero2 img').src=hero2.img;
}

var superman = document.querySelector('#h1udar');
superman.onclick = hit1;

function hit1() {
    var kub=kubik();
    document.getElementById('damage').innerHTML = hero1.hit(kub);
    hero2.xp=hero2.xp-hero1.hit(kub);
    console.log(hero2.xp);

    document.querySelector('.hero2 .xp').innerHTML=hero2.xp;
    superman.onclick = null;
    superman.classList.add('not-active');
    spiderman.onclick = hit2;
    spiderman.classList.remove('not-active');

    if (hero2.xp <= 0) {
        alert('SpiderMan - Ты мой Герой');
        location.reload();
    }
}

var spiderman = document.querySelector('#h2udar');
spiderman.onclick = hit2;

function hit2() {
    var kub=kubik();
    hero1.xp=hero1.xp-hero2.hit(kub);
    document.getElementById('damage').innerHTML = hero2.hit(kub);
    console.log(hero1.xp);

    document.querySelector('.hero1 .xp').innerHTML=hero1.xp;
    spiderman.onclick=null;
    spiderman.classList.add('not-active');
    superman.onclick=hit1;
    superman.classList.remove('not-active');

    if (hero1.xp<=0) {
        alert('SupermanMan - Ты мой Герой');
        location.reload();
    }
}

