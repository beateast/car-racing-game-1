function add()
{
    background_imgTag = new Image(); //difining variable to store image
    background_imgTag.onload = uploadBackground; // setting a function to onload the variable
    background_imgTag.src = background_image; // load image

    car1_imgTag = new Image(); //difining a variable to store image
    car1_imgTag.onload = uploadCar; //setting a function to onload the variable
    car1_imgTag.src = car1_image; // load image

    car2_imgTag = new Image(); // defining a variable to store image
    car2_imgTag.onload = uploadCar2; //setting a function to onload the variable
    car2_imgTag.src = car2_image; // load image
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar(){
    ctx.drawImage(car1_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, 0, 0, canvas.width, canvas.height);
}

car1_width = 120;
car1_height = 70;
car1_image = "car.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car_2.png";
car2_x = 20;
car2_y = 20;

window.addEventListener("keydown", my_keydown);




