
// Objekti Audio qe i korrespondon nje loopi
var loopAudio = new Audio(); 

/**
 * Ky funksion luan/ndalon nje loop te zgjedhur nga perdoruesi
 * @returns void
 */
function playLoop() {
    
    // Objekti i butonit play per loopin
    var playbtn = document.getElementById("playBtn");
    
    // Shikon cili loop eshte zgjedhur per tu luajtur
    var l = document.getElementById("loops");
    var loopToPlay = l.options[l.selectedIndex].value;
    
    /**
     * Shikon nqs shtypet butoni play/stop. 
     *      Nqs shtypet play luhet loopi.
     *      Nqs shtypet stop ndalohet se luajturi loopi.
     */
    switch (playbtn.name){
        case "play":
            
            // Zgjidhet loopi nga direktoria rrenje e loop - ave
            loopAudio.src = "../../data/loops/"+loopToPlay+".ogg";
            
            // Luhet loop-i
            loopAudio.play();
            
            // Sigurohet qe loop-i te luhet deri sa perdoruesi te shtype stop
            loopAudio.addEventListener("ended", function() {
                loopAudio.play();
            },true); 
            
            // Ndryshohet butoni nga play ne stop
            playbtn.name = "stop";
            playbtn.src = "/static/img/stop.png";
            break;
            
        case "stop":
            
            // Ndalohet se luajturi loop-i
            loopAudio.pause();
            loopAudio.currentTime=0;
            
            // Ndyshohet butoni nga stop ne play
            playbtn.name = "play";
            playbtn.src = "/static/img/play.png";
            break;
    }
}