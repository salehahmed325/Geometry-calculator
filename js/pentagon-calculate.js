//function to calculate the area of a pentagon
function calculatePentagonArea(){
    
    //get the value of pentagon perimeter
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter').value;
    const perimeter = parseFloat(pentagonPerimeterInput);

    //get the value of pentagon base
    const pentagonBaseInput = document.getElementById('pentagon-base').value;
    const base = parseFloat(pentagonBaseInput);

    //calculate the pentagon area
    const pentagonArea = (perimeter * base) / 2;

    //display the pentagon area value on the output field
    const displayPentagonArea = document.getElementById('result');
    displayPentagonArea.innerText = pentagonArea;
    
    //clear the input fields
    document.getElementById('pentagon-perimeter').value = '';
    document.getElementById('pentagon-base').value = '';
}