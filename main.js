 const canvas=document.getElementById("canvas")
 const ctx=canvas.getContext("2d")
 let isDrawing=false
 var button=document.getElementById("button")
 
 canvas.width=window.innerWidth
 canvas.height=window.innerHeight
 canvas.addEventListener("mousedown", move)
        function move(){
			isDrawing=true
			ctx.beginPath()
			ctx.lineWidth=5
			
		}
		canvas.addEventListener("mousemove",action)
		   function action(event){
			   if(!isDrawing) return
			   ctx.lineTo(event.offsetX,event.offsetY)
			   ctx.strokeStyle="blue"
			   ctx.stroke()
			   
		   }
		   canvas.addEventListener("mouseup",release)
		      function release(){
			  isDrawing=false
			  setTimeout(()=>{
					      ctx.strokeStyle="yellow"
						  ctx.stroke()
				},2000)
			  }
			 
  button.addEventListener("click",change)
			    function change(){
					    ctx.strokeStyle="green"
						ctx.stroke()
						
				}
		