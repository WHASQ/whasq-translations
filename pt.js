const messages = {
    
    // Login
    'Email': 'E-mail',
    'Login': 'Iniciar sessão',
    'Password': 'Palavra-passe',
    'Provided by your administrator': 'Fornecida pelo seu administrador',
    'Remember me': 'Lembrar-se de mim',
    'no-identification-info': 'Se não tiver os seus dados da conta para iniciar a sesaão, entre em contato com o seu administrador',
    'bad-credentials': 'Os seus dados estão incorretos. Por favor, tente novamente',
    'not-enough-rights': 'Não têm as autorizações necessárias para iniciar a sessão.',
    'user-not-found': 'Esse utilizador não foi encontrado.',

    // General
    'more-info': 'Mais informações',
    'from': 'De',
    'to': 'A',
    'real-time': 'em tempo real',
    'update': 'Modificar',
    'delete': 'Apagar',
    'previous': 'Anterior',
    'next': 'Seguinte',
    'send': 'Enviar',
    'export-all': 'Exportar tudo',
    'yes': 'Sim',
    'no': 'Não',
    'open': 'Em curso',
    'fullname': 'Nome completo',
    'job-position': 'Emprego',
    'assistance': 'Precisa de ajuda? Contate jessie@whasq.com  (De segunda à sexta-feira, das 9:00 ao 12:00 e das 14:00 às 18:00) ',
    'download-attachment': 'Fazer download do anexo',
    'day': 'jour', /* TODO */
    'days': 'jours', /* TODO */
    'waiting': 'En attente...', /* TODO */

    // Menu
    'activity': 'Atividade',
    'actives-users': 'Utilizadores Ativos',
    'registered-users': 'Utilizadores inscritos',
    'whasqs-answers': 'Whasqs & Respostas',
    'skills': 'Competências',
    'time-savings': 'Ganho de tempo',
    'whasqers': 'Whasqers',
    'podium': 'Pódio',
    'search': 'Procura',
    'manage': 'Gestão',
    'skills-categories': 'Competências & Categorias',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs denúnciados',
    'answers-reports': 'Respostas denúnciadas',
    'users': 'Utilizadores',
    'admin': 'Administração',
    'targets': 'Objetivos & Jogos',
    'notifications': 'Notificações',
    'learning': 'Formation', /* TODO */
    'training-centers': 'Centres de formation', /* TODO */
    'trainings': 'Formations', /* TODO */

    // Activity
    'eve-computed-kpi': 'indicador calculado em  D-1',
    'no-data-for-selected-period': 'Nenhuma procura corresponde ao período selecionado',
    'no-data-available': 'Nenhum dado disponível',

    // ActivityActiveUsers
    'actives-title': 'Utilizadores ativos',
    'actives-kpi-title': 'Ativos',
    'actives-kpi-help-title': 'Ativos',
    'actives-kpi-help-message': 'Este indicador representa o número de utilizadores que iniciaram uma sessão pelo menos uma vez no mês de "{month}".',
    'actives-dda-kpi-title': 'Ativos DIA',
    'actives-dda-kpi-help-title': 'Ativos "DIA" (Desde o Início da Atividade)',
    'actives-dda-kpi-help-message': 'Este indicador representa o número de utilizadores que iniciaram uma sessão desde o início da atividade',
    'actives-target-kpi-title': 'Ativos - Objetivos',
    'actives-target-kpi-help-title': 'Ativos - Objetivos',
    'actives-target-kpi-help-message': 'Este indicador representa a porporção entre o número de utilizadores que iniciaram uma sessão pelo menos uma vez no mês de "{month}"  em relação aos objetivos defenidos.',
    'actives-evolution-title': 'Evolução dos ativos',
    'actives-evolution-help-title': 'Evolução dos ativos',
    'actives-evolution-help-message': 'Este indicador representa o número de utilizadores ativos.',
    'actives-dda-evolution-title': 'Evolução dos ativos DIA',
    'actives-dda-evolution-help-title': 'Evolução dos ativos DIA',
    'actives-dda-evolution-help-message': 'Este indicador representa o número de utilizadores ativos acumulados desde a criação da store.',
    'actives-notregistered-evolution-title': 'Evolução dos ativos - inscrição',
    'actives-notregistered-evolution-help-title': 'Evolução dos ativos - inscrição',
    'actives-notregistered-evolution-help-message': 'Este indicador representa o número de utilizadores ativos subtraindo os utilizadores registrados .',

    // ActivityRegisteredUsers
    'registered-title': 'utilizadores registrados - {month}',
    'registered-kpi-title': 'Inscritos',
    'registered-kpi-help-title': 'Inscritos',
    'registered-kpi-help-message': 'Este indicador representa o número de utilizadores que se inscreveram no mês de "{month}".',
    'registered-inactives-kpi-title': 'Percentagem de inscritos inativos',
    'registered-inactives-kpi-help-title': 'Percentagem de inscritos inativos',
    'registered-inactives-kpi-help-message': 'Este indicador representa a porporção entre o número de utilizadores que se inscreveram no mês de "{month}" sem estarem relacionados com o número total de utilizadores registrados no mês.',
    'registered-inactives-evolution-title': 'Evolução das inscrições',
    'registered-inactives-evolution-help-title': 'Evolução das inscrições',
    'registered-inactives-evolution-help-message': 'Este indicador representa o número de utilizadores inscritos.',

    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs & Respostas - {month}',
    'whasqs-answers-kpi-title': 'Número de Whasqs et respostas',
    'whasqs-answers-kpi-help-title': 'Número de Whasqs et respostas',
    'whasqs-answers-kpi-help-message': 'Este indicador representa o número de whasqs publicados mais o número de respostas publicadas no mês de "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Número de Whasqs/ autor de whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Número de Whasqs/ autor de whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'Este indicador representa o número de whasqs publicados no mês de "{month}" por autor de whasqs.',
    'answers-kpi-title': 'Número de respostas',
    'answers-kpi-help-title': 'Número de respostas',
    'answers-kpi-help-message': 'Este indicador representa o número de respostas publicadas no mês de "{month}".',
    'answers-by-creator-kpi-title': 'Número de respostas / autor de respostas',
    'answers-by-creator-kpi-help-title': 'Número de respostas / autor de respostas',
    'answers-by-creator-kpi-help-message': 'Este indicador representa o número de respostas publicadas no mês de "{month}" por autor de resposta.',
    'whasqs-with-contribution-kpi-title': 'Percentagem de Whasqs com interação',
    'whasqs-with-contribution-kpi-help-title': 'Percentagem de Whasqs com interação',
    'whasqs-with-contribution-kpi-help-message': 'Este indicador representa a participação dos Whasqs que receberam respostas no mês de "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Percentagem de Whasqs com interação DIA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Percentagem de Whasqs com interação DIA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Este indicador representa o número de whasqs que recebream respostas.',
    'whasqs-resolved-part-kpi-title': 'Percentagem de Whasqs resolvidos',
    'whasqs-resolved-part-kpi-help-title': 'Percentagem de Whasqs resolvidos',
    'whasqs-resolved-part-kpi-help-message': 'Este indicador representa o número de whasqs que foram resolvidos no mês de"{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Percentagem de Whasqs resolvidos DIA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Percentagem de Whasqs resolvidos DIA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Este indicador representa o número de whasqs que foram resolvidos.',
    'whasqs-evolution-title': 'Evolução do número de whasqs',
    'whasqs-evolution-help-title': 'Evolução do número de whasqs',
    'whasqs-evolution-help-message': 'Este indicador representa o número de whasqs acumulados.',
    'answers-evolution-title': 'Evolução do número de respostas',
    'answers-evolution-help-title': 'Evolução do número de respostas',
    'answers-evolution-help-message': 'Este indicador representa o número de respostas acumuladas.',

    // ActivitySkills
    'skills-title': 'Competências',
    'skills-dda-kpi-title': 'Número total de competências identificadas DIA',
    'skills-dda-kpi-help-title': 'Número total de competências identificadas DIA',
    'skills-dda-kpi-help-message': 'Este indicador representa o número de competências que foram identificadas pelos whaqers desde o início da actividade.',
    'skills-part-kpi-title': 'Parte das competências ùnicas identificadas ',
    'skills-part-kpi-help-title': 'Parte das competências únicas identificadas',
    'skills-part-kpi-help-message': 'Este indicador representa a porporção entre o número de competências únicas identificadas pelos whasqers desde a criação da atividade em relação ao número de comptências existentes.',
    'skills-evolution-title': 'Evolução do número de competências identificadas nos whasqs',
    'skills-evolution-help-title': 'Evolução do número de competências identificadas nos whasqs',
    'skills-evolution-help-message': 'Este indicador representa o número de competências identificadas nos whasqs .',
    'most-used-cats-whasqs-kpi-title': 'Top 5 das principais categorias mais utilizadas no whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 das principais categorias mais utilizadas no whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'Nesta tabela pode aceder às 5 categorias que contêm o maior número de competências  usadas nos whasqs.',
    'most-used-cats-whasqs-kpi-help-message-2': 'As bolas coloridas representam o número de comptências usadas nos whasqs de categorias correspondentes.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 das principais competências mais utilizadas nos whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 das principais competências mais utilizadas nos whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'Nesta tabela pode aceder às 5 competências mais usadas nos whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'As bolas coloridas representam o número utilizações dos whasqs de cada competência.',
    'most-used-whasqers-kpi-title': 'Top 5 das competências mais sugeridas pelos whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 das competências mais sugeridas pelos whasqers',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers dans leur profil.', /* TODO */
    'most-used-whasqers-kpi-help-message-2': 'As bolas coloridas representam o número de sugestões dadas pelos whasqers por cada competência.',
    'less-used-whasqers-kpi-title': 'Top 5 das competências menos sugeridas pelos whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 das competências menos sugeridas pelos whasqers',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés par les whasqers dans leur profil.', /* TODO */
    'less-used-whasqers-kpi-help-message-2': 'As bolas coloridas representam o número de sugestões dadas pelos whasqers por cada competência.',

    // TimeSavings
    'time-savings-title': 'Ganho de tempo - {month}',
    'minutes-earned-kpi-title': 'Minutos ganhos no mês',
    'minutes-earned-kpi-help-title': 'Minutos ganhos no mês',
    'minutes-earned-kpi-help-message': 'Este indicador representa o número de minutos ganhos no mês de "{month}".',
    'minutes-earned-dda-kpi-title': 'Minutos ganhos DIA',
    'minutes-earned-dda-kpi-help-title': 'Minutos ganhos DIA',
    'minutes-earned-dda-kpi-help-message': 'Este indicador representa o número de minutos ganhos desde o início da atividade.',
    'minutes-earned-month-kpi-title': 'Minutos ganhos no mês',

    // Podium
    'podium-title': 'Pódio',
    'whasqers-of-month': 'Whasqers do mês de',
    'no-podium-for-selected-month': 'Nenhum pódio está disponível para o mês selecionado',

    // Card-user
    'answers-label': 'RESPOSTAS',
    'solutions-label': 'SOLUÇÕES',
    'see-profile': 'Ver perfil',

    // Search
    'search-title': 'Pesquisa',
    'search-by-name-placeholder': 'Pesquisa por nome...',
    'no-result-select-criteria': 'Nenhum resultado. Preencha pelo menos um critério.',

    // CategoriesSearchBlock
    'dynamic-search-title': 'Pesquisa dinâmica',

    // SkillsCategories
    'skills-categories-title': 'Competências & Categorias',
    'update-cat-for-lang': 'Modificação da categoria pelo idioma {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modificação da competência pela categoria "{cat}" e o idioma PT',
    'add-cat-for-lang-fr': 'Adicionar a categoria para o idioma PT',
    'add-skill-for-cat-and-lang-fr': 'Adicionar a competência  para a categoria"{cat}" e o idioma PT',
    'delete-cat-confirm-message': 'Tem certeza de que deseja excluir esta categoria? ?',
    'delete-skill-confirm-message': 'Tem certeza de que deseja excluir esta competência ?',
    'choose-lang': 'Escolher um idioma',
    'add-lang': 'Adicionar um idioma',
    'add-cat': 'Adicionar uma categoria',

    // InfoMessage
    'cat-deleted': 'A categoria "{cat}" foi apagada.',
    'error-deleting-cat': 'Ocorreu um erro no momento de excluir a categoria"{cat}".',
    'skill-deleted': 'A competência "{skill}" foi apagada.',
    'error-deleting-skill': 'Ocorreu um erro no momento de apagar a competência"{skill}".',

    // SkillCategoriesModal
    'already-existing-cat': 'Categoria(s) que já existe(m)',
    'already-existing-skill': 'Competência (s) que já existe(m)',
    'no-existing-cat': 'Nenhuma categoria existente',
    'no-existing-skill': 'Nenhuma competência existente',

    // CreateLanguageModal
    'add-new-lang': 'Adicionar um novo idioma',
    'already-implemented-langs': 'Idiomas já adicionados',

    // WhasqsList
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Tem a certeza de que deseja bloquear este whasq ?',
    'unblock-whasq-confirm-message': 'Tem a certeza de que deseja desbloquear este whasq ?',
    'ban-user-confirm-message': 'Tem a certeza de que deseja banir este utilizador  ?',
    'unban-user-confirm-message': 'Tem a certeza de que deseja remover a proibição para este utilizador ?',
    'remove-whasq-confirm-message': 'Tem a certeza de que deseja apagar este whasq ?',
    'add-whasq': 'Adicionar um Whasq',
    'whasqs-list': 'Lista de Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Criação',
    'whasqs-column-update': 'Atualização',
    'whasqs-column-title': 'Título',
    'whasqs-column-status': 'Estatuto',
    'whasqs-column-urgent': 'Urgente',
    'whasqs-column-answers': 'Respostas',
    'whasqs-column-read': 'Lidas',
    'whasqs-column-creator': 'Autor',
    'whasqs-column-skills': 'Competências',
    'whasqs-column-actions': 'Ações',
    'whasq-resolved-by': 'Resolvido pelo(a)',
    'whasq-resolved-at': 'no',
    'whasqs-action-save-updates': 'Guardar as modificações',
    'whasqs-action-edit-whasq': 'Editar o whasq',
    'whasqs-action-unblock-whasq': 'Desbloquear o whasq',
    'whasqs-action-block-whasq': 'Bloquear o whasq',
    'whasqs-action-see-whasq-channel': 'Veja o fio de atualidade do whasq',
    'whasqs-action-unban-user': 'Remover a proibição para este utilizador',
    'whasqs-action-ban-user': 'Banir utilizador ',
    'whasqs-action-remove-whasq': 'Apagar o whasq',
    'whasqs-notify-around': 'Notificar ao meu redor',
    'whasqs-language': 'Idioma',

    // WhasqChannelModal
    'whasq-channel-title': 'Conversa do whasq "{whasq-title}"',
    'usefull-answer': 'útil(s)',
    'champion-answer': 'CAMPEÃO(Ã)',
    'whasq-channel-edit-whasq-title': 'Título',
    'whasq-channel-edit-whasq-message': 'Mensagem',
    'whasq-channel-edit-answer-message': 'Mensagem',
    'whasq-channel-block-answer-confirm': 'Tem a certeza de que deseja bloquear esta resposta ?',
    'whasq-channel-unblock-answer-confirm': 'Tem a certeza de que deseja desbloquear esta resposta ?',
    'whasq-channel-delete-answer-confirm': 'Tem a certeza de que deseja apagar esta resposta ?',

    // AddWhasqModal
    'add-whasq-title': 'Adicionar um novo whasq',
    'add-whasq-item-title': 'Título',
    'add-whasq-item-message': 'Mensagem',
    'add-whasq-item-exchange': 'Em troca',
    'add-whasq-item-optionnal': 'Opcional',
    'add-whasq-item-channel': 'Canal',
    'add-whasq-item-first-skill': 'Primeira competência',
    'add-whasq-item-second-skill': 'Segunda competência',
    'add-whasq-item-third-skill': 'Terceira competência',
    'add-whasq-item-notify-around': 'Notificar ao meu redor ?',
    'add-whasq-item-urgent': 'Urgente ?',
    'add-whasq-item-send-everyone': 'Enviar a toda a gente ?',
    'add-whasq-skill-required': 'É obrigatório especificar pelo menos uma competência.',
    'add-whasq-title-required': 'É obrigatório especificar pelo menos o título.',
    'add-whasq-message-required': 'É obrigatório especificar a mensagem.',

    // WhasqsReports
    'whasqs-reports-title': 'Whasqs denúnciados',
    'whasqs-reports-unblock-whasq-confirm-message': 'Tem a certeza de que deseja desbloquear este whasq ?',
    'whasqs-reports-unban-user-confirm-message': 'Tem a certeza de que deseja remover a proibição para este utilizador ?',
    'whasqs-reports-ban-user-confirm-message': 'Tem a certeza de que deseja banir este utilizador ?',
    'whasqs-reports-remove-whasq-confirm-message': 'Tem a certeza de que deseja apagar este whasq ?',
    'whasqs-reports-list': 'Lista de Whasqs denúnciados',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Data de criação',
    'whasqs-reports-column-last-update': 'Ùltima atualização',
    'whasqs-reports-column-title': 'Título',
    'whasqs-reports-column-status': 'Estatuto',
    'whasqs-reports-column-urgent': 'Urgente',
    'whasqs-reports-column-answers': 'Respostas',
    'whasqs-reports-column-creator': 'Autor',
    'whasqs-reports-column-reported-by': 'Denúnciado por',
    'whasqs-reports-column-actions': 'Ação',
    'whasq-reports-resolved-by': 'Resolvido pelo(a)',
    'whasq-reports-resolved-at': 'no',
    'whasqs-reports-action-save-updates': 'Guardar as modificações',
    'whasqs-reports-action-edit-whasq': 'Editar o whasq',
    'whasqs-reports-action-unblock-whasq': 'Desbloquear o whasq',
    'whasqs-reports-action-see-whasq-channel': 'Veja o fio de atualidade do whasq',
    'whasqs-reports-action-unban-user': 'Remover a proibição para este utilizador',
    'whasqs-reports-action-ban-user': 'Banir utilizador',
    'whasqs-reports-action-remove-whasq': 'Apagar do whasq',

    // AnswersReports
    'answers-reports-title': 'Lista de respostas denúnciadas',
    'answers-reports-unblock-answer-confirm-message': 'Tem a certeza de que deseja desbloquear esta resposta ?',
    'answers-reports-unban-user-confirm-message': 'Tem a certeza de que deseja remover a proibição para este utilizador ?',
    'answers-reports-ban-user-confirm-message': 'Tem a certeza de que deseja banir este utilizador ?',
    'answers-reports-remove-answer-confirm-message': 'Tem a certeza de que deseja apagar esta resposta ?',
    'answers-reports-list': 'Lista de respostas denúnciadas',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Data de criação',
    'answers-reports-column-last-update': 'Ùltima atualização',
    'answers-reports-column-message': 'Mensagem',
    'answers-reports-column-usefull-count': 'n° uteis',
    'answers-reports-column-champion': 'Campeão ?',
    'answers-reports-column-creator': 'Autor',
    'answers-reports-column-reported-by': 'Denúnciado por',
    'answers-reports-column-actions': 'Ações',
    'answers-reports-action-save-updates': 'Guardar as modificações',
    'answers-reports-action-edit-answer': 'Editar a resposta',
    'answers-reports-action-unblock-answer': 'Desbloquear a resposta',
    'answers-reports-action-see-whasq-channel': 'Veja o fio de atualidade do whasq',
    'answers-reports-action-unban-user': 'Remover a proibição para este utilizador',
    'answers-reports-action-ban-user': 'Banir utilizador',
    'answers-reports-action-remove-answer': 'Apagar reposta',

    // Users
    'users-title': 'Utilizadores',
    'users-ban-confirm-message': 'Tem a certeza de que deseja banir este utilizador ?',
    'users-unban-confirm-message': 'Tem a certeza de que deseja remover a proibição para este utilizador ?',
    'users-archive-confirm-message': 'Tem a certeza de que deseja arquivar este utilizador ?',
    'users-import-csv': 'Importar CSV',
    'users-list': 'Lista de Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Data de inscrição',
    'users-column-last-connection': 'Última conexão',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nome completo',
    'users-column-title': 'Título',
    'users-column-email': 'E-mail',
    'users-column-actions': 'Ações',
    'users-action-see-profile': 'Ver perfil',
    'users-action-unban-user': 'Remover a proibição para este utilizador',
    'users-action-ban-user': 'Banir utilizador',
    'users-action-archive-user': 'Arquivar este utilizador',
    'users-import-starting': 'A importação de utilizadores começou bem',
    'users-action-consider-user-admin': 'Considere este utilizador como administrador',
    'users-action-stop-consider-user-admin': 'Não considere mais este utilizador como administrador',
    'users-confirm-consider-admin': 'Tem a certeza de que deseja considerar este utilizador como administrador ?',
    'users-confirm-dont-consider-admin': 'Tem a certeza de que já não deseja considerar este utilizador como administrador ?',
    'users-action-consider-user-admin-success': 'Este utilizador agora é administrador.',
    'users-action-stop-consider-user-admin-success': 'O utilizador id {userId} já não é administrador .',
    'users-action-switch-role': 'Changer le rôle de cet utilisateur', /* TODO */
    'users-column-geolocated': 'Geolocalizado',
    'error-file-format': 'O formato do ficheiro não está correto',
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
    'users-import-title': 'Importação de utilizadores',
    'import-users-file-limit': 'Apenas os  ficheiros CSV inferiores a 1 MB são aceitos',
    'import-users-error': 'Ocorreu um erro durante a importação. Por favor, tente novamente.',
    'import-users-btn': 'Importar de utilizadores',
    'import-users-expected-format': 'Formato pré-definido',
    'import-users-fullname': 'Nome completo',
    'import-users-email': 'E-mail',
    'import-users-job-position': 'Cargo',
    'import-users-phone': 'Telefone',
    'import-users-download-exemple': 'Fazer o download do exemplo',
    'import-users-instructions-part-1': 'Complete o exemplo e salvaguarde-o no formato csv (separado por ponto e vírgula)',
    'import-users-instructions-part-2': '(4 colunas APENAS na ordem DEFINIDA)',

    // Targets
    'targets-title': 'Objectivos & Jogos',
    'targets-update-message': 'O objectivo "{target}" foi atualizado',
    'targets-geoloc-perimeter-updated': 'O perímetro da geolocalização foi atualizado',
    'targets-points-atribution-updated': 'A atribuição de pontos foi atualizada',
    'targets-target': 'Objectivos',
    'targets-trimester': '3 meses',
    'targets-bimester': '6 meses',
    'targets-year': '12 meses',
    'targets-active-users': 'utilizadores ativos',
    'targets-geoloc-perimeter': 'O perímetro de geolocalização',
    'targets-perimeter': 'Perímetro',
    'targets-gamification': 'Jogos',
    'targets-approved-answer': 'Resposta aprovada',
    'targets-usefull-answer': 'Resposta útil',
    'targets-recommended-skill': 'Competência sugerida',
    'targets-points': 'pontos',
    
    // Header
    'header-profile': 'Perfil',
    'header-logout': 'Fechar sessão',
    'french': 'Francês',
    'english': 'Iglês',
    'spanish': 'Espanhol',
    'italian': 'Italiano',
    'russian': 'Russo',
    'portuguese': 'Português',

    // Sidebar
    'sidebar-navigation': 'Navigação',

    // Profile
    'profile': 'Perfil',
    'profile-title': 'Perfil do utilizador',
    'profile-ban-user-confirm-message': 'Tem a certeza de que deseja bloquar este utilizador ?',
    'profile-edit-skill-confirm-message': 'Atenção, a mudança na competênia será feita de forma global para todos os utilizadores. Tem a  certeza de que deseja continuar?',
    'profile-remove-skill-confirm-message': ' Tem a certeza de que deseja apagar a competência deste utilizador ?',
    'profile-archive-user-confirm-message': 'Tem a certeza de que deseja  arquivar este utilizador ?',
    'whasqer-profile': 'Perfil do Whasqer',
    'profile-account-creation': 'Criação da conta',
    'profile-last-connection': 'Última conexão',
    'profile-last-update': 'Última atualização',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'RESPOSTAS',
    'profile-solutions-column': 'SOLUÇÕES',
    'profile-block-button': 'Bloquear',
    'profile-archive-button': 'Arquivar',
    'profile-user-archived': 'Este utilizador foi arquivado',
    'profile-skills-subtitle': 'Competências',
    'profile-no-listed-skill': 'Nenhuma competência identificada',
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
    'add-skill-for-user': 'Adicionar a competência para {fullname}',
    'already-existing-skills-for-user': 'Competências(s) já existe(m) para o utilizador',
    'available-skills-for-user': 'Competências(s) disponível(eis) para o utilizador',

    // SuperAdminStores
    'store-selection': 'Escolha da store',
    'store-choice-validation': 'Confirmar a escolha da store',

    // StoreLogoUpload
    'choose-company-logo': 'Escolha o logotipo da sua empresa',
    'drop-file-here-or-click': 'Deslize o seu ficheiro aqui ou clique para selecionar o ficheiro a ser importado.',
    'company-logo-size-limit': 'Apenas os ficheiros de imagem inferiores a 1 MB são aceitos.',
    'company-logo-square-required': 'O formato da imagem deve ser quadrado.',
    'error-importing-company-logo': 'Ocorreu um erro durante a importação. Por favor, tente novamente.',
    'import-company-logo': 'Importar o logotipo',

    // Notifications
    'notifications-title': 'Notificações',
    'notifications-list': 'Lista de notificações',
    'notifications-column-id': 'Id',
    'notifications-column-type': 'Tipo',
    'notifications-column-data': 'Dados',
    'notifications-column-owner': 'Proprietário',
    'notifications-column-shared': 'Partilha ?',
    'notifications-column-creation': 'Data de criação',
    'notifications-column-message': 'Mensagem',
    'notifications-no-data': ' Atualmente, não há notificações',
    
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
