const activeCellElement=document.getElementById("active-cell");
const textAlignElements=document.getElementsByClassName("textAlign");

// active cell defines which cell is selected/active
// intially it is null means no cell is selected
let activeCell=null;
const defaultOptionsState={
    fontfamily:"",
    isBoldSelected:false,
    isItalicSelected:false,
    isUnderLineSelected:false,
    textAlign:"left",// it can have left| center|right
    textColor:"#000",
    backgroundColor:"#fff",
    fontSize:14,

};
let activeOptionsState;
// const activeOptionsState={...defaultOptionsState};



// below function is triggerd when cell is focused
function oncellfocus(event){

    // whwnever cell is focused change the active cell value to be the id of thecell
    // update the active cell
    activeCell=event.target;
    activeCellElement.innerText=event.target.id;

    // initialise the state of this cell .. we have to know the every cell computed style which is focusd so every time a cell is selected we have to store the property of that cell
    const computedStyle=getComputedStyle(activeCell);
     activeOptionsState={
        fontfamily:computedStyle.fontfamily,//"true" if this condition is true otherwise "false"
        isBoldSelected:computedStyle.fontWeight==="600",//"true" if this condition is true otherwise "false"
        isItalicSelected:computedStyle.fontWeight==="italic",//"true" if this condition is true otherwise "false"
        isUnderLineSelected:computedStyle.fontWeight==="underLine",//"true" if this condition is true otherwise "false"
        textAlign:computedStyle.textAlign,// it can have left| center|right
        textColor:computedStyle.color,//"true" if this condition is true otherwise "false"
        backgroundColor:computedStyle.backgroundColor,//"true" if this condition is true otherwise "false"
        fontSize:computedStyle.fontSize,
     }
} 

function onClickBold(boldButton){
    // this function will be triggred when user clicks the bold button
// 1 - toggle "active-option" class for the buttton
// 2.get the selected cell
   boldButton.classList.toggle("active-option");
//    const selectedCell=document.getElementById("activeCell.id");
   if(activeCell){
    //   const fontWeight=getComputedStyle(activeCell).fontWeight;
    if(activeOptionsState.isBoldSelected===false){
    //   if(fontWeight==="400"){
        // make the text to bold
        activeCell.style.fontWeight="600";
        activeOptionsState.isBoldSelected=true;
      }
      else{
        // make the text to normal
        activeCell.style.fontWeight="400";
        activeOptionsState.isBoldSelected=false;

      }
   }
    // ***
}
function onClickitalic(italicButton){
   italicButton.classList.toggle("active-option");
   if(activeCell){
    //  const fontStyle=getComputedStyle(activeCell).fontStyle;
      if(activeOptionsState.isItalicSelected===false){
    //  if(fontStyle!="italic"){
        activeCell.style.fontStyle="italic"
        activeOptionsState.isItalicSelected=true;
     }
     else{
        activeCell.style.fontStyle="normal"
        activeOptionsState.isItalicSelected=false;
     }
   }
}

function onClickUnderline(underLineButton){
    underLineButton.classList.toggle("active-option");
    if(activeCell){
    if(activeOptionsState.isUnderLineSelected){
        //    if text is underlined => none
            activeCell.style.textDecoration="none"
            // activeOptionsState.isUnderLineSelected=false;
         }
         else{
            activeCell.style.textDecoration="underline"
            // activeOptionsState.isUnderLineSelected=true;
         }
         activeOptionsState.isUnderLineSelected=!activeOptionsState.isUnderLineSelected;  
}}     

 function highLightTextAlignButtons(textAlignValue){  // assume  textAlignValue is"right" here
        // textAlignElement
    // if textAlignValue=="left" than we have to highlight only left button
    // if textAlignValue=="right" than we have to highlight only right button
    // if textAlignValue=="center" than we have to highlight only center button
    for(let i=0;i<textAlignElements.length;i++){
        if(textAlignElements[i].getAttribute("data-value")==textAlignValue){
              textAlignElements[i].classList.add("active-option");
        }
        else{
            textAlignElements[i].classList.remove("active-option");
        }
    }
 }
function onClickTextAlign(textAlignbutton){
         let selectedValue= textAlignbutton.getAttribute("data-value");//  if we select right then selectedValue will be "right" and default value will be "left"
        //  console.log(selectedValue);
        highLightTextAlignButtons(selectedValue); //  assume we are passing "right" as a selectedValue 

        if(activeCell){  //if any of cell is selected
           activeCell.style.textAlign=selectedValue; // center
           activeOptionsState.textAlign=selectedValue;
        }
}
function onChangeTextColor(textColorInput){
       let selectedColor=textColorInput.value;
       if(activeCell){
        activeCell.style.color=selectedColor;
        activeOptionsState.Color=selectedColor;
       }
}

function onChangeBackgroundColor(backgroundColorInput){
    let selectedColor=backgroundColorInput.value;
    if(activeCell){
     activeCell.style.backgroundColor=selectedColor;
     activeOptionsState.backgroundColor=selectedColor;
    }
}