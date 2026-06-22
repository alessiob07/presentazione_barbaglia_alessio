import { error, redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { slidesOrder } from '$lib/assets/personale-slidesOrder';

export async function load({ params }) {
    // 1. Logica per la slide specifica
    if (params.slide === "start") {
        throw redirect(307, `${base}/personale/${slidesOrder[0]}`);
    }

    let file;
    try {
        file = await import(`$lib/personale-content/${params.slide}.md`);
    } catch (e) {
        error(404, 'Il file .md richiesto non è stato trovato.');
    }

    // 2. Logica per caricare TUTTE le slide (per la navigazione)
// 2. Logica per caricare e filtrare/ordinare TUTTE le slide
    const allFiles = import.meta.glob('$lib/personale-content/*.md', { eager: true });
    
    const slidesOrdinateList = Object.entries(allFiles)
        .map(([path, fileData]) => ({
            id: path.split('/').pop().replace('.md', ''),
            meta: fileData.metadata
        }))
        .filter(s => slidesOrder.includes(s.id))
        .sort((a, b) => slidesOrder.indexOf(a.id) - slidesOrder.indexOf(b.id));

    // 3. Ritorna tutto insieme
    return {
        content: file.default,
        meta: file.metadata,
        titolo: "Slide: " + file.metadata.titolo,
        slides: slidesOrdinateList,
        indietro: "Elenco Slide"
    };
}