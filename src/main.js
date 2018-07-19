import Vue from 'vue';
import App from './App.vue';
import ClipboardJS from '../node_modules/clipboard/dist/clipboard.min.js';
// import HTMLMinify from '../node_modules/html-minifier/src/htmlminifier.js';
// import * as HTMLMinifier from '../node_modules/html-minifier/src/htmlminifier.js';

// Object.definePrototype(Vue.prototype, '$minify', { value: minify });


Vue.config.productionTip = false;

// var clipboard = new ClipboardJS('.js-copy', '.js-copy-src');

new Vue({
  render: h => h(App)
  // methods: {
  //   htmlMin: function() {
  //     return 'testing';
  //   }
  // }
}).$mount('#app')



var clipboardCopyText = new ClipboardJS('.js-copy');
clipboardCopyText.on('success', function(){
  var btnEl = document.getElementById('js-copy');
  btnEl.classList.add('feedback');
  setTimeout(function(){ btnEl.classList.remove('feedback'); }, 3000);
});


var clipboardCopySrc = new ClipboardJS('.js-copy-src', {
    target: function() {
        var targetElement = document.getElementById('raw-html-text');
        return targetElement;
    }
});
clipboardCopySrc.on('success', function(){
  var btnEl = document.getElementById('js-copy-src');
  btnEl.classList.add('feedback');
  setTimeout(function(){ btnEl.classList.remove('feedback'); }, 3000);
});





// ClipboardJS.on('success', function(e) {
//   getElementById('copySrc').classList.add("feedback");
// });
