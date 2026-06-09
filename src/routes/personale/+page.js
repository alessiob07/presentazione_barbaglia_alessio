export async function load() {
    const allFiles = import.meta.glob('$lib/personale-content/*.md', { eager: true });
    
    const esperienze = Object.entries(allFiles).map(([path, file]) => {
        return {
            id: path.split('/').pop().replace('.md', ''),
            meta: file.metadata
        };
    });

    return { esperienze };
}