function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
       
        <nav id="menu">
            <ul class="menu-item">
                <li><a href="index.html">Integrantes</a></li>
                <li><a href="about.html">Sobre</a></li>
            </ul>
        </nav>
    `;
    return header;
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.prepend(createHeader());
});

function cardUsers() {
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    card.innerHTML = `
        <p>Conteúdo do Card</p>
    `;
    return card;
}



