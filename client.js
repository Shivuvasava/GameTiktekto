let buttons = document.querySelectorAll(".btn");
		let reset = document.querySelector(".rb");
		let start = document.querySelector(".sb");
		let anuns=document.querySelector(".anuns");
		let msg2= document.querySelector(".msg2");
		let msg=document.querySelector(".msg");
		
		
		const wenner = [
		[0,1,2],
		[0,3,6],
		[0,4,8],
		[1,4,7],
		[2,5,8],
		[2,4,6],
		[3,4,5],
		[6,7,8],
		];
		
		let str=true;
		const drow=()=>{
		msg2.innerHTML="Drow Game ."
		};
		
		buttons.forEach((btn) =>{
		btn.addEventListener("click",()=>{
		if(str==true){
		btn.innerHTML="X";
		btn.style.color="green";
		btn.disabled=true;
		str=false;
		}else{
		btn.innerHTML="o";
		btn.style.color	="red";
		btn.disabled=true;
		str=true;
		};
		checkwenner();
		});
		});
		const disabledbtn=()=>{
		for(let btns of buttons){
		btns.disabled=true;
		};
		};
		const checkwenner= ()=>{
		for( let pattern of wenner){
		let p1=buttons[pattern[0]].innerText;
		let p2 =buttons[pattern[1]].innerText;
		let p3 =buttons[pattern[2]].innerText;
		if(p1!="" && p2!="" && p3!=""){
		if(p1==p2 && p2==p3){
		msg2.innerHTML=p1;
		msg.innerHTML="Congratulations -";
		disabledbtn();
		};
		};
		};
		};
		newgame=()=>{
		for(let btn of buttons){
		btn.innerHTML="";
		btn.disabled=false;
		msg.innerHTML="";
		msg2.innerHTML="";
		}
		};
		enable=()=>{
		for(let btns of buttons){
		btns.disabled=false;
		btns.innerHTML="";
		msg.innerHTML="";
		msg2.innerHTML="";
		};
		};
		reset.addEventListener("click",enable);
		start.addEventListener("click",newgame);