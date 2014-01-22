
/**
 * Ky funksion luan nje note te kerkuar me instrumentin e kerkuar
 * @param string pitch (nota)
 * @param string instrument (instrumenti)
 * @returns void
 */
function playTone(pitch, instrument) {
    
    // Krijohet objekti Audio
    var tone = new Audio();
    
    // Direktoria rrenje per notat muzikore
    var path = "../../data/instruments/";
    
    // Ne varesi te instrumentit zgjidhet direktoria e notave muzikore te 
    // instrumentit
    switch (instrument) {
        case "a_guitar":
            path += "guitar/acoustic/";
            break;
        case "e_guitar":
            path += "guitar/electric/";
            break;
        default:
            path += instrument + "/";
    }
    
    // Zgjidhet nota
    tone.src = path+pitch+".ogg";
    
    // Luhet nota
    tone.play();
    
    /**
     * Kur mbaron nje note se luajturi, atehere zhduket emri i notes nga 
     * ekrani led
     */
    tone.addEventListener("ended", function() { 
        document.getElementById("ledValue").innerHTML = " "; 
    }, true);
    
}