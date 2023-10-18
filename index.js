button1 = document.querySelector("#submit");
console.log(button1);

output1 = document.querySelector(".div1");
output2 = document.querySelector(".inner-box");
mainDiv = document.querySelector(".page-div");
radiobuttons = document.querySelector("input[type=radio]");

function checkAns1() {
  var selected = document.getElementById("1b").checked;
  console.log(selected);
  if (selected) {
    output1.innerHTML =
      "<br>Your answer is right <br><br>Do you want to continue? <input name='yn' type='radio' id='y'><label for='y'>Yes</label><input name='yn' type='radio' id='n'><label for='n'>No</label> <br></br>";
    console.log(output1.innerHTML);
    output1.style.color = "green";
    output1.style.fontWeight = "bold";
    const dynamicButtonForNo = document.querySelector("#n");
    const dynamicButtonForYes = document.querySelector("#y");

    dynamicButtonForNo.addEventListener("change", function (index) {
      console.log(index);
      if (dynamicButtonForNo.checked) {
        output2.innerHTML =
          "Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
        output2.style.backgroundColor = "white";
        output2.style.color = "black";
        output2.style.margin = "auto";
        output2.style.padding = "2rem";
        output2.style.border = "1px solid blue";
        output2.style.width = "20%";
        output2.style.fontWeight = " bolder";
        mainDiv.style.filter = "blur(2px)";
      }
    });

    dynamicButtonForYes.addEventListener("change", function () {
      if (dynamicButtonForYes.checked) {
        output1.innerHTML = "";
      }
    });
  }
  if (!selected) {
    console.log("not right option");
    output2.innerHTML =
      "The answer was wrong. Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
    output2.style.backgroundColor = "white";
    output2.style.color = "black";
    output2.style.margin = "auto";
    output2.style.padding = "2rem";
    output2.style.border = "1px solid blue";
    output2.style.width = "20%";
    output2.style.fontWeight = " bolder";
    mainDiv.style.filter = "blur(2px)";
  }

  // output1.innerHTML = "";
  // else if (i === 2) {
  //   var selected = document.getElementById("2a").checked;
  //   console.log(selected);
  //   if (selected) {
  //     output1.innerHTML =
  //       "<br>Your answer is right <br><br>Do you want to continue? <input name='yn' type='radio' id='y'><label for='y'>Yes</label><input name='yn' type='radio' id='n'><label for='n'>No</label> <br></br>";
  //     output1.style.color = "green";
  //     output1.style.fontWeight = "bold";

  //     const dynamicButtonForNo = document
  //       .getElementById("n")
  //       .addEventListener("change", function () {
  //         if (dynamicButtonForNo.checked) {
  //           output2.innerHTML =
  //             "Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
  //           output2.style.backgroundColor = "white";
  //           output2.style.color = "black";
  //           output2.style.margin = "auto";
  //           output2.style.padding = "2rem";
  //           output2.style.border = "1px solid blue";
  //           output2.style.width = "20%";
  //           output2.style.fontWeight = " bolder";
  //           mainDiv.style.filter = "blur(2px)";
  //         }
  //       });
  //   }

  //   // output1.innerHTML = "";
  // } else if (i === 3) {
  //   var selected = document.getElementById("3c").checked;
  //   console.log(selected);
  //   if (selected) {
  //     output1.innerHTML =
  //       "<br>Your answer is right <br><br>Do you want to continue? <input name='yn' type='radio' id='y'><label for='y'>Yes</label><input name='yn' type='radio' id='n'><label for='n'>No</label> <br></br>";
  //     output1.style.color = "green";
  //     output1.style.fontWeight = "bold";

  //     const dynamicButtonForNo = document
  //       .getElementById("n")
  //       .addEventListener("change", function () {
  //         if (dynamicButtonForNo.checked) {
  //           output2.innerHTML =
  //             "Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
  //           output2.style.backgroundColor = "white";
  //           output2.style.color = "black";
  //           output2.style.margin = "auto";
  //           output2.style.padding = "2rem";
  //           output2.style.border = "1px solid blue";
  //           output2.style.width = "20%";
  //           output2.style.fontWeight = " bolder";
  //           mainDiv.style.filter = "blur(2px)";
  //         }
  //       });
  //   }

  //   // output1.innerHTML = "";
  // } else if (i === 4) {
  //   var selected = document.getElementById("4c").checked;
  //   console.log(selected);
  //   if (selected) {
  //     output1.innerHTML =
  //       "<br>Your answer is right <br><br>Do you want to continue? <input name='yn' type='radio' id='y'><label for='y'>Yes</label><input name='yn' type='radio' id='n'><label for='n'>No</label> <br></br>";
  //     output1.style.color = "green";
  //     output1.style.fontWeight = "bold";

  //     const dynamicButtonForNo = document
  //       .getElementById("n")
  //       .addEventListener("change", function () {
  //         if (dynamicButtonForNo.checked) {
  //           output2.innerHTML =
  //             "Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
  //           output2.style.backgroundColor = "white";
  //           output2.style.color = "black";
  //           output2.style.margin = "auto";
  //           output2.style.padding = "2rem";
  //           output2.style.border = "1px solid blue";
  //           output2.style.width = "20%";
  //           output2.style.fontWeight = " bolder";
  //           mainDiv.style.filter = "blur(2px)";
  //         }
  //       });
  //   }

  //   // output1.innerHTML = "";
  // } else if (i === 5) {
  //   var selected = document.getElementById("5a").checked;
  //   console.log(selected);
  //   if (selected) {
  //     output1.innerHTML =
  //       "<br>Your answer is right <br><br>Do you want to continue? <input name='yn' type='radio' id='y'><label for='y'>Yes</label><input name='yn' type='radio' id='n'><label for='n'>No</label> <br></br>";
  //     output1.style.color = "green";
  //     output1.style.fontWeight = "bold";

  //     const dynamicButtonForNo = document
  //       .getElementById("n")
  //       .addEventListener("change", function () {
  //         if (dynamicButtonForNo.checked) {
  //           output2.innerHTML =
  //             "Thankyou for participating <br> <br> <br><a href='index.html'>OK</a>";
  //           output2.style.backgroundColor = "white";
  //           output2.style.color = "black";
  //           output2.style.margin = "auto";
  //           output2.style.padding = "2rem";
  //           output2.style.border = "1px solid blue";
  //           output2.style.width = "20%";
  //           output2.style.fontWeight = " bolder";
  //           mainDiv.style.filter = "blur(2px)";
  //         }
  //       });
  //   }
  // }
}

button1.addEventListener("click", checkAns1);
