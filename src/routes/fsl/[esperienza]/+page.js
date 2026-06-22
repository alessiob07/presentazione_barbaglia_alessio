import { error } from '@sveltejs/kit';

export async function load({ params }) {
    // 1. Importiamo l'ordine dinamico per questa specifica esperienza
    let slidesOrder;
    try {
        const module = await import(`$lib/assets/esperienze-content/${params.esperienza}-slidesOrder.js`);
        slidesOrder = module.slidesOrder;
    } catch (e) {
        throw error(404, `Configurazione per l'esperienza '${params.esperienza}' non trovata.`);
    }

    // 2. Carichiamo tutti i file e filtriamo per la cartella dell'esperienza corrente
    const allFiles = import.meta.glob('$lib/esperienze-content/**/*.md', { eager: true });
    
    const slidesOrdinateList = Object.entries(allFiles)
        // Filtriamo per cartella esperienza
        .filter(([path]) => path.includes(`/${params.esperienza}/`))
        .map(([path, fileData]) => ({
            id: path.split('/').pop().replace('.md', ''),
            meta: fileData.metadata
        }))
        // Filtriamo e ordiniamo in base al file di configurazione caricato
        .filter(s => slidesOrder.includes(s.id))
        .sort((a, b) => slidesOrder.indexOf(a.id) - slidesOrder.indexOf(b.id));

    return {
        slides: slidesOrdinateList,
        titolo: `Elenco Slide: ${params.esperienza}`,
        indietro: "Elenco Esperienze"
    };
}