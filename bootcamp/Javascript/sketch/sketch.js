 $(document).ready(function(){
    run(); 
    
    
});

$(window).resize(resizeCells)

let rows = 25;

function run() {
    
    let wrapper = document.getElementById("sketch-wrapper");
    let wrapperWidth = wrapper.clientWidth;
    let cellWidth = wrapperWidth / rows;
    
    for(let i = 0; i < rows*rows; i++){
        let cell = document.createElement("div");
        cell.style.cssText = `width:${cellWidth}px; height:${cellWidth}px;`;
        cell.classList.add("cell");
        wrapper.appendChild(cell);
    }

    let mouseIsDown = false;
    $(".cell").click(function(){
        if(mouseIsDown)
            mouseIsDown = false;
        else
            mouseIsDown = true;

        let color = $("#colorInput").val();
        console.log(color);

        this.style.backgroundColor = color;
    })

    $(".cell").hover(function(){
        if(mouseIsDown){
            let color = $("#colorInput").val();
            this.style.backgroundColor = color;
            //check to see if classList contains cell-active-%, then add new class
        }
    });

    $("#numberButton").click(function(){
        resetGrid();
    });

    
}


function resetGrid(){
    rows = $("#numberInput").val();
        removeCells();
        run();
}


function removeCells(){
    let wrapper = document.getElementById("sketch-wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
}

function resizeCells(){
    $(".cell").css("width", $("#sketch-wrapper").width()/rows);
    $(".cell").css("height",$(".cell").width());
}