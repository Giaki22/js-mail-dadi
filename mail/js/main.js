const mails = ["lisa@mail.com","homer@mail.com","marge@mail.com","bart@mail.com"]
document.addEventListener('keyup',
    function(event) {
        if(event.code === 'Space') {
            const umail = prompt("Verifica simpson. Inserisci la tua mail");
            for (let i = 0; i < mails.length; i++) {
                if (umail == mails[i]){
                    alert("Accesso consentito");   
                }
                else if (umail !== mails[mails.length]) {
                    alert("Accesso negato");
                }
            }
        }
    }
);            
