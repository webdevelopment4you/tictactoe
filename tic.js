let boxes = document.getElementsByClassName("box");
let reset = document.getElementById("resetBtn");

function empty()
{
  for (let index = 0; index < boxes.length; index++) {

    document.getElementById(`box${index+1}`).innerHTML = "";
    
  }

  document.getElementById("win").removeAttribute("class");
  document.getElementById("win").innerHTML = "";

}

empty();

let counter = 0;

function clicked(myId)
{

    if(counter%2 == 0 && document.getElementById(myId).innerHTML == "")
    {
      document.getElementById(myId).innerHTML = 
      
      `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      </svg>`

      counter += 1;

      winCheck();
    } 

    else if(counter%2 != 0 && document.getElementById(myId).innerHTML == "")
    {
      document.getElementById(myId).innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
      <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg> `

    counter += 1;

    winCheck();
  }
}


function success()
{
  
  if(counter%2 == 0 && document.getElementById("win").innerHTML == "")
  {
    document.getElementById("win").setAttribute("class","alert alert-success");
    document.getElementById("win").innerHTML = "<h3>PLAYER 2 WON</h3>(automatically resetting in 3 s)";
    reset.setAttribute("class","btn btn-danger disabled");
    reset.removeAttribute("onclick");

    setTimeout(function(){
      empty()
      reset.setAttribute("class","btn btn-danger");
      reset.setAttribute("onclick","empty()");
    }, 3000);
  }

  else if(counter%2 != 0 && document.getElementById("win").innerHTML == "")
  {
    document.getElementById("win").setAttribute("class","alert alert-success");
    document.getElementById("win").innerHTML = "<h3>PLAYER 1 WON</h3>(automatically resetting in 3 s)";
    reset.setAttribute("class","btn btn-danger disabled");
    reset.removeAttribute("onclick");


    setTimeout(function(){

      empty()
      reset.setAttribute("class","btn btn-danger");
      reset.setAttribute("onclick","empty()");
    }, 3000);
  }
}


function draw()
{
  if(document.getElementById("win").innerHTML == "")
  {
    document.getElementById("win").setAttribute("class","alert alert-danger");
    document.getElementById("win").innerHTML = "<h3>MATCH DRAW</h3>(automatically resetting in 3 s)";
    reset.setAttribute("class","btn btn-danger disabled");
    reset.removeAttribute("onclick");

    setTimeout(function(){

      empty()
      reset.setAttribute("class","btn btn-danger");
      reset.setAttribute("onclick","empty()");
    }, 3000);
  }
}


function winCheck()
{
  let markBox1 = document.getElementById("box1").innerHTML;
  let markBox2 = document.getElementById("box2").innerHTML;
  let markBox3 = document.getElementById("box3").innerHTML;
  let markBox4 = document.getElementById("box4").innerHTML;
  let markBox5 = document.getElementById("box5").innerHTML;
  let markBox6 = document.getElementById("box6").innerHTML;
  let markBox7 = document.getElementById("box7").innerHTML;
  let markBox8 = document.getElementById("box8").innerHTML;
  let markBox9 = document.getElementById("box9").innerHTML;

  if(markBox1 != "" && markBox2 != "" && markBox3 != "")
  {
    if(markBox1 == markBox2 && markBox2 == markBox3)
    {
      success()
    }
  }

  if(markBox4 != "" && markBox5 != "" && markBox6 != "")
  {
    if(markBox4 == markBox5 && markBox5 == markBox6)
    {
      success()
    }
  }

  if(markBox7 != "" && markBox8 != "" && markBox9 != "")
  {
    if(markBox7 == markBox8 && markBox8 == markBox9)
    {
      success()
    }
  }

  if(markBox1 != "" && markBox5 != "" && markBox9 != "")
  {
    if(markBox1 == markBox5 && markBox5 == markBox9)
    {
      success()
    }
  }

  if(markBox3 != "" && markBox5 != "" && markBox7 != "")
  {
    if(markBox3 == markBox5 && markBox5 == markBox7)
    {
      success()
    }
  }

  if(markBox1 != "" && markBox4 != "" && markBox7 != "")
  {
    if(markBox1 == markBox4 && markBox4 == markBox7)
    {
      success()
    }
  }

  if(markBox2 != "" && markBox5 != "" && markBox8 != "")
  {
    if(markBox2 == markBox5 && markBox5 == markBox8)
    {
      success()
    }
  }

  if(markBox3 != "" && markBox6 != "" && markBox9 != "")
  {
    if(markBox3 == markBox6 && markBox6 == markBox9)
    {
      success()
    }
  }

  if(markBox1 !="" && markBox2 !="" && markBox3 !="" && markBox4 !="" && markBox5 !="" && markBox6 !="" && markBox7 !="" && markBox8 !="" && markBox9 !="")
  {
    draw();
  }

}









