const messages = {
    'Email': 'Эл. почта',
    'Register': ' Зарегистрироваться',
    'Password': 'Пароль',
    'Remember me': 'Запомнить меня',
    'no-identification-info': 'Если у вас нет ваших данных, пожалуйста, свяжитесь с вашим администратором.',
    'login-next': 'Далее',
    'login-unrecognized-email-title': 'Пользователь "{domain}" не существует',
    'login-unrecognized-email-message': 'Пожалуйста, отправьте письмо на jessie@whasq.com.',
    'login-code-sent-title': 'Подтверждение вашего аккаунта',
    'login-code-sent-message': 'Вам было отправлено письмо с ссылкой для подтверждения вашего эл. адреса.',
    'login': 'Войти',
    'login-email-placeholder': 'Эл. почта',
    'login-password-placeholder': 'Пароль',
    'login-bad-password': 'Неверный пароль. Пожалуйста, попробуйте еще раз.',
    'login-error': 'Ошибка подключения к серверу. Пожалуйста, попробуйте еще раз.',
  
    //  Global
    'search': 'Поиск',
    'previous': 'Пред.',
    'next': 'След.',
    'add': 'Добавить',
    'error-occured': 'ПРОИЗОШЛА ОШИБКА',
    'first-ranking-suffix': '(-ый/-ая)',
    'second-ranking-suffix': '(-ой/-ая)',
    'third-ranking-suffix': '(-ий/-ья)',
    'default-ranking-suffix': '(-ый/-ая)',

    // Header
    'header-profile': 'Профиль',
    'header-logout': 'Выйти',
    'french': 'Французский',
    'english': 'Английский',
    'header-ask-info': 'Запросить ваши данные',
    'header-delete-account': 'Удалить мой аккаунт',
    'header-admin': 'Админ',
    'header-change-password': 'Изменить пароль',
    'header-faq': 'FAQ',
    'header-term-of-use': 'Пользовательское соглашение',
    'header-information-asked': 'Ваши данные были отправлены на ваш адрес эл. почты.',
    'header-account-deleted': 'Ваш аккаунт был удачно удалён.',
    'header-password-changed': 'Вам было отправлено письмо для смены пароля.',

    // Footer
    'footer-privacy-policy': 'Политика конфиденциальности',
    'footer-assistance': 'Нужна помощь ? Свяжитесь с jessie@whasq.com (с понедельника по пятницу с 9:00 по 12:00 и с 14:00 по 18:00)',
    'footer-follow-us': 'Suivez-nous :', #todo

    // Home
    'home-title': 'Главная',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'Мои таланты',
    'whasqs-search-all-filter': 'Все',
    'error-searching-whasqs': 'Произошла ошибка при поиске whasqs',
    'whasqs-more-whasqs-add-skill': 'Чтобы увидеть больше whasqs, добавьте ваши таланты.',

    // WhasqDetails
    'whasq-not-found': 'Данный whasq не был найден.',

    // Whasq
    'whasq-days-ago': '{days} дня назад',
    'whasq-read': 'прочитано',
    'whasq-answers-count': 'Кол-во ответов',
    'whasq-whasqpoints-solution': 'whasqpoints за помощь',
    'whasq-whasqpoints-usefull-answer': 'whasqpoints за полезный ответ',
    'whasq-remove-action': 'Удалить whasq',
    'whasq-edit-action': 'Изменить whasq',
    'whasq-archive-action': 'Добавить whasq в архив',
    'whasq-report-action': 'Пожаловаться на whasq',
    'whasq-archive-confirm': 'Вы уверены, что хотите добавить этот whasq в архив?',
    'error-archiving-whasq': 'Произошла ошибка при добавлении whasq в архив. Пожалуйста, попробуйте ещё раз.',
    'whasq-delete-confirm': 'Вы уверены, что хотите удалить этот whasq?',
    'error-deleting-whasq': 'Произошла ошибка при удалении whasq. Пожалуйста, попробуйте ещё раз.',
    'whasq-exchange': 'Обмен',
    'whasq-notify-around': 'Отправить уведомления вокруг меня',
    'whasq-urgent': 'Срочно',
    'whasq-channel': 'Язык whasq',
    'whasq-no-media': 'Pas de média', /* TODO */
    'whasq-media-image': 'Photo whasq', /* TODO */
    'whasq-media-video': 'Vidéo whasq', /* TODO */
    'whasq-media-audio': 'Audio whasq', /* TODO */
    'whasq-media-file': 'Fichier whasq', /* TODO */

    // Profile
    'error-getting-user': 'Произошла ошибка при загрузке профиля пользователя.',
    'user-information-title': 'Обо мне',
    'user-skills-title': 'Мои таланты',
    'user-channels-title': 'Мои языки',
    'user-points': 'Мои очки',
    'user-answers': 'Мои ответы',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'Талант \'{skillName}\' был успешно добавлен.',
    'error-adding-skill': 'Произошла ошибка при добавлении таланта \'{skillName}\'.',
    'user-skill-removed': 'Талант \'{skillName}\' был удачно удален.',
    'error-removing-skill': 'Произошла ошибка при удалении таланта \'{skillName}\'.',
    'error-getting-available-skills': 'Произошла ошибка при поиске талантов.',
    'error-removing-channel': 'Произошла ошибка при удалении языка - \'{channelName}\'.',
    'user-channel-removed': ' \'{channelName}\' язык был удачно удален.',
    'error-adding-channel': 'Произошла ошибка при добавлении языка -  \'{channelName}\'.',
    'user-channel-added': ' \'{channelName}\' язык был удачно добавлен.',
    'error-getting-available-channels': 'Произошла ошибка при поиске доступных языков.',
    'error-updating-gdpr': 'Произошла ошибка при обновлении данных GDPR',
    'user-updated': 'Информация о пользователе была удачно обновлена',
    'error-updating-user': 'Произошла ошибка при обновлении информации о пользователе.',
    'user-delete-skill-confirm': 'Вы уверены, что хотите удалить талант "{skillName}" ?',
    'user-delete-channel-confirm': 'Вы уверены, что хотите удалить "{channelName}" язык ?',
    'user-delete-last-channel-impossible': 'Внимание: хотя бы один язык должен быть указан в вашем профиле.',
    'profile-email-not-available': 'Эл.почта не добавлена или не доступна.',
    'profile-phone-not-available': 'Номер телефона не добавлен или не доступен.',
    'profile-job-position-not-available': 'Должность не добавлена или не доступна.',

    // AddUserSkillModal
    'add-user-skill-title': 'Добавить талант',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Добавить язык',

    // MediaAttachment
    'media-attachment-download': 'Скачать прикрепленный файл',

    // Notifications
    'error-getting-notifications': 'Произошла ошибка при загрузке уведомлений.',
    'notifications-today': 'Сегодня',
    'notifications-past': 'Ранее',
    'notification-message-answer': '{fullname} ответил(-а) на ваш whasq',
    'notification-message-champion': '{fullname} отметил(-а) вас как чемпиона своего whasq !',
    'notification-message-add-points': '+{whasqPoints} whasq очков',
    'notification-message-usefull': '{fullname} отметил(-а) ваш ответ как полезный!',
    'notification-message-match': '{fullname} добавил(-а) whasq, который может вас заинтересовать.',
    'notification-message-recommendation': '{fullname} вас порекомендовал(-а) за ваш талант.',
    'notification-message-suggest': '{fullname} вам посоветовал(-а) добавить талант.',
    'notification-message-blacklist': '{fullname} пожаловался(-ась) на ваш whasq',
    'notification-message-admin-whasq': '{fullname} опубликовал(-а) новый Whasq',
    'notification-days-ago': '{days} дн. назад',

    // WhasqWrite
    'whasq-write-title': 'Заголовок*',
    'whasq-write-message': 'Сообщение',
    'whasq-write-exchange': 'Обмен',
    'whasq-write-title-placeholder': 'Мой заголовок',
    'whasq-write-message-placeholder': 'Мое сообщение',
    'whasq-write-exchange-placeholder': 'Предлагаю чашечку кофе взамен...',
    'whasq-write-notify-around': 'Уведомить только whasqers вокруг меня',
    'whasq-write-urgent': 'Срочно',
    'whasq-write-import-file-title': 'Загрузить файл (фото, видео, аудио или документ Microsoft Office)',
    'whasq-write-import-drop-here': 'Перенести сюда файл для загрузки.',
    'whasq-write-error-importing-file': 'Произошла ошибка при загрузке файла.',
    'whasq-write-import-file-button': 'Загрузить файл',
    'whasq-write-import-requirements': 'Ваш файл должен быть в формате изображения, видео, аудио или документа Microsoft Office.',
    'whasq-write-import-size-limit': 'Максимально допустимый размер файла 1 Мбайт.',
    'whasq-write-linked-skills': 'Соответствующий талант',
    'whasq-write-linked-channel': 'Соответствующий язык',
    'whasq-write-change-attachment': 'Изменить файл',
    "whasq-write-preview-whasq": 'Предварительный просмотр whasq',
    'whasq-write-error-title-required': 'Пожалуйста, укажите заголовок для whasq',
    'whasq-write-error-message-required': 'Пожалуйста, напишите сообщение для whasq',
    'whasq-write-error-skill-required': 'Пожалуйста, укажите хотя бы один талант для whasq',
    'whasq-write-error-channel-required': 'Пожалуйста, укажите язык для whasq',
    'error-getting-usersskills':'Произошла ошибка при сохранении информации о пользователе.',
    'whasq-write-media-attachment-no-preview': 'Предварительный просмотр недоступен',

    // PreviewWhasqModal
    'preview-whasq-title': 'Предварительный просмотр whasq',

    // Answer
    'answer-button': 'Ответить',
    'answer-message-text': 'Сообщение',
    'answer-import-file-title': 'Загрузить файл (фото, видео или аудио)',
    'answer-import-drop-here': 'Перенесите сюда файл для загрузки.',
    'answer-error-importing-file': 'Произошла ошибка при загрузке файла.',
    'answer-import-file-button': 'Загрузить файл',
    'answer-import-requirements': 'Ваш файл должен быть в формате изображения, видео, аудио или документа Microsoft Office.',
    'answer-import-size-limit': 'Максимально допустимый размер файла  1 Мбайт.',
    'answer-change-attachment': 'Изменить файл',
    'answer-delete-confirm-message': 'Вы уверены, что хотите удалить ваш ответ?',
    'answer-report-confirm-message': 'Вы уверены, что хотите пожаловаться на это сообщение?',
    'answer-champion-confirm-message': ' Вы уверены, что хотите отметить этот ответ как решение вашего запроса whasq?',
    'answer-media-attachment-no-preview': 'Предосмотр не доступен',

    // WhasqPerso
    'whasq-perso-read-times': 'Прочитано {readUsersCount} раз',
    'whasq-perso-answers': 'ответы',
    'whasq-perso-answer': 'ответ',

    // Podium
    'podium-ranking-tab-title': 'КЛАССИФИКАЦИЯ',
    'podium-whasqpoints-tab-title': 'МОИ WHASQ-ОЧКИ',

    // TimeSavingsModal
    'time-savings-title': 'Помогите нам стать лучше',
    'time-savings-message': 'Сколько времени у вас это заняло?',
    'time-savings-half-day': '1/2 дня',
    'time-savings-day': '1 день',
    'time-savings-two-days': '2 дня',
    'time-savings-three-days': '3 дня',

    // TermOfUse
    'term-of-use-title': 'Общие условия пользования',
    'term-of-use-decline-btn': 'Отклонить',
    'term-of-use-authorize-btn': 'Разрешить',
    'tof-decline-title': 'Согласие с общими условиями пользования обязательно.',
    'tof-decline-message': 'Для того, чтобы пользоваться приложением Whasq, необходимо принять общие условия пользования.',

    // Gdpr
    'gdpr-title': 'Пользовательское соглашение',
    'gdpr-decline-btn': 'Отклонить',
    'gdpr-authorize-btn': 'Разрешить',
    'gdpr-decline-title': 'Согласие обязательно',
    'gdpr-decline-message': 'Для того, чтобы пользоваться приложением Whasq, вы должны дать свое согласие на использование ваших данных.',

    // Register
    'register-title': 'Регистрация',
    'register-fullname': 'Имя Фамилия',
    'register-phone': 'Номер тел.',
    'register-job-position': 'Должность',
    'register-channels': 'Языки',
    'register-channel-required': 'Необходимо ввести хотя бы один язык для регистрации пользователя.',
    'register-add': 'Добавить',
    'register-password': 'Пароль',
    'register-password-confirm': 'Подтверждение пароля',
    'register-password-format': 'Пароль должен состоять хотя бы из 8 букв и 4 других символов (заглавные и строчные буквы, цифры и специальные символы)',
    'register-passwords-dont-match': 'Пароль указан неверно.',
    'register-button': 'Зарегистрироваться',
    'register-field-required': 'Необходимо заполнить поле "{field}", чтобы завершить регистрацию',
    'register-password-see-password': 'Посмотреть пароль',
    'register-password-not-see-password': 'Спрятать пароль',

    // Ranking
    'ranking-answers-label': 'ОТВЕТЫ',
    'ranking-solutions-label': 'РЕШЕНИЯ',
    'ranking-see-profile': 'Посмотреть профиль',
    'ranking-no-podium-for-selected-month': 'Для выбранного месяца классификаций нет',

    // Whasqpoint
    'whasqpoint-message-usefull': '{fullname} отметил(-а) ваш ответ как полезный!',
    'whasqpoint-message-solution': '{fullname} отметил(-а) вас как чемпиона своего whasq !',
    'whasqpoint-message-recommend': 'Вас порекомендовал(-а) {fullname}',
    'whasqpoint-days-ago': ' {days} дня назад',

    // Faq
    'faq-title': 'FAQ',

    // DeleteAccountModal
    'delete-account-modal-title': 'Удалить аккаунт',
    'delete-account-modal-message': 'ВНИМАНИЕ! Все ваши персональные данные будут уничтожены и если вы удалите ваш аккаунт, вы не сможете пользоваться приложением. Пожалуйста, введите слово УДАЛИТЬ в окне ниже для подтверждения.',
    'delete-account-modal-button': 'Удалить',
    'delete-account-modal-cancel': 'Отменить',
    'delete-account-modal-bad-confirm-word': 'Неверно введено слово УДАЛИТЬ. Пожалуйста, попробуйте еще раз.',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Сортировать по...',
    'filter-whasqs-modal-recents': 'Последние',
    'filter-whasqs-modal-olds': 'Первые',
    'filter-whasqs-modal-resolved': 'Решенные',
    'filter-whasqs-modal-not-resolved': 'Не решенные',

    // SuggestionsModal
    'suggestions-modal-title': 'Предложения',
    'suggestions-modal-subtitle': 'Время дополнить ваш профиль',
    'suggestions-modal-other-skills': 'Вас могут заинтересовать следующие таланты:',
    'suggestions-modal-recommended-by': '{fullname} порекомендовал (-а) вас за следующие таланты:',
    
    / ZoomImageModal
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
