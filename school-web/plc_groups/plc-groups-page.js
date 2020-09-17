function loadPage(staff,plc){
    var wrapper = document.getElementById("content-wrapper");

    

}

function loadPlcDivs(plc){
    Object.entries(plc).forEach( entry => {
        const [plcKey, plcFields] = entry;

        const plcDiv = document.createElement("div");
        plcDiv.id = plcKey;

        const plcHTML = `
            
        `;
    })
}

function loadStaff(staff){
    Object.entries(staff).forEach( entry => {
        const [staffKey, staffFields] = entry;
        
        //implement staff card here.
        //add staff card to correct plc hidden card.
    })
}