import { loadScript } from './util/loadScript';

const $container = document.getElementById('container');

loadScript('./src/lib/react.min.js').then((win) => {
    console.log(win);
})

console.log($container);
