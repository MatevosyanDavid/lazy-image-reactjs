<a href="https://www.npmjs.com/package/lazy-image-reactjs">
  <img src="https://img.shields.io/badge/npm-lazy--image--reactjs-brightgreen.svg">
</a>
<a href="https://www.npmjs.com/package/lazy-image-reactjs">
  <img src="https://img.shields.io/npm/v/lazy-image-reactjs.svg">
</a>

# React Image Lazy Load
- Based on [window.IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
## Description
This package created for the lazy loading images
- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

```js
import LazyImage from 'lazy-image-reactjs';

// By default used this options for IntersectionObserver
const options = {
  threshold: 0.01,
  rootMargin: '75%',
}

function App() {
  return (
    <div>
      <LazyImage
        alt="alt"
        src="image.jpg"
        options={options}
      />
    </div>
  );
}
```

You can play with it in [sandbox](https://codesandbox.io/s/fragrant-paper-2bwoy?file=/src/App.js)
