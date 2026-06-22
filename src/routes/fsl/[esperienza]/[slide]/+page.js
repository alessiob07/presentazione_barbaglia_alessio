import { error, redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export async function load({ params }) {
    // 1. Carica l'ordine dinamicamente
    // Usiamo await import() perché è l'unico modo per usare variabili nel path
    let slidesOrder;
    try {
        const module = await import(`$lib/assets/esperienze-content/${params.esperienza}-slidesOrder.js`);
        slidesOrder = module.slidesOrder;
    } catch (e) {
        throw error(404, `Ordine per l'esperienza '${params.esperienza}' non trovato.`);
    }

    // 2. Redirect se "start"
    if (params.slide === "start") {
        throw redirect(307, `${base}/fsl/${params.esperienza}/${slidesOrder[0]}`);
    }

    // 3. Carica il file specifico
    let file;
    try {
        file = await import(`$lib/esperienze-content/${params.esperienza}/${params.slide}.md`);
    } catch (e) {
        throw error(404, 'Il file .md richiesto non è stato trovato.');
    }

    // 4. Carica la lista delle slide (usando glob dinamico)
    // NOTA: Per glob dinamici, il path deve essere relativo o contenere un pattern base
    const allFiles = import.meta.glob('$lib/esperienze-content/**/*.md', { eager: true });
    
    // Filtriamo allFiles basandoci sulla cartella specifica dell'esperienza
    const slidesOrdinateList = Object.entries(allFiles)
        .filter(([path]) => path.includes(`/${params.esperienza}/`))
        .map(([path, fileData]) => ({
            id: path.split('/').pop().replace('.md', ''),
            meta: fileData.metadata
        }))
        .filter(s => slidesOrder.includes(s.id))
        .sort((a, b) => slidesOrder.indexOf(a.id) - slidesOrder.indexOf(b.id));

    return {
        content: file.default,
        meta: file.metadata,
        titolo: "Slide: " + file.metadata.titolo,
        slides: slidesOrdinateList,
        indietro: "Elenco Slide"
    };
}