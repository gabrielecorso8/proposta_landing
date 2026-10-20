# Proposta sito per galleria d’arte

Bozza di proposta interattiva con tre pacchetti: Sito Base (890 €), Sito Avanzato (990 €), Sito Pro (1.190 €). Riferimento visivo: [FORMA](https://gabrielecorso8.github.io/forma/).

Il Base presenta galleria e catalogo; l’Avanzato aggiunge il pannello di gestione delle opere; il Pro aggiunge selezioni con indirizzi dedicati per i collezionisti. La pagina descrive una proposta commerciale: non implementa il sito, il pannello o i bonus offerti.

I tre bonus sono idee da valutare, non selezionabili e non inclusi nel totale: scheda opera con QR, preferenze del collezionista e promemoria di ricontatto. Prima della versione definitiva vanno confermati bonus, perimetro iniziale (proposti 25 opere, una lingua, una sede e un ciclo di revisione), calendario, costi esterni, assistenza, modalità di pagamento e trattamento fiscale.

## Pubblicazione

Pagina statica senza dipendenze. Per GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root).

Il pulsante di condivisione usa il menu nativo quando il dispositivo supporta gli allegati. Altrimenti scarica il PDF e apre la chat WhatsApp già configurata: l’allegato va inserito manualmente. Il PDF viene generato localmente e riporta pacchetto, importo, bonus esclusi, perimetro proposto, costi separati, data Europe/Rome e stato della richiesta di conferma. Non viene inviato automaticamente.

## File

- `index.html`: interfaccia
- `data.js`: testo e prezzi della proposta
- `app.js`: scelte, riepilogo e condivisione
- `pdf.js`: generazione PDF locale

Le scelte non vengono inviate a un server.

## Verifica locale

Avviare `python -m http.server 8765` dalla cartella del repository e aprire `http://localhost:8765`. Controllare i tre importi, i dettagli di ogni pacchetto, l’azzeramento della richiesta di conferma quando cambia il pacchetto, anteprima, download PDF e layout mobile.
