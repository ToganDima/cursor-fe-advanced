document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener("click", function(e) {
        
        const mainBox = document.querySelector('.main-box');
        if (mainBox.childElementCount > 0) {
            console.log('Елементи вже створені!');
            return;
        }
        
        function getRandomValue() {
            return Math.floor(Math.random() * 256 + 1);
        }

        function getColorStr() {
            return 'rgb(' + getRandomValue() + ', ' + getRandomValue() + ', ' + getRandomValue() + ')';
        }
        
        function createBoxes() {
            for (let i = 0; i < 25; i++) {
                let newEl = document.createElement('div');
                newEl.classList.add('box');
                newEl.style.backgroundColor = getColorStr();
                mainBox.append(newEl);
            }
        }

        function changeColor() {
            document.querySelectorAll('.box').forEach((el, index) => {
                el.style.backgroundColor = getColorStr();
            });
        }

        createBoxes();
        setInterval(changeColor, 1000);

    });
});