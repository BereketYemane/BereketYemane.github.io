(function () {
    const date = new Date();
    const hour = date.getHours();

    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('link');
    if (hour >= 6 && hour <= 18) {
        style.href = "css/day.css";

    } else {
        style.href = "css/night.css";
    }

    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
})();