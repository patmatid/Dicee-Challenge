function getFilenbr(inbr) {
  console.log("images/dice"+inbr.toString()+".png");
  return "images/dice"+inbr.toString()+".png";
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.body.children[0].children[1].children[1].src= getFilenbr(randomNumber1);
