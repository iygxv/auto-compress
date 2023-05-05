
import { getHeader } from './utils.js'
const REQUEST_HEADER = getHeader()
const toggleEl = document.querySelector('#auto-compress-toggle')
toggleEl.addEventListener('click', (e) => {
  if(toggleEl.checked) {
    alert('开启下载后压缩')
  }else {
    alert('关闭下载后压缩')
  }
})

function inject(eventName) {
  const originDispatchEvent = EventTarget.prototype.dispatchEvent;
  Object.defineProperty(HTMLAnchorElement.prototype, 'dispatchEvent', {
      writable: true,
      configurable: true,
      enumerable: true,
      value: function (event) {
          const nodeName = this.nodeName;
          const href = this.href;
          const filename = this.download;
          if (nodeName === 'A' && filename && /^blob:/.test(href)) {
              // ...
              return false;
          }
          return originDispatchEvent.apply(this, [event]);
      }
  });
}