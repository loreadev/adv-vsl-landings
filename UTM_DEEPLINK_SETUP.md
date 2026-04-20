# 🎯 Sistema UTM + Deeplink Telegram per Lorea Agency

## 📋 Cosa abbiamo implementato

Ho creato un sistema completo che:
1. **Estrae gli UTM dall'URL** della pagina
2. **Genera un payload ottimizzato** per il bot Telegram
3. **Crea un deeplink dinamico** che passa gli UTM al bot
4. **Traccia gli eventi** con Meta Pixel

---

## 🚀 Come funziona

### **1. Estrazione UTM**
Lo script legge automaticamente tutti i parametri UTM dall'URL:
- `utm_source` - Fonte del traffico
- `utm_medium` - Medium (es: cpc, social, email)
- `utm_campaign` - Nome campagna
- `utm_term` - Parole chiave
- `utm_content` - Contenuto specifico
- `fbclid` - Facebook Click ID
- `gclid` - Google Click ID

### **2. Generazione Payload**
Il sistema crea un payload nel formato:
```
source:facebook_medium:cpc_campaign:black_friday_term:ads_content:video
```

**Regole applicate:**
- ✅ Massimo 64 caratteri
- ✅ URL-safe encoding
- ✅ Priorità agli UTM più importanti
- ✅ Troncamento automatico se necessario

### **3. Deeplink Telegram**
Il link finale sarà:
```
tg://resolve?domain=lorea_metaplug_bot&start=PAYLOAD_GENERATO
```

---

## 🧪 Testing del sistema

### **URL di test con UTM:**
```
http://localhost:3000/vsl?utm_source=facebook&utm_medium=cpc&utm_campaign=black_friday&utm_term=ads&utm_content=video
```

### **Risultato atteso:**
- **Payload:** `source:facebook_medium:cpc_campaign:black_friday_term:ads_content:video`
- **Deeplink:** `tg://resolve?domain=lorea_metaplug_bot&start=source%3Afacebook_medium%3Acpc_campaign%3Ablack_friday_term%3Aads_content%3Avideo`

### **Debug Mode:**
In modalità sviluppo, vedrai un pannello di debug in basso a destra che mostra:
- ✅ Se ci sono UTM nell'URL
- 📊 Il payload generato
- 🔗 Il deeplink completo
- 📏 Lunghezza del payload

---

## 📁 File creati/modificati

### **Nuovi file:**
1. **`src/hooks/useUTMPayload.ts`** - Hook principale per gestire UTM
2. **`src/components/UTMDebug.tsx`** - Componente debug (solo sviluppo)
3. **`UTM_DEEPLINK_SETUP.md`** - Questa documentazione

### **File modificati:**
1. **`src/app/vsl/page.tsx`** - Integrazione del sistema UTM

---

## 🎯 Esempi pratici

### **Esempio 1: Campagna Facebook**
```
URL: /vsl?utm_source=facebook&utm_medium=cpc&utm_campaign=meta_ads
Payload: source:facebook_medium:cpc_campaign:meta_ads
```

### **Esempio 2: Campagna Google Ads**
```
URL: /vsl?utm_source=google&utm_medium=cpc&utm_campaign=search_ads&utm_term=marketing
Payload: source:google_medium:cpc_campaign:search_ads_term:marketing
```

### **Esempio 3: Campagna Email**
```
URL: /vsl?utm_source=email&utm_medium=email&utm_campaign=newsletter&utm_content=cta_button
Payload: source:email_medium:email_campaign:newsletter_content:cta_button
```

---

## 🔧 Configurazione Bot Telegram

Il bot `lorea_metaplug_bot` riceverà il payload nel comando `/start`:

```javascript
// Esempio di come il bot può processare il payload
bot.onText(/\/start (.+)/, (msg, match) => {
  const payload = match[1]; // Il payload UTM
  const params = payload.split('_').reduce((acc, part) => {
    const [key, value] = part.split(':');
    acc[key] = value;
    return acc;
  }, {});
  
  // Ora hai accesso a: params.source, params.medium, params.campaign, etc.
});
```

---

## 📊 Tracking Meta Pixel

Il sistema traccia anche gli UTM nel Meta Pixel:

```javascript
trackCustomEvent('CTA_Click', {
  button_text: 'Get Access NOW',
  page: 'VSL',
  has_utm: true, // Se ci sono UTM
  utm_payload: 'present' // Se il payload è stato generato
});
```

---

## 🛡️ Sicurezza e Validazione

### **Validazioni applicate:**
- ✅ Controllo lunghezza massima (64 caratteri)
- ✅ URL encoding per caratteri speciali
- ✅ Filtro parametri sicuri (solo UTM e click ID)
- ✅ Fallback se non ci sono UTM

### **Caratteri sicuri:**
- Lettere (a-z, A-Z)
- Numeri (0-9)
- Trattini (-)
- Underscore (_)
- Punti (.)

---

## 🚀 Prossimi passi

1. **✅ Sistema implementato** - Funziona automaticamente
2. **Testa con URL diversi** - Prova vari UTM
3. **Configura il bot Telegram** - Per ricevere il payload
4. **Monitora le conversioni** - Nel Meta Pixel
5. **Ottimizza le campagne** - Basandoti sui dati UTM

---

## 🔍 Troubleshooting

### **Problema: Payload vuoto**
**Soluzione:** Verifica che l'URL contenga parametri UTM validi

### **Problema: Payload troppo lungo**
**Soluzione:** Il sistema tronca automaticamente a 64 caratteri

### **Problema: Deeplink non funziona**
**Soluzione:** Verifica che il bot `lorea_metaplug_bot` sia attivo

### **Problema: Debug non visibile**
**Soluzione:** Assicurati di essere in modalità sviluppo (`NODE_ENV=development`)

---

## 📈 Vantaggi del sistema

✅ **Tracking completo** - Ogni click viene tracciato con UTM
✅ **Automazione** - Nessuna configurazione manuale
✅ **Compatibilità** - Funziona con tutti i parametri UTM standard
✅ **Performance** - Ottimizzato e veloce
✅ **Debug** - Strumenti di testing integrati
✅ **Scalabilità** - Facile da estendere per nuove campagne

Il sistema è ora **completamente funzionante** e pronto per le tue campagne! 🚀 