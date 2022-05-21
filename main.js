let name_1 = document.getElementById("product_name");
let price = document.getElementById("price");
let tax = document.getElementById("taxs")
let discount = document.getElementById("discount");
let ads = document.getElementById("ads");
let Add = document.getElementById("add");
let total = document.querySelector(".money");

Add.addEventListener("click", Main)

function validate(e) {
    if (name_1.value === "" || price.value === "") {
        e.preventDefault();
        errBox() 
    }
}


function errBox() {
    let err = document.querySelector(".e404");
    err.style.opacity = 1;

    setInterval(() => {
        err.style.opacity = 0;
    }, 2500);
}


function getTotal() {
    let pos = parseInt(price.value);
    let pos_1 = parseInt(tax.value);
    let pos_2 = parseInt(ads.value);
    let pos_3 = parseInt(discount.value);

    if (price.value != "") {
        let result = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = `${result}$`;

        if (result < 0) {
            total.innerHTML = `0$`;
        }
    } else {
        total.innerHTML = `0$`;
    }

    if (price.value < 0 || tax.value < 0 || ads.value < 0 || discount.value < 0) {
        total.innerHTML = `0$`
        errBox() 

    } if (pos > 0 && pos_1 < 0 || pos_2 < 0 || pos_3 < 0) {
        total.innerText = `${pos}$`
        
    } if (pos_2 < 0 || pos_3 < 0) {
        if (pos > 0 && pos_1 > 0 ) {
            total.innerText = `${pos + pos_1}`;
        }
        
    } if (pos > 0 && pos_1 > 0 && pos_2 > 0 && pos_3 < 0) {
        total.innerText = `${pos + pos_1 + pos_2}$`
        
    } if (pos_1 < 0) {
        if (pos > 0 && pos_2 > 0 && pos_3 > 0) {
            total.innerText = `${pos + pos_2 - pos_3}`;  
        }

    } if (pos_2 < 0) {
        if (pos > 0 && pos_1 > 0 && pos_3 > 0) {
            total.innerText = `${pos + pos_1 - pos_3}`;  
        }

    } if (pos_3 < 0 && pos_1 < 0) {
        if (pos > 0 && pos_2 > 0) {
            total.innerText = `${pos + pos_2}`;  
        }
    }
}


function Main() {
    let main = document.querySelector(".main tbody")

    validate()

    let result = (+price.value + +tax.value + +ads.value) - +discount.value;

    let r = document.createElement("tr")
    r.classList.add("row3")

    let td_1 = document.createElement("td")
    td_1.classList.add("cell")
    td_1.innerText = name_1.value;

    let td_2 = document.createElement("td")
    td_2.classList.add("cell")
    td_2.innerText = `${price.value}$`;

    let td_3 = document.createElement("td")
    td_3.classList.add("cell")
    td_3.innerText = `${tax.value}$`;

    let td_4 = document.createElement("td")
    td_4.classList.add("cell")
    td_4.innerText = `${ads.value}$`;

    let td_5 = document.createElement("td")
    td_5.classList.add("cell")
    td_5.innerText = `${discount.value}%`;

    let td_6 = document.createElement("td")
    td_6.classList.add("cell")
    td_6.innerText = `${result}$`;

    let td_7 = document.createElement("td")
    td_7.classList.add("cell")
    td_7.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    let td_8 = document.createElement("td")
    td_8.classList.add("cell")
    td_8.innerHTML = `<i class="fa-solid fa-trash-can" id="remove"></i>`;


    if (td_4.innerText === "$") {
        td_4.innerText = "-";

    } if (td_3.innerText === "$") {
        td_3.innerText = "-";

    } if (td_5.innerText === "%") {
        td_5.innerText = "-";
    }

    let pos = parseInt(price.value);
    let pos_1 = parseInt(tax.value);
    let pos_2 = parseInt(ads.value);
    let pos_3 = parseInt(discount.value);


    if (pos < 0) {
        td_2.innerText = `0$`;
        td_6.innerText = `0$`;
        total.innerHTML = `0$`;

    } if (pos_1 < 0) {
        td_3.innerText = `0$`;
        td_6.innerText = `0$`;
        total.innerHTML = `0$`

    } if (pos_2 < 0) {
        td_4.innerText = `0$`;
        td_6.innerText = `0$`;
        total.innerHTML = `0$`;

    } if (pos_3 < 0) {
        td_5.innerText = `0$`;
        td_6.innerText = `0$`;
        total.innerHTML = `0$`;

    } if (pos > 0) {
        td_6.innerText = `${price.value}$`;

    } if (pos > 0 && pos_1 > 0) {
        td_6.innerText = `${pos + pos_1}$`;
        
    } if (pos > 0 && pos_1 > 0 && pos_2 > 0) {
        td_6.innerText = `${pos + pos_1 + pos_2}$`;

    }
    total.innerText = `0$`;
    r.append(td_1)
    r.append(td_2)
    r.append(td_3)
    r.append(td_4)
    r.append(td_5)
    r.append(td_6)
    r.append(td_7)
    r.append(td_8)
    main.append(r)

    Clear()
    
}


function Clear() {
    name_1.value = "";
    price.value = "";
    tax.value = "";
    ads.value = "";
    discount.value = "";

}