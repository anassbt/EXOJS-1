// Memory game //


var choix1 = [];
var choix2 = [];
var compare = 0;
var images = ["img/Movie1.jpg", "img/Movie1.jpg", "img/Movie2.jpg", "img/Movie2.jpg", "img/Movie3.jpg", "img/Movie3.jpg", "img/Movie4.jpg", "img/Movie4.jpg", "img/Movie5.jpg", "img/Movie5.jpg", "img/Movie6.jpg", "img/Movie6.jpg", "img/Movie7.jpg", "img/Movie7.jpg"];
var imageDom = document.getElementsByClassName('card');






for (var position = images.length - 1; position >= 1; position--) {
    var hasard = Math.floor(Math.random() * (position + 1));
    var sauve = images[position];
    images[position] = images[hasard];
    images[hasard] = sauve;

}

for (var i = 0; i < imageDom.length; i++) {

    imageDom[i].className += " " + images[i];
}
for (var i = 0; i < images.length; i++) {
    imageDom[i].firstChild.src = images[i];
    console.log(images);
}

function stock(obj) {

    choix1.push(obj.classList[1]);
    choix2.push(obj.id);
    console.log(choix2);
    console.log(choix1);
}




function play(obj) {
    if (compare == 0) {

        stock(obj);
        console.log(choix1);

        obj.firstChild.style.opacity = "1";
        console.log(compare);
        compare++;

    } else {

        stock(obj);


        obj.firstChild.style.opacity = "1";
        console.log(compare);



        if (choix1[0] == choix1[1]) {
            console.log(choix1);


            alert("Good Game! Keep going ...");
						choix2 = [];
            choix1=[];
        } else {
            console.log(choix1);
            choix1 = [];
            alert("Damn!!! Born to be a Loser? TRY AGAIN !");
            console.log("choix2: " + choix2);

            for (var i = 0; i < choix2.length; i++) {
                console.log(document.getElementById(choix2[i]));

                document.getElementById(choix2[i]).firstChild.style.opacity = "0";
            }
						choix2 = [];
        }
        compare = 0;
    }

    console.log(choix1);


};

// Memory game //
