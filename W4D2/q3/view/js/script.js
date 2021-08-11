$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (e) => {
        $("#cart").text("Cart: " + e.total + " item(s)");
        $("#msg").text("Product added to cart successfully");

        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            name: $("#name").val(),
            price: $("#price").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});