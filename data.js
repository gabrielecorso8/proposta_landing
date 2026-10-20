const proposal = {
  intro: [
    'Un sito che dia spazio alle opere e renda semplice il primo contatto con la galleria. Un catalogo curato, immagini da osservare e un percorso chiaro per chiedere informazioni o fissare una visita.',
    'Tre pacchetti, con la stessa cura per la presentazione: cambia il modo in cui aggiornate il catalogo e condividete le opere con i collezionisti. Gli importi riguardano il sito; i bonus sono ancora da definire.'
  ],
  confirmation: 'Ho letto il riepilogo e richiedo la conferma del perimetro e delle condizioni prima dell’avvio dei lavori.',
  externalCosts: 'Dominio, hosting ed eventuali servizi a pagamento separati. Trattamento fiscale da specificare nel preventivo definitivo.',
  packs: [
    {
      name: 'Sito Base', price: 890, tag: 'Per partire',
      description: 'La galleria online, con un catalogo iniziale curato e un contatto diretto per ogni opera.',
      blocks: [
        {title: 'La galleria e le opere', text: 'Realizzazione del sito sulla direzione visiva del fac simile FORMA, adattata all’identità della galleria. Presentazione, catalogo, schede opera e contatti, con una navigazione adatta a telefono e computer.'},
        {title: 'Un contatto più semplice', text: 'Ogni scheda presenta immagini, autore, tecnica e dimensioni. Il visitatore può osservare l’opera, filtrare il catalogo e aprire una richiesta di informazioni con il riferimento all’opera già compilato.'}
      ],
      items: ['Impostazione grafica personalizzata su base FORMA.', 'Catalogo iniziale e schede delle opere concordate.', 'Vista ingrandita delle opere e filtri per categoria.', 'Selezione dei preferiti salvata sul dispositivo.', 'Contatti via email o WhatsApp e richiesta di visita.', 'Ottimizzazione delle immagini, titoli e descrizioni per i motori di ricerca.'],
      benefit: 'Una presenza online curata che aiuta a passare dall’interesse per un’opera a una conversazione con la galleria.',
      limit: 'Il catalogo viene aggiornato con il mio intervento. I lavori successivi alla consegna si concordano separatamente.'
    },
    {
      name: 'Sito Avanzato', price: 990, tag: 'Gestione autonoma',
      description: 'Tutto il Base, con un pannello riservato per tenere il catalogo aggiornato in autonomia.',
      blocks: [
        {title: 'Il catalogo nelle vostre mani', text: 'Un pannello con accesso riservato permette alla galleria di gestire le schede delle opere. Le modifiche seguono il modello grafico concordato, senza dover intervenire sul codice.'},
        {title: 'Aggiornamenti quotidiani', text: 'Potete caricare e sostituire immagini, modificare dati e descrizioni, riordinare le opere e indicare se sono disponibili, riservate o vendute. Alla consegna facciamo una prova insieme e ricevete una guida essenziale.'}
      ],
      items: ['Tutte le funzioni del Sito Base.', 'Accesso riservato per la gestione del catalogo.', 'Aggiunta, modifica e rimozione delle opere.', 'Gestione di immagini, autore, tecnica, dimensioni e descrizione.', 'Categorie, ordine di visualizzazione e stato dell’opera.', 'Sessione di consegna e istruzioni per gli aggiornamenti.'],
      after: 'L’autonomia riguarda il catalogo e i campi concordati. Nuove sezioni, nuovi layout o funzioni aggiuntive si valutano a parte.',
      benefit: 'Il sito segue la vita della galleria: nuove acquisizioni e disponibilità possono essere aggiornate senza richiedere ogni volta un intervento.',
      limit: 'Il pannello gestisce i contenuti previsti; non è un editor libero del sito né un gestionale amministrativo.'
    },
    {
      name: 'Sito Pro', price: 1190, tag: 'Relazione con i collezionisti',
      description: 'Tutto l’Avanzato, con selezioni di opere dedicate da condividere con un collezionista.',
      blocks: [
        {title: 'Selezioni su misura', text: 'Dal catalogo potete preparare una selezione per un collezionista, un ambiente o un tema. Scegliete le opere, l’ordine e un testo introduttivo, riutilizzando le schede già presenti.'},
        {title: 'Un link dedicato', text: 'Ogni selezione mantiene un indirizzo da inviare via email o WhatsApp. Il destinatario ritrova una presentazione coerente con la conversazione avuta con la galleria.'},
        {title: 'Una richiesta contestuale', text: 'Dalla selezione il collezionista può aprire una richiesta con i riferimenti alle opere. La galleria riceve una base più chiara per rispondere, fissare una visita o proseguire la trattativa.'}
      ],
      items: ['Tutte le funzioni del Sito Avanzato.', 'Creazione, modifica e rimozione delle selezioni.', 'Titolo, introduzione e ordine delle opere personalizzabili.', 'Indirizzo dedicato per ogni selezione.', 'Richiesta di informazioni riferita alla selezione.', 'Riutilizzo del catalogo senza duplicare le schede.'],
      after: 'Le selezioni sono accessibili a chi possiede il link, non protette da un accesso personale. Il perimetro proposto non include CRM, pagamenti online o automazioni commerciali.',
      benefit: 'Dopo una visita o una conversazione potete inviare una proposta curata e pertinente, con un percorso semplice per riprendere il contatto.',
      limit: 'È uno strumento di presentazione e relazione. La trattativa e la vendita rimangono gestite dalla galleria.'
    }
  ],
  bonuses: [
    {title: 'Scheda opera e QR', tag: 'Dalla visita al contatto', text: 'Una scheda sintetica da condividere e un QR che porta all’opera sul sito: utile in galleria, in fiera e nelle conversazioni con gli interessati.', scope: 'Da definire: modello, dati mostrati e formato di esportazione.'},
    {title: 'Preferenze del collezionista', tag: 'Richieste più pertinenti', text: 'Un breve percorso su stile, fascia di budget e destinazione dell’opera, da allegare alla richiesta per aiutare la galleria a proporre una selezione mirata.', scope: 'Da definire: domande, recapito della richiesta e gestione dei dati.'},
    {title: 'Promemoria di ricontatto', tag: 'Dall’interesse alla trattativa', text: 'Un registro essenziale per annotare collezionista, opere di interesse, ultimo contatto e prossima azione. Può partire da un foglio condiviso con modelli di messaggio.', scope: 'Da definire: formato e flusso operativo; nessun invio automatico previsto.'}
  ],
  sections: [
    ['Perimetro proposto', [
      'La bozza considera un sito in italiano, una sede e un catalogo iniziale fino a 25 opere, con fotografie, testi e dati forniti dalla galleria. Quantità e contenuti vanno confermati prima dell’avvio.',
      'Sono inclusi adattamento grafico, caricamento iniziale, verifica su telefono e computer e un ciclo di revisione sui contenuti e sull’impaginazione concordati.',
      'Traduzioni, produzione fotografica, redazione estesa dei testi, e-commerce, pagamenti, inventario amministrativo e integrazioni con piattaforme esterne non sono compresi negli importi indicati.'
    ]],
    ['Materiali e tempi', [
      'Prima di partire raccogliamo logo, contatti, immagini e dati delle opere. Confermiamo insieme le funzioni, il numero di schede e le sezioni da realizzare.',
      'Il calendario viene concordato dopo la verifica dei materiali e del pacchetto scelto. Le funzionalità del pannello e delle selezioni Pro richiedono una verifica dedicata prima della consegna.'
    ]],
    ['Costi, consegna e assistenza', [
      'Gli importi di 890 €, 990 € e 1.190 € sono proposti per la realizzazione del sito nel perimetro descritto. Modalità di pagamento e trattamento fiscale saranno specificati nel preventivo definitivo.',
      'Dominio, hosting, spazio di archiviazione ed eventuali servizi esterni a pagamento restano separati. Prima di attivarli concordiamo intestazione, costi ricorrenti e limiti dei servizi scelti.',
      'Alla consegna ricevete codice, accessi e istruzioni. Sono proposti 30 giorni di assistenza per correggere difetti delle funzioni concordate; nuovi contenuti, manutenzione continuativa e nuove funzioni si valutano a parte.'
    ]],
    ['Bonus da concordare', [
      'Le tre idee sono proposte di lavoro: non sono ancora incluse in alcun pacchetto e non modificano il totale. Sceglieremo insieme quali offrire, con quale perimetro e in quali pacchetti.',
      'L’obiettivo è facilitare presentazione, contatto e seguito della trattativa. Nessuno strumento implica una garanzia di vendita o l’accesso a una rete di collezionisti.'
    ]]
  ]
};
