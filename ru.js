const messages = {

    // Login
    'Email': 'Адрес электронной почты',
    'Login': 'Логин',
    'Password': 'Пароль',
    'Provided by your administrator': 'Предоставлено вашим администратором',
    'Remember me': 'Запомнить меня',
    'no-identification-info': 'Если у вас нет вашего логина или пароля, пожалуйста, обратитесь к администратору',
    'bad-credentials': 'Данные указаны неверно. Попробуйте еще раз.',
    'not-enough-rights': 'У вас недостаточно прав для входа.',
    'user-not-found': 'Пользователь не найден.', 

    // General 
    'more-info': 'Больше информации',
    'from': 'С',
    'to': 'По',
    'real-time': 'в реальном времени',
    'update': 'Обновить',
    'delete': 'Удалить',
    'previous': 'Предыдущий',
    'next': 'Следующий',
    'send': 'Отправить',
    'export-all': 'Экспортировать все',
    'yes': 'Да',
    'no': 'Нет',
    'open': 'Открыть',
    'fullname': 'Полное имя',
    'job-position': 'Должность',
    'assistance': 'Вам нужна помощь? Свяжитесь с jessie@whasq.com (с понедельника по пятницу с 9:00 до 12:00 и с 14:00 до 18:00 Время в Париже)',
    'download-attachment': 'Загрузить приложение',
    'day': 'jour', /* TODO */
    'days': 'jours', /* TODO */
    'waiting': 'En attente...', /* TODO */

    // Menu 
    'activity': 'Активность',
    'actives-users': 'Активные пользователи',
    'registered-users': 'Зарегистрированные пользователи',
    'whasqs-answers': 'Вопросы и Ответы',
    'skills': 'Навыки',
    'time-savings': 'Сэкономленное время',
    'whasqers': 'Пользователи Whasq',
    'podium': 'Пьедестал почета',
    'search': 'Поиск',
    'manage': 'Управлять',
    'skills-categories': 'Навыки и Категории',
    'whasqs': 'Whasqs/Вопросы',
    'whasqs-reports': 'Нежелательные вопросы',
    'answers-reports': 'Нежелательные ответы',
    'users': 'Пользователи',
    'admin': 'Администрация',
    'targets': 'Цели и Gamification',
    'notifications': 'Уведомления',
    'learning': 'Formation', /* TODO */
    'training-centers': 'Centres de formation', /* TODO */
    'trainings': 'Formations', /* TODO */

    // Activity 
    'eve-computed-kpi': 'показатель посчитан на D-1',
    'no-data-for-selected-period': 'Нет данных для выбранного периода',
    'no-data-available': 'Нет данных', 

    // ActivityActiveUsers 
    'actives-title': 'Активные Пользователи',
    'actives-kpi-title': 'Активный',
    'actives-kpi-help-title': 'Активный',
    'actives-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение хотя бы один раз в течение месяца "{month}".',
    'actives-dda-kpi-title': 'Активный (с даты активации) SAD',
    'actives-dda-kpi-help-title': 'Активный с даты активации',
    'actives-dda-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение с начала работы приложения.',
    'actives-target-kpi-title': 'Активный - Цели',
    'actives-target-kpi-help-title': 'Активный - Цели',
    'actives-target-kpi-help-message': 'Этот показатель представляет отношение количества пользователей, зашедших в приложение хотя бы один раз в течение месяца "{month}" к заданной цели.',
    'actives-evolution-title': 'Эволюция активных пользователей',
    'actives-evolution-help-title': 'Эволюция активных пользователей',
    'actives-evolution-help-message': 'Этот показатель представляет количество активных пользователей.',
    'actives-dda-evolution-title': 'Эволюция активных пользователей с даты активации',
    'actives-dda-evolution-help-title': 'Эволюция активных пользователей с даты активации',
    'actives-dda-evolution-help-message': 'Этот показатель представляет общее количество активных пользователей с момента создания магазина.',
    'actives-notregistered-evolution-title': 'Эволюция активных пользователей - регистрация',
    'actives-notregistered-evolution-help-title': 'Эволюция активных пользователей - регистрация',
    'actives-notregistered-evolution-help-message': 'This indicator represents the number of active users by subtracting registered users.',

    // ActivityRegisteredUsers 
    'registered-title': 'Зарегистрированные пользователи - {month}',
    'registered-kpi-title': 'Зарегистрировано',
    'registered-kpi-help-title': 'Зарегистрировано',
    'registered-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение в течение месяца "{month}".',
    'registered-inactives-kpi-title': 'Доля зарегистрированных, но неактивных пользователей',
    'registered-inactives-kpi-help-title': 'Доля зарегистрированных, но неактивных пользователей',
    'registered-inactives-kpi-help-message': 'Этот показатель представляет соотношение между количеством пользователей, зарегистрированных в течение месяца "{month}" и не зашедших в приложение, и общим количеством пользователей в течение месяца.',
    'registered-inactives-evolution-title': 'Эволюция регистрации',
    'registered-inactives-evolution-help-title': 'Эволюция регистрации',
    'registered-inactives-evolution-help-message': 'Этот показатель представляет количество зарегистрированных пользователей.',

    // ActivityWhasqs 
    'whasqs-answers-title': 'Whasqs/Вопросы и Ответы - {month}',
    'whasqs-answers-kpi-title': 'Количество вопросов и ответов',
    'whasqs-answers-kpi-help-title': 'Количество вопросов и ответов',
    'whasqs-answers-kpi-help-message': 'Этот индикатор представляет количество размещенных вопросов плюс количество размещенных ответов в течение месяца "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Количество вопросов / Автор вопросов',
    'whasqs-by-whasqer-kpi-help-title': 'Количество вопросов / Автор вопросов',
    'whasqs-by-whasqer-kpi-help-message': 'Этот индикатор представляет количество вопросов, размещенных автором в течение месяца "{month}".',
    'answers-kpi-title': 'Количество ответов',
    'answers-kpi-help-title': 'Количество ответов',
    'answers-kpi-help-message': 'Этот индикатор представляет количество ответов, размещенных в течение месяца "{month}".',
    'answers-by-creator-kpi-title': 'Количество ответов / Автор ответов',
    'answers-by-creator-kpi-help-title': 'Количество ответов / Автор ответов',
    'answers-by-creator-kpi-help-message': 'Этот индикатор представляет количество ответов, размещенных автором в течение месяца "{month}".',
    'whasqs-with-contribution-kpi-title': 'Доля вопросов с взаимодействием',
    'whasqs-with-contribution-kpi-help-title': 'Доля вопросов с взаимодействием',
    'whasqs-with-contribution-kpi-help-message': 'Этот показатель представляет долю вопросов, которые получили ответы в течение месяца "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Доля вопросов с взаимодействием с даты активации',
    'whasqs-with-contribution-dda-kpi-help-title': 'Доля вопросов с взаимодействием с даты активации',
    'whasqs-with-contribution-dda-kpi-help-message': 'Этот показатель представляет долю вопросов, которые получили ответы.',
    'whasqs-resolved-part-kpi-title': 'Доля решенных вопросов',
    'whasqs-resolved-part-kpi-help-title': 'Доля решенных вопросов',
    'whasqs-resolved-part-kpi-help-message': 'Этот показатель представляет долю вопросов, решенных в течение месяца "{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Доля решенных вопросов с даты активации',
    'whasqs-resolved-part-dda-kpi-help-title': 'Доля решенных вопросов с даты активации',
    'whasqs-resolved-part-dda-kpi-help-message': 'Этот показатель представляет долю решенных вопросов.',
    'whasqs-evolution-title': 'Эволюция количества вопросов',
    'whasqs-evolution-help-title': 'Эволюция количества вопросов',
    'whasqs-evolution-help-message': 'Этот индикатор представляет общее количество вопросов.',
    'answers-evolution-title': 'Эволюция количества ответов',
    'answers-evolution-help-title': 'Эволюция количества ответов',
    'answers-evolution-help-message': 'Этот индикатор представляет общее количество ответов.',

    // ActivitySkills 
    'skills-title': 'Навыки',
    'skills-dda-kpi-title': 'Общее количество навыков, указанных с даты активации',
    'skills-dda-kpi-help-title': 'Общее количество навыков, указанных с даты активации',
    'skills-dda-kpi-help-message': 'Этот показатель представляет количество навыков, указанных пользователями с начала активности.',
    'skills-part-kpi-title': 'Доля указанных особых навыков',
    'skills-part-kpi-help-title': 'Доля указанных особых навыков',
    'skills-part-kpi-help-message': 'Этот показатель представляет соотношение количества особых навыков, указанных пользователями с начала активности, и количества существующих талантов.',
    'skills-evolution-title': 'Эволюция количества навыков в вопросах',
    'skills-evolution-help-title': 'Эволюция количества навыков в вопросах',
    'skills-evolution-help-message': 'Этот показатель представляет количество навыков в вопросах.',
    'most-used-cats-whasqs-kpi-title': 'Топ-5 категорий, наиболее часто используемых в вопросах',
    'most-used-cats-whasqs-kpi-help-title': 'Топ-5 категорий, наиболее часто используемых в вопросах',
    'most-used-cats-whasqs-kpi-help-message-1': 'В этой таблице вы найдете 5 категорий, которые содержат наиболее часто используемые навыки в вопросах.',
    'most-used-cats-whasqs-kpi-help-message-2': 'Цветом выделено количество использованных навыков в вопросах для соответствующей категории.',
    'most-used-skills-whasqs-kpi-title': 'Топ-5 навыков, наиболее часто используемых в вопросах',
    'most-used-skills-whasqs-kpi-help-title': 'Топ-5 навыков, наиболее часто используемых в вопросах',
    'most-used-skills-whasqs-kpi-help-message-1': 'В этой таблице вы найдете топ-5 навыков, наиболее часто используемых в вопросах.',
    'most-used-skills-whasqs-kpi-help-message-2': 'Цветом выделено количество случаев использования навыков в вопросах.',
    'most-used-whasqers-kpi-title': 'Топ-5 навыков, наиболее часто используемых пользователями',
    'most-used-whasqers-kpi-help-title': 'Топ-5 навыков, наиболее часто используемых пользователями',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers dans leur profil.', /* TODO */
    'most-used-whasqers-kpi-help-message-2': 'Цветом выделено количество случаев указывания каждого навыка пользователями.',
    'less-used-whasqers-kpi-title': 'Топ-5 навыков, наименее часто используемых пользователями',
    'less-used-whasqers-kpi-help-title': 'Топ-5 навыков, наименее часто используемых пользователями',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés par les whasqers dans leur profil.', /* TODO */
    'less-used-whasqers-kpi-help-message-2': 'Цветом выделено количество случаев указывания каждого таланта пользователями.',

    // TimeSavings 
    'time-savings-title': 'Экономия времени - {month}',
    'minutes-earned-kpi-title': 'Минуты, сэкономленные в этом месяце',
    'minutes-earned-kpi-help-title': 'Минуты, сэкономленные в этом месяце',
    'minutes-earned-kpi-help-message': 'Этот показатель представляет минуты, сэкономленные в течение месяца "{month}".',
    'minutes-earned-dda-kpi-title': 'Минуты, сэкономленные с даты активации',
    'minutes-earned-dda-kpi-help-title': 'Минуты, сэкономленные с даты активации',
    'minutes-earned-dda-kpi-help-message': 'Этот показатель представляет количество минут, сэкономленных с начала активности.',
    'minutes-earned-month-kpi-title': 'Заработанные минуты месяца',

    // Podium 
    'podium-title': 'Пьедестал почета',
    'whasqers-of-month': 'Пользователи Whasq',
    'no-podium-for-selected-month': 'Пьедестал очета не доступен на выбранный месяц',

    // Card-user 
    'answers-label': 'ОТВЕТЫ',
    'solutions-label': 'РЕШЕНИЯ',
    'see-profile': 'Посмотреть профиль',
    
    // Search 
    'search-title': 'Поиск',
    'search-by-name-placeholder': 'Поиск по имени...',
    'no-result-select-criteria': 'Нет результатов. Пожалуйста, выберите хотя бы один знак.',

    // CategoriesSearchBlock 
    'dynamic-search-title': 'Динамический поиск',

    // SkillsCategories 
    'skills-categories-title': 'Навыки и Категории',
    'update-cat-for-lang': 'Обновить категорию для языка {lang}',
    'update-skill-for-cat-and-lang-fr': 'Обновить навык для категории "{cat}" и английский язык',
    'add-cat-for-lang-fr': 'Добавить категорию для английского языка',
    'add-skill-for-cat-and-lang-fr': 'Добавить навык для категории "{cat}" для английского языка',
    'delete-cat-confirm-message': 'Вы уверены, что хотите удалить эту категорию?',
    'delete-skill-confirm-message': 'AВы уверены, что хотите удалить этот талант?',
    'choose-lang': 'Выберите язык',
    'add-lang': 'Добавьте язык',
    'add-cat': 'Добавьте категорию',

    // InfoMessage 
    'cat-deleted': 'Категория "{cat}" была удалена.',
    'error-deleting-cat': 'Что-то произошло во время удаления категории "{cat}".',
    'skill-deleted': 'Навык "{skill}" был удален.',
    'error-deleting-skill': 'Что-то произошло во время удаления навыка "{skill}".',

    // SkillCategoriesModal 
    'already-existing-cat': 'Категория(и) уже существует(ют)',
    'already-existing-skill': 'Навык(и) уже существует(ют)',
    'no-existing-cat': 'Категория не существует',
    'no-existing-skill': 'Навык не существует',

    // CreateLanguageModal 
    'add-new-lang': 'Добавить новый язык',
    'already-implemented-langs': 'Языки уже указаны',

    // WhasqsList 
    'whasqs-title': 'Whasqs/Вопросы',
    'block-whasq-confirm-message': 'Вы уверены, что хотите заблокировать этот вопрос?',
    'unblock-whasq-confirm-message': 'Вы уверены, что хотите разблокировать этот вопрос?',
    'ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'remove-whasq-confirm-message': 'Вы уверены, что хотите удалить этот вопрос?',
    'add-whasq': 'Добавить вопрос',
    'whasqs-list': 'Список вопросов',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Создание',
    'whasqs-column-update': 'Обновить',
    'whasqs-column-title': 'Название',
    'whasqs-column-status': 'Статус',
    'whasqs-column-urgent': 'Срочный',
    'whasqs-column-answers': 'Ответы',
    'whasqs-column-read': 'Прочитано',
    'whasqs-column-creator': 'Автор',
    'whasqs-column-skills': 'Навыки',
    'whasqs-column-actions': 'Действия',
    'whasq-resolved-by': 'Решено',
    'whasq-resolved-at': 'в',
    'whasqs-action-save-updates': 'Сохранить изменения',
    'whasqs-action-edit-whasq': 'Редактировать вопрос',
    'whasqs-action-unblock-whasq': 'Разблокировать вопрос',
    'whasqs-action-block-whasq': 'Заблокировать вопрос',
    'whasqs-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'whasqs-action-unban-user': 'Разблокировать пользователя',
    'whasqs-action-ban-user': 'Заблокировать пользователя',
    'whasqs-action-remove-whasq': 'Удаление вопроса',
    'whasqs-notify-around': 'Уведомлять окружающих',
    'whasqs-language': 'Написать в',

    // WhasqChannelModal 
    'whasq-channel-title': 'Whasq титул "{whasq-title}"',
    'usefull-answer': 'полезный',
    'champion-answer': 'ЧЕМПИОН',
    'whasq-channel-edit-whasq-title': 'Hазвание',
    'whasq-channel-edit-whasq-message': 'Cообщение',
    'whasq-channel-edit-answer-message': 'Cообщение',
    'whasq-channel-block-answer-confirm': 'Вы действительно хотите заблокировать этот ответ?',
    'whasq-channel-unblock-answer-confirm': 'Вы действительно хотите разблокировать этот ответ?',
    'whasq-channel-delete-answer-confirm': 'Вы действительно хотите удалить этот ответ?',
    
    // AddWhasqModal 
    'add-whasq-title': 'Добавить новый вопрос',
    'add-whasq-item-title': 'Название',
    'add-whasq-item-message': 'Сообщение',
    'add-whasq-item-exchange': 'Обмен',
    'add-whasq-item-optionnal': 'Необязательно',
    'add-whasq-item-channel': 'Канал',
    'add-whasq-item-first-skill': 'Первый навык',
    'add-whasq-item-second-skill': 'Второй навык',
    'add-whasq-item-third-skill': 'Третий навык',
    'add-whasq-item-notify-around': 'Сообщить поблизости?',
    'add-whasq-item-urgent': 'Срочный?',
    'add-whasq-item-send-everyone': 'Отправить всем?', 
    'add-whasq-skill-required': 'Пожалуйста, заполните хотя бы один талант',
    'add-whasq-title-required': 'Пожалуйста, заполните заголовок.',
    'add-whasq-message-required': 'Пожалуйста, заполните сообщение.',

    // WhasqsReports 
    'whasqs-reports-title': 'Нежелательные вопросы',
    'whasqs-reports-unblock-whasq-confirm-message': 'Вы уверены, что хотите разблокировать этот вопрос?',
    'whasqs-reports-unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'whasqs-reports-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'whasqs-reports-remove-whasq-confirm-message': 'Вы уверены, что хотите удалить этот вопрос?',
    'whasqs-reports-list': 'Список нежелательных вопросов',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Дата создания',
    'whasqs-reports-column-last-update': 'Последнее обновление',
    'whasqs-reports-column-title': 'Название',
    'whasqs-reports-column-status': 'Статус',
    'whasqs-reports-column-urgent': 'Срочный',
    'whasqs-reports-column-answers': 'Ответы',
    'whasqs-reports-column-creator': 'Автор',
    'whasqs-reports-column-reported-by': 'Сообщено',
    'whasqs-reports-column-actions': 'Действия',
    'whasq-reports-resolved-by': 'Решено',
    'whasq-reports-resolved-at': 'в',
    'whasqs-reports-action-save-updates': 'Сохранить изменения',
    'whasqs-reports-action-edit-whasq': 'Редактировать вопрос',
    'whasqs-reports-action-unblock-whasq': 'Разблокировать вопрос',
    'whasqs-reports-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'whasqs-reports-action-unban-user': 'Разблокировать этого пользователя',
    'whasqs-reports-action-ban-user': 'Заблокировать этого пользователя',
    'whasqs-reports-action-remove-whasq': 'Удаление вопроса',

    // AnswersReports 
    'answers-reports-title': 'Нежелательные ответы',
    'answers-reports-unblock-answer-confirm-message': 'Вы уверены, что хотите разблокировать этот ответ?',
    'answers-reports-unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'answers-reports-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'answers-reports-remove-answer-confirm-message': 'Вы уверены, что хотите удалить этот ответ?',
    'answers-reports-list': 'Список нежелательных ответов',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Дата создания',
    'answers-reports-column-last-update': 'Последнее обновление',
    'answers-reports-column-message': 'Сообщение',
    'answers-reports-column-usefull-count': 'Количество лайков',
    'answers-reports-column-champion': 'Чемпион?',
    'answers-reports-column-creator': 'Автор',
    'answers-reports-column-reported-by': 'Сообщено',
    'answers-reports-column-actions': 'Действия',
    'answers-reports-action-save-updates': 'Сохранить изменения',
    'answers-reports-action-edit-answer': 'Редактировать ответ',
    'answers-reports-action-unblock-answer': 'Разблокировать ответ',
    'answers-reports-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'answers-reports-action-unban-user': 'Разблокировать этого пользователя',
    'answers-reports-action-ban-user': 'Заблокировать этого пользователя',
    'answers-reports-action-remove-answer': 'Удаление ответа',

    // Users 
    'users-title': 'Пользователи',
    'users-ban-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'users-unban-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'users-archive-confirm-message': 'Вы уверены, что хотите отправить этого пользователя в архив?',
    'users-import-csv': 'Загрузить CSV',
    'users-list': 'Список пользователей',
    'users-column-id': 'ID',
    'users-column-register-date': 'Дата регистрации',
    'users-column-last-connection': 'Последний вход',
    'users-column-avatar': 'Аватар',
    'users-column-fullname': 'Полное имя',
    'users-column-title': 'Обращение',
    'users-column-email': 'Email',
    'users-column-actions': 'Действия',
    'users-action-see-profile': 'Посмотреть профиль',
    'users-action-unban-user': 'Разблокировать этого пользователя',
    'users-action-ban-user': 'Заблокировать этого пользователя',
    'users-action-archive-user': 'Отправить пользователя в архив',
    'users-import-starting': 'Пользовательский импорт начал',
    'users-action-consider-user-admin': 'Рассмотрите этого пользователя как администратора', 
    'users-action-stop-consider-user-admin': 'Не считайте этого пользователя как администратора больше', 
    'users-confirm-consider-admin': 'Вы уверены, что хотите считать этого пользователя администратором?', 
    'users-confirm-dont-consider-admin': 'Вы уверены, что не хотите рассматривать этого пользователя как администратора?', 
    'users-action-consider-user-admin-success': 'Пользователь id {userId} теперь является администратором.', 
    'users-action-stop-consider-user-admin-success': 'Пользователь id {userId} больше не является администратором.', 
    'users-action-switch-role': 'Changer le rôle de cet utilisateur', /* TODO */
    'users-column-geolocated': 'Местоположение определено',
    'error-file-format': 'Формат файла неверен',
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
    'users-import-title': 'Импорт пользователя', 
    'import-users-file-limit': 'Принимаются только файлы CSV размером менее 1 МБ', 
    'import-users-error': 'Во время импорта произошла ошибка. Повторите попытку.', 
    'import-users-btn': 'Импорт пользователей', 
    'import-users-expected-format': 'Ожидаемый формат',
    'import-users-fullname': 'Полное имя',
    'import-users-email': 'электронная почта', 
    'import-users-job-position': 'Должность', 
    'import-users-phone': 'телефон',
    'import-users-download-exemple': 'Пример загрузки',
    'import-users-instructions-part-1': 'Полный загруженный пример и Сохранить как csv (значения, разделенные запятыми) файл',
    'import-users-instructions-part-2': '(ТОЛЬКО 4 колонки ТОЛЬКО в ОПРЕДЕЛЕННОМ порядке)',

    // Targets 
    'targets-title': 'Цели и Gamification',
    'targets-update-message': 'Цель "{target}" была обновлена',
    'targets-geoloc-perimeter-updated': 'Периметр геолокации был обновлен',
    'targets-points-atribution-updated': 'Присуждение баллов было обновлено',
    'targets-target': 'Цели',
    'targets-trimester': '3 месяца',
    'targets-bimester': '6 месяцев',
    'targets-year': '12 месяцев',
    'targets-active-users': 'активные пользователи',
    'targets-geoloc-perimeter': 'Периметр геолокации',
    'targets-perimeter': 'Периметр',
    'targets-gamification': 'Gamification',
    'targets-approved-answer': 'одобренный ответ',
    'targets-usefull-answer': 'Полезный ответ',
    'targets-recommended-skill': 'Рекомендованный навык',
    'targets-points': 'баллы',

    // Header 
    'header-profile': 'Профиль',
    'header-logout': 'Выйти',
    'french': 'Французский',
    'english': 'Английский',
    'spanish': 'Испанский',
    'italian': 'Итальянский',
    'russian': 'Pусский',
    'portuguese': 'Португальский',

    // Sidebar 
    'sidebar-navigation': 'Навигация',

    // Profile 
    'profile': 'Профиль',
    'profile-title': 'Профиль пользователя',
    'profile-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'profile-edit-skill-confirm-message': 'Будьте осторожны, редактирование навыков будет проведено для всех пользователей. Вы уверены, что хотите продолжить?',
    'profile-remove-skill-confirm-message': 'Вы уверены, что хотите удалить этот навык у этого пользователя?',
    'profile-archive-user-confirm-message': 'Вы уверены, что хотите отправить этого пользователя в архив?',
    'whasqer-profile': 'Профиль пользователя Whasq',
    'profile-account-creation': 'Создание учетной записи',
    'profile-last-connection': 'Последний вход',
    'profile-last-update': 'Последнее обновление',
    'profile-whasqs-column': 'WHASQS / ВОПРОСЫ',
    'profile-answers-column': 'ОТВЕТЫ',
    'profile-solutions-column': 'РЕШЕНИЯ',
    'profile-block-button': 'Заблокировать',
    'profile-archive-button': 'Архив',
    'profile-user-archived': 'Этот пользователь отправлен в архив',
    'profile-skills-subtitle': 'Ее / Его таланты',
    'profile-no-listed-skill': 'Навыки не указаны',    
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
    'add-skill-for-user': 'Добавить навык для {fullname}',
    'already-existing-skills-for-user': 'Уже существующие навыки у этого пользователя',
    'available-skills-for-user': 'Навык(и), доступные этому пользователю',

    // SuperAdminStores 
    'store-selection': 'Выбор магазина',
    'store-choice-validation': 'Подтвердить выбор магазина',

    // StoreLogoUpload 
    'choose-company-logo': 'Выбрать логотип вашей компании',
    'drop-file-here-or-click': 'Перетащите сюда свой файл или нажмите для выбора файла для загрузки',
    'company-logo-size-limit': 'Принимаются изображения размером меньше 1 Mb',
    'company-logo-square-required': 'Изображение должно быть квадратной формы.',
    'error-importing-company-logo': 'Что-то пошло не так во время загрузки. Попробуйте еще раз.',
    'import-company-logo': 'Загрузить логотип',

    // Notifications
    'notifications-title': 'Уведомления',
    'notifications-list': 'Список уведомлений',
    'notifications-column-id': 'идентификатор',
    'notifications-column-type': 'тип',
    'notifications-column-data': 'Данные',
    'notifications-column-owner': 'Владелец',
    'notifications-column-shared': 'Общая ?',
    'notifications-column-creation': 'Дата создания',
    'notifications-column-message': 'Cообщение',
    'notifications-no-data': 'В настоящее время у вас нет уведомлений',
    
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