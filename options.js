// // we manage the options selection

// const activeCellElement = document.getElementById("active-cell");
// const textAlignElements = document.getElementsByClassName("text-align");
// const boldButton = document.getElementById("bold");
// const italicButton = document.getElementById("italic");
// const underlinedButton = document.getElementById("underlined");

// // activeCell defines which cell is selected / active.
// // intially it will null indicating that no cell is selected.
// let activeCell = null;

// let activeOptionsState;

// function toggleButtonsStyle(button, isSelected) {
//   if (isSelected) {
//     // currently selected cell in the bold state.
//     button.classList.add("active-option");
//   } else {
//     button.classList.remove("active-option");
//   }
// }

// function highlightOptionButtonsOnFocus() {
//   // check if the cell is in the bold state or not .
//   // if (activeOptionsState.isBoldSelected) {
//   //   // currently selected cell in the bold state.
//   //   boldButton.classList.add("active-option");
//   // } else {
//   //   boldButton.classList.remove("active-option");
//   // }

//   toggleButtonsStyle(boldButton, activeOptionsState.isBoldSelected);

//   // check if the selected cell is italic or not .
//   // if (activeOptionsState.isItalicSelected) {
//   //   // the current cell is italic text.
//   //   italicButton.classList.add("active-option");
//   // } else {
//   //   italicButton.classList.remove("active-option");
//   // }
//   toggleButtonsStyle(italicButton, activeOptionsState.isItalicSelected);

//   // check if the selected cell is underline or not .

//   // if (activeOptionsState.isUnderLineSelected) {
//   //   // the cell is underlined
//   //   underlinedButton.classList.add("active-option");
//   // } else {
//   //   underlinedButton.classList.remove("active-option");
//   // }
//   toggleButtonsStyle(underlinedButton, activeOptionsState.isUnderLineSelected);

//   // get the textAlign value
//   highlightTextAlignButtons(activeOptionsState.textAlign);
//   // highlightTextAlignButtons("start" | "right" | "center")
// }

// // below function will be triggered whenever cell is focused.
// function onCellFocus(e) {
//   // whenever a cell is focused change the activeCell value to be the id of cell.
//   if (activeCell && activeCell.id === e.target.id) {
//     // previously selected cell is equal to the currently selected cell.
//     return;
//   }
//   activeCell = e.target;
//   activeCellElement.innerText = e.target.id;
//   // intialise the state of this cell.
//   const computedStyle = getComputedStyle(activeCell);
//   activeOptionsState = {
//     fontFamily: computedStyle.fontFamily,
//     isBoldSelected: computedStyle.fontWeight === "600",
//     isItalicSelected: computedStyle.fontStyle === "italic",
//     isUnderLineSelected: computedStyle.textDecoration.includes("underline"),
//     textAlign: computedStyle.textAlign,
//     textColor: computedStyle.color,
//     backgroundColor: computedStyle.backgroundColor,
//     fontSize: computedStyle.fontSize,
//   };

//   highlightOptionButtonsOnFocus();
// }

// function onClickBold(boldButton) {
//   // this function will be triggered when user clicks on the Bold button.
//   /**
//    * 1. toggle `active-option` class for the button.
//    * 2. get the selected cell.
//    */
//   boldButton.classList.toggle("active-option");
//   if (activeCell) {
//     if (activeOptionsState.isBoldSelected === false) {
//       // make the text to bold
//       activeCell.style.fontWeight = "600";
//     } else {
//       // make the text to normal
//       activeCell.style.fontWeight = "400";
//     }
//     activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
//   }
// }

// function onClickItalic(italicButton) {
//   /**
//    * 1. toggle the active-option class for the italic button.
//    */
//   italicButton.classList.toggle("active-option");
//   if (activeCell) {
//     if (activeOptionsState.isItalicSelected) {
//       // the text already italic.
//       activeCell.style.fontStyle = "normal";
//     } else {
//       activeCell.style.fontStyle = "italic";
//     }
//     activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
//   }
// }

