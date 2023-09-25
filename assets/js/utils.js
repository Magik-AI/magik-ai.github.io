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
    window.open('https://discord.com/oauth2/authorize?client_id=1154411860372754523&scope=bot%20applications.commands&permissions=414531832896', '_blank')
}

function JoinDiscord() {
    window.open('https://discord.gg/KxkptEEHyH', '_blank')
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

function PrivacyPolicy() {
    /*var PDF = './assets/pdf/PrivacyPolicy.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = PDF;
    downloadLink.download = 'MagikPrivacyPolicy.pdf';
    downloadLink.click();*/
    window.open('/assets/pdf/PrivacyPolicy.pdf', '_blank')
}