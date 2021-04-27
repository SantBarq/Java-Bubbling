const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

btn.onclick = function() {
  videoBox.setAttribute('class','showing');
}

videoBox.addEventListener ('click', function(event) {
  switch (event.target.id) {
    case 'play':
      video.play();
      break;

    case 'pause':
      video.pause();
      break;

    case 'stop':
      video.pause();
      video.currentTime = 0;
      break;

    default:
      videoBox.setAttribute('class','hidden')
      break;
  }
  videoBox.setAttribute('class','hidden');
  console.log('videoBox.onclick');
},false);

video.addEventListener('click', function(event) {
  event.stopPropagation();
  video.play();
  console.log('video.onclick');
}, false);
