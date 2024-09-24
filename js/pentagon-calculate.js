//function to calculate the area of a pentagon
function calculatePentagonArea(){
    
    //get the value of pentagon perimeter
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter').value;
    const perimeter = parseFloat(pentagonPerimeterInput);
    console.log(perimeter);

    //get the value of pentagon base
    const pentagonBaseInput = document.getElementById('pentagon-base').value;
    const base = parseFloat(pentagonBaseInput);
    console.log(base);

    //calculate the pentagon area
    const area = (perimeter * base) / 2;
    console.log(area);

    //display the pentagon area value on the output field
    const displayPentagonArea = document.getElementById('result');
    displayPentagonArea.innerText = area;
    
    //clear the input fields
    document.getElementById('pentagon-perimeter').value = '';
    document.getElementById('pentagon-base').value = '';
}