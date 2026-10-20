# Proposta sito per galleria d’arte

Bozza interattiva per presentare tre livelli di sito e moduli aggiuntivi, con FORMA come riferimento visivo e primo passaggio prima delle offerte.

## Pacchetti

- Base · 890 €: sito per presentare galleria e opere, senza bonus.
- Avanzato · 1.090 €: Base con pannello di controllo della galleria incluso.
- Pro · 1.290 €: Avanzato con gestione smart delle richieste e degli appuntamenti inclusa.

I prezzi delle offerte appaiono all’interno dell’approfondimento, non nei riquadri chiusi. Il riepilogo mostra il prezzo solo dopo la selezione di un’offerta.

## Bonus

- Scheda digitale e QR · 110 €: web app e collegamento configurabile a opera, artista, mostra, contatti o sito. Richiede il pannello.
- Pannello di controllo · 260 €: aggiungibile al Base; già incluso in Avanzato e Pro.
- Gestione smart di informazioni e appuntamenti · 290 €: aggiungibile quando il pannello è attivo; già inclusa in Pro.

Un bonus incluso viene segnato come «Già incluso» e non è selezionabile. Il Base può attivare il QR solo aggiungendo prima il pannello. Le disponibilità del Pro si aggiornano nel calendario interno; l’eventuale sincronizzazione esterna va verificata e concordata.

## Perimetro da confermare

La proposta considera fino a 25 opere iniziali, una lingua, una sede e un ciclo di revisione. Testi, fotografie, dominio, hosting e servizi di terze parti restano da definire nel preventivo definitivo.

## Pubblicazione e uso

Pagina statica senza dipendenze. Per GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root). Avviare una preview locale con `python -m http.server 8765` dalla cartella del repository e aprire `http://localhost:8765`.

Il PDF viene generato localmente e riporta offerta, bonus inclusi, bonus aggiunti, totale, data Europe/Rome e stato della richiesta di conferma. Le scelte non vengono inviate a un server.

## File

- `index.html`: interfaccia e presentazione FORMA
- `style.css`: stile editoriale responsive
- `data.js`: descrizioni, prezzi e condizioni
- `app.js`: selezione pacchetti/bonus, riepilogo e PDF
- `pdf.js`: generazione PDF locale
- `assets/forma-preview.png`: anteprima cliccabile del fac simile FORMA
