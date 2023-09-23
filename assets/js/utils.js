function Home() {
    window.open('/', '_self')
}

function About() {
    window.open('#about', '_self')
}

function Features() {
    window.open('#features', '_self')
}

function InviteMagik() {
    window.open('http://invite.magik.raulrda.com', '_blank')
}

function JoinDiscord() {
    window.open('http://discord.magik.raulrda.com', '_blank')
}

function GoBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    function showContent() {
        loader.style.display = "none";
        content.style.opacity = "1";
    }

    setTimeout(showContent, 3000);
});