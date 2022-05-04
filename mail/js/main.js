const mails = ["lisa@mail.com","homer@mail.com","marge@mail.com","bart@mail.com"];
let s = false;

document.addEventListener('keyup',
    function(event) {
        if(event.code === 'Space') {
            const umail = prompt("Verifica simpson. Inserisci la tua mail");
            s = false;
            for (let i = 0; i < mails.length; i++) {
                if (umail == mails[i]){
                    s = true;
                }
            }
        }
        if (s == true) {
            alert("Accesso consentito");
        }
        else{
            alert("Accesso negato");
        }
    }
);            
