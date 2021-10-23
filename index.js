randomnumber1 = Math.floor(Math.random()*6)+1

randomdiceimg = 'dice'+randomnumber1+'.png'

randomsrc = 'images/'+randomdiceimg

image1=document.querySelectorAll("img")[0]

image1.setAttribute('src',randomsrc)

randomnumber2 = Math.floor(Math.random()*6)+1

randomdiceimg2 = 'dice'+randomnumber2+'.png'

randomsrc2 = 'images/'+randomdiceimg2

image2=document.querySelectorAll("img")[1]

image2.setAttribute('src',randomsrc2)
delayInMilliseconds=5000
if(randomnumber1>randomnumber2)
{
   win= document.querySelector("h1")
   win.innerHTML='Player 1 wins 🚩'
   setTimeout(function() {
    win.innerHTML="Refresh Me 😼"
  }, delayInMilliseconds);
}
else if(randomnumber1<randomnumber2)
{
    win= document.querySelector("h1")
    win.innerHTML='Player 2 wins 🚩'
    setTimeout(function() {
        win.innerHTML="Refresh Me 😼"
      }, delayInMilliseconds);
}
else
{
   win= document.querySelector("h1")
   win.innerHTML='Draw ❤️'
   setTimeout(function() {
    win.innerHTML="Refresh Me 😼"
  }, delayInMilliseconds);
}