function $id(selector) {
    let self = document.getElementById(selector);
    return self;
}

function Popup(selector="popup") {
    const self = {
        Open: () => {
            $id("overlay").style.display = "block";
            $id(selector).style.display = "block";
            $id(selector).style.opacity = "1";
        },
        Close: () => {
            $id("overlay").style.display = "none";
            $id(selector).style.display = "none";
            $id(selector).style.opacity = "0";
        }
    }
    return self;
}

