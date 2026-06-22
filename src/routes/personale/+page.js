import {slidesOrder} from "$lib/assets/personale-slidesOrder"

export async function load() {
    const allFiles = import.meta.glob('$lib/personale-content/*.md', { eager: true });
    
    const slidesOrdinateList = Object.entries(allFiles)
        .map(([path, fileData]) => ({
            id: path.split('/').pop().replace('.md', ''),
            meta: fileData.metadata
        }))
        .filter(s => slidesOrder.includes(s.id))
        .sort((a, b) => slidesOrder.indexOf(a.id) - slidesOrder.indexOf(b.id));

    return {
        slides: slidesOrdinateList,
        titolo: "Elenco Slide"
    };
}
