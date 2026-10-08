const $=id=>document.getElementById(id);function para(t){let p=document.createElement('p');p.textContent=t;return p}
const videoOptions=[{title:'Me ne occupo io',tag:'Autonomia',text:'Preparo i file per il web. Ricevo le impostazioni di riferimento; con avanzata e pro li carico da solo.',price:'0 €'},{title:'Prova assistita',tag:'Valutazione',text:'Affido a te un estratto: confronto esportazione ottimizzata e una prova di upscaling, prima di scegliere il trattamento.',price:'Da quotare'},{title:'Trattamento dedicato',tag:'Preparazione completa',text:'Affido a te i video selezionati: prove sui file, elaborazione concordata e controllo della resa prima della pubblicazione.',price:'Da quotare'}];
function tile(name,value,title,tag,text,price,selected){let l=document.createElement('label');l.className='tile';let input=document.createElement('input');input.type='radio';input.name=name;input.value=value;input.checked=selected;let t=document.createElement('span');t.className='tag';t.textContent=tag;let h=document.createElement('h3');h.textContent=title;let p=para(text);let cost=document.createElement('span');cost.className='cost';cost.textContent=price;l.append(input,t,h,p,cost);return l}
proposal.intro.forEach(t=>$('intro').append(para(t)));
proposal.packs.forEach((p,i)=>{
 const descriptions=['La landing online con i video attuali. Per aggiornare ti devi rivolgere a me.','Gestisci la tua landing in autonomia: scegli video, contenuti e ordine per il cliente del momento.','Più landing salvate: mantieni una selezione diversa per ciascun cliente senza rifarla ogni volta.'];
 const headings=[['Messa online','Aggiornamenti'],['Il pannello privato'],['Presentazioni salvate','Indirizzi dedicati','Archivio video condiviso']];
 const offer=document.createElement('section');offer.className='offer';
 const top=document.createElement('div');top.className='offer-top';
 const h=document.createElement('h3');h.textContent=(i+1)+'. '+p.name;top.append(h);
 offer.append(top,para(descriptions[i]));
 const details=document.createElement('details'),summary=document.createElement('summary');
 summary.textContent='Mostra l’offerta';details.append(summary);
 const body=document.createElement('div');body.className='detailbody offer-body';
 const blocks=document.createElement('div');blocks.className='offer-blocks offer-blocks-'+i;
 p.paragraphs.forEach((t,j)=>{
  const block=document.createElement('div');block.className='offer-block';
  const title=document.createElement('h4');title.textContent=headings[i][j];
  block.append(title,para(t));blocks.append(block);
 });
 body.append(blocks);
 if(p.items){
  const ul=document.createElement('ul');ul.className='offer-features';
  p.items.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.append(li)});
  body.append(ul);
 }
 if(p.after){const note=para(p.after);note.className='offer-model';body.append(note)}
 const tradeoffs=document.createElement('div');tradeoffs.className='offer-tradeoffs';
 [['Il vantaggio',p.benefit],['Il limite',p.limit]].forEach(([title,text],j)=>{
  const block=document.createElement('div');block.className='offer-tradeoff '+(j?'offer-limit':'offer-benefit');
  const heading=document.createElement('h4');heading.textContent=title;block.append(heading,para(text));tradeoffs.append(block);
 });
 body.append(tradeoffs);
 const label=document.createElement('label');label.className='select-offer';
 const input=document.createElement('input');input.type='radio';input.name='base';input.value=i;input.checked=i===0;
 const cost=document.createElement('span');cost.className='cost';cost.textContent='circa '+p.price+' €';
 label.append(input,document.createTextNode('Scelgo '+p.name),cost);
 details.append(body,label);offer.append(details);
 details.addEventListener('toggle',()=>{summary.textContent=details.open?'Nascondi l’offerta':'Mostra l’offerta'});
 $('packs').append(offer);
});
$('cards').append(tile('card',0,'Non la voglio','Senza card','Scelgo solo la landing.','0 €',true),tile('card',1,'Aggiungo la card digitale','Condivisione','Contatti, collegamenti e QR da mostrare o scaricare.','+50 €',false));proposal.card.forEach(t=>$('cardText').append(para(t)));videoOptions.forEach((v,i)=>$('videos').append(tile('video',i,v.title,v.tag,v.text,v.price,i===0)));proposal.sections[0][1].forEach(t=>$('videoText').append(para(t)));proposal.sections.slice(1).forEach(([heading,paras])=>{let d=document.createElement('details'),s=document.createElement('summary');s.textContent=heading;d.append(s);paras.forEach(t=>d.append(para(t)));$('terms').append(d)});
function sel(n){return Number(document.querySelector(`input[name=${n}]:checked`).value)}function state(){let b=sel('base'),card=sel('card')===1,v=sel('video');return{b,card,v,total:proposal.packs[b].price+(card?(b===2?70:50):0)}}function row(label,value){let d=document.createElement('div');d.className='row';let a=document.createElement('span'),b=document.createElement('strong');a.textContent=label;b.textContent=value;d.append(a,b);return d}function update(){let s=state();$('cards').children[1].querySelector('.cost').textContent='+'+(s.b===2?70:50)+' €';$('cards').children[1].querySelector('p').textContent=s.b===2?'Contatti e accesso al link e al QR di ciascuna presentazione pubblicata.':'Contatti, collegamenti e QR della landing unica.';$('summary').replaceChildren(row(proposal.packs[s.b].name,'circa '+proposal.packs[s.b].price+' €'),row(s.card?'Business card digitale':'Business card · non la voglio',s.card?'+'+(s.b===2?70:50)+' €':'0 €'),row(videoOptions[s.v].title,s.v?'Da quotare':'0 €'));$('total').textContent='circa '+s.total+' €';$('extraNote').textContent=s.v?'La scelta video richiede una quotazione aggiuntiva: il totale completo non è ancora definito.':'Nessun extra video selezionato.';$('confirm').checked=false;$('status').textContent=''}document.querySelectorAll('input[type=radio]').forEach(i=>i.addEventListener('change',update));let file,url;function download(){let a=document.createElement('a');a.href=url;a.download=file.name;a.click()}
$('preview').addEventListener('click',()=>{const s=state(),now=new Date(),date=new Intl.DateTimeFormat('it-IT',{timeZone:'Europe/Rome',dateStyle:'long',timeStyle:'short'}).format(now),stamp=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Rome',year:'numeric',month:'2-digit',day:'2-digit'}).format(now),confirmed=$('confirm').checked;const lines=optionLines(s,date,confirmed);const bytes=createPDF(lines);file=new File([bytes],'Proposta-scelte-'+stamp+'.pdf',{type:'application/pdf'});if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(file);$('pdfView').src=url;let h=document.createElement('h3');h.textContent='Proposta · scelte';$('sheet').replaceChildren(h,para(date+' · Europe/Rome'),row(proposal.packs[s.b].name,'circa '+proposal.packs[s.b].price+' €'),row(s.card?'Business card digitale':'Business card · non la voglio',s.card?'+'+(s.b===2?70:50)+' €':'0 €'),row(videoOptions[s.v].title,s.v?'Da quotare':'0 €'),row('Totale indicativo','circa '+s.total+' €'));if(s.v)$('sheet').append(para('Trattamento video escluso dal totale: da quotare.'));$('sheet').append(para(confirmed?'Confermo le scelte e richiedo l’avvio dei lavori, previa verifica della landing e conferma del perimetro e del prezzo.':'Riepilogo delle scelte. Conferma di avvio non selezionata.'));$('sheet').append(para('Dominio ed eventuali consumi a pagamento separati.'));$('shareStatus').textContent='';$('modal').showModal()});$('close').addEventListener('click',()=>$('modal').close());$('download').addEventListener('click',download);$('share').addEventListener('click',async()=>{
 if(!file){$('shareStatus').textContent='Apri prima l’anteprima del documento.';return;}
 const button=$('share');
 if(typeof navigator.share==='function'&&typeof navigator.canShare==='function'&&navigator.canShare({files:[file]})){
  button.disabled=true;
  try{await navigator.share({files:[file]});$('shareStatus').textContent='Verifica l’invio nella chat WhatsApp.';}
  catch(e){$('shareStatus').textContent=e.name==='AbortError'?'Condivisione annullata.':'Non è stato possibile condividere il PDF. Scaricalo e allegalo alla nostra chat WhatsApp.';}
  finally{button.disabled=false;}
 }else{
  download();window.open('https://wa.me/393450487680','_blank','noopener,noreferrer');
  $('shareStatus').textContent='Questo browser non condivide allegati. PDF scaricato: allegalo alla nostra chat WhatsApp.';
 }
});
update();
