

const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => {
        return entry.isIntersecting;
    }).forEach((entry) => {
        console.log('image is intersected');
        observer.unobserve(entry.target);
    });
});


export const registerImage = (imagen) => {
    observer.observe(imagen);
};