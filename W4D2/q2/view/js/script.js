$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (e) => {
        $("#question").val(e.answer);
        $("#msg").text("Question replaced with answer");
        $("#question").focus();
        $("#question").select();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#8ball").submit(() => {
        const data = {
            question: $("#question").val()
        };
        $.post({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});