var songList = [{songName:"Song 1", path:"song1.mp3",cover:"singer1.jpg"},
             {songName:"Song 2", path:"song2.mp3",cover:"singer2.jpg"},
             {songName:"song 3", path:"song3.mp3",cover:"singer3.jpg"},
             {songName:"song 4", path:"song4.mp3",cover:"singer1.jpg"},
             {songName:"song 5", path:"song5.mp3",cover:"singer1.jpg"}, ]

var songIndex = 0;
var song = new Audio("song1.mp3");
var masterPlay = document.querySelector(".icons .fa-circle-play");
var gif = document.querySelector(".songinfo img");
var songProgress = document.querySelector("#progressBar");


// Play button event
masterPlay.addEventListener("click", function () {
    if (song.paused || song.currentTime<=0) {
      song.play();
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity=1;
    }
    else{
      song.pause();
      masterPlay.classList.remove("fa-circle-pause");
      gif.style.opacity=0;
    }
})

// updating progress bar
song.addEventListener('timeupdate',function () {
  var currentProgress = ((song.currentTime/song.duration)*100);
  songProgress.value = currentProgress;
})

songProgress.addEventListener('change', function (){
  song.currentTime = song.duration*songProgress.value/100;
})


for(var i=0;i<document.querySelectorAll(".songItemlist").length;i++){
    document.querySelectorAll(".songItemlist img")[i].src=songList[i].cover;
}

for(var i=0;i<document.querySelectorAll(".songItemlist").length;i++){
    document.querySelectorAll(".songItemlist .songName")[i].innerHTML=songList[i].songName;
}



for(var i =0;i<document.querySelectorAll(".songItemlist i").length;i++){
    document.querySelectorAll(".songItemlist i")[i].addEventListener("click",function (event){
        makeAllplay();
        var songIndex = parseInt(event.target.id);
        event.target.classList.remove("fa-circle-play");
        event.target.classList.add("fa-circle-pause");
        song.src = `song${songIndex}.mp3`;
        song.currentTime=0;
        song.play();
        //document.querySelector(".songinfo").textContent=`song ${songIndex}`;
        document.querySelector(".songinfo .songnameTag").textContent=songList[songIndex].songName;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");

    });
}


document.querySelector(".icons .fa-forward").addEventListener("click", function () {
    if(songIndex>5){
      songIndex=1;
    }
    else{
      songIndex+=1;
    }
    song.src = `song${songIndex}.mp3`;

    song.currentTime=0;
    song.play();
    document.querySelector(".songinfo .songnameTag").textContent=songList[songIndex].songName;
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
})

document.querySelector(".icons .fa-backward").addEventListener("click", function () {
    if(songIndex<1){
      songIndex=5;
    }
    else{
      songIndex-=1;
    }
    song.src = `song${songIndex}.mp3`;
    song.currentTime=0;
    song.play();
    document.querySelector(".songinfo .songnameTag").textContent=songList[songIndex].songName;
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
})





function makeAllplay(){
  for(var i =0;i<document.querySelectorAll(".songItemlist i").length;i++){
    document.querySelectorAll(".songItemlist i")[i].classList.add("fa-circle-play");
    document.querySelectorAll(".songItemlist i")[i].classList.remove("fa-circle-pause");
  }

}
