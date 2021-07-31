function reflex_agent(location, state){
    if (state == "DIRTY"){
      return "CLEAN"
    }else if (location == "A"){
      return "RIGHT"
    }else if (location == "B"){
      return "LEFT"
    }
}

function setColor(states) { 
  if(states[1] == "DIRTY"){
    document.getElementById("A").classList.add("sucio")
    document.getElementById("A").classList.remove("limpio")
  }else if(states[1] == "CLEAN"){
    document.getElementById("A").classList.add("limpio")
    document.getElementById("A").classList.remove("sucio")
  }

  if(states[2] == "DIRTY"){
    document.getElementById("B").classList.add("sucio")
    document.getElementById("B").classList.remove("limpio")
  }else if(states[2] == "CLEAN"){
    document.getElementById("B").classList.add("limpio")
    document.getElementById("B").classList.remove("sucio")
  }
}

function getState(states) {
  let habitacion = states[0] == "A" ? 0 : 4;
  let estadoA = states[1] == "CLEAN" ? true : false; 
  let estadoB = states[2] == "CLEAN" ? true : false
  if(!estadoA && !estadoB){
    return habitacion + 1
  }else if(!estadoA && estadoB){
    return habitacion + 2
  }else if(estadoA && !estadoB){
    return habitacion + 3
  }else if(estadoA && estadoB){
    return habitacion + 4
  }
}

function contador(num){
  switch (num) {
    case 1:
      estado1++;
      document.getElementById("1").innerHTML = estado1;
      break;
    case 2:
      estado2++;
      document.getElementById("2").innerHTML = estado2;
      break;
    case 3:
      estado3++;
      document.getElementById("3").innerHTML = estado3;
      break;
    case 4:
      estado4++;
      document.getElementById("4").innerHTML = estado4;
      break;
    case 5:
      estado5++;
      document.getElementById("5").innerHTML = estado5;
      break;
    case 6:
      estado6++;
      document.getElementById("6").innerHTML = estado6;
      break;
    case 7:
      estado7++;
      document.getElementById("7").innerHTML = estado7;
      break;
    case 8:
      estado8++;
      document.getElementById("8").innerHTML = estado8;
      break;
  }
}

function test(states){
       var location = states[0];
       if(location == "A"){
        document.getElementById("imgA").classList.remove("invisible")
        document.getElementById("imgB").classList.add("invisible")
       }else if(location == "B"){
        document.getElementById("imgA").classList.add("invisible")
        document.getElementById("imgB").classList.remove("invisible")
       }		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       setColor(states);
       var actual = getState(states)
       contador(actual)
       document.getElementById("actual").innerHTML = actual
       
       if (action_result == "CLEAN"){
         if (location == "A"){
            states[1] = "CLEAN"
          }else if(location == "B"){ 
            states[2] = "CLEAN"
          };
       }
       else if (action_result == "RIGHT") states[0] = "B";
       else if (action_result == "LEFT") states[0] = "A";		
 setTimeout(function(){ test(states); }, 5000);
}

var states = ["A","DIRTY","DIRTY"];
var estado1 = 0
var estado2 = 0
var estado3 = 0
var estado4 = 0
var estado5 = 0
var estado6 = 0
var estado7 = 0
var estado8 = 0
test(states);