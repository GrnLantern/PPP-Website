//rotating image variables and functions
let pics = ["2dogs.jpg", "birdSolo.jpg", "catBird.jpg", "fishBowl.jpg", "tuxedoCat.jpg"];
let altText = ["Golden doodle and black lab sitting next to each other on an oriental rug tongues out happy",
    "A grey parakeet with white wings, a yello head, and orange cheeks perched on an open cage door",
    "A black cat with big yellow eyes laying looking off and a grey bird with a black chest sitting on the grass together calmly",
    "A goldfish in a slightly tilted bowl on a rock with blurry trees in the backgroung",
    "A black and white cat with green eyes looking directly at the camera laying on grey carpeted stairs."];
let i = 0;
let time = 5000;
let pic = document.rotatingImage;

function rotateImage() {
    pic.src = pics[i];
    pic.alt = altText[i];
    if (i < pics.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout(rotateImage, time);
   
}
addEventListener("load", rotateImage);