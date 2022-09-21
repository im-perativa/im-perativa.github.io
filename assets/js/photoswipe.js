import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from '/assets/js/photoswipe/photoswipe-dynamic-caption-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallerySelector: '#project-list',
    childSelector: '.project-item',
    pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe.esm.js'),
    paddingFn: (viewportSize) => {
        return {
            top: 30,
            bottom: 30,
            left: 70,
            right: 70,
        };
    },
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    mobileLayoutBreakpoint: 700,
    type: 'auto',
    mobileCaptionOverlapRatio: 1,
});

lightbox.init();
