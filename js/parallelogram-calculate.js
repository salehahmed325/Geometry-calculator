//function to calculate the area of a rectangle
function calculateParallelogramArea(){
    
    //get value of parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base').value;
    const base = parseFloat(parallelogramBaseInput);

    //get value of parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height').value;
    const height = parseFloat(parallelogramHeightInput);

    //calculate the parallelogram area
    const parallelogramArea = base * height;

    //display the parallelogram area on the output field
    const displayParallelogramArea = document.getElementById('result');
    displayParallelogramArea.innerText = parallelogramArea;

    //clear the input fields
    document.getElementById('parallelogram-base').value = '';
    document.getElementById('parallelogram-height').value = '';

}