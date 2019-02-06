const messages = {

    // Login
    'Email': 'E-mail',
    'Login': 'Conectarse',
    'Password': 'Contraseña',
    'Provided by your administrator': 'Proporcionado por el administrador',
    'Remember me': 'Recordarme',
    'no-identification-info': 'Si no tienes tu nombre de usuario, contacta el administrador',
    'bad-credentials': 'La informacion no es correcta. Por favor inténtalo nuevamente.', 
    'not-enough-rights': 'No tienes los derechos suficientes para connectarte.', 
    'user-not-found': 'No se ha encontrado al usuario.',

    // General
    'more-info': ' más información',
    'from': 'Desde',
    'to': 'Al',
    'real-time': 'en tiempo real',
    'update': 'Modificar',
    'delete': 'Borrar',
    'previous': 'Anterior',
    'next': 'Siguiente',
    'send': 'Enviar',
    'export-all': 'Exportar todo',
    'yes': 'Si',
    'no': 'No',
    'open': 'Abierto',
    'fullname': 'Nombre y apellido',
    'job-position': 'Puesto de trabajo',
    'assistance':'¿Necesitas ayuda? Escríbenos a jessie@whasq.com (de lunes a viernes de 9 a.m a 12pm y de 2 p.m a 6 p.m.)',
    'download-attachment': 'Descargar el archivo adjunto',
    'day': 'jour', /* TODO */
    'days': 'jours', /* TODO */
    'waiting': 'En attente...', /* TODO */

    // Menu
    'activity': 'Actividad',
    'actives-users': 'Usuarios activos ',
    'registered-users': 'Usuarios registrados',
    'whasqs-answers': 'Whasqs & Respuestas',
    'skills': 'Talentos',
    'time-savings': 'Ganar tiempo',
    'whasqers': 'Whasqers',
    'podium': 'Podio',
    'search': 'Búsqueda',
    'manage': 'Gestión',
    'skills-categories': 'Talentos & Categorías',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs señalados',
    'answers-reports': 'Respuestas señaladas',
    'users': 'Usuarios',
    'admin': 'Administrador',
    'targets': 'Objetivos & Gamificación',
    'notifications': 'Notificaciones', 
    'learning': 'Formation', /* TODO */
    'training-centers': 'Centres de formation', /* TODO */
    'trainings': 'Formations', /* TODO */
  
    // Activity
    'eve-computed-kpi': 'indicador calculado el J-1',
    'no-data-for-selected-period': 'No hay datos disponibles para el período seleccionado',
    'no-data-available': 'No hay datos disponibles',

    // ActivityActiveUsers
    'actives-title': 'Usuarios Activos',
    'actives-kpi-title': 'Activos',
    'actives-kpi-help-title': 'Activos',
    'actives-kpi-help-message': 'Este indicador representa el numero de usuarios  que se conectaron al menos una vez en el mes "{month}".',
    'actives-dda-kpi-title': 'Activos DCA',
    'actives-dda-kpi-help-title': 'Activos "DCA" (Desde el Comienzo de la Actividad)',
    'actives-dda-kpi-help-message': 'Este indicador representa el numero de usuarios  que han estado conectados desde el comienzo de la actividad.',
    'actives-target-kpi-title': 'Activos - Objetivos',
    'actives-target-kpi-help-title': 'Activos - Objetivos',
    'actives-target-kpi-help-message': 'Este indicador representa la proporción entre el número de usuarios que iniciaron sesión al menos una vez en el mes "{month}" y el objetivo definido. ',
   'actives-evolution-title': 'Evolución de los activos',
    'actives-evolution-help-title': 'Evolución de los activos',
    'actives-evolution-help-message': 'Este indicador representa el numero de usuarios activos.',
    'actives-dda-evolution-title': 'Evolución de los activos DCA',
    'actives-dda-evolution-help-title': 'Evolución de los activos DCA',
    'actives-dda-evolution-help-message': 'Este indicador representa el numero de usuarios activos acumulados desde la creación de la store.',
    'actives-notregistered-evolution-title': 'Evolución de los activos - registro',
    'actives-notregistered-evolution-help-title': 'Evolución de los activos - registro',
    'actives-notregistered-evolution-help-message':'Este indicador representa el número de usuarios activos al restar los usuarios registrados.',
    
    // ActivityRegisteredUsers
    'registered-title': 'Usuarios registrados - {month}',
    'registered-kpi-title': 'Registrados',
    'registered-kpi-help-title': 'Registrados',
    'registered-kpi-help-message': 'Este indicador representa el numero de usuarios que se registraron en el mes "{month}".',
    'registered-inactives-kpi-title': 'Porcentaje de registrados no activos',
    'registered-inactives-kpi-help-title': 'Porcentaje de registrados no activos',
    'registered-inactives-kpi-help-message': 'Este indicador representa la relación entre el número de usuarios que se registraron en el mes "{mes}" sin iniciar sesión y el numero total de usuarios registrados en el mes.',
    'registered-inactives-evolution-title': 'Evolución del numero de registrados',
    'registered-inactives-evolution-help-title': 'Evolución del numero de registrados ',
    'registered-inactives-evolution-help-message': 'Este indicador representa el numero de usuarios registrados.',
  
    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs & Respuestas - {month}',
    'whasqs-answers-kpi-title': 'Numero de Whasqs y respuestas',
    'whasqs-answers-kpi-help-title': 'Número de Whasqs y repuestas',
    'whasqs-answers-kpi-help-message': 'Este indicador representa el número de whasqs publicados más el numero de respuestas publicadas en el mes"{month}".',
    'whasqs-by-whasqer-kpi-title': 'Numero de Whasqs / Autor del whasq',
    'whasqs-by-whasqer-kpi-help-title': 'Numero de Whasqs / Autor del whasq',
    'whasqs-by-whasqer-kpi-help-message': 'Este indicador representa el numero de whasqs publicados en el mes "{month}" creados por el autor del whasq.',
    'answers-kpi-title': 'Numero de respuestas',
    'answers-kpi-help-title': 'Numero de respuestas',
    'answers-kpi-help-message': 'Este indicador representa el numero de respuestas publicadas en el mes"{month}".',
    'answers-by-creator-kpi-title': 'Número de respuestas / Autor de las respuestas',
    'answers-by-creator-kpi-help-title': 'Numero de respuestas / Autor de las respuestas',
    'answers-by-creator-kpi-help-message': 'Este indicador representa el numero de respuestas durante el mes de "{month}" por el autor de las respuestas.',
    'whasqs-with-contribution-kpi-title': 'Porcentaje de Whasqs con interacciones  ',
    'whasqs-with-contribution-kpi-help-title': 'Porcentaje de Whasqs con interacciones',
    'whasqs-with-contribution-kpi-help-message': 'Este indicador representa el porcentaje de whasqs que recibieron respuestas en el mes "{month}". ',
    'whasqs-with-contribution-dda-kpi-title': 'Porcentaje de Whasqs con interacciones DCA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Porcentaje de Whasqs con interacciones DCA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Este indicador representa el porcentaje de whasqs que han recibido respuestas.',
    'whasqs-resolved-part-kpi-title': 'Porcentaje de Whasqs resueltos',
    'whasqs-resolved-part-kpi-help-title': 'Porcentaje de Whasqs resueltos',
    'whasqs-resolved-part-kpi-help-message': 'Este indicador representa el porcentaje de whasq que han sido resueltos en el mes"{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Porcentaje de Whasqs resueltos DCA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Porcentaje de Whasqs resueltos DCA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Este indicador representa el porcentaje de whasq  resueltos.',
    'whasqs-evolution-title': 'Evolución del número de whasqs',
    'whasqs-evolution-help-title': 'Evolución del número de whasqs',
    'whasqs-evolution-help-message': 'Este indicador representa el número acumulado de whasqs.',
    'answers-evolution-title': ' Evolución del número de whasqs',
    'answers-evolution-help-title': 'Evolución del número de respuestas',
    'answers-evolution-help-message': 'Este indicador representa el número acumulado de respuestas.',
  
    // ActivitySkills
    'skills-title': 'Talentos',
    'skills-dda-kpi-title': 'Cantidad total de talentos identificados DCA',
    'skills-dda-kpi-help-title': 'Cantidad total de talentos identificados DCA',
    'skills-dda-kpi-help-message': 'Este indicador representa el numero de talentos que han sido identificados por los whasqers desde el comienzo de la actividad.',
    'skills-part-kpi-title': ' Porcentaje de talentos únicos identificados',
    'skills-part-kpi-help-title': 'Porcentaje de talentos únicos identificados',
    'skills-part-kpi-help-message': 'Este indicador representa la relación entre el número de talentos únicos que han sido identificados por los whasqers desde el comienzo de la actividad y el número de talentos que existen.',
    'skills-evolution-title': 'Evolución del número de talentos identificados en los whasqs',
    'skills-evolution-help-title': 'Evolución del número de talentos identificados en los whasqs',
    'skills-evolution-help-message': 'Este indicador representa el numero de talentos identificados en los whasqs.',
    'most-used-cats-whasqs-kpi-title': 'Top 5 de las categorías más utilizadas en los whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 de las categorías más utilizadas en los whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'En esta tabla encontraras las 5 categorías que contienen los talentos más utilizados en los whasqs.', 
    'most-used-cats-whasqs-kpi-help-message-2': 'Los puntos de colores representan el número de talentos usados en los whasqs en cada categoría correspondiente.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 de los talentos más utilizados en los whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 de los talentos más utilizados en los whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'En esta tabla encontraras los 5 talentos más utilizados en los whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'Los puntos de colores representan el número de veces que cada talento ha sido utilizado en un whasq.',
    'most-used-whasqers-kpi-title': 'Top 5 de los  talentos  más identificados por los whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 de los talentos más identificados por los whasqers',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers dans leur profil.', /* TODO */
    'most-used-whasqers-kpi-help-message-2': 'Los puntos de colores representan el número de veces que cada talento ha sido identificado por los whasqers.',
    'less-used-whasqers-kpi-title': 'Top 5 de los talentos menos identificados por los whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 de los talentos menos identificados por los whasqers',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés par les whasqers dans leur profil.', /* TODO */
    'less-used-whasqers-kpi-help-message-2': 'Los puntos de colores representan  el número de veces que cada talento ha sido identificado por los whasqers.',
  
    // TimeSavings
    'time-savings-title': 'Ganar tiempo - {month}',
    'minutes-earned-kpi-title': 'Minutos ganados en el mes',
    'minutes-earned-kpi-help-title': 'Minutos ganados en el mes',
    'minutes-earned-kpi-help-message': 'Este indicador representa el número de minutos ganados en el mes"{month}".',
    'minutes-earned-dda-kpi-title': 'Minutos ganados DCA',
    'minutes-earned-dda-kpi-help-title': 'Minutos ganados  DCA',
    'minutes-earned-dda-kpi-help-message': 'Este indicador representa el número de minutos ganados desde el comienzo de la actividad.',
    'minutes-earned-month-kpi-title': 'Minutos ganados en el mes de ', 
  
    // Podium
    'podium-title': 'Podio',
    'whasqers-of-month': 'Whasqers del mes de',
    'no-podium-for-selected-month': 'No hay podio disponible para el mes seleccionado',
  
    // Card-user
    'answers-label': 'RESPUESTAS',
    'solutions-label': 'SOLUCIONES',
    'see-profile': 'Ver el perfil',
  
    // Search
    'search-title': 'Buscar',
    'search-by-name-placeholder': 'Buscar por el apellido...',
    'no-result-select-criteria': 'No hay resultados. Por favor, introduzca al menos un criterio.',
  
    // CategoriesSearchBlock
    'dynamic-search-title': 'Búsqueda dinámica',
  
    // SkillsCategories
    'skills-categories-title': 'Talentos & Categorías',
    'update-cat-for-lang': 'Modificación de la categoría para el idioma  {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modificación del talento para la categoría "{cat}" y el idioma FR',
    'add-cat-for-lang-fr': 'Agregar categoría para el idioma FR',
    'add-skill-for-cat-and-lang-fr': 'Agregar talento para la categoría "{cat}" y el idioma FR',
    'delete-cat-confirm-message': 'Estas seguro de quieres borrar esta categoria?',
    'delete-skill-confirm-message': 'Estas seguro que quieres borrar este talento?',
    'choose-lang': 'Elegir el idioma',
    'add-lang': 'Agregar un idioma',
    'add-cat': 'Agregar una categoría',
  
    // InfoMessage
    'cat-deleted': 'La categoría "{cat}" ha sido borrada.',
    'error-deleting-cat': 'Se produjo un problema al borrar la categoría "{cat}".',
    'skill-deleted': 'El talento "{skill}" ha sido borrado.',
    'error-deleting-skill': 'Se produjo un problema al borrar el talento "{skill}".',
  
    // SkillCategoriesModal
    'already-existing-cat': 'Ya existe(n) la(s) categoría(s)',
    'already-existing-skill': 'Ya existen los talentos',
    'no-existing-cat': 'No existe esta categoría ',
    'no-existing-skill': 'Este talento no existe ',
  
    // CreateLanguageModal
    'add-new-lang': ' Agregar un nuevo idioma',
    'already-implemented-langs': 'Idiomas ya implantados',
  
    // WhasqsList 
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': '¿Estás seguro que quieres bloquear este whasq ?',
    'unblock-whasq-confirm-message': '¿Estás seguro que quieres desbloquear este whasq?',
    'ban-user-confirm-message': '¿Estás seguro que quieres prohibir este usuario ?',
    'unban-user-confirm-message': '¿Estás seguro que quieres levantar la prohibición a este usuario ?',
    'remove-whasq-confirm-message': '¿Estás seguro que quieres borrar este whasq ?',
    'add-whasq': 'Agregar un Whasq',
    'whasqs-list': 'Lista de Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creación',
    'whasqs-column-update': 'Actualizar',
    'whasqs-column-title': 'Titulo',
    'whasqs-column-status': 'Estado',
    'whasqs-column-urgent': 'Urgente',
    'whasqs-column-answers': 'Respuestas',
    'whasqs-column-read': 'Leídos',
    'whasqs-column-creator': 'Autor',
    'whasqs-column-skills': 'Talentos',
    'whasqs-column-actions': 'Acciones',
    'whasq-resolved-by': 'Resuelto por ',
    'whasq-resolved-at': 'el',
    'whasqs-action-save-updates': 'Guardar las modificaciones',
    'whasqs-action-edit-whasq': 'Modificar el whasq',
    'whasqs-action-unblock-whasq': 'Desbloquear el whasq',
    'whasqs-action-block-whasq': 'Bloquear el whasq',
    'whasqs-action-see-whasq-channel': 'Ver la conversación del whasq',
    'whasqs-action-unban-user': 'Retirar la prohibición al usuario',
    'whasqs-action-ban-user': 'Prohibir el usuario',
    'whasqs-action-remove-whasq': 'Borrar el whasq',
    'whasqs-notify-around': 'Notificar a mi alrededor', 
    'whasqs-language': 'Idioma', 
  
    // WhasqChannelModal
    'whasq-channel-title': 'Conversación del whasq "{whasq-title}"',
    'usefull-answer': 'likes',
    'champion-answer': 'campeón(a)',
    'whasq-channel-edit-whasq-title': 'Titulo',
    'whasq-channel-edit-whasq-message': 'Mensaje',
    'whasq-channel-edit-answer-message': 'Mensaje', 
    'whasq-channel-block-answer-confirm': '¿Estás seguro que quieres bloquear esta respuesta?', 
    'whasq-channel-unblock-answer-confirm': '¿Estás seguro que quieres desbloquear esta respuesta?',
    'whasq-channel-delete-answer-confirm': '¿Estás seguro que quieres borrar esta respuesta?',
  
    // AddWhasqModal 
    'add-whasq-title': 'Agregar un nuevo whasq',
    'add-whasq-item-title': 'Titulo',
    'add-whasq-item-message': 'Mensaje',
    'add-whasq-item-exchange': 'Cambio',
    'add-whasq-item-optionnal': 'Opción',
    'add-whasq-item-channel': 'Canal',
    'add-whasq-item-first-skill': 'Primer talento',
    'add-whasq-item-second-skill': 'Segundo talento',
    'add-whasq-item-third-skill': 'Tercer talento',
    'add-whasq-item-notify-around': '¿Notificar a mi alrededor?',
    'add-whasq-item-urgent': '¿Urgente?',
    'add-whasq-item-send-everyone': '¿Enviar a todos?',
    'add-whasq-skill-required': 'Es obligatorio indicar al menos un talento.', 
    'add-whasq-title-required': 'Es obligatorio indicar el título.', 
    'add-whasq-message-required': 'Es obligatorio indicar el mensaje.', 
  
    // WhasqsReports
    'whasqs-reports-title': 'Whasqs señalados',
    'whasqs-reports-unblock-whasq-confirm-message': '¿Estás seguro que quieres desbloquear este whasq?',
    'whasqs-reports-unban-user-confirm-message': '¿Estás seguro que quieres levantar la prohibición a este usuario ?',
    'whasqs-reports-ban-user-confirm-message': '¿Estás seguro que quieres prohibir a este usuario?',
    'whasqs-reports-remove-whasq-confirm-message': '¿Estas seguro que quieres borrar este whasq ?',
    'whasqs-reports-list': 'Lista de Whasq señalados',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Fecha de creación',
    'whasqs-reports-column-last-update': 'Ultima actualización',
    'whasqs-reports-column-title': 'Título',
    'whasqs-reports-column-status': 'Estado',
    'whasqs-reports-column-urgent': 'Urgente',
    'whasqs-reports-column-answers': 'Respuestas',
    'whasqs-reports-column-creator': 'Autor',
    'whasqs-reports-column-reported-by': 'Señalado por',
    'whasqs-reports-column-actions': 'Acciones',
    'whasq-reports-resolved-by': 'Resuelto por',
    'whasq-reports-resolved-at': 'el',
    'whasqs-reports-action-save-updates': 'Guardar las modificaciones',
    'whasqs-reports-action-edit-whasq': 'Modificar el whasq',
    'whasqs-reports-action-unblock-whasq': 'Desbloquear el whasq',
    'whasqs-reports-action-see-whasq-channel': 'Ver la conversación del whasq',
    'whasqs-reports-action-unban-user': 'Retirar la prohibición al usuario',
    'whasqs-reports-action-ban-user': 'Prohibir al usuario',
    'whasqs-reports-action-remove-whasq': 'Borrar el whasq',
  
    // AnswersReports 
    'answers-reports-title': 'Respuestas señaladas',
    'answers-reports-unblock-answer-confirm-message': '¿Estás seguro que quieres desbloquear a esta persona?',
    'answers-reports-unban-user-confirm-message': '¿Estás seguro que quieres retirar la prohibición a este usuario?',
    'answers-reports-ban-user-confirm-message': '¿Estás seguro que quieres prohibir este usuario?',
    'answers-reports-remove-answer-confirm-message': '¿Estás seguro que quieres borrar esta respuesta?',
    'answers-reports-list': 'Lista de respuesta señaladas ',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Fecha de creación ',
    'answers-reports-column-last-update': 'Ultima actualización',
    'answers-reports-column-message': 'Mensaje',
    'answers-reports-column-usefull-count': 'Número de likes',
    'answers-reports-column-champion': 'Campeón',
    'answers-reports-column-creator': 'Autor',
    'answers-reports-column-reported-by': 'Señalado por',
    'answers-reports-column-actions': 'Acciones',
    'answers-reports-action-save-updates': 'Guardar las modificaciones',
    'answers-reports-action-edit-answer': 'Modificar la ',
    'answers-reports-action-unblock-answer': 'Desbloquear la respuesta',
    'answers-reports-action-see-whasq-channel': 'Ver la conversación del whasq',
    'answers-reports-action-unban-user': 'Retirar la prohibición del usuario',
    'answers-reports-action-ban-user': 'Prohibir el usuario',
    'answers-reports-action-remove-answer': 'Borrar la respuesta',
  
    // Users
    'users-title': 'Usuarios',
    'users-ban-confirm-message': '¿Estás seguro que quieres prohibir este usuario ?',
    'users-unban-confirm-message': '¿Estás seguro que quieres retirar la prohibición a este usuario?',
    'users-archive-confirm-message': '¿Estás seguro que quieres archivar este usuario ?',
    'users-import-csv': 'Importar CSV',
    'users-list': 'Lista de Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Fecha de inscripción',
    'users-column-last-connection': 'Ultima conexión',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nombre y apellido',
    'users-column-title': 'Título',
    'users-column-email': 'E-mail',
    'users-column-actions': 'Acciones',
    'users-action-see-profile': 'Ver el perfil',
    'users-action-unban-user': 'Retirar la prohibición del usuario',
    'users-action-ban-user': 'Prohibir el usuario',
    'users-action-archive-user': 'Archivar un usuario',
    'users-import-starting': 'El importe de los contactos ha comenzado',
    'users-action-consider-user-admin': 'Considerar este usuario como administrador', 
    'users-action-stop-consider-user-admin': 'No considerar más este usuario como administrador',
    'users-confirm-consider-admin': '¿Estás seguro que quieres considerar este usuario como administrador?',
    'users-confirm-dont-consider-admin': '¿Estás seguro que ya no quieres considerar este usuario como administrador?', 
    'users-action-consider-user-admin-success': 'El usuario con el ID {userId} es ahora administrador.', 
    'users-action-stop-consider-user-admin-success': 'El usuario con el ID {userId} ya no es administrador.', 
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
    'users-import-title': 'Importar contactos',
    'import-users-file-limit': 'Solo los archivos CSV  de una talla inferior a 1Mo son aceptados',
    'import-users-error': 'Se produjo un error al momento de importar los contactos. Por favor inténtelo de nuevo.', 
    'import-users-btn': 'Importar los contactos',
    'import-users-expected-format': 'Formato esperado',
    'import-users-fullname': 'Nombre y apellido copmleto', 
    'import-users-email': 'E-mail', 
    'import-users-job-position': 'Puesto de trabajo',
    'import-users-phone': 'Telefono',
    'import-users-download-exemple': 'Descargar ejemplo',
    'import-users-instructions-part-1': 'Completa y descarga el ejemplo, guardala en formato CSV (valores separados por comas) ',
    'import-users-instructions-part-2': '(4 columnas en el orden definido)', 

    // Targets
    'targets-title': 'Objectivos & Gamificación',
    'targets-update-message': 'El objetivo"{target}" ha sido actualizado',
    'targets-geoloc-perimeter-updated': 'El perímetro de localización ha sido actualizado',
    'targets-points-atribution-updated': 'la atribución de puntos  ha sido actualizada',
    'targets-target': 'Objetivos',
    'targets-trimester': '3 meses',
    'targets-bimester': '6 meses',
    'targets-year': '12 meses',
    'targets-active-users': 'usuarios activos',
    'targets-geoloc-perimeter': 'Perímetro de localización',
    'targets-perimeter': 'Perímetro',
    'targets-gamification': 'Gamificación',
    'targets-approved-answer': 'Respuesta aceptada',
    'targets-usefull-answer': 'Respuesta likes',
    'targets-recommended-skill': 'Talento recomendado',
    'targets-points': 'puntos',
    
    // Header
    'header-profile': 'Perfil',
    'header-logout': 'Desconectarse',
    'french': 'Francés',
    'english': 'Ingles',
    'spanish': 'Español',
    'italian': 'Italiano',
    'russian': 'Ruso',
    'portuguese': 'Portugués',
  
    // Sidebar
    'sidebar-navigation': 'Navegación',
  
    // Profile ¿
    'profile': 'Perfil',
    'profile-title': 'Perfil usuario',
    'profile-ban-user-confirm-message': '¿Estás seguro que quieres bloquear este usuario?',
    'profile-edit-skill-confirm-message': 'Cuidado, si modificas este talento todos los usuarios serán afectados. ¿Estás seguro que quieres continuar?',
    'profile-remove-skill-confirm-message':'¿Estás seguro que quieres retirar este talento a este usuario?',
    'profile-archive-user-confirm-message': '¿Estás seguro que quieres archivar este usuario ?',
    'whasqer-profile': 'Perfil del Whasqer',
    'profile-account-creation': 'Crear cuenta',
    'profile-last-connection': 'Ultima conexión',
    'profile-last-update': 'última actualización',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'RESPUESTAS',
    'profile-solutions-column': 'SOLUCIONES',
    'profile-block-button': 'Bloquear',
    'profile-archive-button': 'Archivar',
    'profile-user-archived': 'Este usuario esta archivado',
    'profile-skills-subtitle': 'Sus talentos',
    'profile-no-listed-skill': 'Este talento no esta en la lista',
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
    'add-skill-for-user': 'Agregar un talento a{fullname}',
    'already-existing-skills-for-user': 'Talento(s) ya presente(s) para el usuario',
    'available-skills-for-user': 'Talento(s) disponible(s) para el usuario',
  
    // SuperAdminStores
    'store-selection': 'Elegir la store',
    'store-choice-validation': 'Aceptar la elección de la store',
  
    // StoreLogoUpload
    'choose-company-logo': 'Elegir el logo de nuestra empresa',
    'drop-file-here-or-click': 'Deja tu archivo aquí o dale clic para seleccionar el archivo que quieres importar',
    'company-logo-size-limit': 'Solo las imágenes de un 1Mo son aceptadas',
    'company-logo-square-required': 'La imagen debe tener un formato cuadrado.', 
    'error-importing-company-logo': 'Se produjo un error al importar. Inténtalo de nuevo.',
    'import-company-logo': 'Importar el logo',

    // Notifications
    'notifications-title': 'Notificaciones', 
    'notifications-list': 'Lista de notificaciones', 
    'notifications-column-id': 'Id', 
    'notifications-column-type': 'Tipo', 
    'notifications-column-data': 'Datos', 
    'notifications-column-owner': 'Propietario',
    'notifications-column-shared': '¿Compartir?',
    'notifications-column-creation': 'Fecha de creacion',
    'notifications-column-message': 'Mensaje',
    'notifications-no-data': 'No hay notificaciones por el momento', 
    
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