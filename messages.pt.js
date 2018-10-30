const messages = {
    'Email': 'Email',
    'Register': 'S\'inscrire',
    'Password': 'Mot de passe',
    'Remember me': 'Se souvenir de moi',
    'no-identification-info': 'Si vous n\'avez pas vos identifiants, veuillez contacter votre administrateur',
    'login-next': 'Suivant',
    'login-unrecognized-email-title': 'Le client "{domain}" n\'existe pas',
    'login-unrecognized-email-message': 'Veuillez envoyer un email à jessie@whasq.com.',
    'login-code-sent-title': 'Confirmation de votre compte',
    'login-code-sent-message': 'Un email avec le lien pour valider votre adresse email vient de vous être envoyé.',
    'login': 'Se connecter',
    'login-email-placeholder': 'Email',
    'login-password-placeholder': 'Mot de passe',
    'login-bad-password': 'Le mot de passe saisi n\'est pas correct. Veuillez réessayer.',
    'login-error': 'Une erreur s\'est produite de la connexion. Veuillez réessayer.',
    'login-password-see-password': 'Voir le mot de passe',
    'login-password-not-see-password': 'Cacher le mot de passe',
    'login-forgotten-or-change-password': 'Mot de passe oublié ou changement de mot de passe ?',

    //  Global
    'search': 'Recherche',
    'previous': 'Précédent',
    'next': 'Suivant',
    'add': 'Ajouter',
    'error-occured': 'Une erreur s\'est produite.',
    'first-ranking-suffix': 'er',
    'second-ranking-suffix': 'ème',
    'third-ranking-suffix': 'ème',
    'default-ranking-suffix': 'ème',
    'back-to-homepage': 'Retour à l\'accueil',
    'loading': 'Chargement...',

    // Header
    'header-profile': 'Profil',
    'header-logout': 'Se déconnecter',
    'french': 'Français',
    'english': 'Anglais',
    'header-ask-info': 'Demander mes informations',
    'header-delete-account': 'Supprimer mon compte',
    'header-admin': 'Admin',
    'header-change-password': 'Changer de mot de passe',
    'header-faq': 'FAQ',
    'header-term-of-use': 'CGU',
    'header-information-asked': 'Vos données ont été envoyées sur votre adresse email.',
    'header-account-deleted': 'Votre compte a bien été supprimé.',
    'header-password-changed': 'Un email vous a été envoyé pour réinitialiser votre mot de passe.',

    // Footer
    'footer-privacy-policy': 'Politique de confidentialité',
    'footer-assistance': 'Besoin d’aide ? Contactez jessie@whasq.com (Du lundi à vendredi de 9:00 à 12:00 et de 14:00 à 18:00)',
    'footer-follow-us': 'Suivez-nous :',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'Pour mes talents',
    'whasqs-search-all-filter': 'Tout',
    'error-searching-whasqs': 'Une erreur s\'est produite lors de la recherche de whasqs',
    'whasqs-more-whasqs-add-skill': 'Pour voir plus de whasqs, ajoutez des talents à votre profil.',

    // WhasqDetails
    'whasq-not-found': 'Le whasq que vous cherchez n\'a pas été trouvé.',

    // Whasq
    'whasq-days-ago': 'Il y a {days} jours',
    'whasq-read': 'lu',
    'whasq-read-count': 'Consulté {count} fois',
    'whasq-answers-count': 'Nombre de réponses',
    'whasq-whasqpoints-solution': 'whasqpoints pour la solution',
    'whasq-whasqpoints-usefull-answer': 'whasqpoints par réponse utile',
    'whasq-remove-action': 'Supprimer le whasq',
    'whasq-edit-action': 'Editer le whasq',
    'whasq-archive-action': 'Archiver le whasq',
    'whasq-report-action': 'Signaler le whasq',
    'whasq-archive-confirm': 'Etes-vous sûr de vouloir archiver ce whasq ?',
    'error-archiving-whasq': 'Une erreur s\'est produite lors de l\'archivage de votre whasq. Veuillez réessayer.',
    'whasq-delete-confirm': 'Etes-vous sûr de vouloir supprimer ce whasq ?',
    'error-deleting-whasq': 'Une erreur s\'est produite lors de la suppression de votre whasq. Veuillez réessayer.',
    'whasq-exchange': 'Echange',
    'whasq-notify-around': 'Notifier autour de moi',
    'whasq-urgent': 'Urgent',
    'whasq-channel': 'Langue du whasq',
    'whasq-no-media': 'Pas de média',
    'whasq-media-image': 'Photo whasq',
    'whasq-media-video': 'Vidéo whasq',
    'whasq-media-audio': 'Audio whasq',
    'whasq-media-file': 'Fichier whasq',

    // Profile
    'error-getting-user': 'Une erreur s\'est produite lors de la récupération du profil de l\'utilisateur',
    'user-information-title': 'Mes informations',
    'user-skills-title': 'Mes talents',
    'user-channels-title': 'Mes langues',
    'user-points': 'points',
    'user-answers': 'réponses',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'Le talent \'{skillName}\' a bien été ajouté.',
    'error-adding-skill': 'Une erreur s\'est produite lors de l\'ajout du talent \'{skillName}\'.',
    'user-skill-removed': 'Le talent \'{skillName}\' a bien été supprimé.',
    'error-removing-skill': 'Une erreur s\'est produite lors de la suppression du talent \'{skillName}\'.',
    'error-getting-available-skills': 'Une erreur s\'est produite lors de la récupération des talents disponibles.',
    'error-removing-channel': 'Une erreur s\'est produite lors de la suppression de la langue \'{channelName}\'.',
    'user-channel-removed': 'La langue \'{channelName}\' a bien été supprimée.',
    'error-adding-channel': 'Une erreur s\'est produite lors de l\'ajout de la langue \'{channelName}\'.',
    'user-channel-added': 'La langue \'{channelName}\' a bien été ajoutée.',
    'error-getting-available-channels': 'Une erreur s\'est produite lors de la récupération des langues disponibles.',
    'error-updating-gdpr': 'Une erreur s\'est produite lors de la mise à jour des données GDPR',
    'user-updated': 'L\'utilisateur a bien été modifié',
    'error-updating-user': 'Une erreur s\'est produite lors de la modification de l\'utilisateur',
    'user-delete-skill-confirm': 'Etes-vous sûr de vouloir supprimer le talent "{skillName}" ?',
    'user-delete-channel-confirm': 'Etes-vous sûr de vouloir supprimer la langue "{channelName}" ?',
    'user-delete-last-channel-impossible': 'Désolé, vous devez avoir au moins une langue dans votre profil.',
    'profile-email-not-available': 'L\'email n\'est pas renseigné ou n\'est pas disponible',
    'profile-phone-not-available': 'Le numéro de téléphone n\'est pas renseigné ou n\'est pas disponible',
    'profile-job-position-not-available': 'Le poste n\'est pas renseigné ou n\'est pas disponible',

    // AddUserSkillModal
    'add-user-skill-title': 'Ajout d\'un talent',
    'add-user-skill-subtitle': 'Vous avez sûrement d\'autres talents, vous pouvez les ajouter !',
    'add-user-skill-subtitle-first-login': 'Vous avez des talents, inscrivez les dans votre profil !',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Ajout d\'une langue',
    'add-user-channel-subtitle': 'Sélectionnez les langues que vous parlez',

    // MediaAttachment
    'media-attachment-download': 'Télécharger la pièce jointe',

    // Notifications
    'error-getting-notifications': 'Une erreur s\'est produite lors de la récupération des notifications.',
    'notifications-today': 'Aujourd\'hui',
    'notifications-past': 'Plus anciens',
    'notification-message-answer': '{fullname} a répondu à votre whasq',
    'notification-message-champion': '{fullname} vous a désigné champion de son whasq !',
    'notification-message-add-points': '+{whasqPoints} whasqpoints',
    'notification-message-usefull': '{fullname} a trouvé votre réponse utile !',
    'notification-message-match': '{fullname} a créé un whasq pouvant vous intéresser',
    'notification-message-recommendation': '{fullname} vous a recommandé le talent',
    'notification-message-suggest': '{fullname} vous a suggéré le talent',
    'notification-message-blacklist': '{fullname} a signalé votre whasq',
    'notification-message-admin-whasq': '{fullname} a posté un nouveau whasq',
    'notification-message-tag-user': 'Vous avez été recommandé par {fullname} pour le whasq',
    'notification-days-ago': 'Il y a {days} jours',

    // WhasqWrite
    'whasq-write-title': 'Titre *',
    'whasq-write-message': 'Message',
    'whasq-write-exchange': 'Echange',
    'whasq-write-title-placeholder': 'Mon titre',
    'whasq-write-message-placeholder': 'Mon message',
    'whasq-write-exchange-placeholder': 'Je propose en échange... un café',
    'whasq-write-notify-around': 'Notifier uniquement les whasqers autour de moi',
    'whasq-write-urgent': 'C\'est urgent',
    'whasq-write-import-file-title': 'Importer un fichier (photo, vidéo, audio ou Microsoft Office)',
    'whasq-write-import-drop-here': 'Déposez ici votre pièce jointe.',
    'whasq-write-error-importing-file': 'Une erreur s\'est produite lors de l\'import du fichier.',
    'whasq-write-import-file-button': 'Importer le fichier',
    'whasq-write-import-requirements': 'Votre fichier doit être de type image, vidéo, audio ou Microsoft Office.',
    'whasq-write-import-size-limit': 'La taille maximale du fichier est 1mo.',
    'whasq-write-linked-skills': 'Talents concernés',
    'whasq-write-linked-channel': 'Langue concernée',
    'whasq-write-change-attachment': 'Changer de fichier',
    "whasq-write-preview-whasq": 'Prévisualiser le whasq',
    'whasq-write-error-title-required': 'Le titre du whasq est obligatoire',
    'whasq-write-error-message-required': 'Le message du whasq est obligatoire',
    'whasq-write-error-skill-required': 'Au moins un talent doit être ajouté au whasq',
    'whasq-write-error-channel-required': 'Une langue est à définir pour le whasq',
    'error-getting-usersskills': 'Une erreur s\'est produite lors de la récupération des informations utilisateur.',
    'whasq-write-media-attachment-no-preview': 'Pas de prévisualisation possible',

    // PreviewWhasqModal
    'preview-whasq-title': 'Prévisualisation du whasq',

    // Answer
    'answer-button': 'Répondre',
    'answer-message-text': 'Message',
    'answer-import-file-title': 'Importer un fichier (photo, vidéo ou audio)',
    'answer-import-drop-here': 'Déposez ici votre pièce jointe.',
    'answer-error-importing-file': 'Une erreur s\'est produite lors de l\'import du fichier.',
    'answer-import-file-button': 'Importer le fichier',
    'answer-import-requirements': 'Votre fichier doit être de type image, vidéo, audio ou Microsoft Office.',
    'answer-import-size-limit': 'La taille maximale du fichier est 1mo.',
    'answer-change-attachment': 'Changer de fichier',
    'answer-delete-confirm-message': 'Etes-vous sûr de vouloir supprimer votre réponse ?',
    'answer-report-confirm-message': 'Etes-vous sûr de vouloir signaler cette réponse ?',
    'answer-champion-confirm-message': 'Etes-vous sûr de vouloir définir cette réponse comme la résolution de votre whasq ?',
    'answer-media-attachment-no-preview': 'Pas de prévisualisation possible',
    'answer-empty-content': 'Votre devez rédiger un message ou ajouter un média pour pouvoir envoyer votre réponse.',
    'answer-error-usefull-current-user': 'Vous ne pouvez pas aimer votre propre commentaire 😉',

    // WhasqPerso
    'whasq-perso-read-times': 'Lu {readUsersCount} fois',
    'whasq-perso-answers': 'réponses',
    'whasq-perso-answer': 'réponse',

    // Podium
    'podium-ranking-tab-title': 'CLASSEMENT',
    'podium-whasqpoints-tab-title': 'MES WHASQPOINTS',

    // TimeSavingsModal
    'time-savings-title': 'Aidez-nous à nous améliorer',
    'time-savings-message': 'Combien de temps cela vous a pris ?',
    'time-savings-half-day': '1/2 jour',
    'time-savings-day': '1 jour',
    'time-savings-two-days': '2 jours',
    'time-savings-three-days': '3 jours',

    // TermOfUse
    'term-of-use-title': 'Conditions générales d\'utilisation',
    'term-of-use-decline-btn': 'Décliner',
    'term-of-use-authorize-btn': 'Autoriser',
    'tof-decline-title': 'L\'acceptation des CGU est obligatoire',
    'tof-decline-message': 'Pour pouvoir utiliser l\'application Whasq, l\'acceptation des Conditions générales d\'utilisation est requise',

    // Gdpr
    'gdpr-title': 'Consentement',
    'gdpr-decline-btn': 'Décliner',
    'gdpr-authorize-btn': 'Autoriser',
    'gdpr-decline-title': 'Le consentement est obligatoire',
    'gdpr-decline-message': 'Pour pouvoir utiliser l\'application Whasq, vous devez donner votre consentement relatif à l\'utilisation de vos données.',

    // Register
    'register-title': 'Inscription',
    'register-fullname': 'Nom complet',
    'register-phone': 'Téléphone',
    'register-job-position': 'Poste',
    'register-channels': 'Langues parlées',
    'register-channel-required': 'Il faut ajouter au moins une langue pour finaliser votre inscription.',
    'register-add': 'Ajouter',
    'register-password': 'Mot de passe',
    'register-password-confirm': 'Confirmation de mot de passe',
    'register-password-format': 'Le mot de passe doit contenir au moins 8 lettres dont au moins 4 autres caractères (majuscule, miniscule, chiffre et caractère spécial)',
    'register-passwords-dont-match': 'Les mots de passe saisis ne correspondent pas.',
    'register-button': 'S\'inscrire',
    'register-field-required': 'Il est nécessaire de compléter le champs "{field}" pour finaliser votre inscription.',
    'register-password-see-password': 'Voir le mot de passe',
    'register-password-not-see-password': 'Cacher le mot de passe',

    // Ranking
    'ranking-answers-label': 'REPONSES',
    'ranking-solutions-label': 'SOLUTIONS',
    'ranking-see-profile': 'Voir le profil',
    'ranking-no-podium-for-selected-month': 'Il n\'y a pas de classement pour le mois sélectionné',
    'ranking-ytd-label': 'Depuis le début {year}',

    // Whasqpoint
    'whasqpoint-message-usefull': '{fullname} a trouvé votre réponse utile !',
    'whasqpoint-message-solution': '{fullname} vous a désigné champion de son whasq !',
    'whasqpoint-message-recommend': 'Vous avez été recommandé par {fullname}',
    'whasqpoint-days-ago': 'Il y a {days} jours',

    // Faq
    'faq-title': 'Foire aux questions',

    // DeleteAccountModal
    'delete-account-modal-title': 'Suppression de compte',
    'delete-account-modal-message': 'Attention, vos données personnelles seront détruites et la suppression du compte entraînera la perte d\'accès à l\'application. Veuillez saisir le mot DELETE dans la case ci-dessous.',
    'delete-account-modal-button': 'Supprimer',
    'delete-account-modal-cancel': 'Annuler',
    'delete-account-modal-bad-confirm-word': 'Le mot de confirmation saisi ne correspond pas à DELETE. Veuillez réessayer.',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Filtrer par...',
    'filter-whasqs-modal-recents': 'Récents',
    'filter-whasqs-modal-olds': 'Anciens',
    'filter-whasqs-modal-resolved': 'Résolus',
    'filter-whasqs-modal-not-resolved': 'Non résolus',

    // SuggestionsModal
    'suggestions-modal-title': 'Suggestions',
    'suggestions-modal-subtitle': 'Il est temps d\'enrichir votre profil',
    'suggestions-modal-other-skills': 'Autres talents pouvant vous intéresser :',
    'suggestions-modal-recommended-by': '{fullname} vous a recommendé pour ces talents :',

    // ZoomImageModal
    'zoom-image-modal-title': 'Zoom de l\'image',

    // UploadProfileImageModal
    'drop-file-here-or-click': 'Déposez votre fichier ici ou cliquez pour sélectionner le fichier à importer.',
    'profile-image-size-limit': 'Seuls les fichiers images d\'une taille inférieure à 1Mo sont acceptés.',
    'error-importing-profile-image': 'Une erreur s\'est produite lors de l\'import de l\'image. Veuillez réessayer.',
    'import-profile-image': 'Importer l\'image',
    'choose-profile-image': 'Choisissez votre image de profil',
    'profile-image-square-required': 'L\'image doit avoir un format carré.',
    
    // TagUserModal
    'tag-user-modal-title': 'Tagguer un utilisateur',
    'tag-user-modal-search': 'Recherchez un utilisateur',
    
    // TutoModal
    'tuto-modal-title': 'Conseils et astuces',
    'tuto-modal-homepage-ask-whasq': 'Posez votre question.',
    'tuto-modal-homepage-my-skills': 'Affichez les whasqs concernant vos talents et rédigés dans la langue ajoutée dans votre profil.',
    'tuto-modal-homepage-all-skills': 'Affichez les whasqs dans la langue ajoutée dans votre profil.',
    'tuto-modal-add-whasq-add-media': 'Ajoutez des médias pour illustrer votre question. Par exemple image, texte, vidéo ou juste son. Vous pouvez les utiliser aussi pour répondre à un whasq.',
    'tuto-modal-add-whasq-add-skill': 'Choisissez 3 talents qui pourront vous aider à résoudre votre whasq.',
    'tuto-modal-add-whasq-add-channel': 'Sélectionnez la langue dans laquelle votre whasq est rédigé. Le choix de la langue dépend des langues ajoutées dans votre profil : fr, es, ru, ...',
    'tuto-modal-profile-update': 'Ajoutez un peu de couleur sur l\'app en mettant à jour votre profil.',
    
    // MyWhasqs
    'my-whasqs-title': 'Mes whasqs',
}

export default messages