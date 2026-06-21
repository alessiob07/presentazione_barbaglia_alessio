export async function load() {
    const allFiles = import.meta.glob('$lib/personale-content/*.md', { eager: true });
    
    const slides = Object.entries(allFiles).map(([path, file]) => {
        return {
            id: path.split('/').pop().replace('.md', ''),
            meta: file.metadata
        };
    });

    return { slides, titolo: "Presentazione Personale - Elenco Slides" };
}