'use strict';

const $ = id => document.getElementById(id);
const money = value => new Intl.NumberFormat('it-IT', {useGrouping: 'always'}).format(value) + ' €';
function para(text) {
  const element = document.createElement('p');
  element.textContent = text;
  return element;
}
function row(label, value) {
  const element = document.createElement('div');
  element.className = 'row';
  const name = document.createElement('span');
  const amount = document.createElement('strong');
  name.textContent = label;
  amount.textContent = value;
  element.append(name, amount);
  return element;
}

proposal.intro.forEach(text => $('intro').append(para(text)));
$('confirmationText').textContent = proposal.confirmation;
$('externalCosts').textContent = proposal.externalCosts;

proposal.packs.forEach((pack, index) => {
  const offer = document.createElement('article');
  offer.className = 'offer';
  const tag = para(pack.tag);
  tag.className = 'offer-tag';
  const top = document.createElement('div');
  top.className = 'offer-top';
  const heading = document.createElement('h3');
  heading.id = 'pack-' + index;
  heading.textContent = pack.name;
  offer.setAttribute('aria-labelledby', heading.id);
  const price = document.createElement('span');
  price.className = 'cost';
  price.textContent = money(pack.price);
  top.append(heading, price);
  offer.append(tag, top, para(pack.description));

  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = 'Mostra cosa comprende';
  details.append(summary);
  const body = document.createElement('div');
  body.className = 'detailbody offer-body';
  const blocks = document.createElement('div');
  blocks.className = 'offer-blocks offer-blocks-' + index;
  pack.blocks.forEach(block => {
    const section = document.createElement('div');
    section.className = 'offer-block';
    const title = document.createElement('h4');
    title.textContent = block.title;
    section.append(title, para(block.text));
    blocks.append(section);
  });
  body.append(blocks);
  const features = document.createElement('ul');
  features.className = 'offer-features';
  pack.items.forEach(text => {
    const item = document.createElement('li');
    item.textContent = text;
    features.append(item);
  });
  body.append(features);
  if (pack.after) {
    const note = para(pack.after);
    note.className = 'offer-model';
    body.append(note);
  }
  const tradeoffs = document.createElement('div');
  tradeoffs.className = 'offer-tradeoffs';
  [['Il vantaggio', pack.benefit], ['Da considerare', pack.limit]].forEach(([title, text], i) => {
    const block = document.createElement('div');
    block.className = 'offer-tradeoff ' + (i ? 'offer-limit' : 'offer-benefit');
    const heading = document.createElement('h4');
    heading.textContent = title;
    block.append(heading, para(text));
    tradeoffs.append(block);
  });
  body.append(tradeoffs);
  details.append(body);
  details.addEventListener('toggle', () => {
    summary.textContent = details.open ? 'Nascondi i dettagli' : 'Mostra cosa comprende';
  });

  const label = document.createElement('label');
  label.className = 'select-offer';
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'package';
  input.value = index;
  input.checked = index === 0;
  input.addEventListener('change', update);
  label.append(input, document.createTextNode('Scelgo ' + pack.name));
  offer.append(details, label);
  $('packs').append(offer);
});

proposal.bonuses.forEach(bonus => {
  const element = document.createElement('article');
  element.className = 'tile bonus';
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = bonus.tag;
  const title = document.createElement('h3');
  title.textContent = bonus.title;
  const scope = para(bonus.scope);
  scope.className = 'tradeoff';
  element.append(tag, title, para(bonus.text), scope);
  $('bonuses').append(element);
});
proposal.sections.forEach(([heading, paragraphs]) => {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = heading;
  details.append(summary);
  paragraphs.forEach(text => details.append(para(text)));
  $('terms').append(details);
});

function state() {
  const index = Number(document.querySelector('input[name="package"]:checked').value);
  return {index, pack: proposal.packs[index], total: proposal.packs[index].price};
}
function update() {
  const {pack, total} = state();
  $('summary').replaceChildren(row(pack.name, money(pack.price)), row('Bonus', 'Da definire · esclusi'));
  $('total').textContent = money(total);
  $('selectedDescription').textContent = pack.description;
  $('confirm').checked = false;
  $('status').textContent = '';
}

let file, url;
function download() {
  if (!file || !url) return;
  const link = document.createElement('a');
  link.href = url;
  link.download = file.name;
  document.body.append(link);
  link.click();
  link.remove();
}
$('preview').addEventListener('click', () => {
  const selection = state();
  const now = new Date();
  const date = new Intl.DateTimeFormat('it-IT', {timeZone: 'Europe/Rome', dateStyle: 'long', timeStyle: 'short'}).format(now);
  const stamp = new Intl.DateTimeFormat('sv-SE', {timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit'}).format(now);
  const confirmed = $('confirm').checked;
  const bytes = createPDF(optionLines(selection, date, confirmed));
  file = new File([bytes], 'Proposta-galleria-' + stamp + '.pdf', {type: 'application/pdf'});
  if (url) URL.revokeObjectURL(url);
  url = URL.createObjectURL(file);
  $('pdfView').src = url;
  const heading = document.createElement('h3');
  heading.textContent = 'Proposta · Galleria d’arte';
  $('sheet').replaceChildren(heading, para('Bozza · ' + date + ' · Europe/Rome'), row(selection.pack.name, money(selection.pack.price)), para(selection.pack.description), row('Bonus', 'Da definire · esclusi'), row('Totale sito proposto', money(selection.total)), para('Perimetro proposto: italiano, una sede, fino a 25 opere iniziali e un ciclo di revisione.'), para(proposal.externalCosts), para(confirmed ? proposal.confirmation : 'Riepilogo delle scelte. Richiesta di conferma non selezionata.'));
  $('shareStatus').textContent = '';
  $('modal').showModal();
});
$('close').addEventListener('click', () => $('modal').close());
$('download').addEventListener('click', download);
$('share').addEventListener('click', async () => {
  if (!file) return;
  const button = $('share');
  if (typeof navigator.share === 'function' && typeof navigator.canShare === 'function' && navigator.canShare({files: [file]})) {
    button.disabled = true;
    try {
      await navigator.share({files: [file]});
      $('shareStatus').textContent = 'Verifica l’invio nella chat WhatsApp.';
    } catch (error) {
      $('shareStatus').textContent = error.name === 'AbortError' ? 'Condivisione annullata.' : 'Condivisione non riuscita. Scarica il PDF e allegalo alla chat WhatsApp.';
    } finally {
      button.disabled = false;
    }
  } else {
    download();
    window.open('https://wa.me/393450487680', '_blank', 'noopener,noreferrer');
    $('shareStatus').textContent = 'PDF scaricato: allegalo manualmente alla chat WhatsApp.';
  }
});
update();
