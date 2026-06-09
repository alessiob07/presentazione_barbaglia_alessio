import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let file;
    
    try {
        file = await import(`$lib/personale-content/${params.immagine}.md`);
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
        name: file.filename.replace('.md', '')
    };
}
