// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'


for(let i = 0; i < 10; i++){
   let r = Math.random()
   if(r < .5){
      document.write(`<div class="red box"></div>`)
      }else{
      document.write(`<div class="blue box"></div> `)
      }
}

let j = 0;
while(j < 10){
   let r = Math.random()
   if(r < .5){
      document.write(`<div class="red box"></div>`)
      }else{
      document.write(`<div class="blue box"></div> `)
      }

   j++
}
let c = document.querySelector("#myCanvas")

if(c.getContext){
   console.log(3)
     let ctx = c.getContext("2d")

   ctx.fillStyle = "#800080"
   
   ctx.strokeStyle = "#0000FF"
   ctx.strokeRect(250, 200, 300, 300)

   ctx.beginPath()
   ctx.moveTo(200, 50)
   ctx.lineTo(100, 100)
   ctx.lineTo(100, 100)
   ctx.stroke()

   ctx.strokeStyle = "#008000"
   ctx.beginPath()
   ctx.arc(400, 700, 100, 100, 2 * Math.PI, true  )
  
   ctx.stroke()

   ctx.beginPath()
   ctx.moveTo(135,100)
   ctx.arc(100,100,35,0, Math.PI, false)
   ctx.moveTo(90,90)
   ctx.arc(85, 90, 5, 0, 2 * Math.PI, false)
   ctx.moveTo(120, 90)
   ctx.arc(120, 90, 5, 0, 2 * Math.PI, false)

   ctx.stroke()

}

