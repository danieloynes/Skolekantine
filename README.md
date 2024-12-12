# Skolekantine

## Oversikt
Dette prosjektet er en nettside for en skolekantine, utviklet for å demonstrere bruk av moderne webteknologier og universell utforming. Nettsiden tilbyr funksjoner for navigasjon mellom ulike menyer, informasjon om produkter, og administrasjon via innlogging.

## Installering
1. **Klon repositoriet:**
   ```bash
   git clone https://github.com/danieloynes/Skolekantine.git
   ```
2. **Naviger til prosjektmappen:**
   ```bash
   cd Skolekantine
   ```
3. Åpne `index.html` i en nettleser for å starte nettsiden.

## Funksjoner
- **Hovedmeny:**
  - Viser tilgjengelige mat- og drikkevarer i kantinen.
  - Tilpasset visning for snacks, drikke og annen mat.
- **Administrasjon:**
  - En egen admin-side for å oppdatere produkter og priser.
- **Innlogging/utlogging:**
  - Sikker tilgang til administrasjonssider gjennom Firebase Authentication.
- **Kontakt oss:**
  - En side for å sende forespørsler eller gi tilbakemelding.

## Teknologier
- **HTML, CSS, og JavaScript:** Grunnleggende webutvikling.
- **Firebase:**
  - **Firestore:** Lagring av produktinformasjon.
  - **Authentication:** Håndtering av innlogging og utlogging.
- **Google Fonts:**
  - Brukes for å forbedre nettsidens typografi.

## Databasestruktur
Firestore brukes som backend og har følgende struktur:
- **Samlinger:**
  - `products`:
    - Dokumenter for hvert produkt med feltene: navn, kategori, pris og tilgjengelighet.

## Universell utforming
- **Fargekontraster:** Sørger for lesbarhet for personer med nedsatt syn.
- **Tastaturnavigasjon:** Alle sider kan navigeres uten mus.
- **Responsivt design:** Tilpasset visning for mobil og desktop.

## Innlogging og utlogging
- **Innlogging:**
  - Brukeren oppgir e-post og passord via Firebase Authentication.
- **Utlogging:**
  - Brukeren kan logge ut ved å trykke på "Logg ut"-knappen, som fjerner sesjonsdata.

## Universell utforming og Google Fonts
- Prosjektet bruker skrifttyper fra Google Fonts for bedre lesbarhet.
- Implementeringen følger retningslinjer for universell utforming for å sikre at nettsiden er tilgjengelig for alle brukere.