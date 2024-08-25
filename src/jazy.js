
let loadImages = 0;

const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => {
        return entry.isIntersecting;
    }).forEach((entry) => {
        const node = entry.target;
        const imagen = node.firstChild;
        const url = imagen.dataset.src;
        imagen.src = url;
        console.log(`imagenes cargadas ${loadImages++}`);
        observer.unobserve(node);
    });
});


export const registerImage = (imagen) => {
    observer.observe(imagen);
};