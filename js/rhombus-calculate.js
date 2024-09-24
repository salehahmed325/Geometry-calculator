//function to calculate the area of a rhombus
function calculateRhombusArea(){
    
    //get the value of rhombus diagonal1
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal1').value;
    const diagonal1 = parseFloat(rhombusDiagonal1Input);

    //get the value of rhombus diagonal2
    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal2').value;
    const diagonal2 = parseFloat(rhombusDiagonal2Input);

    //calculate the rhombus area
    const rhombusArea = (diagonal1 * diagonal2) / 2;

    //display the parallelogram area on the output field
    const displayRhombusArea = document.getElementById('result');
    displayRhombusArea.innerText = rhombusArea;

    //clear the input fields
    document.getElementById('rhombus-diagonal1').value = '';
    document.getElementById('rhombus-diagonal2').value = '';
}