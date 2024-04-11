const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


// to show the updated notes

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

// to set the item for the local storage

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// for the pTag to be created

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})





// for the local storage so as to allow refreshing and update the screen

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});


// in other for the line break to ne initialiaze with an enta key

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
