let numKrark = 0;

const increaseKrark = () => {
    numKrark++;
    displayKrarks();
}

const decreaseKrark = () => {
    numKrark--;
    displayKrarks();
}

const displayKrarks = () => {
    const krarkDiv = document.getElementById('krarkDiv');
    krarkDiv.innerHTML = "You got " + numKrark + " karks. :)";
}

const castSpell = () => {
    let failCounter = 0;
    let passCounter = 0;

    let i;
    for(i = 0 ; i < numKrark; i++){
        let rand = Math.ceil(Math.random() * 2);
        console.log(rand);
        if(rand == 1) failCounter++;
        else passCounter++;
    }

    const resultDiv = document.getElementById('resultDiv');
    const text = `<div class="success-casts">Successful Casts: <span class="result-span">${passCounter}</span></div>
                  <br>
                  <div class="fail-casts">Return to hand? <span class="result-span"> ${failCounter == 1 ? "Put that shit back in your hand." : "NOPE."} </span></div>`
    resultDiv.innerHTML = text;
}