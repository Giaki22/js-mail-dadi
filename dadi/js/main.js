document.addEventListener('keyup',
    function(event) {
        if(event.code === 'Space') {
            const u = Math.floor(Math.random() * 6) + 1;
            const c = Math.floor(Math.random() * 6) + 1;
            console.log(`${c} ${u}`);
            if (u>c) {
                alert("Hai vinto");
            }
            else if (c>u) {
                alert("Hai Perso");
            }
            else{
                alert("Pari");
            }
        }
    }
);