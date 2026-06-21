import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { slidesOrder } from '$lib/assets/personale-slidesOrder';
import { base } from '$app/paths';

export async function load({ params }) {
    let file;
    
    if (params.slide == "start") {
        throw redirect(307, `${base}/personale/${slidesOrder[0]}`);
    }

    try {
        file = await import(`$lib/personale-content/${params.slide}.md`);
    } catch (e) {
        error(404, 'Il file .md richiesto non è stato trovato.');
    }

    if(!file.metadata) {
        error(404, 'Il file .md richiesto non ha metadati.');
    }

    return {
        content: file.default, 
        meta: file.metadata,    
        filename: file.filename,
        titolo: "Slide: " + file.metadata.titolo
    };
}
