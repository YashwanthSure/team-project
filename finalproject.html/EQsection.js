document.addEventListener('DOMContentLoaded', function() {
    const moodForm = document.createElement('form');
    moodForm.innerHTML = `
        <label for="mood">How are you feeling today?</label>
        <input type="text" id="mood" name="mood">
        <button type="submit">Submit</button>
    `;

    moodForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const mood = document.querySelector('#mood').value;
        localStorage.setItem('userMood', mood);
        alert(`Your mood for today is saved: ${mood}`);
    });

    document.querySelector("#tools").appendChild(moodForm);
});
