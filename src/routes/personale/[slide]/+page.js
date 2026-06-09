import {error} from "@sveltejs/kit"

export async function load({ params }) {
    const allFiles = import.meta.glob('$lib/personale-content/*.md', { eager: true });
    
    // 1. Costruiamo la mappa di tutte le slide
    const slides = Object.entries(allFiles).map(([path, file]) => ({
        id: path.split('/').pop().replace('.md', ''),
        meta: file.metadata,
        content: file.default 
    })).sort((a, b) => a.id.localeCompare(b.id));

    const currentIndex = slides.findIndex(e => e.id === params.slide);
    
    if (currentIndex === -1) {
        throw error(404, 'Slide non trovata');
    }

    return {
        current: slides[currentIndex],
        prev: slides[currentIndex - 1] || null,
        next: slides[currentIndex + 1] || null
    };
}