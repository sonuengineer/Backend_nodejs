let form = document.getElementById("form").addEventListener("submit", myfunc);
async function myfunc(e) {
    e.preventDefault();
    const sellingPrice = e.target.price.value;
    const quantity = e.target.quantity.value
    const productName = e.target.name.value;

    const obj = {
        sellingPrice,
        productName,
        quantity
    };
    try {
        let res = await axios.post("http://localhost:3000/user/product", obj);
        console.log(res);
        location.reload();
    } catch (error) {
        console.log("error:", error);
    }
}


async function getData() {
    try {
        const res = await axios.get("http://localhost:3000/user/product");

        //console.log(res);
        showData(res.data.product);
    } catch (error) {
        // console.log("error:", error);
    }
}

getData();

function showData(data) {
    let container = document.getElementById("container");
    let total = document.getElementById("total");
    const initialValue = 0;
    const sumWithInitial = data.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.sellingPrice * currentValue.quantity),
        initialValue
    );

    data.forEach((items) => {
        let div = document.createElement("div");

        let price = document.createElement("p");
        price.innerHTML = `Price:${items.sellingPrice}`;

        let name = document.createElement("p");
        name.innerHTML = items.productName;

        let quantity = document.createElement("p");
        quantity.innerHTML = `Quantity: ${items.quantity}`;

        let amount = document.createElement("p");
        amount.innerHTML = `Total Amount: ${items.sellingPrice * items.quantity}`;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";

        btn.addEventListener("click", async () => {
            try {
                let res = await axios.delete(
                    `http://localhost:3000/user/product/${items.id}`
                );
                location.reload();
            } catch (error) {
                console.log("error:", error);
            }
        });

        div.append(price, name, quantity, amount, btn);
        container.append(div);
    });
    total.innerHTML = `Your Total cost for all items is : <h1>${sumWithInitial} Rs </h1>`;

}
function sendData() {
    // Code to send the data...

    // Reset the form after sending the data
    document.getElementById("form").reset();
}
sendData();