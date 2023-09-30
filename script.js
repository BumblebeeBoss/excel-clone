const header = document.getElementById("header");
const body = document.getElementById("body");

for (let i = 65; i <= 90; i++) {
  const bold = document.createElement("b");
  const char = String.fromCharCode(i);
  bold.innerText = char;
  header.appendChild(bold);
}

// const row=document.createElement("div");
function createAndAppendRow(rowNumber) {
  const row = document.createElement("div"); //   <div></div>           
  row.className = "row";//   <div class=row></div>
//   in each row we have to create one bold element for s.no and 26 div element for cell
  for (let i = 64; i <= 90; i++) {
    if (i == 64) {
        // this cell represent the s.no
      const b = document.createElement("b");
      b.innerText = `${rowNumber}`;
      row.appendChild(b);
    } else {
        // this cell represent the empty cells
      const cell = document.createElement("div");
      cell.contentEditable="true"
      cell.id=`${String.fromCharCode(i)}${rowNumber}`;   //dynamic and unique id like c7 ,g3 etc
    //   cell.addEventListener
      cell.addEventListener("focus",oncellfocus);
      row.appendChild(cell);
    }
  }
  body.appendChild(row);
}
// create 100 rows by calling  createAndAppendRow() function 100 times
for (let i = 1; i <= 100; i++) {
  createAndAppendRow(i);
}
// const activeCellElement=document.getElementById("active-cell");

// function oncellfocus(event){
//     // whwnever cell is focused change the active cell value to be the id of thecell
//     // update the active cell
//     activecell=event.target.id;
//     activeCellElement.innerText=activeCell;
// } 
