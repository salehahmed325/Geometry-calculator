function calculateRectangleArea(){

    //get value of triangle base
    const rectangleWidthInput = document.getElementById('rectangle-width').value;
    const width = parseFloat(rectangleWidthInput);

    //get value of triangle height
    const rectangleLengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(rectangleLengthInput);

    //calculate the triangle area
    const rectangleArea = width * length;
    console.log(rectangleArea);

    //display the triangle area on the output field
    const displayRectangleArea = document.getElementById('triangle-area');
    displayRectangleArea.innerText = rectangleArea;
}