// function onClickUnderline(underlinedButton) {
//   underlinedButton.classList.toggle("active-option");
//   if (activeCell) {
//     if (activeOptionsState.isUnderLineSelected) {
//       // if the text is underlined => none
//       activeCell.style.textDecoration = "none";
//     } else {
//       activeCell.style.textDecoration = "underline";
//     }
//     activeOptionsState.isUnderLineSelected =
//       !activeOptionsState.isUnderLineSelected;
//   }
// }

// // the below function task is to take the textAlign value and decides which alignment button needs to highlighted or not.
// function highlightTextAlignButtons(textAlignValue) {
//   // textAlignValue === "left" => we have to highlight only left button
//   // textAlignValue === "right" => we have to highlight only right button
//   // textAlignValue === "center" => we have to highlight only center button
//   for (let i = 0; i < textAlignElements.length; i++) {
//     if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
//       textAlignElements[i].classList.add("active-option");
//     } else {
//       textAlignElements[i].classList.remove("active-option");
//     }
//   }
// }

// function onClickTextAlign(textAlignButton) {
//   let selectedValue = textAlignButton.getAttribute("data-value");
//   highlightTextAlignButtons(selectedValue);

//   // change the text alignment.
//   if (activeCell) {
//     activeCell.style.textAlign = selectedValue;
//     activeOptionsState.textAlign = selectedValue;
//   }
// }

// function onChangeTextColor(textColorInput) {
//   let selectedColor = textColorInput.value;
//   if (activeCell) {
//     activeCell.style.color = selectedColor;
//     activeOptionsState.color = selectedColor;
//   }
// }

// function onChangeBackgroundColor(textColorInput) {
//   let selectedColor = textColorInput.value;
//   if (activeCell) {
//     activeCell.style.backgroundColor = selectedColor;
//     activeOptionsState.backgroundColor = selectedColor;
//   }
// }






const activeCellElement = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("textAlign");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underlined");

// active cell defines which cell is selected/active
// intially it is null means no cell is selected
let activeCell = null;
const defaultOptionsState = {
  fontfamily: "",
  isBoldSelected: false,
  isItalicSelected: false,
  isUnderLineSelected: false,
  textAlign: "left", // it can have left| center|right
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};
let activeOptionsState;
// const activeOptionsState={...defaultOptionsState};

function toggleButtonsStyle(selctedButton, isSelected) {
  if (isSelected) {
    // currently selected cell is in the bold state
    selctedButton.classList.add("active-option");
  } else {
    selctedButton.classList.remove("active-option");
  }
}

function highLightOptionbuttonOnFocus() {
  // check if the cell is in the bold state or not
  //  if(activeOptionsState.isBoldSelected){
  //     // currently selected cell is in the bold state
  //     boldButton.classList.add("active-option");
  //  }
  //  else{
  //     boldButton.classList.remove("active-option");
  //  }
  toggleButtonsStyle(boldButton, activeOptionsState.isBoldSelected);

  // check if the cell is in the italic state or not
  //  if(activeOptionsState.isItalicSelected){
  //     // currently selected cell is in the italic state
  //     italicButton.classList.add("active-option");
  //  }
  //  else{
  //     italicButton.classList.remove("active-option");
  //  }
  toggleButtonsStyle(italicButton, activeOptionsState.isItalicSelected);

  // check if the cell is in the underline state or not
  //   if(activeOptionsState.isUnderlineSelected){
  //     // currently selected cell is in the italic state
  //     underlineButton.classList.add("active-option");
  //  }
  //  else{
  //     underlineButton.classList.remove("active-option");
  //  }
  toggleButtonsStyle(underlineButton, activeOptionsState.isUnderLineSelected);
  // get the text alignvalue
  highLightTextAlignButtons(activeOptionsState.textAlign);
  // highlights text align buttons("start"|"right"|"center")
}

