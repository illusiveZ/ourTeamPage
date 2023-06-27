// Select all elements with class "imgBx" and store them in the "imgBx" variable
let imgBx = document.querySelectorAll(".imgBx");

// Select all elements with class "contentBx" and store them in the "contentBx" variable
let contentBx = document.querySelectorAll(".contentBx");

// Iterate over each element with class "imgBx"
for (var i = 0; i < imgBx.length; i++) {
  // Add a mouseover event listener to each "imgBx" element
  imgBx[i].addEventListener("mouseover", function () {
    // Loop through all elements with class "contentBx"
    for (var j = 0; j < contentBx.length; j++) {
      // Set the className of each "contentBx" element to "contentBx" (remove "active" class)
      contentBx[j].className = "contentBx";
    }

    // Get the element with the ID specified by the "data-id" attribute of the current "imgBx" element
    let content = document.getElementById(this.dataset.id);

    // If the element with the specified ID exists
    if (content) {
      // Set the className of that element to "contentBx active" (add "active" class)
      content.className = "contentBx active";
    }

    // Loop through all elements with class "imgBx"
    for (var k = 0; k < imgBx.length; k++) {
      // Set the className of each "imgBx" element to "imgBx" (remove "active" class)
      imgBx[k].className = "imgBx";
    }

    // Set the className of the current "imgBx" element to "imgBx active" (add "active" class)
    this.className = "imgBx active";
  });
}
