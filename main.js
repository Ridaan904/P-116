function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZKH6j1xDM/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r +","+ random_number_g + ","+ random_number_b +")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_b +","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animals');

    if(results[0].label == "Neigh"){
        img.src = "horse.gif";
    } else if(results[0].label == "Bark"){
        img.src = "corgi-excited.gif";
    } else if(results[0].label == "Goats"){
        img.src = "aff69f35b885386379a7de1f7b07ecfa.gif";
    } else if(results[0].label == "Cat"){
        img.src = "happy-cat-21.webp";
    }
    }
}