const proposal = {
  intro: [
    'Un sito che dia spazio alle opere e renda semplice il primo contatto con la galleria: un catalogo da esplorare, immagini da osservare e informazioni chiare per chiedere dettagli o organizzare una visita.',
    'La pagina si apre con il fac simile FORMA, così puoi navigare prima l’esperienza visiva proposta. Qui sotto trovi tre livelli di realizzazione, con funzioni, limiti e moduli aggiuntivi esplicitati.'
  ],
  confirmation: 'Ho letto la selezione e chiedo di confermare perimetro, tempi e condizioni prima dell’avvio dei lavori.',
  externalCosts: 'Dominio, hosting, servizi email, sincronizzazioni con calendari esterni ed eventuali servizi di terze parti si verificano e si concordano prima dell’avvio. Gli eventuali costi ricorrenti non sono compresi negli importi indicati.',
  packages: [
    {
      id: 'base', name: 'Base', price: 890, kicker: 'La galleria, online', includes: [],
      description: 'Una presenza digitale progettata per presentare la galleria e le opere, far esplorare il catalogo e trasformare l’interesse in una richiesta diretta.',
      blocks: [
        {title: 'La galleria e le opere', text: 'Progetto grafico personalizzato sulla direzione visiva di FORMA e adattato all’identità della galleria. Le pagine raccontano spazio, ricerca e collezioni; il catalogo iniziale organizza le opere con immagini e schede chiare, consultabili da computer e smartphone.'},
        {title: 'Un percorso semplice verso il contatto', text: 'La navigazione aiuta a trovare le opere attraverso categorie o filtri concordati. Le immagini si possono osservare nel dettaglio e il visitatore può salvare una selezione di preferiti sul proprio dispositivo. Ogni scheda accompagna verso un contatto via email o WhatsApp con il riferimento all’opera già pronto; il collegamento permette di chiedere informazioni o manifestare interesse per una visita.'}
      ],
      items: [
        'Direzione grafica personalizzata, in coerenza con il fac simile FORMA e il tono della galleria.',
        'Pagine per presentazione, spazi, collezioni e contatti, da definire insieme.',
        'Caricamento iniziale fino a 25 opere con immagini, autore, titolo e dati disponibili.',
        'Schede opera e navigazione ottimizzata per smartphone, tablet e computer.',
        'Filtri di catalogo da concordare in base alle collezioni (per esempio artista, tecnica o categoria).',
        'Immagini osservabili nel dettaglio e preferiti salvati sul dispositivo del visitatore.',
        'Collegamento diretto a email e WhatsApp con richiesta contestuale all’opera e visita.',
        'Impostazioni di base per titoli, descrizioni e condivisione delle pagine.'
      ],
      benefit: 'Una presenza online curata che aiuta a passare dalla scoperta di un’opera a una conversazione con la galleria.',
      limit: 'Il catalogo iniziale viene inserito in fase di realizzazione. Per nuovi contenuti o variazioni successive la galleria chiede un intervento concordato; il pannello non è compreso.'
    },
    {
      id: 'advanced', name: 'Avanzato', price: 1090, kicker: 'Gestione autonoma', includes: ['dashboard'],
      description: 'Tutto il Base, con un pannello riservato per aggiornare in autonomia collezioni, immagini, schede e disponibilità delle opere.',
      blocks: [
        {title: 'Il pannello della galleria', text: 'Un accesso riservato permette al personale autorizzato di creare e aggiornare collezioni, caricare immagini, modificare i dati delle opere e organizzarne l’ordine senza intervenire sul codice del sito.'},
        {title: 'La disponibilità è sempre chiara', text: 'Per ciascuna opera si aggiorna lo stato: disponibile, riservata o venduta. Il catalogo pubblico riflette gli aggiornamenti. Alla consegna è prevista una sessione guidata per imparare le operazioni quotidiane e ricevere istruzioni essenziali.'}
      ],
      items: [
        'Tutte le pagine, il catalogo e le funzioni del Sito Base.',
        'Pannello di controllo con accesso riservato per gli utenti concordati.',
        'Creazione e aggiornamento delle collezioni.',
        'Aggiunta, modifica, riordino e rimozione delle opere.',
        'Gestione di immagini, titolo, artista, tecnica, dimensioni, descrizione e altri campi concordati.',
        'Aggiornamento dello stato: disponibile, riservata o venduta.',
        'Sessione di consegna e guida operativa per l’aggiornamento dei contenuti.'
      ],
      benefit: 'Rispetto al Base con pannello aggiunto separatamente, l’Avanzato costa 60 € in meno: il controllo dei contenuti è già incluso nell’offerta.',
      limit: 'Il pannello gestisce i campi e i modelli concordati; non è un editor libero del sito né un gestionale per contabilità, magazzino o trattative. Le richieste smart e gli appuntamenti non sono inclusi.'
    },
    {
      id: 'pro', name: 'Pro', price: 1290, kicker: 'Relazioni e appuntamenti', includes: ['dashboard', 'appointments'],
      description: 'Tutto l’Avanzato, con richieste d’informazione e appuntamenti collegati alle opere e alle disponibilità definite dalla galleria.',
      blocks: [
        {title: 'Informazioni collegate alle opere', text: 'Il visitatore può inviare una richiesta indicando l’opera d’interesse. La galleria riceve il contesto della richiesta insieme ai recapiti e può proseguire la conversazione con le informazioni necessarie.'},
        {title: 'Orari e disponibilità aggiornati', text: 'Dal pannello si impostano giorni, fasce orarie e slot disponibili per le visite. Il sistema impedisce richieste su slot già occupati; quando una visita viene confermata o annullata, la disponibilità del calendario interno si aggiorna automaticamente.'},
        {title: 'Selezioni da condividere con i collezionisti', text: 'La galleria può comporre una selezione di opere, aggiungere un breve testo introduttivo e condividere un link dedicato via email o WhatsApp. Il collezionista trova una presentazione coerente con la conversazione e può chiedere informazioni o una visita sulle opere selezionate.'},
        {title: 'Una continuità con il pannello', text: 'Collezioni, stato delle opere e fasce di visita vengono gestiti in un unico ambiente. Alla consegna la galleria prova il flusso completo: impostazione delle disponibilità, richiesta da parte del visitatore e aggiornamento dello slot.'}
      ],
      items: [
        'Tutte le pagine e le funzioni del Sito Avanzato, pannello incluso.',
        'Modulo per richieste d’informazione collegate all’opera o alla pagina visitata.',
        'Calendario interno per giorni, fasce orarie e slot disponibili.',
        'Aggiornamento automatico delle disponibilità dopo conferma o annullamento.',
        'Messaggi di conferma e riepilogo della richiesta per il visitatore e la galleria.',
        'Gestione dal pannello delle disponibilità e delle richieste ricevute.',
        'Selezioni personalizzate di opere con testo introduttivo e link dedicato per i collezionisti.',
        'Richiesta di informazioni o visita contestuale alla selezione condivisa.',
        'Verifica guidata del flusso e istruzioni per la gestione quotidiana.'
      ],
      after: 'L’offerta comprende il calendario interno del sito. L’eventuale sincronizzazione con Google Calendar, Outlook o altri servizi richiede una verifica tecnica e una conferma separata. Le notifiche dipendono dai servizi concordati.',
      benefit: 'Rispetto ad Avanzato più gestione smart aggiunta separatamente, il Pro costa 90 € in meno. La galleria offre un percorso più diretto tra interesse, richiesta e visita.',
      limit: 'Il sistema organizza richieste e disponibilità, ma non sostituisce il rapporto personale, la trattativa o la vendita, che restano gestiti dalla galleria. Calendari esterni, notifiche o automazioni di terze parti vanno verificati e non sono inclusi di default.'
    }
  ],
  bonuses: [
    {
      id: 'qr', title: 'Scheda digitale e QR', price: 110, requires: 'dashboard',
      tag: 'Modulo opzionale · Richiede il pannello',
      text: 'Un QR apre una web app con la destinazione scelta dalla galleria: la scheda di una singola opera, la pagina di un artista, una mostra o un evento, i contatti oppure il sito. Ogni codice può essere collegato a una destinazione specifica; con il pannello il collegamento si aggiorna senza ristampare il QR.',
      lockedText: 'Richiede un pannello di controllo. Con il Base si sblocca aggiungendo prima il pannello; Avanzato e Pro lo comprendono già.'
    },
    {
      id: 'dashboard', title: 'Pannello di controllo della galleria', price: 260, requires: null,
      tag: 'Incluso in Avanzato e Pro',
      text: 'Area riservata per aggiornare collezioni e opere: immagini, informazioni, ordine e stato di disponibilità. Se aggiunto al Base, offre alla galleria autonomia nella gestione dei contenuti previsti.',
      lockedText: 'È un modulo aggiungibile al Base. Avanzato e Pro lo comprendono già.'
    },
    {
      id: 'appointments', title: 'Gestione smart di informazioni e appuntamenti', price: 290, requires: 'dashboard',
      tag: 'Inclusa nel Pro · Aggiungibile con il pannello',
      text: 'Modulo con form contestuali alle opere e calendario interno delle visite. La galleria definisce giorni, orari e slot; le richieste occupano una disponibilità e conferma o annullamento aggiorna automaticamente gli slot liberi.',
      lockedText: 'Richiede il pannello. Con Base si attiva aggiungendo prima il pannello; Avanzato può aggiungerlo separatamente; Pro lo comprende già.'
    }
  ],
  sections: [
    ['Perimetro del progetto', [
      'La proposta considera un sito in italiano, una sede e un catalogo iniziale fino a 25 opere. La galleria fornisce testi, fotografie e informazioni disponibili; quantità e materiali vengono confermati prima dell’avvio.',
      'Sono inclusi adattamento grafico, caricamento iniziale dei contenuti concordati, verifica su smartphone e computer e un ciclo di revisione su testi e impaginazione.',
      'Produzione fotografica, traduzioni, redazione estesa dei testi, e-commerce, pagamenti online e inventario amministrativo non sono inclusi. Eventuali richieste fuori perimetro si stimano prima di procedere.'
    ]],
    ['Materiali, fasi e tempi', [
      'Per partire raccogliamo logo, identità visiva, contatti, testi, immagini e dati delle opere. Definiamo insieme le pagine, le categorie di catalogo e, se scelto, i campi del pannello.',
      'Dopo la conferma dei materiali e delle funzioni preparo la struttura e la direzione grafica, inserisco i contenuti, raccolgo le osservazioni nel ciclo di revisione e verifico il sito prima della consegna.',
      'Le date di lavorazione e consegna si concordano dopo aver ricevuto i materiali e aver validato il perimetro.'
    ]],
    ['Bonus e dipendenze', [
      'Base non include bonus. Avanzato include il pannello; Pro include pannello e gestione smart di informazioni e appuntamenti. Quando un modulo è incluso, nel configuratore appare già incluso e non può essere selezionato una seconda volta.',
      'La scheda digitale con QR è l’unico modulo che resta opzionale per tutti i pacchetti. Richiede il pannello perché la galleria possa modificare la destinazione dei collegamenti; nel Base senza pannello resta bloccata.',
      'Se aggiunti separatamente: pannello 260 €, gestione smart 290 € (con pannello attivo) e scheda digitale/QR 110 € (con pannello attivo). Il riepilogo ricalcola la somma in base alla configurazione.'
    ]],
    ['Consegna, costi e assistenza', [
      'Alla consegna la galleria riceve gli accessi e le istruzioni per le funzioni comprese; Avanzato e Pro includono una sessione guidata sul pannello.',
      'Propongo 30 giorni di assistenza per correggere difetti delle funzioni concordate. Aggiornamenti continuativi dei contenuti, manutenzione, nuove funzioni e richieste aggiuntive si valutano separatamente.',
      'Dominio, hosting, caselle email, servizi di calendario esterni e strumenti di terze parti possono comportare costi ricorrenti e non sono compresi. Modalità di pagamento e trattamento fiscale saranno specificati nel preventivo definitivo.'
    ]]
  ]
};
