var greetingElement = document.getElementById("greeting");
var greetingText = "Вітаємо вас з наступаючим новим роком!";
var index = 0;
var thankyou = "Дякую";

function typeWriter() {
    if (index < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Час затримки між виведенням символів (в мілісекундах)
    }
}

// Викликаємо функцію для початку поступового друкування тексту
typeWriter();
