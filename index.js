import React, { useState, useEffect, useRef } from 'react';

const useMount = effect => useEffect(effect, []);

const LazyImage = ({ src, alt, options, ...restProps }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const ref = useRef(null);

  useMount(() => {
    if (ref.current && imageSrc !== src) {
      if (IntersectionObserver) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(ref.current);
              }
            });
          },
          options,
        );
        observer.observe(ref.current);
        return () => {
          observer.unobserve(ref.current);
        };
      } else {
        setImageSrc(src);
      }
    }
  });

  LazyImage.defaultProps = {
    options: {
      threshold: 0.01,
      rootMargin: '75%',
    }
  }

  return React.createElement("img", {
    ref: ref,
    alt: alt,
    src: imageSrc,
    ...restProps,
  });
};

export default LazyImage;
