//function to calculate the area of a triangle
function calculateTriangleArea(){

    //get value of triangle base
    const triangleBaseInput = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseInput);

    //get value of triangle height
    const triangleHeightInput = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightInput);

    //calculate the triangle area
    const triangleArea = 0.5 * base * height;

    //display the triangle area on the output field
    const displayTriangleArea = document.getElementById('result');
    displayTriangleArea.innerText = triangleArea;

    //clear the input fields
    document.getElementById('triangle-base').value = '';
    document.getElementById('triangle-height').value = '';
}