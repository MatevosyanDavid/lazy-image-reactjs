import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const useMount = effect => useEffect(effect, []);

const LazyImage = ({ src, alt, dataSrc, options, ...restProps }) => {
  const [imageSrc, setImageSrc] = useState(dataSrc || null);

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

  return React.createElement("img", {
    ref: ref,
    alt: alt,
    src: imageSrc,
    ...restProps,
  });
};

LazyImage.defaultProps = {
  options: {
    threshold: 0.01,
    rootMargin: '75%',
  },
  alt: '',
};

LazyImage.propTypes = {
  alt: PropTypes.string,
  options: PropTypes.object,
  src: PropTypes.string.isRequired,
};

export default LazyImage;
