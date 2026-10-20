'use strict';
const $ = id => document.getElementById(id);
const money = value => new Intl.NumberFormat('it-IT', {maximumFractionDigits: 0}).format(value) + ' €';
let selectedPack = null;
const selectedBonuses = new Set();
const bonusById = id => proposal.bonuses.find(item => item.id === id);
const includedIds = pack => pack ? pack.includes : [];
function panelActive() { return !!selectedPack && (includedIds(selectedPack).includes('dashboard') || selectedBonuses.has('dashboard')); }
function selectedBonusIds() { return [...new Set([...includedIds(selectedPack || {includes: []}), ...selectedBonuses])]; }
function selectedAddons() { return proposal.bonuses.filter(item => selectedBonuses.has(item.id)); }
function totalAmount() { return selectedPack ? selectedPack.price + selectedAddons().reduce((sum, item) => sum + item.price, 0) : 0; }
function para(text, cls) { const p = document.createElement('p'); p.textContent = text; if (cls) p.className = cls; return p; }
function line(text, cls) { const e = document.createElement('div'); e.className = cls; e.textContent = text; return e; }
function toggleLabel(item, included, disabled, locked) {
 const label = document.createElement('label'); label.className = 'bonus-choice' + (included ? ' is-included' : disabled ? ' is-locked' : '');
 const input = document.createElement('input'); input.type = 'checkbox'; input.value = item.id; input.checked = included || selectedBonuses.has(item.id); input.disabled = included || disabled;
 const title = document.createElement('span'); title.className = 'bonus-choice-title'; title.textContent = included ? 'Già incluso' : disabled ? locked : 'Aggiungi alla proposta';
 label.append(input, title); return label;
}
function clearImpossibleSelections(pack) {
 selectedBonuses.forEach(id => { const b = bonusById(id); if (pack.includes.includes(id) || (b.requires && id !== 'dashboard' && !pack.includes.includes('dashboard') && !selectedBonuses.has('dashboard'))) selectedBonuses.delete(id); });
}
function renderPackages() {
 const root = $('packages'); root.replaceChildren();
 const includedTitles = {dashboard:'Pannello di controllo incluso', appointments:'Gestione smart inclusa'};
 proposal.packages.forEach((pack, index) => {
  const card = document.createElement('article');
  card.className = 'package' + (selectedPack?.id === pack.id ? ' is-selected' : '');
  card.dataset.id = pack.id;

  const header = document.createElement('div'); header.className = 'package-summary';
  const number = document.createElement('span'); number.className = 'package-number'; number.textContent = String(index + 1).padStart(2, '0');
  const label = document.createElement('span'); label.className = 'package-label';
  const kicker = para(pack.kicker, 'package-kicker'); const name = document.createElement('strong'); name.textContent = pack.name; label.append(kicker, name);
  const included = document.createElement('div'); included.className = 'package-included';
  pack.includes.forEach(id => { const badge = document.createElement('span'); badge.textContent = includedTitles[id] || bonusById(id)?.title || id; included.append(badge); });
  header.append(number, label, included);
  card.append(header, para(pack.description, 'package-description'));

  const highlights = document.createElement('ul'); highlights.className = 'package-highlights';
  pack.items.slice(0, 4).forEach(item => { const li = document.createElement('li'); li.textContent = item; highlights.append(li); });
  card.append(highlights);

  const details = document.createElement('details'); details.className = 'package-details';
  const summary = document.createElement('summary'); summary.textContent = 'Approfondisci l’offerta';
  const body = document.createElement('div'); body.className = 'package-body';
  const blocks = document.createElement('div'); blocks.className = 'package-blocks';
  pack.blocks.forEach(block => { const section = document.createElement('section'); const h = document.createElement('h4'); h.textContent = block.title; section.append(h, para(block.text)); blocks.append(section); }); body.append(blocks);
  const listTitle = document.createElement('h4'); listTitle.className = 'package-list-title'; listTitle.textContent = 'Cosa comprende'; body.append(listTitle);
  const list = document.createElement('ul'); list.className = 'package-items'; pack.items.forEach(item => { const li = document.createElement('li'); li.textContent = item; list.append(li); }); body.append(list);
  const benefit = document.createElement('p'); benefit.className = 'package-benefit'; benefit.append(document.createTextNode('Il vantaggio · ' + pack.benefit)); body.append(benefit);
  const limit = document.createElement('p'); limit.className = 'package-limit'; limit.append(document.createTextNode('Limite · ' + pack.limit)); body.append(limit);
  if (pack.after) body.append(para(pack.after, 'package-after'));
  const purchase = document.createElement('div'); purchase.className = 'package-purchase';
  const price = document.createElement('strong'); price.className = 'expanded-price'; price.textContent = money(pack.price);
  const choose = document.createElement('button'); choose.type = 'button'; choose.className = 'button button-dark select-package'; choose.textContent = selectedPack?.id === pack.id ? 'Offerta selezionata ✓' : 'Scegli questa offerta';
  choose.addEventListener('click', () => { selectedPack = pack; clearImpossibleSelections(pack); renderPackages(); renderBonuses(); renderSummary(); });
  purchase.append(price, choose); body.append(purchase); details.append(summary, body);
  if (selectedPack?.id === pack.id) details.open = true;
  card.append(details); root.append(card);
 });
}
function renderBonuses() {
 const root = $('bonuses'); root.replaceChildren();
 proposal.bonuses.forEach(item => {
  const card = document.createElement('article'); card.className = 'bonus-card';
  const head = document.createElement('div'); head.className = 'bonus-card-head'; const title = document.createElement('h3'); title.textContent = item.title; const tag = para(item.tag, 'bonus-tag'); head.append(title, tag); card.append(head, para(item.text, 'bonus-description'));
  const included = includedIds(selectedPack).includes(item.id);
  const locked = !!item.requires && !panelActive();
  const choice = toggleLabel(item, included, locked, locked ? item.lockedText : '');
  choice.querySelector('input').addEventListener('change', event => { if (event.target.checked) selectedBonuses.add(item.id); else { selectedBonuses.delete(item.id); if (item.id === 'dashboard') { selectedBonuses.delete('qr'); selectedBonuses.delete('appointments'); } } renderBonuses(); renderSummary(); });
  card.append(choice);
  if (!included) { const detail = document.createElement('details'); detail.className = 'bonus-price-details'; const summary = document.createElement('summary'); summary.textContent = 'Prezzo e condizioni'; const info = document.createElement('div'); info.className = 'bonus-price-info'; const price = document.createElement('strong'); price.textContent = money(item.price); info.append(price, para(locked ? item.lockedText : item.requires === 'dashboard' ? 'Disponibile se è attivo il pannello di controllo.' : 'Puoi aggiungerlo al pacchetto selezionato.')); detail.append(summary, info); card.append(detail); }
  root.append(card);
 });
}
function renderSummary() {
 const root = $('summary'); root.replaceChildren();
 if (!selectedPack) { $('total').textContent = 'Scegli un’offerta'; $('preview').disabled = true; return; }
 root.append(line(selectedPack.name, 'summary-primary')); root.append(line('Pacchetto · ' + money(selectedPack.price), 'summary-row'));
 const included = selectedBonusIds().filter(id => selectedPack.includes.includes(id)).map(bonusById);
 if (included.length) { root.append(line('Bonus inclusi', 'summary-label')); included.forEach(item => root.append(line(item.title + ' · già incluso', 'summary-row'))); }
 const additions = selectedAddons();
 if (additions.length) { root.append(line('Bonus aggiunti', 'summary-label')); additions.forEach(item => root.append(line(item.title + ' · ' + money(item.price), 'summary-row'))); }
 $('total').textContent = money(totalAmount()); $('preview').disabled = false;
}
function dateLabel() { return new Intl.DateTimeFormat('it-IT', {timeZone:'Europe/Rome', day:'2-digit', month:'long', year:'numeric'}).format(new Date()); }
function currentSelection() { return {pack:selectedPack, includedBonuses:selectedBonusIds().filter(id => selectedPack.includes.includes(id)).map(bonusById), addedBonuses:selectedAddons(), total:totalAmount()}; }
function sheetContent(selection, confirmed) {
 const root = $('sheet'); root.replaceChildren();
 const h = document.createElement('h3'); h.textContent = selection.pack.name + ' · ' + money(selection.pack.price); root.append(h);
 root.append(para(selection.pack.description));
 const included = para('Bonus inclusi: ' + (selection.includedBonuses.length ? selection.includedBonuses.map(x => x.title).join(', ') : 'nessuno')); root.append(included);
 if (selection.addedBonuses.length) root.append(para('Bonus aggiunti: ' + selection.addedBonuses.map(x => x.title + ' (' + money(x.price) + ')').join(', ')));
 const total = document.createElement('strong'); total.className = 'sheet-total'; total.textContent = 'Totale indicativo · ' + money(selection.total); root.append(total);
 root.append(para('Data: ' + dateLabel() + ' (Europe/Rome)'));
 root.append(para(confirmed ? proposal.confirmation : 'Riepilogo senza conferma: condizioni e avvio da concordare.'));
 root.append(para(proposal.externalCosts));
}
let pdfUrl = null;
function makePdf(confirmed) { const blob = new Blob([createPDF(optionLines(currentSelection(), dateLabel(), confirmed))], {type:'application/pdf'}); if (pdfUrl) URL.revokeObjectURL(pdfUrl); pdfUrl = URL.createObjectURL(blob); $('pdfView').src = pdfUrl; return blob; }
$('intro').replaceChildren(...proposal.intro.map(t => para(t)));
$('confirmationText').textContent = proposal.confirmation; $('externalCosts').textContent = proposal.externalCosts;
proposal.sections.forEach(([title, paragraphs]) => { const section = document.createElement('section'); section.className = 'term'; const h = document.createElement('h3'); h.textContent = title; section.append(h, ...paragraphs.map(t => para(t))); $('terms').append(section); });
renderPackages(); renderBonuses(); renderSummary();
$('preview').addEventListener('click', () => { const selection = currentSelection(); sheetContent(selection, $('confirm').checked); makePdf($('confirm').checked); $('modal-title').textContent = 'Il riepilogo della scelta.'; $('modal').showModal(); });
$('confirm').addEventListener('change', () => { if ($('modal').open && selectedPack) { sheetContent(currentSelection(), $('confirm').checked); makePdf($('confirm').checked); } });
$('close').addEventListener('click', () => $('modal').close()); $('modal').addEventListener('click', event => { if (event.target === $('modal')) $('modal').close(); });
$('download').addEventListener('click', () => { if (!selectedPack) return; const blob = makePdf($('confirm').checked); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'proposta-galleria.pdf'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); });
$('share').addEventListener('click', async () => { if (!selectedPack) return; const blob = makePdf($('confirm').checked); const file = new File([blob], 'proposta-galleria.pdf', {type:'application/pdf'}); try { if (navigator.canShare?.({files:[file]})) await navigator.share({files:[file], title:'Proposta sito galleria'}); else { $('download').click(); $('shareStatus').textContent = 'PDF scaricato: allegalo alla chat o al messaggio che preferisci.'; } } catch (error) { if (error.name !== 'AbortError') $('shareStatus').textContent = 'Non è stato possibile aprire la condivisione.'; } });
window.money = money; window.bonusSummary = index => selectedBonusIds().map(bonusById).map(x=>x.title).join(', ') || 'nessuno';


