const messages = {
    'Email': 'Email',
    'Register': 'Register',
    'Password': 'Password',
    'Remember me': 'Remember me',
    'no-identification-info': 'If you do not have your ID, please contact your administrator',
    'login-next': 'Next',
    'login-unrecognized-email-title': 'Customer "{domain}" do not exist',
    'login-unrecognized-email-message': 'Please sent an email at jessie@whasq.com.',
    'login-code-sent-title': 'Confirmation of your account',
    'login-code-sent-message': 'An email with the link to verify your email address has been sent to you.',
    'login': 'Login',
    'login-email-placeholder': 'Email',
    'login-password-placeholder': 'Password',
    'login-bad-password': 'Password entered is not correct. Please try again.',
    'login-error': 'An error has occured while connecting. Please try again.',
  
    //  Global
    'search': 'Search',
    'previous': 'Previous',
    'next': 'Next',
    'add': 'Add',
    'error-occured': 'An error has occured.',
    'first-ranking-suffix': 'st',
    'second-ranking-suffix': 'nd',
    'third-ranking-suffix': 'rd',
    'default-ranking-suffix': 'th',

    // Header
    'header-profile': 'Profil',
    'header-logout': 'Log out',
    'french': 'French',
    'english': 'English',
    'header-ask-info': 'Request my data',
    'header-delete-account': 'Delete account',
    'header-admin': 'Admin',
    'header-change-password': 'Password change',
    'header-faq': 'FAQ',
    'header-term-of-use': 'Terms of use',
    'header-information-asked': 'Your data has been sent to your email adress.',
    'header-account-deleted': 'Your account has been successfully deleted.',
    'header-password-changed': 'An email has been sent to reset your password.',

    // Footer
    'footer-privacy-policy': 'Privacy policy',
    'footer-assistance': 'Need assistance ? Please contact jessie@whasq.com (From monday to friday, 9am to 12am and 2pm to 6pm)',
    'footer-follow-us': 'Suivez-nous :', /* TODO */

    // Home
    'home-title': 'Whasqs',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'For my skills',
    'whasqs-search-all-filter': 'All',
    'error-searching-whasqs': 'An error has occured during wasqs search.',
    'whasqs-more-whasqs-add-skill': 'To see more whasqs, please add skills to your profil.',

    // WhasqDetails
    'whasq-not-found': 'The wasq you search was not found.',

    // Whasq
    'whasq-days-ago': '{days} ago',
    'whasq-read': 'read',
    'whasq-answers-count': 'Answers count',
    'whasq-whasqpoints-solution': 'whasqpoints for the solution',
    'whasq-whasqpoints-usefull-answer': 'whasqpoints per useful answer',
    'whasq-remove-action': 'Delete the whasq',
    'whasq-edit-action': 'Edit the whasq',
    'whasq-archive-action': 'Archive the whasq',
    'whasq-report-action': 'Report the whasq',
    'whasq-archive-confirm': 'Are you sur you want to archive this whasq ?',
    'error-archiving-whasq': 'An error has occured during the whasqs archiving. Please try again',
    'whasq-delete-confirm': 'Are you sur you want to delete this whasq ?',
    'error-deleting-whasq': 'An error has occured during the whasqs deletion. Please try again.',
    'whasq-exchange': 'Exchange',
    'whasq-notify-around': 'Notify around me',
    'whasq-urgent': 'Its urgent',
    'whasq-channel': 'Written in',
    'whasq-no-media': 'Pas de média', /* TODO */
    'whasq-media-image': 'Photo whasq', /* TODO */
    'whasq-media-video': 'Vidéo whasq', /* TODO */
    'whasq-media-audio': 'Audio whasq', /* TODO */
    'whasq-media-file': 'Fichier whasq', /* TODO */

    // Profile
    'error-getting-user': 'An error has occured during the users profil recovery',
    'user-information-title': 'My personal data',
    'user-skills-title': 'My skills',
    'user-channels-title': 'My languages',
    'user-points': 'Score',
    'user-answers': 'Answers',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'The skill \'{skillName}\' has been correctly added.',
    'error-adding-skill': 'An error has occured during the skills \'{skillName}\' addition.',
    'user-skill-removed': 'The skill \'{skillName}\' has been correctly removed.',
    'error-removing-skill': 'An error has occured during the skills \'{skillName}\' removal.',
    'error-getting-available-skills': 'An error has occured during the available skills recovery.',
    'error-removing-channel': 'An error has occured during the removal of the language \'{channelName}\'.',
    'user-channel-removed': 'The language \'{channelName}\' has been correctly removed.',
    'error-adding-channel': 'An error has occured during the addition of the language \'{channelName}\'.',
    'user-channel-added': 'The language \'{channelName}\' has been successfully added.',
    'error-getting-available-channels': 'An error has occured during the available languages recovery.',
    'error-updating-gdpr': 'An error has occured during the updating if the GDPRs datas',
    'user-updated': 'The user has been successfully modified',
    'error-updating-user': 'An error has occured during the user\'s modification',
    'user-delete-skill-confirm': 'Warning ! Do you really want to cancel this skill: "{skillName}" ?',
    'user-delete-channel-confirm': 'Warning ! Do you really want to cancel this language in your profil: "{channelName}" ?',
    'user-delete-last-channel-impossible': 'Warning ! Sorry, you must have one language in your profil.',
    'profile-email-not-available': 'The email is not specified or available',
    'profile-phone-not-available': 'The phone number is not specified or available',
    'profile-job-position-not-available': 'The job position is not specified or available',

    // AddUserSkillModal
    'add-user-skill-title': 'You certaibly have other skills, just add them',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Select then language you speak',

    // MediaAttachment
    'media-attachment-download': 'Download the media attachement',

    // Notifications
    'error-getting-notifications': 'An error has occured during the notification\'s recovery.',
    'notifications-today': 'Notifications',
    'notifications-past': 'Older',
    'notification-message-answer': '{fullname} has replied to your whasq',
    'notification-message-champion': '{fullname} has retained youas the champion of his whasq !',
    'notification-message-add-points': '+{whasqPoints} whasqpoints',
    'notification-message-usefull': '{fullname} found your reply to be quite useful !',
    'notification-message-match': '{fullname} has created a Whasq, which may be of interest to you',
    'notification-message-recommendation': '{fullname} vous a recommandé le talent',
    'notification-message-suggest': '{fullname} has suggested to you the talent',
    'notification-message-blacklist': '{fullname} has reported your whasq',
    'notification-message-admin-whasq': '{fullname} has posted a new whasq',
    'notification-days-ago': '{days} days ago',

    // WhasqWrite
    'whasq-write-title': 'Title',
    'whasq-write-message': 'Message',
    'whasq-write-exchange': 'Exchange',
    'whasq-write-title-placeholder': 'My title',
    'whasq-write-message-placeholder': 'My message',
    'whasq-write-exchange-placeholder': 'I offer you... ex: a coffee',
    'whasq-write-notify-around': 'Notify around me',
    'whasq-write-urgent': 'It\s urgent',
    'whasq-write-import-file-title': 'Import a file (photo, video, audio ou Microsoft Office)',
    'whasq-write-import-drop-here': 'Drop here your file.',
    'whasq-write-error-importing-file': 'An error has occured during the file\'s import.',
    'whasq-write-import-file-button': 'Import the file',
    'whasq-write-import-requirements': 'Your file must be an image, vidéo, audio or Microsoft Office.',
    'whasq-write-import-size-limit': 'maximum size for the file: 1mo.',
    'whasq-write-linked-skills': 'Skills concerned',
    'whasq-write-linked-channel': 'Written in',
    'whasq-write-change-attachment': 'Change attachment\'s file',
    "whasq-write-preview-whasq": 'Preview',
    'whasq-write-error-title-required': 'Oups, you must add a title to your Whasq',
    'whasq-write-error-message-required': 'Oups, you must add a message to your Whasq',
    'whasq-write-error-skill-required': 'Oups, you need to attribute at least one skill to your Whasq',
    'whasq-write-error-channel-required': 'Oups, you need to attribute the language to your Whasq',
    'error-getting-usersskills': 'An error has occured during the user informations\'s recovery.',
    'whasq-write-media-attachment-no-preview': 'Oups, no preview possible',

    // PreviewWhasqModal
    'preview-whasq-title': 'whasq\'s preview',

    // Answer
    'answer-button': 'Reply',
    'answer-message-text': 'Message',
    'answer-import-file-title': 'which attachment do you want to add (photo, video or audio)',
    'answer-import-drop-here': 'Drop your file here.',
    'answer-error-importing-file': 'An error has occured during the file\'s import.',
    'answer-import-file-button': 'Import the file',
    'answer-import-requirements': 'Your file must be an image, vidéo, audio or Microsoft Office.',
    'answer-import-size-limit': 'maximum size for the file: 1mo.',
    'answer-change-attachment': 'Change your file',
    'answer-delete-confirm-message': 'Warning ! Do you really want to cancel your answer ?',
    'answer-report-confirm-message': 'Warning ! Do you really want to cancel this answer ?',
    'answer-champion-confirm-message': 'Warning ! Do you really want to cancel this answer as the resolution of your whasq ?',
    'answer-media-attachment-no-preview': 'Oups, no preview possible',

    // WhasqPerso
    'whasq-perso-read-times': 'Read {readUsersCount} times',
    'whasq-perso-answers': 'Answers',
    'whasq-perso-answer': 'Answer',

    // Podium
    'podium-ranking-tab-title': 'Podium',
    'podium-whasqpoints-tab-title': 'MY Whasqpoints',

    // TimeSavingsModal
    'time-savings-title': 'Help us to imrove !',
    'time-savings-message': 'How much time did it take you ?',
    'time-savings-half-day': '1/2 day',
    'time-savings-day': '1 day',
    'time-savings-two-days': '2 days',
    'time-savings-three-days': '3 days',

    // TermOfUse
    'term-of-use-title': 'Do you consent to follow the terms of use ?',
    'term-of-use-decline-btn': 'Refuse',
    'term-of-use-authorize-btn': 'Accept',
    'tof-decline-title': 'Terms of use are mandatory',
    'tof-decline-message': 'In order to use Whasq, you must accept the terms of use',

    // Gdpr
    'gdpr-title': 'GDPR\'s consent',
    'gdpr-decline-btn': 'Refuse',
    'gdpr-authorize-btn': 'Accept',
    'gdpr-decline-title': 'GDPR\'s consent is mandatory',
    'gdpr-decline-message': 'In order to use Whasq you must give your consent to the use of your data.',

    // Register
    'register-title': 'Inscription',
    'register-fullname': 'Complete name',
    'register-phone': 'Phone',
    'register-job-position': 'Job',
    'register-channels': 'Languages',
    'register-channel-required': 'Warning ! Sorry, you must have one language to complete your registration.',
    'register-add': 'Add',
    'register-password': 'Password', 
    'register-password-confirm': 'Confirm your password',
    'register-password-format': 'Password must contain minimum 8 letters and at least 4 others characters (capital, lowercase, number and special characters',
    'register-passwords-dont-match': 'Passwords do not match.',
    'register-button': 'Register',  
    'register-field-required': 'You must complet the field "{field}" finalize your inscription.',
    'register-password-see-password': 'See password',
    'register-password-not-see-password': 'Hide password',

    // Ranking
    'ranking-answers-label': 'ANSWERS',
    'ranking-solutions-label': 'SOLUTIONS',
    'ranking-see-profile': 'See profile',
    'ranking-no-podium-for-selected-month': 'No data was found for the selected date',

    // Whasqpoint
    'whasqpoint-message-usefull': '{fullname} has found your reply to be quite useful !', 
    'whasqpoint-message-solution': '{fullname} has retained you as the champion of his Whasq !', 
    'whasqpoint-message-recommend': 'You have been recommended by {fullname}', 
    'whasqpoint-days-ago': '{days} ago',

    // Faq
    'faq-title': 'FAQ',

    // DeleteAccountModal
    'delete-account-modal-title': 'Delete account', 
    'delete-account-modal-message': 'Warning ! Your personnal data will be destroy and the removal of your account will make you not being able to use the application. Please write the word DELETE in the case below.',
    'delete-account-modal-button': 'Remove', 
    'delete-account-modal-cancel': 'Cancel',
    'delete-account-modal-bad-confirm-word': 'the confirmation word do not match with DELETE. Please try again. ',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Filter by...',
    'filter-whasqs-modal-recents': 'Latest',
    'filter-whasqs-modal-olds': 'Formers',
    'filter-whasqs-modal-resolved': 'Resolved', 
    'filter-whasqs-modal-not-resolved': 'Unsolved',

    // SuggestionsModal
    'suggestions-modal-title': 'Suggestions',
    'suggestions-modal-subtitle': 'It\s time to enrich your profil', 
    'suggestions-modal-other-skills': 'Others skills that may interest you :', 
    'suggestions-modal-recommended-by': '{fullname} has recommanded you for thoses skills  :', 

    // ZoomImageModal
    'zoom-image-modal-title': 'Zoom de l\'image', /* TODO */

    // UploadProfileImageModal
    'drop-file-here-or-click': 'Déposez votre fichier ici ou cliquez pour sélectionner le fichier à importer.', /* TODO */
    'profile-image-size-limit': 'Seuls les fichiers images d\'une taille inférieure à 1Mo sont acceptés.', /* TODO */
    'error-importing-profile-image': 'Une erreur s\'est produite lors de l\'import de l\'image. Veuillez réessayer.', /* TODO */
    'import-profile-image': 'Importer l\'image', /* TODO */
    'choose-profile-image': 'Choisissez votre image de profil', /* TODO */
    'profile-image-square-required': 'L\'image doit avoir un format carré.', /* TODO */
}

export default messages