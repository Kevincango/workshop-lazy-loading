

const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => {
        return entry.isIntersecting;
    }).forEach((entry) => {
        console.log('image is intersected');
        const node = entry.target;
        const imagen = node.firstChild;
        const url = imagen.dataset.src;
        imagen.src = url;
        observer.unobserve(node);
    });
});


export const registerImage = (imagen) => {
    observer.observe(imagen);
};