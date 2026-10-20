'use strict';
const $ = id => document.getElementById(id);
const money = value => new Intl.NumberFormat('it-IT', {maximumFractionDigits: 0}).format(value) + ' €';
let selectedPack = null;
const selectedBonuses = new Set();
const toolById = id => proposal.bonuses.find(item => item.id === id) || proposal.includedTools.find(item => item.id === id);
const includedIds = pack => pack ? pack.includes : [];
function panelActive() { return includedIds(selectedPack).includes('dashboard'); }
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
 selectedBonuses.forEach(id => { const extra = proposal.bonuses.find(item=>item.id===id); if(!extra || pack.includes.includes(id) || (extra.requires && !pack.includes.includes(extra.requires))) selectedBonuses.delete(id); });
}
function renderPackages() {
 const root = $('packages'); root.replaceChildren();
 proposal.packages.forEach((pack, index) => {
  const card = document.createElement('article'); card.className = 'package' + (selectedPack?.id === pack.id ? ' is-selected' : ''); card.dataset.id = pack.id;
  const top = document.createElement('div'); top.className = 'package-top'; top.append(para('0' + (index + 1), 'package-number'), para(selectedPack?.id === pack.id ? 'Selezionato ✓' : pack.kicker, 'package-kicker'));
  const heading = document.createElement('h3'); heading.textContent = pack.name; card.append(top, heading);
  const features = document.createElement('ul'); features.className = 'package-highlights';
  pack.ui.features.forEach((text,index) => { const item = document.createElement('li'); const detail=document.createElement('details'); detail.className='feature-detail'; const summary=document.createElement('summary'); summary.textContent=text; detail.append(summary,para(pack.ui.featureDetails[index],'feature-description')); item.append(detail); features.append(item); }); card.append(features);
  const tradeoffs = document.createElement('div'); tradeoffs.className = 'tradeoffs';
  [['Vantaggio', pack.ui.benefit], ['Limite', pack.ui.limit]].forEach(([name, text]) => { const label = document.createElement('strong'); label.className = 'tradeoff-label'; label.textContent = name; tradeoffs.append(label, para(text)); }); card.append(tradeoffs);
  const details = document.createElement('details'); details.className = 'package-details'; const summary = document.createElement('summary'); summary.textContent = 'Scopri prezzo e scegli';
  const content = document.createElement('div'); content.className = 'package-body';
  const purchase = document.createElement('div'); purchase.className = 'package-purchase'; const price = document.createElement('strong'); price.className = 'expanded-price'; price.textContent = money(pack.price);
  const choose = document.createElement('button'); choose.type = 'button'; choose.className = 'button button-dark select-package'; choose.textContent = selectedPack?.id === pack.id ? 'Selezionato ✓' : 'Scegli ' + pack.name;
  choose.addEventListener('click', () => { selectedPack = pack; clearImpossibleSelections(pack); $('confirm').checked = false; renderPackages(); renderBonuses(); renderSummary(); setStep(2); $('bonus').scrollIntoView?.({behavior:'smooth', block:'start'}); $('bonuses-title').setAttribute('tabindex','-1'); $('bonuses-title').focus?.({preventScroll:true}); });
  purchase.append(price, choose); content.append(purchase, para(pack.ui.included, 'included-note'));
  const full = document.createElement('details'); full.className = 'full-spec'; const fullSummary = document.createElement('summary'); fullSummary.textContent = 'Tutte le funzioni incluse'; const list = document.createElement('ul'); pack.items.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); }); full.append(fullSummary, list); if(pack.after) full.append(para(pack.after)); content.append(full);
  details.append(summary, content); if(selectedPack?.id === pack.id) details.open = true; card.append(details); root.append(card);
 });
}
function renderBonuses() {
 const root = $('bonuses'); root.replaceChildren();
 proposal.bonuses.forEach(item => {
  const included = includedIds(selectedPack).includes(item.id); const added = selectedBonuses.has(item.id); const locked = !selectedPack || (!!item.requires && !panelActive());
  const card = document.createElement('article'); card.className = 'bonus-card' + (included || added ? ' is-active' : ''); card.dataset.tool = item.id;
  const header = document.createElement('div'); header.className = 'tool-heading';
  const state = added ? 'Aggiunto ✓' : 'Extra facoltativo';
  const title = document.createElement('h3'); title.textContent = item.title;
  const benefit = document.createElement('p'); benefit.className='bonus-description'; const benefitLabel=document.createElement('strong'); benefitLabel.textContent='Vantaggio · '; benefit.append(benefitLabel,document.createTextNode(item.ui.summary));
  header.append(para(state, 'tool-state'), title, benefit);
  const info = document.createElement('div'); info.className = 'tool-details';
  const list=document.createElement('ul'); list.className='tool-functions';
  (item.details || []).forEach(text=>{ const li=document.createElement('li'); li.textContent=text; list.append(li); });
  const limit = document.createElement('p'); limit.className='tool-limit'; const limitLabel=document.createElement('strong'); limitLabel.textContent='Limite · '; limit.append(limitLabel, document.createTextNode(item.ui.limit)); info.append(list,limit);
  const actions=document.createElement('div'); actions.className='tool-actions';
  const price=document.createElement(included ? 's' : 'strong'); price.className='tool-price' + (included ? ' is-included' : ''); price.textContent=money(item.price);
  const plans=proposal.packages.filter(pack=>pack.includes.includes(item.id)).map(pack=>pack.name.replace('Sito ',''));
  const planText=plans.length ? 'Incluso in ' + plans.join(' e ') : 'Extra per Avanzato e Pro';
  actions.append(price,para(planText,'tool-plans'));
  const choice = toggleLabel(item,included,locked,!selectedPack ? 'Scegli prima un sito' : 'Disponibile con Avanzato o Pro');
  choice.querySelector('input').addEventListener('change',event=>{ if(event.target.checked) selectedBonuses.add(item.id); else selectedBonuses.delete(item.id); $('confirm').checked=false; renderBonuses(); renderSummary(); $('bonuses').querySelector('input[value="'+item.id+'"]')?.focus?.({preventScroll:true}); });
  actions.append(choice);
  if(selectedPack && locked) { const upgrade=document.createElement('a'); upgrade.href='#proposte'; upgrade.className='text-button'; upgrade.textContent='Confronta Avanzato e Pro ↑'; upgrade.addEventListener('click',()=>setStep(1)); actions.append(upgrade); }
  card.append(header,info,actions); root.append(card);
 });
}
function setStep(step) {
 ['nav-site','nav-tools','nav-summary'].forEach((id,index) => { if(index + 1 === step) $(id).setAttribute('aria-current','step'); else $(id).removeAttribute('aria-current'); });
 const next = $('dock-next'); next.href = step === 1 ? '#bonus' : '#riepilogo'; next.textContent = step === 1 ? 'Personalizza →' : 'Vedi riepilogo →';
}
function renderSummary() {
 const root = $('summary'); root.replaceChildren();
 if (!selectedPack) { root.append(para('Scegli un sito per iniziare. Il totale e le funzioni incluse compariranno qui.')); const start = document.createElement('a'); start.href='#proposte'; start.textContent='Scegli il sito ↑'; start.className='text-button'; root.append(start); $('total').textContent = '—'; $('preview').disabled = true; $('selection-dock').hidden = true; return; }
 root.append(line(selectedPack.name, 'summary-primary')); root.append(line('Pacchetto · ' + money(selectedPack.price), 'summary-row'));
 const included = selectedBonusIds().filter(id => selectedPack.includes.includes(id)).map(toolById);
 if (included.length) { root.append(line('Strumenti inclusi', 'summary-label')); included.forEach(item => root.append(line(item.title + ' · già incluso', 'summary-row'))); }
 const additions = selectedAddons();
 if (additions.length) { root.append(line('Strumenti aggiunti', 'summary-label')); additions.forEach(item => root.append(line(item.title + ' · ' + money(item.price), 'summary-row'))); }
 $('total').textContent = money(totalAmount()); $('preview').disabled = false; $('selection-dock').hidden = false; $('dock-selection').textContent = selectedPack.name; $('dock-total').textContent = money(totalAmount()); $('tools-hint').textContent = panelActive() ? selectedPack.name + ' selezionato. Puoi aggiungere le Gallery Digital Cards oppure continuare senza extra.' : 'Il Sito Base non comprende il pannello necessario alle Cards. Puoi scegliere Avanzato o Pro, oppure continuare senza extra.';
}
function dateLabel() { return new Intl.DateTimeFormat('it-IT', {timeZone:'Europe/Rome', day:'2-digit', month:'long', year:'numeric'}).format(new Date()); }
function currentSelection() { return {pack:selectedPack, includedBonuses:selectedBonusIds().filter(id => selectedPack.includes.includes(id)).map(toolById), addedBonuses:selectedAddons(), total:totalAmount()}; }
function sheetContent(selection, confirmed) {
 const root = $('sheet'); root.replaceChildren();
 const h = document.createElement('h3'); h.textContent = selection.pack.name + ' · ' + money(selection.pack.price); root.append(h);
 root.append(para(selection.pack.ui?.summary || selection.pack.description));
 const included = para('Strumenti inclusi: ' + (selection.includedBonuses.length ? selection.includedBonuses.map(x => x.title).join(', ') : 'nessuno')); root.append(included);
 if (selection.addedBonuses.length) root.append(para('Strumenti aggiunti: ' + selection.addedBonuses.map(x => x.title + ' (' + money(x.price) + ')').join(', ')));
 const total = document.createElement('strong'); total.className = 'sheet-total'; total.textContent = 'Totale indicativo · ' + money(selection.total); root.append(total);
 root.append(para('Data: ' + dateLabel() + ' (Europe/Rome)'));
 root.append(para(confirmed ? proposal.confirmation : 'Riepilogo senza conferma: condizioni e avvio da concordare.'));
 root.append(para(proposal.externalCosts));
}
let pdfUrl = null;
function makePdf(confirmed) { const blob = new Blob([createPDF(optionLines(currentSelection(), dateLabel(), confirmed))], {type:'application/pdf'}); if (pdfUrl) URL.revokeObjectURL(pdfUrl); pdfUrl = URL.createObjectURL(blob); $('pdfView').src = pdfUrl; return blob; }
$('confirmationText').textContent = proposal.confirmation; $('externalCosts').textContent = proposal.externalCosts;
proposal.sections.forEach(([title, paragraphs]) => { const section = document.createElement('details'); const heading = document.createElement('summary'); heading.textContent = title; section.append(heading, ...paragraphs.map(t => para(t))); $('terms').append(section); });
['nav-site','nav-tools','nav-summary'].forEach((id,index)=>$(id).addEventListener('click',()=>setStep(index+1)));
$('tools-next').addEventListener('click',()=>setStep(3));
$('dock-next').addEventListener('click',event=>{ event.preventDefault(); const destination = $('dock-next').getAttribute('href'); setStep(destination === '#bonus' ? 2 : 3); $(destination.slice(1)).scrollIntoView?.({behavior:'smooth', block:'start'}); });
renderPackages(); renderBonuses(); renderSummary();
$('preview').addEventListener('click', () => { const selection = currentSelection(); sheetContent(selection, $('confirm').checked); makePdf($('confirm').checked); $('modal-title').textContent = 'Il riepilogo della scelta.'; $('modal').showModal(); });
$('confirm').addEventListener('change', () => { if ($('modal').open && selectedPack) { sheetContent(currentSelection(), $('confirm').checked); makePdf($('confirm').checked); } });
$('close').addEventListener('click', () => $('modal').close()); $('modal').addEventListener('click', event => { if (event.target === $('modal')) $('modal').close(); });
$('download').addEventListener('click', () => { if (!selectedPack) return; const blob = makePdf($('confirm').checked); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'proposta-galleria.pdf'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); });
$('share').addEventListener('click', async () => { if (!selectedPack) return; const blob = makePdf($('confirm').checked); const file = new File([blob], 'proposta-galleria.pdf', {type:'application/pdf'}); try { if (navigator.canShare?.({files:[file]})) await navigator.share({files:[file], title:'Proposta sito galleria'}); else { $('download').click(); $('shareStatus').textContent = 'PDF scaricato: allegalo alla chat o al messaggio che preferisci.'; } } catch (error) { if (error.name !== 'AbortError') $('shareStatus').textContent = 'Non è stato possibile aprire la condivisione.'; } });
window.money = money; window.bonusSummary = index => selectedBonusIds().map(toolById).map(x=>x.title).join(', ') || 'nessuno';


