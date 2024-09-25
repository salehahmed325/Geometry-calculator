//function to calculate the area of a ellipse
function calculateEllipseArea(){
    
    //get the value of ellipse a axis
    const ellipseAAxisInput = document.getElementById('ellipse-a-axis').value;
    const aAxis = parseFloat(ellipseAAxisInput);

    //get the value of ellipse b axis
    const ellipseBAxisInput = document.getElementById('ellipse-b-axis').value;
    const bAxis = parseFloat(ellipseBAxisInput);

    //calculate the ellipse area
    const ellipseArea = 3.1416 * aAxis * bAxis;

    //display the ellipse area value on the output field
    const displayEllipseArea = document.getElementById('result');
    displayEllipseArea.innerText = ellipseArea;
    
    //clear the input fields
    document.getElementById('ellipse-a-axis').value = '';
    document.getElementById('ellipse-b-axis').value = '';
    
}