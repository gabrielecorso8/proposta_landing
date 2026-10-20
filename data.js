const proposal = {
  intro: [
    'Un sito che dia spazio alle opere e renda semplice il primo contatto con la galleria. Un catalogo curato, immagini da osservare e un percorso chiaro per chiedere informazioni o fissare una visita.',
    'Tre pacchetti con strumenti inclusi per presentare le opere, gestire la galleria e accompagnare le richieste dei collezionisti. Approfondisci ciascuna offerta per vedere cosa comprende e il relativo investimento.'
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
      items: ['Impostazione grafica personalizzata su base FORMA.', 'Catalogo iniziale e schede delle opere concordate.', 'Vista ingrandita delle opere e filtri per categoria.', 'Selezione dei preferiti salvata sul dispositivo.', 'Contatti via email o WhatsApp e richiesta di visita.', 'Bonus incluso: scheda digitale dell’opera con QR code dedicato.', 'Ottimizzazione delle immagini, titoli e descrizioni per i motori di ricerca.'],
      benefit: 'Una presenza online curata che aiuta a passare dall’interesse per un’opera a una conversazione con la galleria.',
      limit: 'Il catalogo viene aggiornato con il mio intervento. I lavori successivi alla consegna si concordano separatamente.'
    },
    {
      name: 'Sito Avanzato', price: 990, tag: 'Gestione autonoma',
      description: 'Tutto il Base, con un pannello di controllo per aggiornare collezioni, opere e disponibilità.',
      blocks: [
        {title: 'Il pannello della galleria', text: 'Un accesso riservato permette di aggiornare le collezioni e il catalogo, caricare immagini e modificare i dati delle opere senza intervenire sul codice.'},
        {title: 'Stato delle opere', text: 'Potete riordinare le opere e indicare se sono disponibili, riservate o vendute. Il QR della scheda porta alla pagina aggiornata dell’opera. Alla consegna facciamo una prova insieme e ricevete una guida essenziale.'}
      ],
      items: ['Tutte le funzioni del Sito Base, compresa la scheda opera con QR.', 'Pannello di controllo con accesso riservato.', 'Creazione e aggiornamento delle collezioni.', 'Aggiunta, modifica e rimozione delle opere.', 'Gestione di immagini, autore, tecnica, dimensioni e descrizione.', 'Aggiornamento dello stato: disponibile, riservata o venduta.', 'Sessione di consegna e istruzioni per gli aggiornamenti.'],
      after: 'Il pannello usa i campi e i modelli concordati e mostra sempre lo stato aggiornato delle opere. Il collegamento con la gestione smart di informazioni e appuntamenti è compreso nel pacchetto Pro.',
      benefit: 'Il sito segue la vita della galleria: nuove acquisizioni e disponibilità possono essere aggiornate senza richiedere ogni volta un intervento.',
      limit: 'Il pannello gestisce i contenuti previsti; non è un editor libero del sito né un gestionale amministrativo.'
    },
    {
      name: 'Sito Pro', price: 1190, tag: 'Relazione con i collezionisti',
      description: 'Tutto l’Avanzato, con gestione smart degli appuntamenti e selezioni per i collezionisti.',
      blocks: [
        {title: 'Selezioni su misura', text: 'Dal catalogo potete preparare una selezione per un collezionista, un ambiente o un tema. Scegliete le opere, l’ordine e un testo introduttivo, riutilizzando le schede già presenti.'},
        {title: 'Un link dedicato', text: 'Ogni selezione mantiene un indirizzo da inviare via email o WhatsApp. Il destinatario ritrova una presentazione coerente con la conversazione avuta con la galleria.'},
        {title: 'Informazioni e appuntamenti', text: 'Le richieste arrivano con il riferimento alle opere e alla selezione. Il collezionista consulta i giorni e gli orari disponibili e invia una richiesta per uno slot libero.'},
        {title: 'Un unico pannello', text: 'La galleria aggiorna le collezioni, indica se un’opera è venduta e gestisce giorni, orari e slot. Quando la galleria conferma o annulla una visita, la disponibilità si aggiorna automaticamente.'}
      ],
      items: ['Tutte le funzioni del Sito Avanzato.', 'Tutti e tre i bonus inclusi, senza sovrapprezzo.', 'Gestione smart di richieste di informazioni e appuntamenti.', 'Impostazione dei giorni, degli orari e degli slot disponibili.', 'Aggiornamento automatico delle disponibilità dopo conferma o annullamento.', 'Creazione, modifica e rimozione delle selezioni per collezionisti.', 'Indirizzo dedicato per ogni selezione e richiesta contestuale.'],
      after: 'La galleria controlla le disponibilità dal pannello; un appuntamento confermato o annullato aggiorna gli slot pubblicati. Il calendario interno è compreso; la sincronizzazione con un calendario esterno si verifica e concorda prima dell’avvio.',
      benefit: 'Dopo una visita o una conversazione potete inviare una proposta curata e pertinente, con un percorso semplice per riprendere il contatto.',
      limit: 'È uno strumento di presentazione e relazione. La trattativa e la vendita rimangono gestite dalla galleria.'
    }
  ],
  bonuses: [
    {title: 'Scheda opera e QR', tag: 'Incluso in tutti i pacchetti', text: 'Ogni opera ha una scheda digitale e un QR dedicato da mostrare in galleria o in fiera. Il codice apre la pagina aggiornata dell’opera sul sito.', scope: 'Base, Avanzato e Pro.'},
    {title: 'Gestione smart di informazioni e appuntamenti', tag: 'Incluso nel pacchetto Pro', text: 'Le richieste indicano opera e disponibilità. I visitatori consultano giorni, orari e slot liberi; quando la galleria conferma o annulla una visita, il calendario si aggiorna automaticamente.', scope: 'Nel pannello si configurano giorni, orari e slot. Il calendario interno è compreso; il collegamento a calendari esterni va definito.'},
    {title: 'Pannello di controllo della galleria', tag: 'Avanzato e Pro', text: 'Uno spazio riservato per aggiornare collezioni, schede e stato delle opere, contrassegnando quelle disponibili, riservate o vendute. Nel pacchetto Pro il pannello controlla anche gli slot per appuntamenti.', scope: 'Avanzato e Pro; gestione degli appuntamenti integrata nel Pro.'}
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
    ['Bonus inclusi e collegamenti', [
      'La scheda digitale con QR è inclusa in tutti i pacchetti. Il pannello di controllo è incluso in Avanzato e Pro; la gestione smart degli appuntamenti e la relativa integrazione nel pannello sono incluse nel Pro. I bonus non hanno un sovrapprezzo rispetto all’importo del pacchetto.',
      'Il calendario esterno, i servizi di terze parti e i relativi costi si definiscono dopo aver verificato quali strumenti utilizza la galleria e quale collegamento è possibile realizzare.'
    ]]
  ]
};
