const messages = {

    // Login
    'Email': 'E-mail',
    'Login': 'Connettersi',
    'Password': 'Password',
    'Provided by your administrator': 'Fornito dal tuo amministratore',
    'Remember me': 'Ricordarsi di me',
    'no-identification-info': ' Se hai dimenticato la email o la password, per favore, contatta l\'amministratore',
    'bad-credentials': 'Le Sue credenziali non sono corretti. Riprova per favore.',
    'not-enough-rights': 'Non ha i diritti sufficienti per accedere.',
    'user-not-found': 'L\'utente non è stato trovato.',

    // Generale
    'more-info': 'Maggiori informazioni',
    'from': 'Dal',
    'to': 'Al',
    'real-time': 'in tempo reale',
    'update': 'Modificare',
    'delete': 'Eliminare',
    'previous': 'Precedente',
    'next': 'Seguente',
    'send': 'Mandare',
    'export-all': 'Esportare tutto',
    'yes': 'Sì',
    'no': 'No',
    'open': 'Aperto',
    'fullname': 'Nome completo',
    'job-position': 'Posto',
    'assistance': 'Ha bisogno di aiuto? Contatta jessie@whasq.com (dal lunedì al venerdì dalle 9:00 alle 12:00 e dalle 14:00 alle 18:00)',
    'download-attachment': 'Scaricare l\'allegato',
    'day': 'jour', /* TODO */
    'days': 'jours', /* TODO */
    'waiting': 'En attente...', /* TODO */
  
    // Menù
    'activity': 'Attività',
    'actives-users': 'Utenti attivi',
    'registered-users': 'Utenti registrati',
    'whasqs-answers': 'Whasqs e Risposte',
    'skills': 'Talenti',
    'time-savings': 'Risparmio di tempo',
    'whasqers': 'Whasqers',
    'podium': 'Podio',
    'search': 'Ricerca',
    'manage': 'Gestire',
    'skills-categories': 'Talenti e Categorie',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs segnalati',
    'answers-reports': 'Risposte segnalate',
    'users': 'Utenti',
    'admin': 'Amministrazione',
    'targets': 'Obiettivi e Gamificazione',
    'notifications': 'Notifiche',
    'learning': 'Formation', /* TODO */
    'training-centers': 'Centres de formation', /* TODO */
    'trainings': 'Formations', /* TODO */
  
    // Attività
    'eve-computed-kpi': 'indicatore calcolato a G-1',
    'no-data-for-selected-period': 'Nessun dato disponibile per il periodo selezionato',
    'no-data-available': 'Non ci sono dati disponibili',

    // ActivityActiveUsers
    'actives-title': 'Utenti attivi',
    'actives-kpi-title': 'Attivi',
    'actives-kpi-help-title': 'Attivi',
    'actives-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono connessi almeno una volta al mese "{month}".',
    'actives-dda-kpi-title': 'Attivi DIA (dall\'inizio dell\'attività)',
    'actives-dda-kpi-help-title': 'Attivi DIA',
    'actives-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono connessi dall\'inizio dell\'attività.',
    'actives-target-kpi-title': 'Attivi - Obiettivi',
    'actives-target-kpi-help-title': 'Attivi - Obiettivi',
    'actives-target-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di utenti che si sono connessi almeno una volta al mese "{month}" rispetto all\'obiettivo definito.',
    'actives-evolution-title': 'Evoluzione degli utenti attivi',
    'actives-evolution-help-title': 'Evoluzione degli utenti attivi',
    'actives-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi.',
    'actives-dda-evolution-title': 'Evoluzione degli utenti attivi DIA',
    'actives-dda-evolution-help-title': 'Evoluzione degli utenti attivi DIA',
    'actives-dda-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi accumulati dalla creazione del store.',
    'actives-notregistered-evolution-title': 'Evoluzione degli utenti attivi - registrazione',
    'actives-notregistered-evolution-help-title': 'Evoluzione degli utenti attivi - registrazione',
    'actives-notregistered-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi sottraendo gli utenti registrati.',
  
    // ActivityRegisteredUsers
    'registered-title': 'Utenti registrati - {month}',
    'registered-kpi-title': 'Registrati',
    'registered-kpi-help-title': 'Registrati',
    'registered-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono registrati nel mese"{month}".',
    'registered-inactives-kpi-title': 'Percentuale di utenti non attivi',
    'registered-inactives-kpi-help-title': 'Percentuale di utenti non attivi',
    'registered-inactives-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di utenti che si sono connessi nel mese "{month}" senza essere connessi rispetto al numero di utenti totale registrati nel mese.',
    'registered-inactives-evolution-title': 'Evoluzione delle registrazione',
    'registered-inactives-evolution-help-title': 'Evoluzione delle registrazione',
    'registered-inactives-evolution-help-message': 'Questo indicatore rappresesnta il numero di utenti registrati.',
  
    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs e Risposte - {month}',
    'whasqs-answers-kpi-title': 'Numero di Whasqs e risposte',
    'whasqs-answers-kpi-help-title': 'Numero di Whasqs e risposte',
    'whasqs-answers-kpi-help-message': 'Questo indicatore rappresenta il numero di whasqs pubblicati aggiunti al numero di risposte pubblicate nel mese "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Numero di Whasqs / autore di whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Numero di Whasqs / autore di whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'Questo indicatore rappresenta il numero di whasqs pubblicate nel mese "{month}" per autore di whasqs.',
    'answers-kpi-title': 'Numero di risposte',
    'answers-kpi-help-title': 'Numero di risposte',
    'answers-kpi-help-message': 'Questo indicatore rappresenta il numero di risposte pubblicate nel mese "{month}".',
    'answers-by-creator-kpi-title': 'Numero di risposte / autore di risposte',
    'answers-by-creator-kpi-help-title': 'Numero di risposte / autore di risposte',
    'answers-by-creator-kpi-help-message': 'Questo indicatore rappresenta il numero di risposte pubblicate nel mese "{month}" per autore di risposte.',
    'whasqs-with-contribution-kpi-title': 'Percentuale di Whasqs con interazione',
    'whasqs-with-contribution-kpi-help-title': 'Percentuale di Whasqs con interazione',
    'whasqs-with-contribution-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che hanno ricevuto risposte nel mese "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Percentuale di Whasqs con interazione DIA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Percentuale di Whasqs con interazione DIA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che hanno ricevuto risposte.',
    'whasqs-resolved-part-kpi-title': 'Percentuale di Whasqs risolti',
    'whasqs-resolved-part-kpi-help-title': 'Percentuale di Whasqs risolti',
    'whasqs-resolved-part-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che sono stato risolti nel mese"{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Percentuale di Whasqs risolti DIA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Percentuale di Whasqs risolti DIA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs que sono stato risolti.',
    'whasqs-evolution-title': 'Evoluzione del numero di whasqs',
    'whasqs-evolution-help-title': 'Evoluzione del numero di whasqs',
    'whasqs-evolution-help-message': 'Questo indicatore rappresenta il numero totale di whasqs.',
    'answers-evolution-title': 'Evoluzione del numero delle risposte',
    'answers-evolution-help-title': 'Evoluzione del numero delle risposte',
    'answers-evolution-help-message': 'Questo indicatore rappresenta il numero totale di risposte.',
  
    // ActivitySkills
    'skills-title': 'Talenti',
    'skills-dda-kpi-title': 'Numero totale di talenti identificati DIA',
    'skills-dda-kpi-help-title': 'Numero totale di talenti identificati DIA',
    'skills-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di talenti che sono stato identificati per i whasqers fin dall’inizio dell’attività.',
    'skills-part-kpi-title': 'Percentuale di talenti unici identificati',
    'skills-part-kpi-help-title': 'Percentuale di talenti unici identificati',
    'skills-part-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di talenti unici que sono stato identifici per i whasqers fin dall’inizio dell’attività rispetto a numero di talenti esistenti.',
    'skills-evolution-title': 'Evoluzione del numero di talenti identificati nei whasqs',
    'skills-evolution-help-title': 'Evoluzione del numero di talenti identificati nei whasqs',
    'skills-evolution-help-message': 'Questo indicatore rappresenta il numero di talenti identificati nei whasqs.',
    'most-used-cats-whasqs-kpi-title': 'Le 5 categorie le più utilizzate nei whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Le 5 categorie les più utilizzate nei whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'In questa tabella troverai le 5 categorie che contengono il maggior numero di talenti utilizzati nei whasq.',
    'most-used-cats-whasqs-kpi-help-message-2': 'I punti colorati rappresentano il numero di talenti usati negli whasqs per la categoria corrispondente.',
    'most-used-skills-whasqs-kpi-title': 'I 5 talenti les più utilizzati nei whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'I 5 talenti les più utilizzati nei whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'In questa tabella troverai le 5 talenti le più utilizzati nei whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'I punti colorati rappresentano il numero di uso di ogni talento nei whasqs.',
    'most-used-whasqers-kpi-title': 'I 5 talenti le più utilizzati per i whasqers',
    'most-used-whasqers-kpi-help-title': 'I 5 talenti le più utilizzati per i whasqers',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers dans leur profil.', /* TODO */
    'most-used-whasqers-kpi-help-message-2': 'I punti colorati rappresentano il numero di identificazione di ogni talento per i whasqers.',
    'less-used-whasqers-kpi-title': 'I 5 talenti meno utilizzati per i whasqers',
    'less-used-whasqers-kpi-help-title': 'Le 5 talenti meno utilizzati per i whasqers',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés par les whasqers dans leur profil.', /* TODO */
    'less-used-whasqers-kpi-help-message-2': 'I punti colorati rappresenta rappresentano il numero di identificazione di ogni talento per i whasqers.',
  
    // TimeSavings
    'time-savings-title': 'Risparmio di tempo - {month}',
    'minutes-earned-kpi-title': 'Minuti guadagnati del mese',
    'minutes-earned-kpi-help-title': 'Minuti guadagnati del mese',
    'minutes-earned-kpi-help-message': 'Questo indicatore rappresenta il numero di minuti guadagnati nel mese "{month}".',
    'minutes-earned-dda-kpi-title': 'Minuti guadagnati DIA',
    'minutes-earned-dda-kpi-help-title': 'Minuti guadagnati DIA',
    'minutes-earned-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di minuti guadagnati fin dall’inizio dell’attività.',
    'minutes-earned-month-kpi-title': 'Minuti guadagnati del mese',
  
    // Podium
    'podium-title': 'Podio',
    'whasqers-of-month': 'Whasqers del mese di',
    'no-podium-for-selected-month': 'Nessun podio è disponibile per il mese selezionato',
  
    // Card-user
    'answers-label': 'RISPOSTE',
    'solutions-label': 'SOLUZIONI',
    'see-profile': 'Vedere il profilo',
  
    // Search
    'search-title': 'Ricerca',
    'search-by-name-placeholder': 'Ricerca per nome...',
    'no-result-select-criteria': 'Nessun risultato. Si prega di inserire almeno un criterio.',
  
    // CategoriesSearchBlock
    'dynamic-search-title': 'Ricerca dinamica',
  
    // SkillsCategories
    'skills-categories-title': 'Talenti e Categorie',
    'update-cat-for-lang': 'Modifica della categoria per la lingua {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modifica del talento per la categoria "{cat}" e la lingua IT',
    'add-cat-for-lang-fr': 'Aggiunta della categoria per la lingua IT',
    'add-skill-for-cat-and-lang-fr': 'Aggiunta del talento per la categoria {cat}" e la lingua IT',
    'delete-cat-confirm-message': 'Sei sicuro di voler eliminare questa categoria?',
    'delete-skill-confirm-message': 'Sei sicuro di voler eliminare questo talento?',
    'choose-lang': 'Scegliere la lingua',
    'add-lang': 'Aggiungere una lingua',
    'add-cat': 'Aggiungere una categoria',
  
    // InfoMessage
    'cat-deleted': 'La categoria "{cat}" è stata eliminata.',
    'error-deleting-cat': 'Si è verificato un errore durante la soppressione della categoria "{cat}".',
    'skill-deleted': 'Il talento "{skill}" è stato eliminato.',
    'error-deleting-skill': 'Si è verificato un errore durante la soppressione del talento "{skill}".',
  
    // SkillCategoriesModal
    'already-existing-cat': 'Categoria/Categorie già esistente',
    'already-existing-skill': 'Talento/Talenti già esistente/esistenti',
    'no-existing-cat': 'Nessun categoria esistente',
    'no-existing-skill': 'Nessun talent esistente',
  
    // CreateLanguageModal
    'add-new-lang': 'Aggiunta di una nuova lingua',
    'already-implemented-langs': 'Lingue già esistente',
  
    // WhasqsList
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Sei sicuro di voler bloccare questo whasq?',
    'unblock-whasq-confirm-message': 'Sei sicuro di voler sbloccare questo whasq?',
    'ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'remove-whasq-confirm-message': 'Sei sicuro di voler eliminare questo whasq?',
    'add-whasq': 'Aggiunta di un Whasq',
    'whasqs-list': 'Lista dei Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creazione',
    'whasqs-column-update': 'Aggiornamento',
    'whasqs-column-title': 'Titolo',
    'whasqs-column-status': 'Status',
    'whasqs-column-urgent': 'Urgente',
    'whasqs-column-answers': 'Risposte',
    'whasqs-column-read': 'Letto',
    'whasqs-column-creator': 'Autore',
    'whasqs-column-skills': 'Talenti',
    'whasqs-column-actions': 'Azione',
    'whasq-resolved-by': 'Risolto per',
    'whasq-resolved-at': 'il',
    'whasqs-action-save-updates': 'Salvare le modifiche',
    'whasqs-action-edit-whasq': 'Modificare il whasq',
    'whasqs-action-unblock-whasq': 'Sbloccare il whasq',
    'whasqs-action-block-whasq': 'Bloccare il whasq',
    'whasqs-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'whasqs-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'whasqs-action-ban-user': 'Bandire quest’ utente',
    'whasqs-action-remove-whasq': 'Soppressione del whasq',
    'whasqs-notify-around': 'Notificare intorno a',
    'whasqs-language': 'Lingua', 

    // WhasqChannelModal
    'whasq-channel-title': 'Titolo del whasq"{whasq-title}"',
    'usefull-answer': 'utile',
    'champion-answer': 'CAMPIONE/CAMPIONESSA',
    'whasq-channel-edit-whasq-title': 'Titolo',
    'whasq-channel-edit-whasq-message': 'Messaggio',
    'whasq-channel-edit-answer-message': 'Messaggio',
    'whasq-channel-block-answer-confirm': 'Sicuro/a di voler bloccare questa risposta?',
    'whasq-channel-unblock-answer-confirm': 'Sicuro/a di voler sbloccare questa rispota?',
    'whasq-channel-delete-answer-confirm': 'Sicuro/a di voler cancellare questa risposta?',

    // AddWhasqModal
    'add-whasq-title': 'Aggiunta di un nuovo whasq',
    'add-whasq-item-title': 'Titolo',
    'add-whasq-item-message': 'Messaggio',
    'add-whasq-item-exchange': 'Scambio',
    'add-whasq-item-optionnal': 'Facoltativo', 
    'add-whasq-item-channel': 'Canale',
    'add-whasq-item-first-skill': 'Primo talento',
    'add-whasq-item-second-skill': 'Secondo talento',
    'add-whasq-item-third-skill': 'Terzo talent',
    'add-whasq-item-notify-around': 'Notificare intorno a te?',
    'add-whasq-item-urgent': 'Urgente?',
    'add-whasq-item-send-everyone': 'Inviare a tutti?',
    'add-whasq-skill-required': 'È obbligatorio scegliere almeno un talento.',
    'add-whasq-title-required': 'È obbligatorio iserire un titolo.',
    'add-whasq-message-required': 'È obbligatorio inserire un messaggio.',

    // WhasqsReports
    'whasqs-reports-title': 'Whasqs segnalati',
    'whasqs-reports-unblock-whasq-confirm-message': 'Sei sicuro di voler sbloccare questo whasq ?',
    'whasqs-reports-unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'whasqs-reports-ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'whasqs-reports-remove-whasq-confirm-message': 'Sei sicuro di voler eliminare questo whasq?',
    'whasqs-reports-list': 'Lista dei Whasqs segnalati',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Data di creazione',
    'whasqs-reports-column-last-update': 'Ultimo aggiornamento',
    'whasqs-reports-column-title': 'Titolo',
    'whasqs-reports-column-status': 'Status',
    'whasqs-reports-column-urgent': 'Urgente',
    'whasqs-reports-column-answers': 'Risposte',
    'whasqs-reports-column-creator': 'Autore',
    'whasqs-reports-column-reported-by': 'Segnalato da',
    'whasqs-reports-column-actions': 'Azione',
    'whasq-reports-resolved-by': 'Risolto da',
    'whasq-reports-resolved-at': 'il',
    'whasqs-reports-action-save-updates': 'Salvare le modifiche',
    'whasqs-reports-action-edit-whasq': 'Modificare il whasq',
    'whasqs-reports-action-unblock-whasq': 'Sbloccare il whasq',
    'whasqs-reports-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'whasqs-reports-action-unban-user': 'Rimuovere il divieto di accesso de l\'utilisateur',
    'whasqs-reports-action-ban-user': 'Bandire quest’ utente',
    'whasqs-reports-action-remove-whasq': 'Soppressione del whasq whasq',
  
    // AnswersReports
    'answers-reports-title': 'Risposte segnalate',
    'answers-reports-unblock-answer-confirm-message': 'Sei sicuro di voler sbloccare questa risposta?',
    'answers-reports-unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'answers-reports-ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'answers-reports-remove-answer-confirm-message': 'Sei sicuro di voler eliminare questa risposta?',
    'answers-reports-list': 'Lista delle risposte segnalate',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Data di creazione',
    'answers-reports-column-last-update': 'Ultimo aggiornamento',
    'answers-reports-column-message': 'Messaggio',
    'answers-reports-column-usefull-count': 'Numero di like',
    'answers-reports-column-champion': 'Campione?',
    'answers-reports-column-creator': 'Autore',
    'answers-reports-column-reported-by': 'Segnalato da',
    'answers-reports-column-actions': 'Azione',
    'answers-reports-action-save-updates': 'Salvare le modifiche',
    'answers-reports-action-edit-answer': 'Modificare la risposta',
    'answers-reports-action-unblock-answer': 'Sbloccare la risposta',
    'answers-reports-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'answers-reports-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'answers-reports-action-ban-user': 'Bandire quest’ utente',
    'answers-reports-action-remove-answer': 'Soppressione della risposta',
  
    // Users
    'users-title': 'Utenti',
    'users-ban-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'users-unban-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'users-archive-confirm-message': 'Sei sicuro di voler archiviare l\'account di questo utente?',
    'users-import-csv': 'Importare CSV',
    'users-list': 'Lista dei Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Data di registrazione',
    'users-column-last-connection': 'Ultimo accesso',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nome completo',
    'users-column-title': 'Titolo',
    'users-column-email': 'Email',
    'users-column-actions': 'Azione',
    'users-action-see-profile': 'Vedere il profilo',
    'users-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'users-action-ban-user': 'Bandire quest’ utente',
    'users-action-archive-user': 'Archiviare un utente',
    'users-import-starting': 'L\'importazione dei contatti ha cominciato',
    'users-action-consider-user-admin': 'Considerare quest’utente come amministratore',
    'users-action-stop-consider-user-admin': 'Non considerare più quest’ utente come amministratore',
    'users-confirm-consider-admin': 'Sicuro/a di voler considerare quest’ utente come amministratore?',
    'users-confirm-dont-consider-admin': 'Sicuro/a di non volere più considerare quest’ utente come amministratore?',
    'users-action-consider-user-admin-success': 'L\'utente di ID {userId} è ora amministratore.',
    'users-action-stop-consider-user-admin-success': 'L\'utente di ID {userId} non è più amministratore.',
    'users-action-switch-role': 'Changer le rôle de cet utilisateur', /* TODO */
    'users-column-geolocated': 'Geolocated', /* TODO */
    'error-file-format': 'The file format is not correct', /* TODO */
    'users-roles-filter': 'Rôles', /* TODO */
    'users-roles-filter-all': 'TOUS', /* TODO */
    'users-roles-filter-user': 'UTILISATEUR', /* TODO */
    'users-roles-filter-admin': 'ADMINISTRATEUR', /* TODO */
    'users-roles-filter-trainer': 'FORMATEUR', /* TODO */
    'users-actives-filter': 'Utilisateurs actifs', /* TODO */
    'users-actives-filter-all': 'TOUS', /* TODO */
    'users-actives-filter-actives': 'ACTIFS', /* TODO */
    'users-actives-filter-deleted': 'ARCHIVES', /* TODO */

    // ImportUsersModal
    'users-import-title': 'Importazione dei contatti',
    'import-users-file-limit': 'Sono accettati solo file CSV più piccoli di 1 Mo',
    'import-users-error': 'Si è verificato un errore durante l\'importazione, riprova per favore',
    'import-users-btn': 'Importare i contatti',
    'import-users-expected-format': 'Formato richiesto',
    'import-users-fullname': 'Nome completo',
    'import-users-email': 'Email',
    'import-users-job-position': 'Posto',
    'import-users-phone': 'Numero di telefono',
    'import-users-download-exemple': 'Scaricare l\'esempio', 
    'import-users-instructions-part-1': 'Completare il file scaricato e salvare come un file csv (valori separati da virgola)',
    'import-users-instructions-part-2': '(SOLO 4 colonne in ordine DEFINITO))',

    // Targets
    'targets-title': 'Obiettivi e Gamificazione',
    'targets-update-message': 'L’obiettivo "{target}" è stato aggiornato',
    'targets-geoloc-perimeter-updated': 'Il perimetro di geolocalizzazione è stato aggiornato',
    'targets-points-atribution-updated': 'L’attribuzione di punti  stato aggionato',
    'targets-target': 'Obiettivi',
    'targets-trimester': '3 mesi',
    'targets-bimester': '6 mesi',
    'targets-year': '12 mesi',
    'targets-active-users': 'utenti non attivi',
    'targets-geoloc-perimeter': 'Il perimetro di geolocalizzazione',
    'targets-perimeter': 'Perimetro',
    'targets-gamification': 'Gamificazione',
    'targets-approved-answer': 'Risposta approvata',
    'targets-usefull-answer': 'Risposta utile',
    'targets-recommended-skill': 'Talento consigliato',
    'targets-points': 'punti',
    
    // Header
    'header-profile': 'Profilo',
    'header-logout': 'Disconnettersi',
    'french': 'Francese',
    'english': 'Inglese',
    'spanish': 'Spagnolo',
    'italian': 'Italiano',
    'russian': 'Russo',
    'portuguese': 'Portoghese',
  
    // Sidebar
    'sidebar-navigation': 'Navigazione',
  
    // Profile
    'profile': 'Profilo',
    'profile-title': 'Profilo utente',
    'profile-ban-user-confirm-message': 'Sicuro/ di voler bloccare quest’utente?',
    'profile-edit-skill-confirm-message': 'Attenzione, la modifica verrà eseguita in modo globale per tutti gli utenti. Sicuro/a di voler continuare?',
    'profile-remove-skill-confirm-message': 'Sicuro/ di voler eliminare questo talento di quest’utente?',
    'profile-archive-user-confirm-message': 'Sicuro/a di voler archiviare quest’utente?',
    'whasqer-profile': 'Profilo del WhASQer',
    'profile-account-creation': 'Creazione account',
    'profile-last-connection': 'Ultimo accesso',
    'profile-last-update': 'Ultimo aggiornamento',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'RISPOSTE',
    'profile-solutions-column': 'SOLUZIONE',
    'profile-block-button': 'Bloccare',
    'profile-archive-button': 'Archiviare',
    'profile-user-archived': 'Quest’utente è stato archiviato',
    'profile-skills-subtitle': 'I suoi talenti',
    'profile-no-listed-skill': 'Nessun talento elencato',
    'profile-no-listed-channel': 'Aucune langue répertoriée', /* TODO */
    'profile-no-listed-training': 'Aucune formation répertoriée', /* TODO */
    'profile-languages-subtitle': 'Ses langues', /* TODO */
    'profile-trainings-subtitle': 'Ses formations', /* TODO */
    'profile-remove-channel-confirm': 'Etes-vous sûr de vouloir supprimer la langue "{name}" de votre profil ?', /* TODO */
    'profile-training-col-id': 'Id', /* TODO */
    'profile-training-col-name': 'Nom', /* TODO */
    'profile-training-col-role': 'Rôle', /* TODO */
    'profile-training-col-levels-count': 'Nb de niveaux', /* TODO */
    'profile-training-col-participants-count': 'Nb de participants', /* TODO */
    'profile-training-col-answerings-count': 'Nb de répondants', /* TODO */
    'profile-training-col-whasqs-count': 'Nb de whasqs', /* TODO */
    'profile-training-col-success-rate': 'Taux de réussite', /* TODO */
    'profile-training-col-start': 'Début', /* TODO */
    'profile-training-col-end': 'Fin', /* TODO */
    'profile-training-col-end-support': 'Fin de support', /* TODO */
  
    // AddUserSkillModal
    'add-skill-for-user': 'Aggiunta di un talento per {fullname}',
    'already-existing-skills-for-user': 'Talento/Talenti già esistente/esistenti per quest’ utente',
    'available-skills-for-user': 'Talento/Talenti disponibile/disponibili per quest’ utente',
  
    // SuperAdminStores
    'store-selection': 'Scelta del store',
    'store-choice-validation': 'Confermare la scelta del store',
  
    // StoreLogoUpload
    'choose-company-logo': 'Scegliere il logo della tua società',
    'drop-file-here-or-click': 'Rilascia il tuo file qui o fai clic per selezionare il file da importare',
    'company-logo-size-limit': 'Sono accettati solo file di immagine più piccoli di 1mb',
    'company-logo-square-required': 'L\'immagine deve avere un formato quadrato.',
    'error-importing-company-logo': 'Si è verificato un errore durante l’importazione. Per favore, riprova.',
    'import-company-logo': 'Importare il logo',

    // Notifications
    'notifications-title': 'Notifiche',
    'notifications-list': 'L\'elenco delle notifiche',
    'notifications-column-id': 'ID',
    'notifications-column-type': 'Tipo',
    'notifications-column-data': 'Dati',
    'notifications-column-owner': 'Proprietario',
    'notifications-column-shared': 'Condiviso?',
    'notifications-column-creation': 'Data di creazione',
    'notifications-column-message': 'Messaggio',
    'notifications-no-data': 'Non ha alcuna notifica',

    // TrainingCenters
    'training-centers-title': 'Centres de formation', /* TODO */
    'training-centers-add-btn': 'Ajouter un centre de formation', /* TODO */
    'training-centers-not-defined': 'Aucun organisme de formation n\'est défini à ce jour. Veuilez en ajouter.', /* TODO */
    'training-centers-archive-confirm': 'Etes-vous sûr de vouloir archiver ce centre de formation ?', /* TODO */
    'training-centers-name-col': 'Nom', /* TODO */
    'training-centers-url-col': 'Url', /* TODO */
    'training-centers-date-col': 'Date de création', /* TODO */
    'training-centers-success-rate-col': 'Taux de réussite', /* TODO */
    'training-centers-actions-col': 'Actions', /* TODO */

    // Trainings
    'trainings-title': 'Formations', /* TODO */
    'trainings-add-btn': 'Ajouter une session de formation', /* TODO */
    'trainings-name-col': 'Libellé', /* TODO */
    'trainings-training-center-col': 'Centre de formation', /* TODO */
    'trainings-start-col': 'Début', /* TODO */
    'trainings-end-col': 'Fin', /* TODO */
    'trainings-support-end-col': 'Fin support', /* TODO */
    'trainings-trainers-count-col': 'Nb de formateurs', /* TODO */
    'trainings-participants-count-col': 'Nb de participants', /* TODO */
    'trainings-whasqs-count-col': 'Nb de whasqs', /* TODO */
    'trainings-remaining-days-col': 'Jours restants', /* TODO */
    'trainings-success-rate-col': 'Taux de réussite', /* TODO */
    'trainings-language-col': 'Langue', /* TODO */
    'trainings-actions-col': 'Actions', /* TODO */
    'trainings-not-defined': 'Aucune session de formation n\'est définie à ce jour. Veuillez en ajouter.', /* TODO */
    'trainings-archive-confirm': 'Etes-vous sûr de vouloir archiver cette session de formation ?', /* TODO */
    'trainings-action-plan': 'Planifier les réponses', /* TODO */
    'trainings-action-update': 'Modifier la session de formation', /* TODO */
    'trainings-action-duplicate': 'Dupliquer la session de formation', /* TODO */
    'trainings-action-reporting': 'Accèder au reporting de la session de formation', /* TODO */
    'trainings-action-evaluation': 'Accèder à l\'évaluation de la session de formation', /* TODO */
    'trainings-action-archive': 'Archiver la session de formation', /* TODO */
    'trainings-whasqs-count-insufficient': '⚠ Vous ne pouvez pas accèder à la planification des questions tant que vous n\'avez pas ajouté au moins 10 questions à la session de formation.', /* TODO */

    // AddTrainingCenterModal
    'add-training-center-modal-title': 'Ajout d\'un organisme de formation', /* TODO */
    'add-training-center-modal-title-edit': 'Edition d\'un organisme de formation', /* TODO */
    'add-training-center-modal-desc-tab': 'Description', /* TODO */
    'add-training-center-modal-trainers-tab': 'Formateurs', /* TODO */
    'add-training-center-modal-name': 'Nom :', /* TODO */
    'add-training-center-modal-url': 'Url :', /* TODO */
    'add-training-center-modal-validate': 'Valider', /* TODO */
    'add-training-center-modal-col-name': 'Nom', /* TODO */
    'add-training-center-modal-col-email': 'Email', /* TODO */
    'add-training-center-modal-col-job': 'Poste', /* TODO */
    'add-training-center-modal-col-actions': 'Actions', /* TODO */
    'add-training-center-modal-delete-trainer-confirm': 'Etes-vous sûr de vouloir retirer ce formateur de ce centre de formation ?', /* TODO */
    'add-training-center-modal-update-successful': '👍 Le centre de formation "{name}" a bien été mis à jour !', /* TODO */
    'add-training-center-modal-insert-successful': '👍 Le centre de formation "{name}" a bien été créé !', /* TODO */
    'add-training-center-modal-trainer-deleted': '👍 Le formateur d\'email "{email}" a bien été supprimé de ce centre de formation.', /* TODO */
    'add-training-center-modal-trainer-added': '👍 Le formateur d\'email "{email}" a bien été ajouté à ce centre de formation.', /* TODO */

    // AddTrainerModal
    'add-trainer-modal-training-center-title': 'Ajouter un formateur au centre de formation', /* TODO */
    'add-trainer-modal-training-title': 'Ajouter un formateur à la session de formation', /* TODO */
    'add-trainer-modal-participant-title': 'Ajouter un participant à la session de formation', /* TODO */
    'add-trainer-modal-trainer-email': 'Email du formateur', /* TODO */
    'add-trainer-modal-participant-email': 'Email du participant', /* TODO */
    'add-trainer-modal-no-matched-trainer': 'Aucun formateur correspond à l\'email renseigné', /* TODO */
    'add-trainer-modal-validate': 'Validate', /* TODO */
    'add-trainer-modal-email-invalid': 'L\'adresse email n\'est pas valide', /* TODO */
    'add-trainer-modal-grant-user-confirm': 'Vous êtes sur le point de donner le rôle FORMATEUR à un utilisateur. Etes-vous sûr de vouloir continuer ?', /* TODO */
    'add-trainer-modal-at-least-three': 'Veuillez renseigner au moins 3 caractères pour lancer la recherche.', /* TODO */

    // AddTrainingModal
    'add-training-modal-title': 'Ajout d\'une session de formation', /* TODO */
    'add-training-modal-edit-title': 'Edition d\'une session de formation', /* TODO */
    'add-training-modal-desc-tab': 'Description', /* TODO */
    'add-training-modal-trainers-tab': 'Formateurs', /* TODO */
    'add-training-modal-participants-tab': 'Participants', /* TODO */
    'add-training-modal-memory-quiz-tab': 'Quiz mémoriel', /* TODO */
    'add-training-modal-levels-tab': 'Niveaux', /* TODO */
    'add-training-modal-name': 'Libellé', /* TODO */
    'add-training-modal-description': 'Description', /* TODO */
    'add-training-modal-add-skill': 'Ajouter', /* TODO */
    'add-training-modal-skills': 'Talents', /* TODO */
    'add-training-modal-language': 'Langue', /* TODO */
    'add-training-modal-start': 'Début', /* TODO */
    'add-training-modal-end': 'Fin', /* TODO */
    'add-training-modal-end-support': 'Fin du support', /* TODO */
    'add-training-modal-start-placeholder': 'Cliquez ici pour sélectionner une date...', /* TODO */
    'add-training-modal-end-placeholder': 'Cliquez ici pour sélectionner une date...', /* TODO */
    'add-training-modal-time': 'Heure', /* TODO */
    'add-training-modal-validate': 'Valider', /* TODO */
    'add-training-modal-trainers-name-col': 'Nom', /* TODO */
    'add-training-modal-trainers-email-col': 'Email', /* TODO */
    'add-training-modal-trainers-job-col': 'Poste', /* TODO */
    'add-training-modal-trainers-actions-col': 'Actions', /* TODO */
    'add-training-modal-add-trainer-btn': 'Ajouter un formateur', /* TODO */
    'add-training-modal-add-participant-btn': 'Ajouter un participant', /* TODO */
    'add-training-modal-import-participant-btn': 'Import CSV', /* TODO */
    'add-training-modal-participants-name-col': 'Nom', /* TODO */
    'add-training-modal-participants-email-col': 'Email', /* TODO */
    'add-training-modal-participants-job-col': 'Poste', /* TODO */
    'add-training-modal-participants-actions-col': 'Actions', /* TODO */
    'add-training-modal-add-question-btn': 'Ajouter', /* TODO */
    'add-training-modal-edit-question-planning-btn': 'Planning', /* TODO */
    'add-training-modal-quiz-index-col': 'Index', /* TODO */
    'add-training-modal-quiz-question-col': 'Question', /* TODO */
    'add-training-modal-quiz-type-col': 'Type', /* TODO */
    'add-training-modal-quiz-scheduled-col': 'Planifié le', /* TODO */
    'add-training-modal-quiz-level-col': 'Niveau', /* TODO */
    'add-training-modal-quiz-actions-col': 'Actions', /* TODO */
    'add-training-modal-delete-question-confirm': 'Etes-vous sûr de vouloir supprimer cette question ?', /* TODO */
    'add-training-modal-delete-participant-confirm': 'Etes-vous sûr de vouloir supprimer ce participant ?', /* TODO */
    'add-training-modal-delete-trainer-confirm': 'Etes-vous sûr de vouloir supprimer ce formateur ?', /* TODO */
    'add-training-modal-level-lvl-col': 'Niveau', /* TODO */
    'add-training-modal-level-label-col': 'Label', /* TODO */
    'add-training-modal-level-succes-threshold-col': 'Taux de réussite attendu', /* TODO */
    'add-training-modal-level-actions-col': 'Actions', /* TODO */
    'add-training-modal-remove-lvl-confirm': 'Etes-vous sûr de vouloir supprimer ce niveau ?', /* TODO */
    'add-training-modal-add-lvl-btn': 'Ajouter', /* TODO */
    'add-training-modal-add-question-no-level': 'Vous devez ajouter des niveaux avant de créer vos questions 😉', /* TODO */
    'add-training-modal-training-center': 'Centre de formation', /* TODO */
    'add-training-modal-training-center-placeholder': 'Choisissez votre centre de formation ! 😃', /* TODO */
    'add-training-modal-missing-field': 'Le champs "{field}" est requis. Merci de le compléter pour pouvoir créer la session de formation 😉', /* TODO */
    'add-training-modal-invalid-field': 'Le champs "{field}" est invalide. Merci de le corriger pour pouvoir créer la session de formation 😉', /* TODO */
    'add-training-modal-insert-successfull': 'La session de formation a bien été créée ! 😃', /* TODO */
    'add-training-modal-update-successfull': 'La session de formation a bien été mise à jour ! 😃', /* TODO */
    'add-training-modal-trainer-added': 'Le formateur a bien été ajouté à la session de formation ! 😃', /* TODO */
    'add-training-modal-trainer-deleted': 'Le formateur a bien été retiré de la session de formation ! 😃', /* TODO */
    'add-training-modal-participant-added': 'Le participant a bien été ajouté à la session de formation ! 😃', /* TODO */
    'add-training-modal-participant-deleted': 'Le participant a bien été retiré de la session de formation ! 😃', /* TODO */
    'add-training-modal-level-added': 'Le niveau {level} a bien été ajouté ! 😃', /* TODO */
    'add-training-modal-level-updated': 'Le niveau {level} a bien été modifié ! 😃', /* TODO */
    'add-training-modal-level-deleted': 'Le niveau {level} a bien été supprimé ! 😃', /* TODO */
    'add-training-modal-question-deleted': 'La question a bien été supprimée ! 😃', /* TODO */
    'add-training-modal-minimum-whasqs': 'Attention, vous devez ajouter au moins 10 questions à la session de formation', /* TODO */
    'add-training-modal-qcm': 'Choix multiple', /* TODO */
    'add-training-modal-qcu': 'Choix unique', /* TODO */
    'add-training-modal-planification-tab': 'Planification', /* TODO */

    // AddQuestionModal
    'add-question-modal-title': 'Ajout d\'une question au quiz', /* TODO */
    'add-question-modal-edit-title': 'Edition d\'une question du quiz', /* TODO */
    'add-question-modal-type': 'Type', /* TODO */
    'add-question-modal-options': 'Options', /* TODO */
    'add-question-modal-qcm': 'Questionnaire à choix multiple', /* TODO */
    'add-question-modal-qcu': 'Questionnaire à choix unique', /* TODO */
    'add-question-modal-open': 'Question ouverte', /* TODO */
    'add-question-modal-add-option': 'Ajouter une option', /* TODO */
    'add-question-modal-whasq-title': 'Titre du whasq', /* TODO */
    'add-question-modal-whasq-message': 'Message du whasq', /* TODO */
    'add-question-modal-save': 'Enregistrer la question', /* TODO */
    'add-question-modal-option-label-col': 'Label', /* TODO */
    'add-question-modal-option-solution-col': 'Solution', /* TODO */
    'add-question-modal-option-explanation-col': 'Explication', /* TODO */
    'add-question-modal-option-order-col': 'Ordre', /* TODO */
    'add-question-modal-option-actions-col': 'Actions', /* TODO */
    'add-question-modal-explanations': 'Explications', /* TODO */
    'add-question-modal-level': 'Niveau', /* TODO */
    'add-question-modal-whasq-media': 'Media', /* TODO */
    'add-question-modal-import-drop-here': 'Déposez ici votre média.', /* TODO */
    'add-question-modal-import-size-limit': 'La taille maximale du fichier est 1Mo', /* TODO */
    'add-question-modal-error-importing-file': 'Une erreur s\'est produite lors de l\'import du fichier.', /* TODO */
    'add-question-modal-import-file-button': 'Importer le fichier', /* TODO */
    'add-question-modal-skills': 'Talents', /* TODO */
    'add-question-modal-skills-add': 'Ajouter', /* TODO */
    'add-question-modal-media-attachment-no-preview': 'Pas de prévisualisation possible', /* TODO */
    'add-question-modal-change-attachment': 'Changer de fichier', /* TODO */
    'add-question-modal-delete-option-confirm': 'Etes-vous sûr de vouloir supprimer cette option ?', /* TODO */
    'add-question-modal-missing-title': 'Le titre de la question est obligatoire', /* TODO */
    'add-question-modal-missing-message-or-media': 'Vous devez renseigner soit un message, soit un media pour valider ce formulaire', /* TODO */
    'add-question-modal-missing-skill': 'Au moins un talent est requis pour valider ce formulaire', /* TODO */
    'add-question-modal-missing-options': 'Au moins deux options doivent être renseignées', /* TODO */
    'add-question-modal-missing-assert-options': 'Parmi les options, au moins une doit être une solution', /* TODO */
    'add-question-modal-qcu-bad-assert-options': 'Votre question étant de type choix unique, vous devez avoir une unique solution parmi les options', /* TODO */

    // AddTrainingSkillModal
    'add-training-skill-modal-title': 'Ajout de talents à la session de formation', /* TODO */
    'add-training-skill-modal-suggest': 'Un talent est manquant ? Demandez l\'ajout', /* TODO */

    // EditPlanningModal
    'edit-planning-modal-title': 'Planification des questions', /* TODO */
    'edit-planning-modal-legend-title': 'Légende', /* TODO */
    'edit-planning-modal-legend-level': 'Niveau {level}', /* TODO */
    'edit-planning-modal-bad-date': 'Vous ne pouvez pas déplacer la planification de cette question à cette date. Veuillez la modifier. 😉', /* TODO */

    // AddLevelModal
    'add-level-modal-title': 'Ajout du niveau {level}', /* TODO */
    'add-level-modal-edit-title': 'Edition du niveau {level}', /* TODO */
    'add-lvl-modal-label': 'Label', /* TODO */
    'add-lvl-modal-success-treshold': 'Taux de réussite attendu (en %)', /* TODO */
    'add-lvl-modal-validate-btn': 'Valider', /* TODO */
    'add-level-modal-fields-required': 'Merci de compléter tous les champs pour pouvoir valider ce formulaire.', /* TODO */

    // PlanQuestionModal
    'plan-question-modal-title': 'Planifier une question le {date}', /* TODO */
    'plan-question-modal-move-question-title': 'Déplacer la question {question} au {date}', /* TODO */
    'plan-question-modal-move-question-title-unknown-date': 'Déplacer la question {question}', /* TODO */
    'plan-question-modal-plan-btn': 'Planifier', /* TODO */
    'plan-question-modal-move-btn': 'Déplacer', /* TODO */
    'plan-question-modal-question': 'Question {question}', /* TODO */
    'plan-question-modal-question-level': 'niveau {level}', /* TODO */
    'plan-question-modal-choose-question': 'Quelle question souhaitez-vous planifier ?', /* TODO */
    'plan-question-modal-prior-warning-confirm': '⚠ Attention ⚠\r\nVous êtes sur le point de planifier une questions de difficulté {level} après une ou plusieurs questions de niveau supérieur.\r\nEtez-vous sûr de vouloir confirmer cette opération ?', /* TODO */
    'plan-question-modal-later-warning-confirm': '⚠ Attention ⚠\r\nVous êtes sur le point de planifier une questions de difficulté {level} avant une ou plusieurs questions de niveau inférieur.\r\nEtez-vous sûr de vouloir confirmer cette opération ?', /* TODO */
    'edit-planning-modal-all-questions-planned': 'Toutes les questions sont planifiées 😃', /* TODO */
    'plan-question-modal-date-placeholder': 'Date de report', /* TODO */
    'plan-question-modal-select-move-date': 'Nouvelle date de planification', /* TODO */
    'plan-question-modal-question-title': 'Titre', /* TODO */
    'plan-question-modal-question-message': 'Détails', /* TODO */
    'plan-question-modal-bad-date': 'Vous ne pouvez pas déplacer la planification de cette question à cette date. Veuillez la modifier. 😉', /* TODO */

    // AddQuestionSkillModal
    'add-question-skill-modal-title': 'Ajout d\'un talent', /* TODO */
    'add-question-skill-modal-conditions': 'Vous pouvez ajouter jusqu\'à 3 talents sur cette question', /* TODO */

    // AddQuestionOptionModal
    'add-question-option-modal-title': 'Ajout d\'une option', /* TODO */
    'add-question-option-modal-title-update': 'Edition d\'une option', /* TODO */
    'add-question-option-modal-label': 'Label', /* TODO */
    'add-question-option-modal-assert': 'Solution', /* TODO */
    'add-question-option-modal-explanation': 'Explication', /* TODO */
    'add-question-option-modal-add': '+ Ajouter', /* TODO */
    'add-question-option-modal-update': 'Editer', /* TODO */
    'add-question-option-modal-solution-ever-defined': '(une option est déjà définie comme solution de la question)', /* TODO */

    // TrainingReporting
    'training-reporting-title': 'Reporting de session de formation', /* TODO */
    'training-reporting-title-name': 'Reporting "{name}"', /* TODO */
    'training-reporting-participants-count-kpi-title': 'Nombre de participants', /* TODO */
    'training-reporting-participants-count-help-title': 'Nombre de participants', /* TODO */
    'training-reporting-participants-count-help-message': 'Cet indicateur représente le nombre de participants pour la formation.', /* TODO */
    'training-reporting-sent-whasqs-count-kpi-title': 'Nombre de whasqs envoyés', /* TODO */
    'training-reporting-sent-whasqs-count-help-title': 'Nombre de whasqs envoyés', /* TODO */
    'training-reporting-sent-whasqs-count-help-message': 'Cet indicateur représente le nombre de whasqs envoyés dans le cadre de la formation.', /* TODO */
    'training-reporting-whasqs-count-kpi-title': 'Nombre de whasqs', /* TODO */
    'training-reporting-whasqs-count-help-title': 'Nombre de whasqs', /* TODO */
    'training-reporting-whasqs-count-help-message': 'Cet indicateur représente le nombre de whasqs de la formation.', /* TODO */
    'training-reporting-users-giving-answers-count-kpi-title': 'Nombre de répondants', /* TODO */
    'training-reporting-users-giving-answers-count-help-title': 'Nombre de répondants', /* TODO */
    'training-reporting-users-giving-answers-count-help-message': 'Cet indicateur représente le nombre de répondants de la formation.', /* TODO */
    'training-reporting-users-reached-max-level-count-kpi-title': 'Nombre d\'utilisateurs au niveau max', /* TODO */
    'training-reporting-users-reached-max-level-count-help-title': 'Nombre d\'utilisateurs au niveau max', /* TODO */
    'training-reporting-users-reached-max-level-count-help-message': 'Cet indicateur représente le nombre de participants qui ont atteint le niveau maximal de la formation.', /* TODO */
    'training-reporting-whasqs-answered-count-kpi-title': 'Nb de réponses du formateur', /* TODO */
    'training-reporting-whasqs-answered-count-help-title': 'Nb de réponses du formateur', /* TODO */
    'training-reporting-whasqs-answered-count-help-message': 'Cet indicateur représente le nombre de réponses données par le formateur.', /* TODO */
    'training-reporting-participation-rate-kpi-title': 'Taux de participation', /* TODO */
    'training-reporting-participation-rate-help-title': 'Taux de participation', /* TODO */
    'training-reporting-participation-rate-help-message': 'Cet indicateur représente le nombre de répondants par rapport au nombre total de participants à la formation.', /* TODO */
    'training-reporting-success-rate-kpi-title': 'Taux de réussite', /* TODO */
    'training-reporting-success-rate-help-title': 'Taux de réussite', /* TODO */
    'training-reporting-success-rate-help-message': 'Cet indicateur représente le nombre de bonnes réponses par rapport au produit du nombre de questions envoyées et du nombre de participants.', /* TODO */
    'training-reporting-levels-tab-title': 'Chiffres-clefs concernant les niveaux', /* TODO */
    'training-reporting-levels-tab-id-col': 'Id', /* TODO */
    'training-reporting-levels-tab-title-col': 'Titre', /* TODO */
    'training-reporting-levels-tab-whasqs-count-col': 'Nb de whasqs', /* TODO */
    'training-reporting-levels-tab-participants-count-col': 'Nb de participants', /* TODO */
    'training-reporting-levels-tab-participants-giving-answers-count-col': 'Nb de répondants', /* TODO */
    'training-reporting-levels-tab-participation-rate-col': 'Taux de participation', /* TODO */
    'training-reporting-whasqs-tab-title': 'Chiffres-clefs concernant les whasqs', /* TODO */
    'training-reporting-whasqs-tab-id-col': 'Id', /* TODO */
    'training-reporting-whasqs-tab-title-col': 'Titre', /* TODO */
    'training-reporting-whasqs-tab-level-col': 'Niveau', /* TODO */
    'training-reporting-whasqs-tab-participants-giving-answers-count-col': 'Nb de répondants', /* TODO */
    'training-reporting-whasqs-tab-sent-on-col': 'Date d\'envoi', /* TODO */
    'training-reporting-whasqs-tab-participation-rate-col': 'Taux de participation', /* TODO */
    'training-reporting-whasqs-tab-success-rate-col': 'Taux de succès', /* TODO */

    // TrainingEvaluation
    'training-evaluation-title': 'Evaluation de session de formation', /* TODO */
    'training-evaluation-title-name': 'Evaluation de la session de formation "{name}"', /* TODO */

    // SwitchUserRoleModal
    'switch-user-role-modal-title': 'Changement de rôle pour l\'utilisateur "{name}"', /* TODO */
    'switch-user-role-modal-new-role': 'Nouveau rôle :', /* TODO */
    'switch-user-role-modal-role-user': 'Utilisateur', /* TODO */
    'switch-user-role-modal-role-trainer': 'Formateur', /* TODO */
    'switch-user-role-modal-role-admin': 'Administrateur', /* TODO */
    'switch-user-role-modal-validate': 'Valider', /* TODO */
    'switch-user-role-modal-training-center': 'Centre de formation', /* TODO */

    // ProfileAddChannel
    'profile-add-channel-title': 'Ajout de langue sur votre profil', /* TODO */
}

export default messages