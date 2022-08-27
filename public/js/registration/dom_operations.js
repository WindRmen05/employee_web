import { createEmployee } from './register_api.js';
import {showAlert} from './alert';

const jobRoles = document.querySelectorAll('form .dropdown-menu a');
const jobRolesTitle = document.querySelector('form #jobroles');
const submit = document.getElementById('contact-form');

jobRoles.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        console.log(el.target.textContent);
        jobRolesTitle.firstChild.textContent = el.target.textContent;
        // console.log(jobRolesTitle.firstChild.textContent);
    })
})

if(submit) {
    submit.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const exp = document.getElementById('exp').value;
        if(name == "" || email == "" || mobile == "" || exp == "" || jobRolesTitle.firstChild.textContent == 'Select Here') {
            showAlert('warning', 'Please complete the form and try again.');
        } else {
            await createEmployee(
                {name,email, mobile, experience: exp,jobRole:jobRolesTitle.firstChild.textContent}
            );
        }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mobile').value = '';
        document.getElementById('exp').value = '';
        jobRolesTitle.firstChild.textContent = 'Select Here';
    })
}
