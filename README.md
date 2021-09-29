# Ago-Popup.js
Hi my name is Enes Ago, i made this js library for making popups more easier.
first add `<link rel="stylesheet" href="chttps://enesago.github.io/Ago-Popup.js/ago-popup.min.css">` or download [apo-popup.min.css](https://github.com/EnesAgo/Ago-Popup.js/tree/main/css) file from css folder and linked it. Now make a button for popup(ex: 
`<button id="open-popup">open popup</button>`). After that create a div for the popup (it can be with selector or without just a div. ex: `<div></div>`). Then add:
```
    <div id="overlay"></div>
        <div class="popup" id="popup">
            <div class="popup-div">
            </div>
            <button class="popup-button" id="popup-button">close</button>
        </div>
```
so now we need script tag. Now add:
    `<script src="https://enesago.github.io/Ago-Popup.js/ago-popup.min.js></script>`
or download [ago-popup.min.js](https://github.com/EnesAgo/Ago-Popup.js/tree/main/js) file inside js folder and linked it.
and for making ner popup:
    `const newpopup = new Popup(id name);`
last make 2 event with $id() function (that selects id):
    ```$id("open-popup").addEventListener("click", newpopup.Open);
       $id("popup-button").addEventListener("click", newpopup.Close)```

Inside popup-div u can add:

```
          <ul>
             <li>
                  h2>head</h2>
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
```

You can copy this code, 
Here is demo code:
            ```
            <link rel="stylesheet" href="css/apo-popup.min.css">
            ```
            or
            ```
            <link rel="stylesheet" href="chttps://enesago.github.io/Ago-Popup.js/ago-popup.min.css">
            ```
            inside head,
and this inside body:
```
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
        <script src="https://enesago.github.io/Ago-Popup.js/ago-popup.min.js"></script>
    <script>
        const newpopup = new Popup("popup");
        $id("open-popup").addEventListener("click", newpopup.Open)
    </script>
```

