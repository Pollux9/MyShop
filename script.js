let tot = 0;

let count1 = false;
let count2 = false;
let count3 = false;
let count4 = false;
let count5 = false;

let c1 = 1;
let c2 = 1;
let c3 = 1;
let c4 = 1;
let c5 = 1;

let fz = 0;
let Tz = 0;
let gz = 0;
let tz = 0;
let cz = 0;

function plus1(){
  if(count1 == false){
    document.getElementById('cart-content1').style.display="flex";
    tot = tot + 99;
    document.getElementById('cart-tot').innerHTML = tot;
    count1 = true;
    fz = 1;
  } else {
    c1++;
    document.getElementById('cart-item-quantity1').innerHTML = c1;
    tot = tot + 99;
    document.getElementById('cart-tot').innerHTML = tot;
    fz = fz + 1;
  }
}

function minus1(){
  if(count1 == true){
    if(c1 > 1){
      c1--;
      document.getElementById('cart-item-quantity1').innerHTML = c1;
      tot = tot - 99;
      document.getElementById('cart-tot').innerHTML = tot;
      fz = fz - 1;
    }
  }
}

function del1(){
  if(count1 == true){
    document.getElementById('cart-content1').style.display="none";
    count1 = false;
    document.getElementById('cart-item-quantity1').innerHTML = 1;
    c1 = 1;
    fz = fz * 99;
    tot = tot - fz;
    document.getElementById('cart-tot').innerHTML = tot;
    fz = 0;
  }
}


function plus2(){
  if(count2 == false){
    document.getElementById('cart-content2').style.display="flex";
    tot = tot + 19;
    document.getElementById('cart-tot').innerHTML = tot;
    count2 = true;
    Tz = 1;
  } else {
    c2++;
    document.getElementById('cart-item-quantity2').innerHTML = c2;
    tot = tot + 19;
    document.getElementById('cart-tot').innerHTML = tot;
    Tz = Tz + 1;
  }
}

function minus2(){
  if(count2 == true){
    if(c2 > 1){
      c2--;
      document.getElementById('cart-item-quantity2').innerHTML = c2;
      tot = tot - 19;
      document.getElementById('cart-tot').innerHTML = tot;
      Tz = Tz - 1;
    }
  }
}

function del2(){
  if(count2 == true){
    document.getElementById('cart-content2').style.display="none";
    count2 = false;
    document.getElementById('cart-item-quantity2').innerHTML = 1;
    c2 = 1;
    Tz = Tz * 19;
    tot = tot - Tz;
    document.getElementById('cart-tot').innerHTML = tot;
    Tz = 0;
  }
}


function plus3(){
  if(count3 == false){
    document.getElementById('cart-content3').style.display="flex";
    tot = tot + 149;
    document.getElementById('cart-tot').innerHTML = tot;
    count3 = true;
    gz = 1;
  } else {
    c3++;
    document.getElementById('cart-item-quantity3').innerHTML = c3;
    tot = tot + 149;
    document.getElementById('cart-tot').innerHTML = tot;
    gz = gz + 1;
  }
}

function minus3(){
  if(count3 == true){
    if(c3 > 1){
      c3--;
      document.getElementById('cart-item-quantity3').innerHTML = c3;
      tot = tot - 149;
      document.getElementById('cart-tot').innerHTML = tot;
      gz = gz - 1;
    }
  }
}

function del3(){
  if(count3 == true){
    document.getElementById('cart-content3').style.display="none";
    count3 = false;
    document.getElementById('cart-item-quantity3').innerHTML = 1;
    c3 = 1;
    gz = gz * 149;
    tot = tot - gz;
    document.getElementById('cart-tot').innerHTML = tot;
    gz = 0;
  }
}


function plus4(){
  if(count4 == false){
    document.getElementById('cart-content4').style.display="flex";
    tot = tot + 79;
    document.getElementById('cart-tot').innerHTML = tot;
    count4 = true;
    tz = 1;
  } else {
    c4++;
    document.getElementById('cart-item-quantity4').innerHTML = c4;
    tot = tot + 79;
    document.getElementById('cart-tot').innerHTML = tot;
    tz = tz + 1;
  }
}

function minus4(){
  if(count4 == true){
    if(c4 > 1){
      c4--;
      document.getElementById('cart-item-quantity4').innerHTML = c4;
      tot = tot - 79;
      document.getElementById('cart-tot').innerHTML = tot;
      tz = tz - 1;
    }
  }
}

function del4(){
  if(count4 == true){
    document.getElementById('cart-content4').style.display="none";
    count4 = false;
    document.getElementById('cart-item-quantity4').innerHTML = 1;
    c4 = 1;
    tz = tz * 79;
    tot = tot - tz;
    document.getElementById('cart-tot').innerHTML = tot;
    tz = 0;
  }
}


function plus5(){
  if(count5 == false){
    document.getElementById('cart-content5').style.display="flex";
    tot = tot + 19;
    document.getElementById('cart-tot').innerHTML = tot;
    count5 = true;
    cz = 1;
  } else {
    c5++;
    document.getElementById('cart-item-quantity5').innerHTML = c5;
    tot = tot + 19;
    document.getElementById('cart-tot').innerHTML = tot;
    cz = cz + 1;
  }
}

function minus5(){
  if(count5 == true){
    if(c5 > 1){
      c5--;
      document.getElementById('cart-item-quantity5').innerHTML = c5;
      tot = tot - 19;
      document.getElementById('cart-tot').innerHTML = tot;
      cz = cz - 1;
    }
  }
}

function del5(){
  if(count5 == true){
    document.getElementById('cart-content5').style.display="none";
    count5 = false;
    document.getElementById('cart-item-quantity5').innerHTML = 1;
    c5 = 1;
    cz = cz * 19;
    tot = tot - cz;
    document.getElementById('cart-tot').innerHTML = tot;
    cz = 0;
  }
}