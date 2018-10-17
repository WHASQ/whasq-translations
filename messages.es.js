const messages = {
    'Email': 'E-mail',
    'Register': 'Inscripción',
    'Password': 'Contraseña',
    'Remember me': 'Recordarme',
    'no-identification-info': 'Si no tienes tus ID  para inciar la sesión, por favor contacta el administrador.',
    'login-next': 'Siguiente',
    'login-unrecognized-email-title': 'El cliente "{domain}" no existe',
    'login-unrecognized-email-message': 'Por favor envia  un e-mail a jessie@whasq.com.',
    'login-code-sent-title': 'Confirmación de la cuenta ',
    'login-code-sent-message': 'Te hemos enviado un e-mail con un enlace para que puedas confirmar tu e-mail.',
    'login': 'Conectarse',
    'login-email-placeholder': 'Email',
    'login-password-placeholder': 'Contraseña',
    'login-bad-password': 'La contraseña es incorrecta. Por favor intentalo de nuevo.',
    'login-error': 'Se produjo un error al momento de conectarse. Por favor intentalo de nuevo.',
    'login-password-see-password': 'Voir le mot de passe', /* TODO */
    'login-password-not-see-password': 'Cacher le mot de passe', /* TODO */
  
    //  Global
    'search': 'Búsqueda',
    'previous': 'Anterior',
    'next': 'Siguiente',
    'add': 'Agregar',
    'error-occured': 'Se produjo un error.',
    'first-ranking-suffix': 'ero',
    'second-ranking-suffix': 'do',
    'third-ranking-suffix': 'ero',
    'default-ranking-suffix': 'ème', /* TODO */
    'back-to-homepage': 'Retour à l\'accueil', /* TODO */
    
    // Header
    'header-profile': 'Perfil',
    'header-logout': 'Desconectarse',
    'french': 'Francés',
    'english': 'Ingles',
    'header-ask-info': 'Pedir sus datos',
    'header-delete-account': 'Borrar mi cuenta ',
    'header-admin': 'Admin',
    'header-change-password': 'Cambiar la contraseña',
    'header-faq': 'Preguntas frecuentes',
    'header-term-of-use': 'CGU',
    'header-information-asked': 'Tus datos seran enviados a tu correo electrónico.',
    'header-account-deleted': 'Tu cuenta ha sido borrada.',
    'header-password-changed': 'Te hemos enviado un e-mail para que puedas reiniciar la contraseña.',

    // Footer
    'footer-privacy-policy': 'Política de confidencialidad',
    'footer-assistance': '¿Necesitas ayuda? Contacta jessie@whasq.com (De lunes a viernes de 9:00am à 12:00pm y de las 2:00 a 6:00 pm)',
    'footer-follow-us': 'Suivez-nous :', /* TODO */

    // Home
    'home-title': 'Titre de la page d\'accueil',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'De acuerdo a mis talentos',
    'whasqs-search-all-filter': 'Todo',
    'error-searching-whasqs': 'Un error se produjo al buscar los whasqs',
    'whasqs-more-whasqs-add-skill': 'Agrega más talentos a tu perfil para ver mas whasqs.',

    // WhasqDetails
    'whasq-not-found': 'No hemos encontrado el whasq que estabas buscando.',

    // Whasq
    'whasq-days-ago': 'Hace unos {days} días',
    'whasq-read': 'leído',
    'whasq-read-count': 'Consulté {count} fois', /* TODO */
    'whasq-answers-count': 'Número',
    'whasq-whasqpoints-solution': 'whasqpuntos si encuentras la solución',
    'whasq-whasqpoints-usefull-answer': 'whasqpoints si tu respuesta es útil',
    'whasq-remove-action': 'Borrar el whasq',
    'whasq-edit-action': 'Editar el whasq',
    'whasq-archive-action': 'Archivar el whasq',
    'whasq-report-action': 'Señalar el whasq',
    'whasq-archive-confirm': '¿Estás seguro que quieres señalar este whasq? ',
    'error-archiving-whasq': 'Un error se produjo al archivar el whasq. Inténtalo de nuevo.',
    'whasq-delete-confirm': '¿Estás seguro que quieres borrar el whasq?',
    'error-deleting-whasq': 'Un error se produjo al borrar el whasq. Inténtalo de nuevo.',
    'whasq-exchange': 'a cambio ',
    'whasq-notify-around': 'Notificar a mi alrededor',
    'whasq-urgent': 'Urgente',
    'whasq-channel': 'Idioma del whasq',
    'whasq-no-media': 'Pas de média', /* TODO */
    'whasq-media-image': 'Photo whasq', /* TODO */
    'whasq-media-video': 'Vidéo whasq', /* TODO */
    'whasq-media-audio': 'Audio whasq', /* TODO */
    'whasq-media-file': 'Fichier whasq', /* TODO */

    // Profile
    'error-getting-user': 'Un error se produjo al recuperar el profil del usuario',
    'user-information-title': 'Mi información',
    'user-skills-title': 'Mis talentos',
    'user-channels-title': 'Mis idiomas',
    'user-points': 'puntos',
    'user-answers': 'respuestas',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'El talento \'{skillName}\' ha sido agregado.',
    'error-adding-skill': 'Un error se produjo al agregar el talento\'{skillName}\'.',
    'user-skill-removed': 'El talento \'{skillName}\' ha sido borrado.',
    'error-removing-skill': 'Un error se produjo al borrar el talento\'{skillName}\'.',
    'error-getting-available-skills': 'Un error se produjo al recuperar los talentos disponibles.',
    'error-removing-channel': 'Un error se produjo al borrar el idioma \'{channelName}\'.',
    'user-channel-removed': 'El idioma \'{channelName}\' ha sido borrado.',
    'error-adding-channel': 'Un error se produjo al agregar el idioma \'{channelName}\'.',
    'user-channel-added': 'El idioma \'{channelName}\'ha sido agregado.',
    'error-getting-available-channels': 'Un error se produjo al recuperar los idiomas disponibles.',
    'error-updating-gdpr': 'Un error se produjo al actualizar los datos GDPR',
    'user-updated': 'El usuario ha sido modificado',
    'error-updating-user': 'Un error se produjo al editar el usuario',
    'user-delete-skill-confirm': '¿Estás seguro que quieres borrar el talento "{skillName}" ?',
    'user-delete-channel-confirm': '¿Estás seguro que quieres borrar el idioma  "{channelName}" ?',
    'user-delete-last-channel-impossible': 'Lo siento,pero debes tener al menos un idioma un perfil.',
    'profile-email-not-available': 'El e-mail no esta indicado o disponible',
    'profile-phone-not-available': 'El número de telefono no esta indicado o disponible',
    'profile-job-position-not-available': 'El puesto de trabajo no esta indicado o disponible',

    // AddUserSkillModal
    'add-user-skill-title': 'Agregar un talento',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Agregar un idioma',

    // MediaAttachment
    'media-attachment-download': 'Descargar el archivo adjunto',

    // Notifications
    'error-getting-notifications': 'Un error se produjo al recuperar las notificaciones.',
    'notifications-today': 'Hoy',
    'notifications-past': 'Antiguas',
    'notification-message-answer': '{fullname} ha respondido a tu whasq',
    'notification-message-champion': '¡{fullname} te ha indicado campeón de su whasq !',
    'notification-message-add-points': '+{whasqPoints} whasqpuntos',
    'notification-message-usefull': '¡{fullname}  !',
    'notification-message-match': '{fullname} ha creado un whasq que podría interesarte',
    'notification-message-recommendation': '{fullname} te ha recomendado un talento',
    'notification-message-suggest': '{fullname} te ha recomendado el talento',
    'notification-message-blacklist': '{fullname} ha señalado el whasq',
    'notification-message-admin-whasq': '{fullname} ha publicado un nuevo Whasq',
    'notification-days-ago': 'Hace {days} jours',

    // WhasqWrite
    'whasq-write-title': 'Titulo *',
    'whasq-write-message': 'Mensaje',
    'whasq-write-exchange': 'a cambio',
    'whasq-write-title-placeholder': 'Mi título',
    'whasq-write-message-placeholder': 'Mi mensaje',
    'whasq-write-exchange-placeholder': 'A cambio... un cafe',
    'whasq-write-notify-around': 'Solo notificar los whasqers cerca de mí',
    'whasq-write-urgent': 'Es urgente',
    'whasq-write-import-file-title': 'Importar un archivo (foto, video, audio o Microsoft Office)',
    'whasq-write-import-drop-here': 'Envía aquí tu archivo .',
    'whasq-write-error-importing-file': 'Un error se produjo al importar el archivo.',
    'whasq-write-import-file-button': 'Importar el archivo',
    'whasq-write-import-requirements': 'Tu archivo debe ser doit una image, un video, audio o Microsoft Office.',
    'whasq-write-import-size-limit': 'La talla maxima del archivo es 1mo.',
    'whasq-write-linked-skills': 'Talentos indicados',
    'whasq-write-linked-channel': 'Idioma indicado',
    'whasq-write-change-attachment': 'Cambiar el archivo',
    "whasq-write-preview-whasq": 'Vista previa',
    'whasq-write-error-title-required': 'El titulo del whasq es obligatorio',
    'whasq-write-error-message-required': 'El mensaje del whasq es obligatorio',
    'whasq-write-error-skill-required': 'Debes de indicar al menos un talento en el whasq',
    'whasq-write-error-channel-required': 'Debes definir un idioma en el whasq.',
    'error-getting-usersskills': 'Un error se produjo al momento de recuperar la informacion del usuario.',
    'whasq-write-media-attachment-no-preview': 'Vista previa no disponible',

    // PreviewWhasqModal
    'preview-whasq-title': 'Vista previa del whasq',

    // Answer
    'answer-button': 'Responder',
    'answer-message-text': 'Mensaje',
    'answer-import-file-title': 'Importar un archivo (foto, video o audio)',
    'answer-import-drop-here': 'Envía aquí el archivo adjunto.',
    'answer-error-importing-file': 'Un error se produjo al importar el archivo.',
    'answer-import-file-button': 'Importar el archivo',
    'answer-import-requirements': 'Tu archivo debe ser una image, video, audio o Microsoft Office.',
    'answer-import-size-limit': 'La tailla maxima del archivo es 1mo.',
    'answer-change-attachment': 'Cambiar el archivo',
    'answer-delete-confirm-message': '¿ Estás seguro que quieres borrar tu respuesta ?',
    'answer-report-confirm-message': '¿ Estás seguro que quieres senalar esta respuesta ?',
    'answer-champion-confirm-message': '¿ Estás seguro que quieres definir elegir esta respuesta como la solución de tu whasq ?',
    'answer-media-attachment-no-preview': 'Vista previa no disponible',
    'answer-empty-content': 'Votre devez rédiger un message ou ajouter un média pour pouvoir envoyer votre réponse.', /* TODO */

    // WhasqPerso
    'whasq-perso-read-times': 'Leído {readUsersCount} veces',
    'whasq-perso-answers': 'respuestas',
    'whasq-perso-answer': 'respuesta',

    // Podium
    'podium-ranking-tab-title': 'Clasificación',
    'podium-whasqpoints-tab-title': 'MIS WHASQPUNTOS',

    // TimeSavingsModal
    'time-savings-title': 'Ayudanos a mejorar',
    'time-savings-message': '¿ Cuanto tiempo te tomo ?',
    'time-savings-half-day': '1/2 día',
    'time-savings-day': '1 día',
    'time-savings-two-days': '2 días',
    'time-savings-three-days': '3 días',

    // TermOfUse
    'term-of-use-title': 'Conditions generales de uso',
    'term-of-use-decline-btn': 'Rechazar',
    'term-of-use-authorize-btn': 'Autorizar',
    'tof-decline-title': 'Es obligatorio aceptar las CGU',
    'tof-decline-message': 'Para poder utilisar la aplicación Whasq, es necesario aceptar las CGU',

    // Gdpr
    'gdpr-title': 'Autorización',
    'gdpr-decline-btn': 'Rechazar',
    'gdpr-authorize-btn': 'Autorizar',
    'gdpr-decline-title': 'Es necesaria la autorización',
    'gdpr-decline-message': 'Para poder utilizar la aplicación Whasq, es necesaria la autorización acerca de la uso de los datos.',

    // Register
    'register-title': 'Inscripción',
    'register-fullname': 'Nombre completo',
    'register-phone': 'Telefono',
    'register-job-position': 'Puesto ',
    'register-channels': 'Langues parlées', /* TODO */
    'register-channel-required': 'Es necesario agregar al menos un idioma para finalisar la inscripcion.',
    'register-add': 'Agregar',
    'register-password': 'Contrasena',
    'register-password-confirm': 'Confirmar la contrasena',
    'register-password-format': 'La contraseñ debe tener al menos 8 letras, 4 autres caracteres (mayuscula, miniscula, numero et caracter especial)',
    'register-passwords-dont-match': 'La contraseña no es corresponde.',
    'register-button': 'Inscribirse',
    'register-field-required': 'Es necesario completar la casilla "{field}" para finalisar la inscripción .',
    'register-password-see-password': 'Ver la contrasena',
    'register-password-not-see-password': 'Esconder la contrasena',

    // Ranking
    'ranking-answers-label': 'RESPUESTAS',
    'ranking-solutions-label': 'SOLUCIONES',
    'ranking-see-profile': 'Ver el perfil',
    'ranking-no-podium-for-selected-month': 'El podio aún no se ha definido este mes',

    // Whasqpoint
    'whasqpoint-message-usefull': '¡{fullname} ha encontrado tu respuesta útil!',
    'whasqpoint-message-solution': '!{fullname} te ha nombrado campeón de su whasq !',
    'whasqpoint-message-recommend': 'Has sido recomendado por  {fullname}',
    'whasqpoint-days-ago': 'Hace {days} días',

    // Faq
    'faq-title': 'Preguntas frecuentes',

    // DeleteAccountModal
    'delete-account-modal-title': 'Borrar la cuenta',
    'delete-account-modal-message': 'Ten en cuenta que tus datos personales serán borrados y al eliminar la cuenta no podras acceder a la aplicación, por favor ingresa la palabra DELETE en el cuadro siguiente.',
    'delete-account-modal-button': 'Borrar',
    'delete-account-modal-cancel': 'Cancelar',
    'delete-account-modal-bad-confirm-word': 'La palabra de confirmacion no es DELETE. Intentalo de nuevo.',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Filtrar po...',
    'filter-whasqs-modal-recents': 'Recientes',
    'filter-whasqs-modal-olds': 'Viejos',
    'filter-whasqs-modal-resolved': 'Resueltos',
    'filter-whasqs-modal-not-resolved': 'No resueltos',

    // SuggestionsModal
    'suggestions-modal-title': 'Recomendaciones',
    'suggestions-modal-subtitle': 'Es hora de mejorar tu perfil',
    'suggestions-modal-other-skills': 'Otros talentos que podrian interesarte :',
    'suggestions-modal-recommended-by': '{fullname} te ha recomendado los siguientes talentos :',

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