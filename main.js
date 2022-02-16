// LISTEN THE LOAD EVENT
window.addEventListener('load', () => {
    // DEFINE THE EVENT LISTENER IN THE BTN
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (e) => {

        e.preventDefault();

        // CONST FOR THE TEST OF EMAIL
        const input = document.getElementById('useremail');
        const msg = document.querySelector('#msg');
        const regex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

        // CONDITIONAL WHAT EVALUATES THE EMAIL
        if(regex.test(input.value) === true) {
            input.classList.add('email--true');
        } 
        else if (regex.test(input.value) === false) {
            input.classList.add('email--error');
            msg.classList.replace('error__message', 'error__message--show');
        } 
        else if(input.value === "") {
            input.classList.add('email--error');
            msg.classList.replace('error__message', 'error__message--show');
        };
        
    });  

});