function loadPage(staff, plc) {
    var wrapper = document.getElementById("content-wrapper");

    loadPlcDivs(plc);
    enableJQuery();
    loadStaff(staff);
}

function loadPlcDivs(plc) {
    Object.entries(plc).forEach(entry => {
        const [plcKey, plcFields] = entry;

        const plcDiv = document.createElement("div");
        plcDiv.id = plcKey;
        plcDiv.classList.add("card");
        plcDiv.classList.add("is-collapsed");


        const plcHTML = `
            <div class="card__inner js-expander">
                <div plc-pic-wrapper>
                    <img class="plc-pic" src="plc_pics/${plcKey}.jpg">
                </div>

                <div class="plc-info">
                    <h1 class="plc-title">${plcFields.title}</h1>
                    <span class="plc-blurb">${plcFields.blurb}</span>
                    <p class="meet-btn">Meet our ${plcFields.title} teachers!</p>
                </div>

                </div>

            <div class="card__expander" id="${plcKey}-members">
                <i class="fa fa-close js-collapser">X</i>

                
            </div>
        `;

        plcDiv.innerHTML = plcHTML;
        console.log(plcFields.area, plcFields.title);
        document.getElementById(`${plcFields.area}`).appendChild(plcDiv);

    })
}

function loadStaff(staff) {
    Object.entries(staff).forEach(entry => {
        const [staffKey, staffFields] = entry;

        const staffDiv = document.createElement("div");
        staffDiv.id = staffKey;
        staffDiv.classList.add("staff-profile");
        const staffHtml = `
            <div class="staff-left">
                <img src="plc_pics/${staffKey}.jpg" class="staff-pic">
                <div class="staff-name">${staffFields.firstName} ${staffFields.lastName}</div>
            </div>
            <div class="staff-right">
                <div class="canvas-link-container">
                ${staffFields.classes.map( classLink => `<a href=${classLink[1]} target="_blank">${classLink[0]}</a>`).join("")}
                </div>
            </div>
            `;

            staffDiv.innerHTML = staffHtml;
            console.log(staffFields.plc);
            document.getElementById(`${staffFields.plc}-members`).appendChild(staffDiv);
    })
}