// below function is triggerd when cell is focused
function oncellfocus(event) {
  if (activeCell && activeCell.id === event.target.id) {
    //previously selected cell is equal to the currently selected cell
    return;
  }
  // whwnever cell is focused change the active cell value to be the id of thecell
  // update the active cell
  activeCell = event.target;
  activeCellElement.innerText = event.target.id;

  // initialise the state of this cell .. we have to know the every cell computed style which is focusd so every time a cell is selected we have to store the property of that cell
  const computedStyle = getComputedStyle(activeCell);
  activeOptionsState = {
    fontfamily: computedStyle.fontfamily, //"true" if this condition is true otherwise "false"
    isBoldSelected: computedStyle.fontWeight === "600", //"true" if this condition is true otherwise "false"
    isItalicSelected: computedStyle.fontWeight === "italic", //"true" if this condition is true otherwise "false"
    isUnderLineSelected: computedStyle.fontWeight === "underLine", //"true" if this condition is true otherwise "false"
    textAlign: computedStyle.textAlign, // it can have left| center|right
    textColor: computedStyle.color, //"true" if this condition is true otherwise "false"
    backgroundColor: computedStyle.backgroundColor, //"true" if this condition is true otherwise "false"
    fontSize: computedStyle.fontSize,
  };
  highLightOptionbuttonOnFocus();
}

function onClickBold(boldButton) {
  // this function will be triggred when user clicks the bold button
  // 1 - toggle "active-option" class for the buttton
  // 2.get the selected cell
  boldButton.classList.toggle("active-option");
  //    const selectedCell=document.getElementById("activeCell.id");
  if (activeCell) {
    //   const fontWeight=getComputedStyle(activeCell).fontWeight;
    if (activeOptionsState.isBoldSelected === false) {
      //   if(fontWeight==="400"){
      // make the text to bold
      activeCell.style.fontWeight = "600";
      activeOptionsState.isBoldSelected = true;
    } else {
      // make the text to normal
      activeCell.style.fontWeight = "400";
      activeOptionsState.isBoldSelected = false;
    }
  }
}


function onClickitalic(italicButton) {
  italicButton.classList.toggle("active-option");
  if (activeCell) {
    //  const fontStyle=getComputedStyle(activeCell).fontStyle;
    if (activeOptionsState.isItalicSelected === false) {
      //  if(fontStyle!="italic"){
      activeCell.style.fontStyle = "italic";
      activeOptionsState.isItalicSelected = true;
    } else {
      activeCell.style.fontStyle = "normal";
      activeOptionsState.isItalicSelected = false;
    }
  }
}

function onClickUnderline(underLineButton) {
  underLineButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isUnderLineSelected) {
      //    if text is underlined => none
      activeCell.style.textDecoration = "none";
      // activeOptionsState.isUnderLineSelected=false;
    } else {
      activeCell.style.textDecoration = "underline";
      // activeOptionsState.isUnderLineSelected=true;
    }
    activeOptionsState.isUnderLineSelected =
      !activeOptionsState.isUnderLineSelected;
  }
}

function highLightTextAlignButtons(textAlignValue) {
  // assume  textAlignValue is"right" here
  // textAlignElement
  // if textAlignValue=="left" than we have to highlight only left button
  // if textAlignValue=="right" than we have to highlight only right button
  // if textAlignValue=="center" than we have to highlight only center button
  for (let i = 0; i < textAlignElements.length; i++) {
    if (textAlignElements[i].getAttribute("data-value") == textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}
function onClickTextAlign(textAlignbutton) {
  let selectedValue = textAlignbutton.getAttribute("data-value"); //  if we select right then selectedValue will be "right" and default value will be "left"
  //  console.log(selectedValue);
  highLightTextAlignButtons(selectedValue); //  assume we are passing "right" as a selectedValue

  if (activeCell) {
    //if any of cell is selected
    activeCell.style.textAlign = selectedValue; // center
    activeOptionsState.textAlign = selectedValue;
  }
}
function onChangeTextColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.color = selectedColor;
    activeOptionsState.Color = selectedColor;
  }
}

function onChangeBackgroundColor(backgroundColorInput) {
  let selectedColor = backgroundColorInput.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColor;
    activeOptionsState.backgroundColor = selectedColor;
  }
}
