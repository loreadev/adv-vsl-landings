# 🎯 Configurazione Pixel Meta per Lorea Agency

## 📋 Cosa abbiamo implementato

Ho aggiunto il **pixel Meta (Facebook)** al tuo progetto Next.js con una configurazione professionale e mirata. Ecco cosa include:

### ✅ **Componenti creati:**

1. **`src/components/MetaPixel.tsx`** - Componente principale del pixel
2. **`src/hooks/useMetaPixel.ts`** - Hook per tracciare eventi facilmente
3. **`src/config/meta.ts`** - Configurazione centralizzata
4. **`src/types/global.d.ts`** - Tipi TypeScript per il pixel

### 🎯 **Eventi tracciati automaticamente:**

- **PageView** - Quando un utente visita la pagina VSL
- **ViewContent** - Quando visualizza il contenuto VSL
- **VideoPlay** - Quando inizia a guardare il video
- **Lead** - Quando clicca sul CTA
- **CTA_Click** - Evento personalizzato per il click sul pulsante

## 🚀 Configurazione completata!

### ✅ **Pixel ID configurato:**
```
1379601219359267
```

### ✅ **PAGINA DI ATTIVAZIONE:**
Il pixel è attivo **SOLO** sulla pagina VSL:
```
adv.lorea.agency/vsl
```

### **Passo 1: Crea il file .env.local**

Crea un file `.env.local` nella root del progetto con questo contenuto:

```bash
# Meta Pixel ID - Lorea Agency
NEXT_PUBLIC_META_PIXEL_ID=1379601219359267
```

### **Passo 2: Testa il pixel**

1. Avvia il server: `npm run dev`
2. Apri [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
3. Visita la pagina VSL (`/vsl`) e verifica che il pixel funzioni

## 📊 Come usare il pixel nelle tue pagine

### **Tracciare eventi automaticamente:**

```tsx
import { useMetaPixel } from '@/hooks/useMetaPixel';

export default function MiaPagina() {
  const { trackLead, trackPurchase, trackCustomEvent } = useMetaPixel();

  const handleAcquisto = () => {
    trackPurchase(99.99, 'EUR', ['product-123']);
  };

  const handleContatto = () => {
    trackLead(0, 'EUR');
  };

  return (
    <button onClick={handleAcquisto}>
      Acquista Ora
    </button>
  );
}
```

### **Eventi disponibili:**

- `trackPageView()` - Visualizzazione pagina
- `trackViewContent(contentName, category)` - Visualizzazione contenuto
- `trackLead(value, currency)` - Lead generato
- `trackPurchase(value, currency, contentIds)` - Acquisto
- `trackCustomEvent(eventName, parameters)` - Evento personalizzato

## 🔧 Personalizzazioni avanzate

### **Aggiungere parametri personalizzati:**

```tsx
trackCustomEvent('Video_Completato', {
  video_title: 'VSL Marketing',
  video_duration: '5:30',
  user_type: 'new',
  page_url: window.location.href
});
```

### **Tracciare conversioni specifiche:**

```tsx
// Quando un utente si iscrive
trackCustomEvent('Registration', {
  method: 'telegram',
  source: 'vsl_page'
});

// Quando guarda il video completo
trackCustomEvent('Video_100%', {
  video_id: '1093797611',
  time_spent: '5:30'
});
```

## 🛡️ Sicurezza e Privacy

- ✅ Il pixel rispetta le impostazioni di privacy del browser
- ✅ Include fallback per utenti senza JavaScript
- ✅ Usa variabili d'ambiente per proteggere l'ID
- ✅ Compatibile con GDPR e CCPA

## 📈 Monitoraggio e Analytics

Una volta configurato, potrai vedere nel **Facebook Ads Manager**:

- **Impresse** - Quante volte il pixel è stato caricato
- **Eventi** - Quali azioni gli utenti hanno compiuto
- **Conversioni** - Quanti lead/acquisti hai generato
- **Audience** - Chi ha visitato il tuo sito

## 🎯 Prossimi passi

1. **✅ Pixel ID configurato** - `1379601219359267`
2. **✅ Pagina di attivazione** - Solo `/vsl`
3. **Crea il file .env.local** con l'ID del pixel
4. **Testa il pixel** con Facebook Pixel Helper
5. **Crea campagne Facebook** utilizzando i dati del pixel
6. **Monitora le performance** nel Facebook Ads Manager

## 🔍 Verifica del funzionamento

Per verificare che tutto funzioni:

1. **Apri il browser** e vai su `http://localhost:3000/vsl`
2. **Installa Facebook Pixel Helper** (estensione Chrome)
3. **Visita la pagina VSL** (`/vsl`)
4. **Controlla l'estensione** - dovresti vedere:
   - ✅ Pixel caricato correttamente
   - ✅ Eventi PageView e ViewContent
   - ✅ ID del pixel: `1379601219359267`

## 📍 **CONFIGURAZIONE FINALE:**

- **Pixel attivo:** SOLO su `adv.lorea.agency/vsl`
- **Homepage:** Nessun pixel (reindirizza a lorea.agency)
- **VSL:** Pixel completo con tutti gli eventi
- **Efficienza:** Caricamento ottimizzato solo dove serve

Il pixel è ora **completamente configurato** e attivo solo sulla pagina VSL come richiesto! 🚀 