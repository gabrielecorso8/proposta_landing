const proposal = {
  intro: [
    'Il fac simile FORMA mostra una direzione possibile: lasciare alle opere il centro della scena e rendere semplice il contatto con la galleria.',
    'Da qui partono tre livelli di realizzazione. I bonus si aggiungono solo quando il pacchetto scelto non li comprende già.'
  ],
  confirmation: 'Ho letto la selezione e chiedo conferma del perimetro e delle condizioni prima dell’avvio dei lavori.',
  externalCosts: 'Dominio, hosting, sincronizzazioni con calendari esterni ed eventuali servizi a pagamento si definiscono prima dell’avvio e non sono compresi nel totale indicativo.',
  packages: [
    {
      id: 'base', name: 'Base', price: 890, kicker: 'La galleria, online', includes: [],
      description: 'Una presenza digitale curata per presentare la galleria, dare spazio alle opere e ricevere richieste.',
      blocks: [
        {title: 'La galleria e le opere', text: 'Un sito ispirato alla direzione visiva di FORMA, adattato all’identità della galleria. Comprende le pagine essenziali e il caricamento iniziale di opere, fotografie e informazioni.'},
        {title: 'Dal catalogo al contatto', text: 'I visitatori possono esplorare le opere, leggere le schede e scrivere alla galleria per chiedere informazioni o fissare una visita.'}
      ],
      items: ['Progetto grafico e sito responsive.', 'Presentazione della galleria e delle collezioni.', 'Catalogo iniziale con schede delle opere concordate.', 'Ricerca o filtri del catalogo.', 'Contatto diretto via email o WhatsApp.', 'Bonus non compresi nel pacchetto.'],
      benefit: 'Una presenza online essenziale, curata e pronta per farsi conoscere.',
      limit: 'Per aggiornare le opere o la disponibilità ci si rivolge alla galleria per un intervento concordato.'
    },
    {
      id: 'advanced', name: 'Avanzato', price: 1090, kicker: 'Gestione autonoma', includes: ['dashboard'],
      description: 'Tutto il Base, con un pannello per aggiornare collezioni, opere e disponibilità in autonomia.',
      blocks: [
        {title: 'Un pannello per le collezioni', text: 'Un accesso riservato permette di aggiungere e aggiornare le collezioni e le schede delle opere senza intervenire sul codice.'},
        {title: 'Sempre aggiornato', text: 'Dal pannello si gestiscono fotografie, descrizioni, ordine e stato di ogni opera: disponibile, riservata o venduta. Alla consegna è inclusa una sessione guidata.'}
      ],
      items: ['Tutte le pagine e le funzioni del Sito Base.', 'Pannello di controllo della galleria incluso.', 'Creazione e aggiornamento delle collezioni.', 'Aggiunta e modifica delle schede e delle immagini.', 'Aggiornamento dello stato dell’opera.', 'Sessione di consegna e guida operativa.'],
      benefit: 'Il catalogo e la disponibilità delle opere seguono i cambiamenti della galleria.',
      limit: 'Il pannello gestisce i campi e la struttura concordati; nuove funzioni o layout si valutano a parte.'
    },
    {
      id: 'pro', name: 'Pro', price: 1290, kicker: 'Relazioni e appuntamenti', includes: ['dashboard', 'appointments'],
      description: 'Tutto l’Avanzato, con richieste e appuntamenti gestiti dal pannello della galleria.',
      blocks: [
        {title: 'Informazioni e visite', text: 'Ogni richiesta può indicare l’opera di interesse. I visitatori consultano i giorni, gli orari e gli slot disponibili e inviano una richiesta per incontrare la galleria.'},
        {title: 'Le disponibilità si aggiornano', text: 'Dal pannello la galleria definisce quando ricevere. Conferme e annullamenti aggiornano automaticamente gli slot pubblicati, così i visitatori vedono le disponibilità attuali.'},
        {title: 'Selezioni da condividere', text: 'La galleria può preparare pagine dedicate a un collezionista, con introduzione e selezione di opere. Il link è pronto da condividere per email o WhatsApp.'}
      ],
      items: ['Tutte le funzioni del Sito Avanzato.', 'Gestione smart delle richieste di informazioni e visita.', 'Pannello per impostare giorni, orari e slot liberi.', 'Aggiornamento automatico degli slot dopo una conferma o un annullamento.', 'Selezioni di opere personalizzate e link dedicati per i collezionisti.', 'Calendario interno collegato al pannello.'],
      after: 'La sincronizzazione con Google Calendar, Outlook o altri calendari esterni va concordata dopo aver verificato il servizio utilizzato dalla galleria.',
      benefit: 'Dal primo contatto alla visita, collezionisti e galleria seguono un percorso chiaro con disponibilità aggiornate.',
      limit: 'Il calendario interno e i suoi collegamenti esterni si definiscono nel perimetro finale. Conferma e gestione delle richieste restano in mano alla galleria.'
    }
  ],
  bonuses: [
    {
      id: 'qr', title: 'Scheda digitale e QR', price: 110, requires: 'dashboard',
      tag: 'Opzionale · Base, Avanzato e Pro',
      text: 'Una web app apre la destinazione scelta per il QR: una singola opera, un artista, una mostra, i contatti o il sito. Con il pannello il collegamento può essere aggiornato senza ristampare il codice.',
      lockedText: 'Richiede un pannello di controllo. Se il Base è l’unico servizio scelto, il bonus resta bloccato; si sblocca aggiungendo il pannello.'
    },
    {
      id: 'dashboard', title: 'Pannello di controllo della galleria', price: 260, requires: null,
      tag: 'Incluso in Avanzato e Pro',
      text: 'Uno spazio riservato per aggiornare le collezioni, gestire le schede delle opere e indicare se un’opera è disponibile, riservata o venduta.',
      lockedText: 'Seleziona il pacchetto Base per aggiungerlo. Avanzato e Pro lo comprendono già.'
    },
    {
      id: 'appointments', title: 'Gestione smart di richieste e appuntamenti', price: 290, requires: 'dashboard',
      tag: 'Incluso nel Pro',
      text: 'I visitatori consultano giorni, orari e slot liberi per inviare una richiesta. Dal pannello la galleria gestisce le disponibilità; conferme e annullamenti aggiornano automaticamente il calendario interno.',
      lockedText: 'Richiede il pannello di controllo. Nel Base si sblocca aggiungendo il pannello; Avanzato può aggiungerlo a parte; il Pro lo comprende già.'
    }
  ],
  sections: [
    ['Perimetro del progetto', [
      'Prima della versione definitiva confermiamo una sede, una lingua, le pagine e il numero di opere iniziali. La proposta considera fino a 25 opere con fotografie, testi e dati forniti dalla galleria e un ciclo di revisione.',
      'Produzione fotografica, traduzioni, redazione estesa, e-commerce e inventario amministrativo non sono inclusi. Ogni funzione aggiuntiva viene concordata prima di iniziare.'
    ]],
    ['Calendario e collegamenti', [
      'Il pacchetto Pro comprende la gestione degli orari e degli slot nel pannello e il relativo calendario interno. Un’eventuale sincronizzazione con Google Calendar, Outlook o un servizio diverso va verificata con la galleria e può comportare costi esterni.',
      'I bonus compresi nel pacchetto risultano già inclusi nel riepilogo e non si possono aggiungere una seconda volta. Gli altri possono essere aggiunti dall’approfondimento, quando i requisiti sono soddisfatti.'
    ]],
    ['Consegna, assistenza e condizioni', [
      'Alla consegna la galleria riceve accessi e istruzioni. Sono proposti 30 giorni di assistenza per correggere difetti delle funzioni concordate; aggiornamenti dei contenuti e nuove richieste si valutano separatamente.',
      'Dominio, hosting, calendario esterno ed eventuali servizi di terze parti restano separati. Modalità di pagamento e trattamento fiscale saranno specificati nel preventivo definitivo.'
    ]]
  ]
};
