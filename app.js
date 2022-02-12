let tabs = document.getElementsByClassName("tab")

let tabArea = document.getElementById("tab").parentNode;

let newTab = tabs[0];
let clone;

let addTab = document.getElementsByClassName("add-tab")[0];


function addFeatures() {
    for(let i = 0; i < tabs.length; i++) {

    
        let exit = document.getElementsByClassName("exit");
        
    
        exit[i].addEventListener("click", function(e) {

            // console.log(tabs[i])
            // console.log(exit)

            this.parentNode.remove();

            
        });


        tabs[i].addEventListener("dragstart", dragStart);
        tabs[i].addEventListener("dragenter", dragEnter);
        tabs[i].addEventListener("dragover", dragOver);
        tabs[i].addEventListener("dragleave", dragLeave);
        tabs[i].addEventListener("dragend", dragEnd);
        tabs[i].addEventListener("drop", drop);


    
    }
}

addFeatures();

addTab.addEventListener("click", function(e) {

    clone = newTab.cloneNode(true);

    console.log(clone.childNodes[1])

    clone.childNodes[1].textContent = "tab " + (tabs.length+1);

    // console.log(clone.childNodes[1])

    
    if(tabs.length === 0) {
        document.getElementsByClassName("add-tab")[0].before(clone);
        addFeatures();
    } else {
        tabs[tabs.length-1].after(clone);
        addFeatures();
    }


})





// setInterval(function() {
//     console.log(tabs)
// }, 1000)


// DRAG AND DROP FEATURE

let dragSrcEl

function dragStart(e) {

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/plain", this.textContent);
    


    setTimeout(function() {
        e.target.classList.add("hide")
    }, 0)



}

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
}

function dragLeave(e) {

}

function dragEnd(e) {
    this.classList.remove("hide");
}

function drop(e) {

    
    e.stopPropagation();

    if(dragSrcEl !== this) {
        dragSrcEl.childNodes[1].textContent = this.childNodes[1].textContent;
        this.childNodes[1].textContent = e.dataTransfer.getData('text/plain');
        // console.log(this)
    }
    return false;
}