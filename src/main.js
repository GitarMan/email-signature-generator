import Vue from 'vue';
import App from './App.vue';
import ClipboardJS from '../node_modules/clipboard/dist/clipboard.min.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
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
