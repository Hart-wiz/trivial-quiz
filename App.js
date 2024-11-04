// intro to quiz

function intro() {
  var name = prompt("please input a username to start the quiz");
  alert("hello, " + name + ". This is general studies ");
}

var score = 0;

function quiz() {
  let questMount = prompt("what is the tallest mountain in the World ?");

  //   first quiz
  let questionmount = questMount.toLowerCase();
  if (questionmount == "everest") {
    score++;
    alert("correct");
  } else {
    alert("incorrect..the answer is everest, plz study more");
  }

  //   second
  let questPopu = prompt("what is the most populated country in the world?");
  let questionPopu = questPopu.toLowerCase();
  if (questionPopu == "india") {
    score++;
    alert("correct");
  } else {
    alert("incorrect.. the answer is india.");
  }

  //   third quiz
  let questCont = prompt("what is the largest continent in the world?");
  let questionCont = questCont.toLowerCase();
  if (questionCont == "asia") {
    score++;
    alert("correct");
  } else {
    alert("incorrect.. answer is Asia. do more of social studies");
  }

  //   fourth quiz
  let questNig = prompt("which continent is Nigeria situated ?");
  let questionNig = questNig.toLowerCase();
  if (questionNig == "africa") {
    score++;
    alert("correct");
  } else {
    alert("incorrect.. answer is Africa. plz, study more");
  }
  //   fifth quiz
  let questCap = prompt("what is the capital of Abia");
  let questionCap = questCap.toLowerCase();
  if (questionCap == "umuahia") {
    score++;
    alert("correct");
  } else {
    alert("incorrect.. answer is umuahia. almost there");
  }

  alert(" you scored " + score + "/5");
}

// running the functions
intro();

for (i = 0; i <= 3; i++) {
  quiz();
}
