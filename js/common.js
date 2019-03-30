document.addEventListener("DOMContentLoaded", function () {

    function move(percent, element) {

        percent -= 5;

        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= percent) {
                clearInterval(id);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }

    }

    let isReach = true;
    window.onscroll = function () {

        if (document.documentElement.scrollTop > 525) {
            if (isReach) {
                move(75, document.getElementById("progress-bar__HTML"));
                move(75, document.getElementById("progress-bar__CSS"));
                move(60, document.getElementById("progress-bar__JS"));
                move(65, document.getElementById("progress-bar__English"));
                move(50, document.getElementById("progress-bar__Python"));
                move(50, document.getElementById("progress-bar__MySql"));
                move(50, document.getElementById("progress-bar__Git"));
                move(50, document.getElementById("progress-bar__Photoshop"));
                isReach = false;
            }
        }
    };


    const menuMobileIcon = document.getElementById("nav-mobile");
    const menuMobile = document.getElementById("header-top-navigation-nav");
    let activateMenu = false;
    menuMobileIcon.addEventListener("click",  () => {
        if (!activateMenu) {
            menuMobile.style.display = "block";
            console.log("click!");
            activateMenu = true;
        } else {
            menuMobile.style.display = "none";
            activateMenu = false;
        }


    }, false);


}, false);