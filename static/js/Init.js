
/**
 * Egzekutohet sa ngarkohet tagu body
 * @return void
 */
function initElement() {
    
    /**
     * Selekton te gjithe celesat e tastieres dhe ne rast se njeri prej tyre 
     * shtypet ath luhet nota perkatese
     */
    var p = document.getElementsByClassName("key");
    for (var i=0; i < p.length; i++) {
        
        p[i].onclick = function() {
            
            // Shikohet cili instrument eshte selektuar per te zgjedhur tingujt
            var e = document.getElementById("instrument");
            var instr = e.options[e.selectedIndex].value;
            
            /**
             * Kontrollohet cili tast shtypet dhe ne varesi te tij jepet dhe
             * nota ne ekranin led
             */
            var ledValue = document.getElementById("ledValue");                        
            switch (this.id) {
                case 'C':
                case 'D':
                case 'E':
                case 'F':
                case 'G':
                case 'A':
                case 'B':
                    ledValue.innerHTML = this.id;
                    break;

                case 'C2': ledValue.innerHTML = "C'"; break;

                case 'C-sharp': ledValue.innerHTML = "C#"; break;
                case 'D-sharp': ledValue.innerHTML = "D#"; break;
                case 'F-sharp': ledValue.innerHTML = "F#"; break;
                case 'G-sharp': ledValue.innerHTML = "G#"; break;
                case 'A-sharp': ledValue.innerHTML = "A#"; break;
            } 

            // Luhet nota
            playTone(this.id,instr);        

        };
    }
};       