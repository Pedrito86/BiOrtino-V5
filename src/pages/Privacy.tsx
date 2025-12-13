import { useI18n } from '../i18n/context';

export default function Privacy() {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('privacy.title')}</h1>
          <div className="h-1 w-24 bg-white mb-6"></div>
          <p className="text-gray-300">BiOrtino</p>
          <p className="text-gray-400 mb-8">{lang === 'en' ? 'Last update: 12-11-2025' : 'Ultimo aggiornamento: 12-11-2025'}</p>

          {lang === 'en' ? (
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-2">PRIVACY POLICY (pursuant to EU Regulation 2016/679 – GDPR)</h2>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Data Controller</h3>
              <div className="text-gray-300">
                <p>BiOrtino</p>
                <p>{t('privacy.address')}</p>
                <p>Phone: +39 335 7629767</p>
                <p>Email: biortinofficinalis@gmail.com</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
              <p className="text-gray-300 mb-2">This site collects only personal data strictly necessary to provide information and respond to user requests.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number (if provided by the user)</li>
                <li>Message content sent via contact form</li>
                <li>Technical navigation data (anonymized IP address, browser type, pages visited)</li>
              </ul>
              <p className="text-gray-300 mt-2">The site does not collect or process special categories of personal data.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Purposes of Processing</h3>
              <div className="space-y-3 text-gray-300">
                <p>a) Responding to requests and communications</p>
                <p className="text-gray-400">Legal basis: Art. 6(1)(b) GDPR – Execution of pre-contractual measures requested by the data subject.</p>
                <p>b) Compliance with legal obligations</p>
                <p className="text-gray-400">Legal basis: Art. 6(1)(c) GDPR.</p>
                <p>c) Site security</p>
                <p className="text-gray-400">Legal basis: Art. 6(1)(f) GDPR – Legitimate interest of the Controller.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Methods of Processing</h3>
              <p className="text-gray-300">Processing is carried out using IT and telematic tools in compliance with the security measures provided by the GDPR. Data is never sold, disseminated or transferred to third parties, except for legal obligations.</p>
              <p className="text-gray-300 mt-2">The site adopts appropriate measures to prevent:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Unauthorized access</li>
                <li>Accidental loss</li>
                <li>Improper disclosure</li>
                <li>Unauthorized processing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Data Retention</h3>
              <p className="text-gray-300">Personal data provided via the contact form is retained for the time necessary to manage the request, and in any case no longer than 12 months from the response, unless retention is required by law.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">User Rights</h3>
              <p className="text-gray-300">The user may exercise, at any time, the rights provided by Articles 15–22 GDPR, including:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Right of access</li>
                <li>Right to rectification</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object</li>
                <li>Right to withdraw consent (where applicable)</li>
              </ul>
              <p className="text-gray-300 mt-2">Requests must be sent to: biortinofficinalis@gmail.com</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Data Transfers Outside the EU</h3>
              <p className="text-gray-300">Data is not transferred outside the European Union. Any third-party services (e.g., Google Analytics) may operate transfers to non-EU countries: in such cases the Controller uses only tools compliant with the GDPR (e.g., Standard Contractual Clauses).</p>
            </section>

            <section id="cookie-policy">
              <h2 className="text-2xl font-bold mb-2">Cookie Policy</h2>
              <p className="text-gray-300">The site uses technical cookies and, with the user’s consent, analytics cookies for aggregated statistics.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Types of Cookies Used</h3>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold">Technical Cookies (Necessary)</p>
                <p>Essential for the correct functioning of the site. These cookies do not collect personal data and do not require consent.</p>
                <p className="font-semibold mt-4">Preference Cookies</p>
                <p>Allow saving settings selected by the user (e.g., language or privacy preferences).</p>
                <p className="font-semibold mt-4">Analytics Cookies (Google Analytics) – Enabled only with consent</p>
                <p>Used to collect anonymous, aggregated statistical information such as number of visitors, pages visited, time spent on the site, approximate geographic origin. Google Analytics is used with anonymized IP.</p>
                <p className="font-semibold mt-4">Marketing Cookies (if present)</p>
                <p>Used to monitor user behavior and show relevant content or ads. Installed only if the user provides consent.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Consent Management</h3>
              <p className="text-gray-300">On first access, the site displays a banner allowing the user to accept all cookies, reject non-necessary cookies or customize preferences. The user can change choices at any time via the “Cookie Management” function.</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-lg font-semibold"
                >
                  {t('privacy.manageCookies')}
                </button>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Disabling Cookies from the Browser</h3>
              <p className="text-gray-300">The user can disable cookies directly from the browser settings. Disabling technical cookies may compromise some site functionality.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Contacts</h3>
              <div className="text-gray-300">
                <p>Email: biortinofficinalis@gmail.com</p>
                <p>Phone: +39 335 7629767</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Changes to this Policy</h3>
              <p className="text-gray-300">The Controller reserves the right to update this notice at any time. The updated version will always be available on this page.</p>
            </section>
          </div>
          ) : (
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-2">PRIVACY POLICY (ai sensi del Regolamento UE 2016/679 – GDPR)</h2>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Titolare del trattamento</h3>
              <div className="text-gray-300">
                <p>BiOrtino</p>
                <p>{t('privacy.address')}</p>
                <p>Telefono: +39 335 7629767</p>
                <p>Email: biortinofficinalis@gmail.com</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Tipologie di dati raccolti</h3>
              <p className="text-gray-300 mb-2">Il presente sito raccoglie esclusivamente i dati personali strettamente necessari per fornire informazioni e rispondere alle richieste degli utenti.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (se fornito dall’utente)</li>
                <li>Contenuto del messaggio inviato tramite form contatti</li>
                <li>Dati tecnici di navigazione (indirizzo IP anonimizzato, tipo di browser, pagine visitate)</li>
              </ul>
              <p className="text-gray-300 mt-2">Il sito non raccoglie né tratta categorie particolari di dati personali.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Finalità del trattamento</h3>
              <div className="space-y-3 text-gray-300">
                <p>a) Rispondere a richieste e comunicazioni</p>
                <p className="text-gray-400">Base giuridica: Art. 6, comma 1, lett. b) GDPR – Esecuzione di misure precontrattuali richieste dall’interessato.</p>
                <p>b) Adempiere a obblighi di legge</p>
                <p className="text-gray-400">Base giuridica: Art. 6, comma 1, lett. c) GDPR.</p>
                <p>c) Sicurezza del sito</p>
                <p className="text-gray-400">Base giuridica: Art. 6, comma 1, lett. f) GDPR – Legittimo interesse del Titolare.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Modalità del trattamento</h3>
              <p className="text-gray-300">Il trattamento viene effettuato con strumenti informatici e telematici nel rispetto delle misure di sicurezza previste dal GDPR. I dati non vengono mai venduti, diffusi o ceduti a terzi, salvo obblighi legali.</p>
              <p className="text-gray-300 mt-2">Il sito adotta adeguate misure per prevenire:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>accessi non autorizzati</li>
                <li>perdita accidentale</li>
                <li>divulgazione indebita</li>
                <li>trattamenti non consentiti</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Conservazione dei dati</h3>
              <p className="text-gray-300">I dati personali forniti tramite form contatti vengono conservati per il tempo necessario a gestire la richiesta, e comunque non oltre 12 mesi dalla risposta, salvo necessità di conservazione imposte dalla legge.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Diritti dell’utente</h3>
              <p className="text-gray-300">L’utente può esercitare in qualsiasi momento i diritti previsti dagli artt. 15–22 GDPR, tra cui:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Diritto di accesso</li>
                <li>Diritto di rettifica</li>
                <li>Diritto alla cancellazione (diritto all’oblio)</li>
                <li>Diritto alla limitazione</li>
                <li>Diritto alla portabilità dei dati</li>
                <li>Diritto di opposizione</li>
                <li>Diritto di revocare il consenso (se applicabile)</li>
              </ul>
              <p className="text-gray-300 mt-2">Le richieste devono essere inviate a: biortinofficinalis@gmail.com</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Trasferimento dei dati fuori dall’UE</h3>
              <p className="text-gray-300">I dati non vengono trasferiti al di fuori dell’Unione Europea. Eventuali servizi terzi (es. Google Analytics) potrebbero operare trasferimenti in paesi extra-UE: in tal caso il Titolare si avvale esclusivamente di strumenti conformi al GDPR (es. Clausole Contrattuali Standard).</p>
            </section>

            <section id="cookie-policy">
              <h2 className="text-2xl font-bold mb-2">Cookie Policy</h2>
              <p className="text-gray-300">Il sito utilizza cookie tecnici e, previo consenso dell’utente, cookie analitici per statistiche aggregate.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Tipologie di cookie utilizzate</h3>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold">Cookie Tecnici (Necessari)</p>
                <p>Sono indispensabili per il corretto funzionamento del sito. Questi cookie non raccolgono dati personali e non richiedono consenso.</p>
                <p className="font-semibold mt-4">Cookie di Preferenza</p>
                <p>Permettono di ricordare impostazioni selezionate dall’utente (es. lingua o preferenze sulla privacy).</p>
                <p className="font-semibold mt-4">Cookie Analitici (Google Analytics) – Attivati solo con consenso</p>
                <p>Utilizzati per raccogliere informazioni statistiche anonime e aggregate, come numero di visitatori, pagine visitate, tempo trascorso sul sito, provenienza geografica approssimativa. Google Analytics è utilizzato con IP anonimizzato.</p>
                <p className="font-semibold mt-4">Cookie di Marketing (solo se presenti)</p>
                <p>Utilizzati per monitorare il comportamento dell’utente e mostrare contenuti o annunci pertinenti. Sono installati solo se l’utente fornisce consenso.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Gestione del consenso</h3>
              <p className="text-gray-300">Al primo accesso, il sito mostra un banner che consente di accettare tutti i cookie, rifiutare i cookie non necessari o personalizzare le preferenze. L’utente può modificare le scelte in qualsiasi momento tramite la funzione “Gestione Cookie”.</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-lg font-semibold"
                >
                  {t('privacy.manageCookies')}
                </button>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Disabilitazione dei cookie dal browser</h3>
              <p className="text-gray-300">L’utente può disattivare i cookie direttamente dalle impostazioni del browser. La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Recapiti</h3>
              <div className="text-gray-300">
                <p>Email: biortinofficinalis@gmail.com</p>
                <p>Telefono: +39 335 7629767</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Modifiche alla presente policy</h3>
              <p className="text-gray-300">Il Titolare si riserva il diritto di aggiornare la presente informativa in qualsiasi momento. La versione aggiornata sarà sempre disponibile su questa pagina.</p>
            </section>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
