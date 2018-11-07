const messages = {
    'Email': 'E-mail',
    'Register': 'Inscrever-se',
    'Password': 'Palavra-passe',
    'Remember me': 'Lembrar-se de mim',
    'no-identification-info': 'Se não tiver os seus dados de login, entre em contato com o administrador',
    'login-next': 'Seguinte',
    'login-unrecognized-email-title': 'A conta "{domain}" não existe',
    'login-unrecognized-email-message': 'Por favor, envie um email para jessie@whasq.com.',
    'login-code-sent-title': 'Confirmação de ativação da conta',
    'login-code-sent-message': 'Um e-mail com o link para validar seu endereço de e-mail acabou de ser enviado.',
    'login': 'Conexão',
    'login-email-placeholder': 'E-mail',
    'login-password-placeholder': 'Palavra-passe',
    'login-bad-password': 'A palavra-passe está incorreta. Por favor, tente novamente.',
    'login-error': 'Ocorreu um erro na conexão. Por favor, tente novamente.',
    'login-password-see-password': 'Visualizar a palavra-passe',
    'login-password-not-see-password': 'Esconder a palavra-passe',
    'login-forgotten-or-change-password': 'Palavra-passe esquecida ou modificar palavra-passe  ?',

    //  Global
    'search': 'Procura',
    'previous': 'Anterior',
    'next': 'Seguinte',
    'add': 'Adicionar',
    'error-occured': 'Ocorreu um erro.',
    'first-ranking-suffix': 'ro',
    'second-ranking-suffix': 'do',
    'third-ranking-suffix': 'ro',
    'default-ranking-suffix': 'to',
    'back-to-homepage': 'Voltar ao ecrã inicial',
    'loading': 'Carregar...',

    // Header
    'header-profile': 'Perfil',
    'header-logout': 'Desconectar-se',
    'french': 'Francês',
    'english': 'Inglês',
    'header-ask-info': 'Pedir informações',
    'header-delete-account': 'Apagar a minha conta',
    'header-admin': 'Administrador',
    'header-change-password': 'Modificar palavra-passe',
    'header-faq': 'Perguntas frequentes',
    'header-term-of-use': 'Condições e termos de utilização',
    'header-information-asked': 'Os seus dados foram enviados para seu endereço de e-mail.',
    'header-account-deleted': 'A sua conta foi apagada.',
    'header-password-changed': 'Um email foi-lhe enviado para reiniciar a sua palavra-passe.',

    // Footer
    'footer-privacy-policy': 'Política de Privacidade',
    'footer-assistance': 'Precisa de ajuda ? por favor contate jessie@whasq.com (De segunda à sexta-feira das 9:00 ao 12:00 e das 14:00 às 18:00)',
    'footer-follow-us': 'Siga-nos :',

    // WhasqsSearch
    'whasqs-search-my-skills-filter': 'Pelas minhas comptências',
    'whasqs-search-all-filter': 'Tudo',
    'error-searching-whasqs': 'Ocorreu um erro durante a procura do whasqs',
    'whasqs-more-whasqs-add-skill': 'Para ver mais whasqs, adicione mais competências ao seu perfil.',

    // WhasqDetails
    'whasq-not-found': 'O whasq que à está procura não foi encontrado.',

    // Whasq
    'whasq-days-ago': 'Há {days} dias',
    'whasq-read': 'lido',
    'whasq-read-count': 'Lido {count} vezes',
    'whasq-answers-count': 'Número de respostas',
    'whasq-whasqpoints-solution': 'whasqpontos pela solução',
    'whasq-whasqpoints-usefull-answer': 'whasqpontos por cada resposta útil',
    'whasq-remove-action': 'Apagar o whasq',
    'whasq-edit-action': 'Editar o whasq',
    'whasq-archive-action': 'Arquivar o whasq',
    'whasq-report-action': 'Denúcniar o whasq',
    'whasq-archive-confirm': 'Você tem a certeza que quer arquivar este whasq?',
    'error-archiving-whasq': 'Ocorreu um erro durante arquivamento do seu whasq. Por favor, tente novamente.',
    'whasq-delete-confirm': 'Tem certeza de que deseja excluir este whasq ?',
    'error-deleting-whasq': 'Ocorreu um erro durante a exlusão do seu whasq. Por favor, tente novamente.',
    'whasq-exchange': 'Interagir',
    'whasq-notify-around': 'Notificar as pessoas ao meu redor',
    'whasq-urgent': 'Urgente',
    'whasq-channel': 'Idioma do whasq',
    'whasq-no-media': 'Sem mídia',
    'whasq-media-image': 'Foto whasq',
    'whasq-media-video': 'Vídeo whasq',
    'whasq-media-audio': 'Audio whasq',
    'whasq-media-file': 'Ficheiro whasq',
    'whasq-report-confirm': 'Tem a certeza que deseja denúnciar este Whasq? O criador vai ser notificado. As denúncias abusivas podem resultar na supressão da conta 🙄',
    'whasq-answers-count': '{count} respostas',
    'whasq-answer-count': '{count} resposta',

    // Profile
    'error-getting-user': 'Ocorreu um erro durante a recuperação do perfil do utilizador',
    'user-information-title': 'Minhas informações',
    'user-skills-title': 'Minhas competências',
    'user-channels-title': 'Meus idiomas',
    'user-points': 'pontos',
    'user-answers': 'respostas',
    'user-whasqs': 'whasqs',
    'user-skill-added': 'A competência \'{skillName}\' foi adicionada.',
    'error-adding-skill': 'Ocorreu um erro ao adicionar a competência \'{skillName}\'.',
    'user-skill-removed': 'A competência \'{skillName}\' foi apagada.',
    'error-removing-skill': 'Ocorreu um erro ao apagar a competência \'{skillName}\'.',
    'error-getting-available-skills': 'Ocorreu um erro na recuperação das competências disponíveis.',
    'error-removing-channel': 'Ocorreu um erro na supressão do idioma \'{channelName}\'.',
    'user-channel-removed': 'O idioma \'{channelName}\' foi suprimido.',
    'error-adding-channel': 'Ocorreu um erro ao adicionar o idioma \'{channelName}\'.',
    'user-channel-added': 'O idioma \'{channelName}\' foi adicionado.',
    'error-getting-available-channels': 'Ocorreu um erro na recuperação dos idiomas disponíveis.',
    'error-updating-gdpr': 'Ocorreu um erro ao atualizar os dados do GDPR ',
    'user-updated': 'O utilizador foi modificado',
    'error-updating-user': 'Ocorreu um erro na edição do utilizador',
    'user-delete-skill-confirm': 'Tem a certeza de que deseja apagar a competêntia? "{skillName}" ?',
    'user-delete-channel-confirm': 'Tem a certeza de que deseja apagar o idioma "{channelName}" ?',
    'user-delete-last-channel-impossible': 'Desculpe, tem de especificar pelo menos um idioma no seu perfil.',
    'profile-email-not-available': 'O e-mail não foi especificado ou não está disponível',
    'profile-phone-not-available': 'O número de telefone não foi especificado ou não está disponível',
    'profile-job-position-not-available': 'O cargo/emprego não foi especificado ou não está disponível ',

    // AddUserSkillModal
    'add-user-skill-title': 'Adicionar competência',
    'add-user-skill-subtitle': 'Você tem outras competências, pode adicioná-las !',
    'add-user-skill-subtitle-first-login': 'Você tem outras competências, especifique-as no seu perfil !',
    
    // AddUserChannelModal
    'add-user-channel-title': 'Adicionar idioma',
    'add-user-channel-subtitle': 'Selecionar os idiomas que fala',

    // MediaAttachment
    'media-attachment-download': 'Fazer download do anexo',

    // Notifications
    'error-getting-notifications': 'Ocorreu um erro no momento de recuperar as notificações.',
    'notifications-today': 'Hoje',
    'notifications-past': 'Antigos',
    'notifications-empty': 'Você ainda não tem uma notificação.',
    'notification-message-answer': '{fullname} respondeu ao seu whasq',
    'notification-message-champion': '{fullname} o considerou como campeão do seu whasq !',
    'notification-message-add-points': '+{whasqPoints} whasqpontos',
    'notification-message-usefull': '{fullname} considerou a sua resposta útil !',
    'notification-message-match': '{fullname} criou um whasq que pode interessá-lo(a)',
    'notification-message-recommendation': '{fullname} recomendou-lhe esta competência',
    'notification-message-suggest': '{fullname} sugeriu-lhe a comptência',
    'notification-message-blacklist': '{fullname} denúnciou o seu whasq',
    'notification-message-admin-whasq': '{fullname} publicou un novo whasq',
    'notification-message-tag-user': 'Você foi reomendado  {fullname} pelo whasq',
    'notification-days-ago': 'Há {days} dias',

    // WhasqWrite
    'whasq-write-title': 'Título *',
    'whasq-write-message': 'Mensagem',
    'whasq-write-exchange': 'Interagir',
    'whasq-write-title-placeholder': 'Meu título',
    'whasq-write-message-placeholder': 'Minha mensagem',
    'whasq-write-exchange-placeholder': 'En troca eu proponho... um café',
    'whasq-write-notify-around': 'Notificar apenas os whasqers ao meu redor',
    'whasq-write-urgent': 'É urgente',
    'whasq-write-import-file-title': 'Importar ficheiro (foto, vídeo, audio ou Microsoft Office)',
    'whasq-write-import-drop-here': 'Deposite aqui o seu  anexo.',
    'whasq-write-error-importing-file': 'Ocorreu um erro na importação do ficheiro.',
    'whasq-write-import-file-button': 'Importar o ficheiro',
    'whasq-write-import-requirements': 'O seu ficheiro pode ser em formato de imagem, vídeo, áudio ou Microsoft Office.',
    'whasq-write-import-size-limit': 'O tamanho máximo do ficheiro é de 1mo.',
    'whasq-write-linked-skills': 'Competências relacionadas',
    'whasq-write-linked-channel': 'Idiomas relacionados',
    'whasq-write-change-attachment': 'Mudar ficheiro',
    "whasq-write-preview-whasq": 'Pré-visualizar le whasq',
    'whasq-write-error-title-required': 'O título do whasq é obrigatório',
    'whasq-write-error-message-required': 'A mensagem do whasq é obrigatória',
    'whasq-write-error-skill-required': 'Deve ter pelo menos uma comptência no seu whasq',
    'whasq-write-error-channel-required': 'Em idioma deve ser especificado no whasq',
    'error-getting-usersskills': 'Ocorreu um erro na recuperação das informações do utilizador.',
    'whasq-write-media-attachment-no-preview': 'Visualização indisponível',

    // PreviewWhasqModal
    'preview-whasq-title': 'Visualizar o whasq',

    // Answer
    'answer-button': 'Responder',
    'answer-message-text': 'Mensagem',
    'answer-import-file-title': 'Importar um ficheiro (foto, vídéo ou audio)',
    'answer-import-drop-here': 'Deposite o seu anexo.',
    'answer-error-importing-file': 'Ocorreu um erro durante a importação do ficheiro.',
    'answer-import-file-button': 'Importar o ficheiro',
    'answer-import-requirements': 'O seu ficheiro pode ser em formato de imagem, vidéo, audio ou Microsoft Office.',
    'answer-import-size-limit': 'O tamanho máximo do ficheiro é de 1mo.',
    'answer-change-attachment': 'Mudar de ficheiro',
    'answer-delete-confirm-message': 'Tem a certeza que deseja apagar esta resposta ?',
    'answer-report-confirm-message': 'Tem a certeza que deseja denúnciar esta resposta ?',
    'answer-champion-confirm-message': 'Tem certeza de que deseja definir essa resposta como solução do seu whasq ?',
    'answer-media-attachment-no-preview': 'Pré-visualização não está disponível',
    'answer-empty-content': 'Deve escrever uma mensagem ou adicionar um mídia para enviar sua resposta.',
    'answer-error-usefull-current-user': 'Não pode dar like no seu próprio comentário 😉',
    'answer-placeholder-label': 'Resposta',

    // WhasqPerso
    'whasq-perso-read-times': 'Lido {readUsersCount} vezes',
    'whasq-perso-answers': 'respostas',
    'whasq-perso-answer': 'resposta',

    // Podium
    'podium-ranking-tab-title': 'CLASSIFICAÇÃO',
    'podium-whasqpoints-tab-title': 'MEUS WHASQPONTOS',

    // TimeSavingsModal
    'time-savings-title': 'Ajude-nos a melhorar',
    'time-savings-message': 'Quanto tempo demorou ?',
    'time-savings-half-day': '1/2 dia',
    'time-savings-day': '1 dia',
    'time-savings-two-days': '2 dias',
    'time-savings-three-days': '3 dias',

    // TermOfUse
    'term-of-use-title': 'Condições e termos de utilização',
    'term-of-use-decline-btn': 'Recusar',
    'term-of-use-authorize-btn': 'Autorizar',
    'tof-decline-title': 'É obrigatório aceitar as condições e termos de utilização',
    'tof-decline-message': 'Para usar o aplicação Whasq, é necessário aceitar os Termos de Uso.',

    // Gdpr
    'gdpr-title': 'Consentimento',
    'gdpr-decline-btn': 'Recusar', 
    'gdpr-authorize-btn': 'Autorizar',
    'gdpr-decline-title': 'É obrigatório aceitar as condições e termos de utilização',
    'gdpr-decline-message': 'Para usar a aplicação Whasq, têm de autorizar o uso dos seus dados.',

    // Register
    'register-title': 'Inscrição',
    'register-fullname': 'Nome completo',
    'register-phone': 'Telemóvel',
    'register-job-position': 'Cargo',
    'register-channels': 'Idiomas falados',
    'register-channel-required': 'Tem de adicionar pelo menos um idioma para poder inscrever-se.',
    'register-add': 'Adicionar',
    'register-password': 'Palavra-passe',
    'register-password-confirm': 'Confirmação da palavra-passe ',
    'register-password-format': 'A senha deve conter pelo menos 8 letras, incluindo pelo menos 4 outros caracteres (maiúscula, minúscula, numeral e caractere especial)',
    'register-passwords-dont-match': 'As palavras-passe não correspondem.',
    'register-button': 'Inscrever-se',
    'register-field-required': 'É necessário preencher o campo "{field}" para finalizar a inscrição.',
    'register-password-see-password': 'Ver palavra-passe',
    'register-password-not-see-password': 'Esconder a palavra-passe',

    // Ranking
    'ranking-answers-label': 'RESPOSTAS',
    'ranking-solutions-label': 'SOLUÇÕES',
    'ranking-see-profile': 'Visualizar o perfil',
    'ranking-no-podium-for-selected-month': 'A classificação deste mês não está disponível',
    'ranking-ytd-label': 'Desde o início {year}',

    // Whasqpoint
    'whasqpoint-message-usefull': '{fullname} considerou a sua resposta útil !',
    'whasqpoint-message-solution': '{fullname} considerou-o como o campeão do seu whasq !',
    'whasqpoint-message-recommend': 'Você foi recomendado por {fullname}',
    'whasqpoint-days-ago': '-Há {days} dias',

    // Faq
    'faq-title': 'Perguntas frequentes',

    // DeleteAccountModal
    'delete-account-modal-title': 'Apagar a conta',
    'delete-account-modal-message': 'Atenção,  os seus dados pessoais serão destruídos o que resultará na perda de acesso à aplicação. Por favor, digite a palavra APAGAR na caixa abaixo.',
    'delete-account-modal-button': 'Apagar',
    'delete-account-modal-cancel': 'Anular',
    'delete-account-modal-bad-confirm-word': 'A palavra de confirmação inserida não corresponde a APAGAR. Por favor, tente novamente.',

    // FilterWhasqsModal
    'filter-whasqs-modal-title': 'Filtrar por...',
    'filter-whasqs-modal-recents': 'Recentes',
    'filter-whasqs-modal-olds': 'Antingos',
    'filter-whasqs-modal-resolved': 'Resolvidos',
    'filter-whasqs-modal-not-resolved': 'Não resolvidos',

    // SuggestionsModal
    'suggestions-modal-title': 'Sugestões',
    'suggestions-modal-subtitle': 'É rempo de enriquecer o seu perfil',
    'suggestions-modal-other-skills': 'Outras competências que possam interessá-lo(a) :',
    'suggestions-modal-recommended-by': '{fullname} sugeriu-lhe estas competências:',

    // ZoomImageModal
    'zoom-image-modal-title': 'Ampliar a imagem',

    // UploadProfileImageModal
    'drop-file-here-or-click': 'Desposite aqui  o seu ficheiro ou clique aqui para selecionar o ficheiro que deseja anexar.',
    'profile-image-size-limit': 'Apenas os ficheiros imagem inferiores a 1 MB serão aceites.',
    'error-importing-profile-image': 'Ocorreu um erro ao importar a imagem. Por favor, tente novamente.',
    'import-profile-image': 'Importar imagem',
    'choose-profile-image': 'Escolher a imagem do perfil',
    'profile-image-square-required': 'A imagem deve ter um formato quadrado.',
    
    // TagUserModal
    'tag-user-modal-title': 'Marcar o utilizador',
    'tag-user-modal-search': 'Procurar utilizador',
    
    // TutoModal
    'tuto-modal-title': 'Conselhos e dicas',
    'tuto-modal-homepage-ask-whasq': 'Faça a sua pergunta.',
    'tuto-modal-homepage-my-skills': 'Mostrar os whasqs relacionados com as suas comptências no idioma adicionado no seu perfil.',
    'tuto-modal-homepage-all-skills': 'Visualizar os whasqs no idioma adicionado no seu perfil.',
    'tuto-modal-add-whasq-add-media': 'Adicionar mídia para ilustrar a sua pergunta. Por exemplo, imagem, texto, vídeo ou apenas audio. Também pode usá-los para responder a um whasq.',
    'tuto-modal-add-whasq-add-skill': 'Escolha 3 competências que podem ajudá-lo a resolver o whasq.',
    'tuto-modal-add-whasq-add-channel': 'Selecione o idioma no qual o seu whasq está escrito. A escolha do idioma depende dos idiomas adicionados no seu perfil: fr, es, ru, pt,...',
    'tuto-modal-profile-update': 'Dê vida a esta aplicação atualizando o seu perfil regularmente.',
    
    // MyWhasqs
    'my-whasqs-title': 'Meus whasqs',

    // AddSkillModal
    'add-skill-modal-title': 'Talentos',
    'add-skill-modal-subtitle': 'Os talentos envolvidos neste whasq (3 no máximo):',
}

export default messages