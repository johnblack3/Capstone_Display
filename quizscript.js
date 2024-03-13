document.addEventListener('DOMContentLoaded', function() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('click', function() {
            var question = this.closest('.question');
            
            var selected = this.value;
            var correct = question.dataset.correct;
            var feedback = question.querySelector('.feedback');

            if (selected === correct) {
                feedback.textContent = 'Correct!';
                feedback.style.color = 'green';
            }
            else {
                feedback.textContent = 'Incorrect!'; 
                feedback.style.color = 'red';
            }
        });
    });
});