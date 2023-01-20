const posibleKeys = ['s', 'd', 'f', 'g', 'h', 'j', 'k'];
    
document.addEventListener('keydown', function(event) {
    if (!posibleKeys.includes(event.key)) { return };
    const currentEl = document.querySelector('#' + event.key);
    currentEl.classList.toggle('play');
   
    setTimeout(() => {
        currentEl.classList.toggle('play');
    }, 200);
    
    let audioPath = `./sound/note-${event.key}.mp3`;
    const audio = new Audio(audioPath);
    audio.play();
});