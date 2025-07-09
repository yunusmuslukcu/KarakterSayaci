const textarea = document.querySelector("textarea");
const totalCounter = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

textarea.addEventListener("keyup", updateCounter);

function updateCounter() {
    totalCounter.textContent = textarea.value.length;
    remainingCounter.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
    console.log(textarea.value.length);     //textarea metni kısmının kaç karakter girildiğinin sayısını öğreniyoruz.
}

updateCounter(); // Sayacı başlatmak için ilk çağrı