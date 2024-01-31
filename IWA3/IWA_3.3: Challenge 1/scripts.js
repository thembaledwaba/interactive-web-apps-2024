/* Import from the correct directory */
import{
    company,
    year
} from './configuration.js';

const message = '© ' + company + ' (' + year + ')'
console.log(document.querySelector('footer').innerText = message);