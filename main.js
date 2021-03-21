canvas = new fabric.Canvas('canvas');

object_x = 10;
object_y = 10;

object_width = 140
object_height = 150

var body_part = "";

function load_body_part(get_image){
        fabric.Image.fromURL(get_image, function(img){
            body_part = img;
            body_part.scaleToWidth(object_width);
            body_part.scaleToHeight(object_height);    
            body_part.set({
                top:player_pos_y,
                left:player_pos_x
            });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPress = e.keycode
console.log(keyPress);

    if(e.shiftKey && keyPress == '77'){
        console.log("shift and m are pressed together");
        block_height_img = block_height_img - 10;
        block_width_img = block_width_img - 10;
        document.getElementById("current_height").innerHTML = block_height_img;
        document.getElementById("current_width").innerHTML = block_width_img;
    }
    if(e.shiftKey && keyPress == '80'){
        console.log("shift and p are pressed together");
        block_height_img = block_height_img + 10;
        block_width_img = block_width_img + 10;
        document.getElementById("current_height").innerHTML =block_height_img;
        document.getElementById("current_width").innerHTML = block_width_img;
    }
    if(keyPress == '66'){
        console.log('b');
        load_body_part("spiderman_body.png");
    }
    if(keyPress == '72'){
        console.log('h');
        load_body_part("ironman_face.png");
    }
    if(keyPress == '70'){
        console.log('f');
        load_body_part("hulk_legs.png");
    }
    if(keyPress == '82'){
        console.log('r');
        load_body_part("thor_right_hand.png");
    }
    if(keyPress == '76'){
        console.log('l');
        load_body_part("captain_america_left_hand.png");
    }
}