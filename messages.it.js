const messages = {
    'Email': 'Email',
    'Register': 'Iscrizione',
    'Password': 'Password',
    'Remember me': 'Ricordarti di me',
    'no-identification-info': 'Se non ha la email o la password, contatta il Suo amministratore',
    'login-next': 'Seguente',
    'login-unrecognized-email-title': 'Il cliente "{domain}" non esiste',
    'login-unrecognized-email-message': 'Si prega di inviare un email a jessie@whasq.com.',
    'login-code-sent-title': 'Confermazione dell\'account',
    'login-code-sent-message': 'Si è stata inviata un\'email con il link per convalidare il Suo indirizzo email.',
    'login': 'Connessione',
    'login-email-placeholder': 'Email',
    'login-password-placeholder': 'Password',
    'login-bad-password': 'La password non è corretta. Riprova, per favore.',
    'login-error': 'Si è verificato un errore nella connessione. Riprova, per favore.',
    'login-password-see-password': 'Voir le mot de passe', /* TODO */
    'login-password-not-see-password': 'Cacher le mot de passe', /* TODO */
  
    //  Global
    'search': 'Cercare',
    'previous': 'Precedente',
    'next': 'Seguente',
    'add': 'Agginugere',
    'error-occured': 'Si è verificato un errore.',
    'first-ranking-suffix': 'o',
    'second-ranking-suffix': 'o',
    'third-ranking-suffix': 'o',
    'default-ranking-suffix': 'o',
    'back-to-homepage': 'Retour à l\'accueil', /* TODO */

    // Header
    'header-profile': 'Profile',
    'header-logout': 'Log out',
    'french': 'Francese',
    'english': 'Inglese',
    'header-ask-info': 'Demander mes informations',
    'header-delete-account': 'Chiedere le mie informazioni',
    'header-admin': 'Amministratore',
    'header-change-password': 'Cambiare la password',
    'header-faq': 'Domande Frequenti',
    'header-term-of-use': 'Termini e condizioni d\'uso',
    'header-information-asked': 'I Suoi dati sono stati inviati sul Suo indirizzo email.',
    'header-account-deleted': 'Il Suo account è stato cancellato.',
    'header-password-changed': 'Si è stata inviata un\'email per resettare la Sua password',

    // Footer
    'footer-privacy-policy': 'Informativa sulla privacy',
    'footer-assistance': 'Ha bisogno di aiuta? Contatta jessie@whasq.com (dal lunedì al venerdì dalle 9:00 alle 12:00 e dalle 14:00 alle 18:00)',
    'footer-follow-us': 'Suivez-nous :', /* TODO */

    // Home
    'home-title': 'Titolo della pagina della home page',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'Per i miei talenti',
    'whasqs-search-all-filter': 'Tutto',
    'error-searching-whasqs': 'Si è verificato un errore durante la ricerca dei whasqs',
    'whasqs-more-whasqs-add-skill': 'Per vedere più whasq, aggiunge talenti al Suo profilo.',

    // WhasqDetails
    'whasq-not-found': 'Il whasq che cerca non è stato trovato.',

    // Whasq
    'whasq-days-ago': 'Ci sono {days} giorni',
    'whasq-read': 'visto',
    'whasq-read-count': 'Consulté {count} fois', /* TODO */
    'whasq-answers-count': 'Numero di risposte',
    'whasq-whasqpoints-solution': 'whasqpoints per la soluzione',
    'whasq-whasqpoints-usefull-answer': 'whasqpoints per la risposta utile',
    'whasq-remove-action': 'Cancellare il whasq',
    'whasq-edit-action': 'Modificare il whasq',
    'whasq-archive-action': 'Archiviare il whasq',
    'whasq-report-action': 'Segnalare il whasq',
    'whasq-archive-confirm': 'Sicuro/a di voler archiviare il whasq?',
    'error-archiving-whasq': 'Si è verificato un errore durante  l\'archiviazione del Suo whasq. Riprova per favore.',
    'whasq-delete-confirm': 'Sicuro/a di voler cancellare questo whasq?',
    'error-deleting-whasq': 'Si è verificato un errore durante la cancellazione del Suo whasq. Riprova per favore.',
    'whasq-exchange': 'Scambio',
    'whasq-notify-around': 'Notificare i whasqers intorno a me',
    'whasq-urgent': 'Urgente',
    'whasq-channel': 'Lingua del whasq',
    'whasq-no-media': 'Pas de média', /* TODO */
    'whasq-media-image': 'Photo whasq', /* TODO */
    'whasq-media-video': 'Vidéo whasq', /* TODO */
    'whasq-media-audio': 'Audio whasq', /* TODO */
    'whasq-media-file': 'Fichier whasq', /* TODO */

    // Profile
    'error-getting-user': 'Si è verificato un errore durante il recupero del profilo del utente',
    'user-information-title': 'Le mie informazione',
    'user-skills-title': 'I miei talenti',
    'user-channels-title': 'Le mie lingue',
    'user-points': 'punti',
    'user-answers': 'risposte',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'Il talento \'{skillName}\' è stato aggiunto con successo.',
    'error-adding-skill': 'Si è verificato un errore durante l\aggiunta del talento \'{skillName}\'.',
    'user-skill-removed': 'Il talento \'{skillName}\' è stato cancellato con successo.',
    'error-removing-skill': 'Si è verificato un errore durante la soppressione del talento \'{skillName}\'.',
    'error-getting-available-skills': 'Si è verificato un errore durante il recupero dei talenti disponibili.',
    'error-removing-channel': 'Si è verificato un errore durante la soppressione della lingua \'{channelName}\'.',
    'user-channel-removed': 'La lingua \'{channelName}\' è stata cancellata con successo.',
    'error-adding-channel': 'Si è verificato un errore durante l\'aggiunta della lingua \'{channelName}\'.',
    'user-channel-added': 'La lingua \'{channelName}\' è stata aggiunta con successo.',
    'error-getting-available-channels': 'Si è verificato un errore durante il recupero delle lingue disponibile.',
    'error-updating-gdpr': 'Si è verificato un errore durante l\'aggiornamento dei dati RGPD',
    'user-updated': 'L\'utente è stato modificato',
    'error-updating-user': 'Si è verificato un errore durante la modificazione del utente',
    'user-delete-skill-confirm': 'Sicuro/a di voler cancellare il talento "{skillName}" ?',
    'user-delete-channel-confirm': 'Sicuro/a di voler cancellare la lingua "{channelName}" ?',
    'user-delete-last-channel-impossible': 'Ops, si prega di scegliere almeno 1 lingua nel Suo profilo.',
    'profile-email-not-available': 'Manca l\'email non o non è disponibile',
    'profile-phone-not-available': 'Manca il numero di telefono o non è disponibile',
    'profile-job-position-not-available': 'Manca il posto o non è disponibile',

    // AddUserSkillModal
    'add-user-skill-title': 'Aggiunta di un talento',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Aggiunta di una lingua',

    // MediaAttachment
    'media-attachment-download': 'Scarica l\'allegato',

    // Notifications
    'error-getting-notifications': 'Si è verificato un errore durante il recupero delle notifiche',
    'notifications-today': 'Oggi',
    'notifications-past': 'Più vecchi',
    'notification-message-answer': '{fullname} ha rispoto al Suo whasq',
    'notification-message-champion': '{fullname} Le ha designato campione del Suo whasq !',
    'notification-message-add-points': '+{whasqPoints} whasqpoints',
    'notification-message-usefull': '{fullname} a trovato la Sua risposta utile!',
    'notification-message-match': '{fullname} ha creato un whasq che potrebbe interessarLe',
    'notification-message-recommendation': '{fullname} Le ha consigliato per il talento',
    'notification-message-suggest': '{fullname} Le ha suggerito questo talento',
    'notification-message-blacklist': '{fullname} ha segnalato il Suo whasq',
    'notification-message-admin-whasq': '{fullname} a creato un nuovo whasq',
    'notification-days-ago': 'Ci sono {days} giorni',

    // WhasqWrite
    'whasq-write-title': 'Titolo *',
    'whasq-write-message': 'Messaggio',
    'whasq-write-exchange': 'Scambio',
    'whasq-write-title-placeholder': 'Il mio titolo',
    'whasq-write-message-placeholder': 'Il mio messagio',
    'whasq-write-exchange-placeholder': 'Se mi aiuta ti offro ad esempio …..un caffè',
    'whasq-write-notify-around': 'Notificare i whasqers intorno a me',
    'whasq-write-urgent': 'È urgente',
    'whasq-write-import-file-title': 'Importare un file (foto, video, audio o documento (Excel, Word, PowerPoint)',
    'whasq-write-import-drop-here': 'Inviare qui il Suo allegato.',
    'whasq-write-error-importing-file': 'Si è verificato un errore durante l\'importo del file.',
    'whasq-write-import-file-button': 'Importare il file',
    'whasq-write-import-requirements': 'Il Suo file deve essere una foto, video, audio o documento (Excel, Word, PowerPoint).',
    'whasq-write-import-size-limit': 'La dimensione massima del file è 1mo.',
    'whasq-write-linked-skills': 'Talenti del whasq',
    'whasq-write-linked-channel': 'Scritto in',
    'whasq-write-change-attachment': 'Cambio di file',
    "whasq-write-preview-whasq": 'Visualizzare il whasq',
    'whasq-write-error-title-required': 'Il titolo del whasq è necessario',
    'whasq-write-error-message-required': 'Il messaggio del whasq è necessario',
    'whasq-write-error-skill-required': 'Il whasq deve contenere almeno un talento',
    'whasq-write-error-channel-required': 'Una lingua deve essere definita per il whasq',
    'error-getting-usersskills': 'Si è verificato un errore durante il recupero delle informazioni del utente.',
    'whasq-write-media-attachment-no-preview': 'Non può visualizzare il whasq',

    // PreviewWhasqModal
    'preview-whasq-title': 'Vizualizzare il whasq',

    // Answer
    'answer-button': 'Rispondere',
    'answer-message-text': 'Messaggio',
    'answer-import-file-title': 'Importare un file (foto, video o audio)',
    'answer-import-drop-here': 'Inviare qui il Suo allegato.',
    'answer-error-importing-file': 'Si è verificato un errore durante l\'importo del file.',
    'answer-import-file-button': 'Importare il file',
    'answer-import-requirements': 'Il Suo file deve essere una foto, video, audio o documento (Excel, Word, PorwerPoint).',
    'answer-import-size-limit': 'La dimensione massima del file è 1mo.',
    'answer-change-attachment': 'Cambiare di file',
    'answer-delete-confirm-message': 'Sicuro/a di voler cancellare la Sua risposta?',
    'answer-report-confirm-message': 'Sicuro/a di voler segnalare questa risposta?',
    'answer-champion-confirm-message': 'Sicuro/a di voler definire questa risposta come la soluzione del Suo whasq?',
    'answer-media-attachment-no-preview': 'Non può visualizzare il whasq',
    'answer-empty-content': 'Votre devez rédiger un message ou ajouter un média pour pouvoir envoyer votre réponse.', /* TODO */

    // WhasqPerso
    'whasq-perso-read-times': 'Visto {readUsersCount} volte',
    'whasq-perso-answers': 'risposte',
    'whasq-perso-answer': 'risposta',

    // Podium
    'podium-ranking-tab-title': 'CLASSIFICA',
    'podium-whasqpoints-tab-title': 'I MIEI WHASQPOINTS',

    // TimeSavingsModal
    'time-savings-title': 'Aiutaci a migliorare',
    'time-savings-message': 'Quanto tempo Si ci è voluto?',
    'time-savings-half-day': '1/2 giorno',
    'time-savings-day': '1 giorno',
    'time-savings-two-days': '2 giorni',
    'time-savings-three-days': '3 giorni',

    // TermOfUse
    'term-of-use-title': 'Termini e condizioni d\'uso',
    'term-of-use-decline-btn': 'Declinare',
    'term-of-use-authorize-btn': 'Autorizzare',
    'tof-decline-title': 'Consenso dei termini e condizioni d\'uso',
    'tof-decline-message': 'Per utilizzare l\'applicazione Whasq, è richiesta l\'accettazione delle Condizioni d\'uso',

    // Gdpr
    'gdpr-title': 'Consenso',
    'gdpr-decline-btn': 'Declinare',
    'gdpr-authorize-btn': 'Autorizzare',
    'gdpr-decline-title': 'Il consenso è necessario',
    'gdpr-decline-message': 'Per utilizzare l\'applicazione Whasq, è richiesta l\'accettazione delle Condizioni d\'uso.',

    // Register
    'register-title': 'Iscrizione',
    'register-fullname': 'Nome completo',
    'register-phone': 'Telefono',
    'register-job-position': 'Posto',
    'register-channels': 'Langues parlées', /* TODO */
    'register-channel-required': 'Almeno una lingua deve essere aggiunta per finalizzare la registrazione.',
    'register-add': 'Aggiungere',
    'register-password': 'Password',
    'register-password-confirm': 'Confermare la password',
    'register-password-format': 'La password deve contenere almeno 8 lettere di cui almeno altri 4 caratteri (maiuscola, minuscola, numero e carattere speciale)',
    'register-passwords-dont-match': 'Le password non sono corretti.',
    'register-button': 'Iscrizione',
    'register-field-required': 'È necessario completare il campo "{field}" per finalizzare la registrazione.',
    'register-password-see-password': 'Vedere la password',
    'register-password-not-see-password': 'Nascondere la password',

    // Ranking
    'ranking-answers-label': 'RISPOSTE',
    'ranking-solutions-label': 'SOLUZIONE',
    'ranking-see-profile': 'Vedere il profilo',
    'ranking-no-podium-for-selected-month': 'non c\'è classifica per questo mese',

    // Whasqpoint
    'whasqpoint-message-usefull': '{fullname} ha trovato la Sua rispota utile!',
    'whasqpoint-message-solution': '{fullname} Le ha designato campione del suo whasq!',
    'whasqpoint-message-recommend': 'Lei è stato raccomandato da {fullname}',
    'whasqpoint-days-ago': 'Ci sono {days} giorni',

    // Faq
    'faq-title': 'Domande frequenti',

    // DeleteAccountModal
    'delete-account-modal-title': 'Soppressione del account',
    'delete-account-modal-message': 'Occhio! I Suoi dati personali saranno distrutti e la cancellazione dell\'account comporterà la perdita di accesso all\'applicazione. Inserisce la parola DELETE qui per favore.',
    'delete-account-modal-button': 'Cancellare',
    'delete-account-modal-cancel': 'Annulare',
    'delete-account-modal-bad-confirm-word': 'La password non corrisponde a "DELETE". Riprova per favore.',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Filtra per...',
    'filter-whasqs-modal-recents': 'Recenti',
    'filter-whasqs-modal-olds': 'Vecchi',
    'filter-whasqs-modal-resolved': 'Risolti',
    'filter-whasqs-modal-not-resolved': 'Non risolti',

    // SuggestionsModal
    'suggestions-modal-title': 'Suggerimenti',
    'suggestions-modal-subtitle': 'È tempo di arricchire il Suo profilo',
    'suggestions-modal-other-skills': 'Altri talenti che potrebbero interessarti:',
    'suggestions-modal-recommended-by': '{fullname} Le ha raccomandato per i talenti :',

    // ZoomImageModal
    'zoom-image-modal-title': 'Zoom de l\'image', /* TODO */

    // UploadProfileImageModal
    'drop-file-here-or-click': 'Déposez votre fichier ici ou cliquez pour sélectionner le fichier à importer.', /* TODO */
    'profile-image-size-limit': 'Seuls les fichiers images d\'une taille inférieure à 1Mo sont acceptés.', /* TODO */
    'error-importing-profile-image': 'Une erreur s\'est produite lors de l\'import de l\'image. Veuillez réessayer.', /* TODO */
    'import-profile-image': 'Importer l\'image', /* TODO */
    'choose-profile-image': 'Choisissez votre image de profil', /* TODO */
    'profile-image-square-required': 'L\'image doit avoir un format carré.', /* TODO */
    
    // TagUserModal
    'tag-user-modal-title': 'Tagguer un utilisateur', /* TODO */
    'tag-user-modal-search': 'Recherchez un utilisateur', /* TODO */
}

export default messages