document.addEventListener("DOMContentLoaded", function () {
    function goToSecondInterface() {
        document.getElementById('firstInterface').classList.add('hidden');
        document.getElementById('secondInterface').classList.remove('hidden');
    }

    function showAd() {
        alert("Showing Ad... (Integrate Ad Network Here)");
    }

    window.goToSecondInterface = goToSecondInterface;
    window.showAd = showAd;
});
