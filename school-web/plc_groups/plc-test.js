const url = "https://spreadsheets.google.com/feeds/list/11wOZB94H-sPdc3uXLDLozEGL-csUZPN7w6qMSxEjWLE/od6/public/values?alt=json";
let staffJSON = "";

const getJSON = () => {
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        staffJSON = out;
    })
    .then(loadPlcDivs(plc))
    .then(enableJQuery())
    .then(loadStaff)
    .catch(err => {throw err});
}

const loadPlcDivs = (plc) => {
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
                    <p>Meet our ${plcFields.title} teachers!</p>
                </div>

                </div>

            <div class="card__expander" id="${plcKey}-members">
                <i class="fa fa-close js-collapser">X</i>

                
            </div>
        `;
        
        plcDiv.innerHTML = plcHTML;
        document.getElementById(`${plcFields.area}`).appendChild(plcDiv);

    })
}

const loadStaff = () => {
    Object.entries(staffJSON.feed.entry).forEach(entry => {
        let staffData = entry[1];
        let fullName = staffData.gsx$name.$t;
        let [lastName, firstName] = fullName.split(",");
        let plcs = staffData.gsx$plc.$t.split(",");
        let courseTitles = staffData.gsx$courses.$t.split(",");
        let courseLinks = staffData.gsx$links.$t.split(",");
        

        //for each plc, create a staff card
        
        plcs.forEach(plc => {
            let courseNumber = 0;
            const staffDiv = document.createElement("div");
            staffDiv.id = "";
            staffDiv.classList.add("staff-profile");
            const staffHtml = `
                <div class="staff-left">
                    <img src="plc_pics/${lastName+firstName.trim().substring(0,1)}.jpg" class="staff-pic">
                    <div class="staff-name">${firstName} ${lastName}</div>
                </div>
                <div class="staff-right">
                    <div class="canvas-link-container">
                    ${courseTitles.map( courseTitle => `<a href=${courseLinks[courseNumber++]} target="_blank">${courseTitle}</a>`).join("")}
                    </div>
                </div>
                `;

            staffDiv.innerHTML = staffHtml;
            console.log(lastName,plc);
            document.getElementById(`${plc}-members`).appendChild(staffDiv);

        })

    });
}

const activeNavBtn = (activeNav) => {
    const containerDivs = document.querySelectorAll(".subject-container");
    
    containerDivs.forEach(container => {
        
        if(container.id === activeNav+"-container"){
            container.style.display = "block";
        }
        else  {
            container.style.display= "none";
            
        }
    })

    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(btn => {
        
        if(btn.id === activeNav+"-btn"){
            btn.classList.toggle("active-btn");
        }
        else  {
            btn.classList.remove("active-btn");
            
        }
    })


}