# Proposta sito per galleria d’arte

Bozza di proposta interattiva con tre pacchetti: Sito Base (890 €), Sito Avanzato (990 €), Sito Pro (1.190 €). Riferimento visivo: [FORMA](https://gabrielecorso8.github.io/forma/).

Il Base presenta galleria e catalogo; l’Avanzato aggiunge il pannello di controllo; il Pro aggiunge la gestione smart degli appuntamenti e selezioni con indirizzi dedicati per i collezionisti. La pagina descrive una proposta commerciale: non implementa il sito o gli strumenti offerti.

Tre bonus senza sovrapprezzo: scheda opera con QR in tutti i pacchetti, pannello di controllo in Avanzato e Pro, gestione smart degli appuntamenti integrata nel Pro. Nel pannello della galleria si aggiornano collezioni, stato delle opere e, con il Pro, disponibilità di giorni e orari. La sincronizzazione con calendari esterni resta da concordare. Prima della versione definitiva vanno confermati il perimetro iniziale (proposti 25 opere, una lingua, una sede e un ciclo di revisione), calendario, costi esterni, assistenza, modalità di pagamento e trattamento fiscale.

## Pubblicazione

Pagina statica senza dipendenze. Per GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root).

Il pulsante di condivisione usa il menu nativo quando il dispositivo supporta gli allegati. Altrimenti scarica il PDF e apre la chat WhatsApp già configurata: l’allegato va inserito manualmente. Il PDF viene generato localmente e riporta pacchetto, importo, bonus inclusi, perimetro proposto, costi separati, data Europe/Rome e stato della richiesta di conferma. Non viene inviato automaticamente.

## File

- `index.html`: interfaccia
- `data.js`: testo e prezzi della proposta
- `app.js`: scelte, riepilogo e condivisione
- `pdf.js`: generazione PDF locale

Le scelte non vengono inviate a un server.

## Verifica locale

Avviare `python -m http.server 8765` dalla cartella del repository e aprire `http://localhost:8765`. I prezzi dei singoli pacchetti appaiono quando si apre l’offerta; il riepilogo mostra il prezzo del pacchetto selezionato.
