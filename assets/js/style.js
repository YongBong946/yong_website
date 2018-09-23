var doc = document.documentElement;
var button = document.querySelector('.switch');
// button.addEventListener('change', toggleTheme)

function toggleTheme() {
    var color = getComputedStyle(doc).getPropertyValue('--theme-color')

    // if light theme, change to dark
    if(color === '#FFFDF0') {
        doc.style.setProperty('--theme-color', '#030007')
        doc.style.setProperty('--text-color', '#FFFDF0')
        doc.style.setProperty('--moon-color', '#030007')
        doc.style.setProperty('--hide-img', 'intial')
        doc.style.setProperty('--show-img', 'none')

    } else {

        // change to light if dark
        doc.style.setProperty('--theme-color', '#FFFDF0')
        doc.style.setProperty('--text-color', '#030007')
        doc.style.setProperty('--moon-color', '#FFBA08')
        doc.style.setProperty('--hide-img', 'none')
        doc.style.setProperty('--show-img', 'grid')
    }

}