# Ago-Popup.js
Hi my name is Enes Ago, i made this js library for making popups more easier.
first add <link rel="stylesheet" href="css/apo-popup.min.css">.Now make a button for popup(ex: 
<button id="open-popup">open popup</button>). After that create a div for the popup (example <div></div>). Then add:
"
    <div id="overlay"></div>
        <div class="popup" id="popup">
            <div class="popup-div">
            </div>
            <button class="popup-button" id="popup-button" onclick="newpopup.Close()">close</button>
        </div>
"
so now we need script tag. Now add:
    <script src="js/ago-popup.min.js"></script>
and for making ner popup:
    const newpopup = new Popup(id name);
last make event with $id() function (that selects id):
    $id("open-popup").addEventListener("click", newpopup.Open).

Inside popup-div u can add:

            (
                <ul>
                    <li>
                        <h2>head</h2>
                    </li>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam id vitae optio, molestias enim perferendis! 
                            Earum nihil cum doloribus magnam rerum! 
                            Pariatur numquam voluptates quae quidem veritatis earum tenetur doloremque?
                        </p>
                    </li>
                </ul>
            )


    Here is demo code:
            "<link rel="stylesheet" href="css/apo-popup.min.css">" at head
    and this at body:
    (
        <button id="open-popup">open popup</button>
        <div>
        <div id="overlay"></div>
        <div class="popup" id="popup">
            <div class="popup-div">
                <ul>
                    <li>
                        <h2>head</h2>
                    </li>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam id vitae optio, molestias enim perferendis! 
                            Earum nihil cum doloribus magnam rerum! 
                            Pariatur numquam voluptates quae quidem veritatis earum tenetur doloremque?
                        </p>
                    </li>
                </ul>
            </div>
            <button class="popup-button" id="popup-button" onclick="newpopup.Close()">close</button>
        </div>
        </div>
        <script src="js/ago-popup.min.js"></script>
    <script>
        const newpopup = new Popup("popup");
        $id("open-popup").addEventListener("click", newpopup.Open)
    </script>
    )

