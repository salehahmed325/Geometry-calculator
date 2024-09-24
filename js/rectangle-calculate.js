//function to calculate the area of a rectangle
function calculateRectangleArea(){

    //get value of rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width').value;
    const width = parseFloat(rectangleWidthInput);

    //get value of rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(rectangleLengthInput);

    //calculate the rectangle area
    const rectangleArea = width * length;

    //display the rectangle area on the output field
    const displayRectangleArea = document.getElementById('result');
    displayRectangleArea.innerText = rectangleArea;

    //clear the input fields
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';
}