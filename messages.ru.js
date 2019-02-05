const messages = {
    'Email': 'Эл. адрес',
    'Register': 'Pегистр',
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
    'login-password-see-password': 'См. Пароль',
    'login-password-not-see-password': 'Скрыть пароль',
    'login-forgotten-or-change-password': 'Забытый пароль или смена пароля',
  
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
    'back-to-homepage': 'Вернуться на главную',
    'loading': 'Загрузка...',

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
    'header-menu-whasq-write': 'Написать whasq',
    'header-menu-home': 'добро пожаловать',
    'header-menu-notifications': 'Уведомления',
    'header-menu-podium': 'подиум',
    'header-menu-language': 'Язык отображения',
    'header-menu-profile': 'профиль',

    // Footer
    'footer-privacy-policy': 'Политика конфиденциальности',
    'footer-assistance': 'Нужна помощь ? Свяжитесь с jessie@whasq.com (с понедельника по пятницу с 9:00 по 12:00 и с 14:00 по 18:00)',
    'footer-follow-us': 'Следуйте за нами:',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'Мои таланты',
    'whasqs-search-training-filter': 'Oбучение',
    'whasqs-search-all-filter': 'Все',
    'error-searching-whasqs': 'Произошла ошибка при поиске whasqs',
    'whasqs-more-whasqs-add-skill': 'Чтобы увидеть больше whasqs, добавьте ваши таланты.',
    'whasq-search-filter-label': 'Фильтр',

    // WhasqDetails
    'whasq-not-found': 'Данный whasq не был найден.',
    'eror-whasq-deleted': 'Вопрос, который вы ищете, удален 😕',
    'error-whasq-unavailable': 'Whasq, что вы ищете, не доступен 😕',

    // Whasq
    'whasq-days-ago': '{days} дня назад',
    'whasq-read': 'прочитано',
    'whasq-read-count': 'Просмотрено {count} разы',
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
    'whasq-no-media': 'Нет медиа',
    'whasq-media-image': 'Whasq Фото',
    'whasq-media-video': 'Видео Whasq',
    'whasq-media-audio': 'Звук Whasq',
    'whasq-media-file': 'Файл Whasq',
    'whasq-report-confirm': 'Вы уверены, что хотите сообщить об этом Whasq? Создатель будет предупрежден. Нарушение отчетности может привести к удалению учетной записи 🙄',
    'whasq-answers-count-label': '{count} ответы',
    'whasq-answer-count-label': '{count} ответ',

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
    'profile-edit-label': 'Изменить профиль',
    'profile-save-label': 'Sauvegarder le profil',
    'profile-anonymous-label': 'Сохранить профиль',
    'profile-not-anonymous-label': 'Показать других пользователей',

    // AddUserSkillModal
    'add-user-skill-title': 'Добавить талант',
    'add-user-skill-subtitle': 'У вас наверняка есть другие таланты, вы можете добавить их!',
    'add-user-skill-subtitle-first-login': 'У вас есть таланты, добавьте их в свой профиль!',
    'add-user-skill-suggest': 'Хотите добавить еще одно умение, которого нет в списке?', 
    
    // AddUserChannelModal
    'add-user-channel-title': 'Добавить язык',
    'add-user-channel-subtitle': 'Выберите языки, на которых вы говорите.',

    // MediaAttachment
    'media-attachment-download': 'Скачать прикрепленный файл',

    // Notifications
    'error-getting-notifications': 'Произошла ошибка при загрузке уведомлений.',
    'notifications-today': 'Сегодня',
    'notifications-past': 'Ранее',
    'notifications-empty': 'У вас еще нет уведомления.',
    'notification-message-answer': '{fullname} ответил(-а) на ваш whasq',
    'notification-message-champion': '{fullname} отметил(-а) вас как чемпиона своего whasq !',
    'notification-message-add-points': '+{whasqPoints} whasq очков',
    'notification-message-usefull': '{fullname} отметил(-а) ваш ответ как полезный!',
    'notification-message-match': '{fullname} добавил(-а) whasq, который может вас заинтересовать.',
    'notification-message-recommendation': '{fullname} вас порекомендовал(-а) за ваш талант.',
    'notification-message-suggest': '{fullname} вам посоветовал(-а) добавить талант.',
    'notification-message-blacklist': '{fullname} пожаловался(-ась) на ваш whasq',
    'notification-message-admin-whasq': '{fullname} опубликовал(-а) новый whasq',
    'notification-message-tag-user': '{fullname} рекомендовал вас для whasq',
    'notification-message-new-training-whasq': 'Вас ждет новый whasq!',
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
    'whasq-write-required-fields': 'Поля, отмеченные звездочкой (*), обязательны для заполнения.',

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
    'answer-empty-content': 'Вы должны написать сообщение или добавить медиа для отправки ответа.',
    'answer-error-usefull-current-user': 'Извините, вы не можете оценить ваш собственный комментарий 😉',
    'answer-placeholder-label': 'Ответить',
    'answer-champion-label': 'Рассмотрите ответ как решение',
    'answer-usefull-label': 'Рассмотрите полезный ответ',
    'answer-delete-label': 'Удалить ответ',
    'answer-report-label': 'Сообщить о ответе',
    'answer-attachment-label': 'Добавить приложение',

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
    'register-channels': 'Разговорные языки',
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
    'ranking-ytd-label': 'C начала {year}',

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
    
    // ZoomImageModal
    'zoom-image-modal-title': 'Увеличить изображение',

    // UploadProfileImageModal
    'drop-file-here-or-click': 'Отбросьте свой файл здесь или нажмите, чтобы выбрать файл для импорта.',
    'profile-image-size-limit': 'Принимаются только файлы изображений размером менее 1 МБ.',
    'error-importing-profile-image': 'При импорте изображения произошла ошибка. Повторите попытку.',
    'import-profile-image': 'Импортировать изображение',
    'pick-profile-avatar': 'Задайте свой аватар профиля',
    'choose-profile-image': 'Выберите свое изображение профиля',
    'profile-image-square-required': 'Изображение должно иметь квадратный формат.',
    
    // TagUserModal
    'tag-user-modal-title': 'Отметить пользователя',
    'tag-user-modal-search': 'Поиск пользователя',
    
    // TutoModal
    'tuto-modal-title': 'Советы и рекомендации',
    'tuto-modal-homepage-ask-whasq': 'Задайте свой вопрос.',
    'tuto-modal-homepage-my-skills': 'Отобразите whasq о ваших талантах и на языке, добавленном в ваш профиль.',
    'tuto-modal-homepage-all-skills': 'Отобразите все whasq на языке, добавленном в ваш профиль.',
    'tuto-modal-add-whasq-add-media': 'Добавьте медиафайлы, чтобы проиллюстрировать ваш вопрос. Например, изображение, текст, видео или просто звук. Вы также можете использовать их для ответа на whasq.',
    'tuto-modal-add-whasq-add-skill': 'Выберите 3 таланта, которые помогут вам решить ваш whasq.',
    'tuto-modal-add-whasq-add-channel': 'Выберите язык, на котором написан ваш whasq. Выбор языка зависит от языков, добавленных в ваш профиль: fr, es, ru, ...',
    'tuto-modal-profile-update': 'Добавьте цвет в Whasq, обновив свой профиль.',
    
    // MyWhasqs
    'my-whasqs-title': 'Мой wasqs',

    // AddSkillModal
    'add-skill-modal-title': 'таланты',
    'add-skill-modal-subtitle': 'Таланты, связанные с этим whasq (3 максимум):',

    // TrainingWhasqDetails
    'training-whasq-details-explanations': 'Oбъяснения :',
    'training-whasq-details-see-results': 'Посмотреть результаты',
    'training-whasq-details-validate': 'Поддерживать',
    'training-whasq-details-right-answer': '👍 Вы правильно ответили на вопрос !',
    'training-whasq-details-bad-answer': '😢 Ваш ответ не верный...',

    // TrainingWhasqResultsModal
    'training-whasq-results-modal-title': 'Резюме всех ответов',
    
    // TrainingEvalModal
    'training-eval-title': 'Oценка : "{title}"',
    'training-eval-modal-form-error': 'Спасибо за ответы на все вопросы, чтобы иметь возможность отправить свою оценку.',
}

export default messages