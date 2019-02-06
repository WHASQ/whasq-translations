const messages = {

    // Login
    'Email': 'Email',
    'Login': 'Log in',
    'Password': 'Password',
    'Provided by your administrator': 'Provided by your administrator',
    'Remember me': 'Remember me',
    'no-identification-info': 'If you do not have your ID or password, please contact your administrator',
    'bad-credentials': 'Your credentials are incorrect. Try Again.',
    'not-enough-rights': 'You do not have sufficient rights to login.',
    'user-not-found': 'The user was not found.',

    // General 
    'more-info': 'More information',
    'from': 'From',
    'to': 'To',
    'real-time': 'in real time',
    'update': 'Update',
    'delete': 'Delete',
    'previous': 'Previous',
    'next': 'Next',
    'send': 'Send',
    'export-all': 'Export everything',
    'yes': 'Yes',
    'no': 'No',
    'open': 'Open',
    'fullname': 'Full name',
    'job-position': 'Job position',
    'assistance': 'Need help ? Contact jessie@whasq.com (Monday to Friday from 9am to 12am and from 2pm to 6pm Paris Time).',
    'download-attachment': 'Download the attachment',
    'day': 'jour', /* TODO */
    'days': 'jours', /* TODO */
    'waiting': 'En attente...', /* TODO */

    // Menu 
    'activity': 'Activity',
    'actives-users': 'Active users',
    'registered-users': 'Registered users',
    'whasqs-answers': 'Whasqs and Answers',
    'skills': 'Skills',
    'time-savings': 'Time saving',
    'whasqers': 'Whasqers',
    'podium': 'Podium',
    'search': 'Search',
    'manage': 'Manage',
    'skills-categories': 'Skills and Categories',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Reported Whasqs',
    'answers-reports': 'Reported Answers',
    'users': 'Users',
    'admin': 'Administration',
    'targets': 'Objectives and Gamification',
    'notifications': 'Notifications',
    'learning': 'Formation', /* TODO */
    'training-centers': 'Centres de formation', /* TODO */
    'trainings': 'Formations', /* TODO */

    // Activity 
    'eve-computed-kpi': 'indicator calculated on D-1',
    'no-data-for-selected-period': 'No data available for the selected period',
    'no-data-available': 'No data available',

    // ActivityActiveUsers 
    'actives-title': 'Active Users',
    'actives-kpi-title': 'Active',
    'actives-kpi-help-title': 'Active',
    'actives-kpi-help-message': 'This indicator represents the number of users who logged in at least once during the month "{month}".',
    'actives-dda-kpi-title': 'Active SBA',
    'actives-dda-kpi-help-title': 'Active "SBA" (Since the Beginning of the Activity)',
    'actives-dda-kpi-help-message': 'This indicator represents the number of users who logged in since the beginning of the activity.',
    'actives-target-kpi-title': 'Active - Objectives',
    'actives-target-kpi-help-title': 'Active - Objectives',
    'actives-target-kpi-help-message': 'This indicator represents the ratio of the number of users who logged in at least once during the month "{month}" to the defined goal.',
    'actives-evolution-title': 'Evolution of active users',
    'actives-evolution-help-title': 'Evolution of active users',
    'actives-evolution-help-message': 'This indicator represents the number of active users.',
    'actives-dda-evolution-title': 'Evolution of active users SBA',
    'actives-dda-evolution-help-title': 'Evolution of active users SBA',
    'actives-dda-evolution-help-message': 'This indicator represents the total number of active users since the creation of the store.',
    'actives-notregistered-evolution-title': 'Evolution of active users - registration',
    'actives-notregistered-evolution-help-title': 'Evolution of active users - registration',
    'actives-notregistered-evolution-help-message': 'This indicator represents the number of active users by subtracting registered users.',

    // ActivityRegisteredUsers 
    'registered-title': 'Registered users - {month}',
    'registered-kpi-title': 'Registered',
    'registered-kpi-help-title': 'Registered',
    'registered-kpi-help-message': 'This indicator represents the number of users who logged in during the month "{month}".',
    'registered-inactives-kpi-title': 'Percentage of registered but not active users who are',
    'registered-inactives-kpi-help-title': 'Percentage of registered but not active users',
    'registered-inactives-kpi-help-message': 'This indicator represents the ratio between the number of registered users during the month "{month}" without being logged in and the total number of users during the month.',
    'registered-inactives-evolution-title': 'Evolution of registrations',
    'registered-inactives-evolution-help-title': 'Evolution of registrations',
    'registered-inactives-evolution-help-message': 'This indicator represents the number of registered users.',

    // ActivityWhasqs 
    'whasqs-answers-title': 'Whasqs and Answers - {month}',
    'whasqs-answers-kpi-title': 'Number of Whasqs and answers',
    'whasqs-answers-kpi-help-title': 'Number of Whasqs and answers',
    'whasqs-answers-kpi-help-message': 'This indicator represents the number of posted whasqs plus the number of posted answers during the month "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Number of Whasqs / Author of whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Number of Whasqs / author of whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'This indicator represents the number of whasqs posted during the month "{month}" by author of whasqs.',
    'answers-kpi-title': 'Number of answers',
    'answers-kpi-help-title': 'Number of answers',
    'answers-kpi-help-message': 'This indicator represents the number of answers posted during the month "{month}".',
    'answers-by-creator-kpi-title': 'Number of answers / author of answers',
    'answers-by-creator-kpi-help-title': 'Number of answers / author of answers',
    'answers-by-creator-kpi-help-message': 'This indicator represents the number of answers posted during the month "{month}" by author of answers.',
    'whasqs-with-contribution-kpi-title': 'Percentage of whasqs with interactions',
    'whasqs-with-contribution-kpi-help-title': 'Percentage of whasqs with interactions',
    'whasqs-with-contribution-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have received answers during the month "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Percentage of Whasqs with interactions SBA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Percentage of Whasqs with interactions SBA',
    'whasqs-with-contribution-dda-kpi-help-message': 'This indicator represents the percentage of number of whasqs that received answers.',
    'whasqs-resolved-part-kpi-title': 'Percentage of resolved Whasqs',
    'whasqs-resolved-part-kpi-help-title': 'Percentage of resolved Whasqs',
    'whasqs-resolved-part-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have been resolved during the month "{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Percentage of resolved Whasqs SBA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Percentage of resolved Whasqs SBA',
    'whasqs-resolved-part-dda-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have been resolved.',
    'whasqs-evolution-title': 'Evolution of the number of whasqs',
    'whasqs-evolution-help-title': 'Evolution of the number of whasqs',
    'whasqs-evolution-help-message': 'This indicator represents the total number of whasqs.',
    'answers-evolution-title': 'Evolution of the number of answers',
    'answers-evolution-help-title': 'Evolution of the number of answers',
    'answers-evolution-help-message': 'This indicator represents the total number of answers.',

    // ActivitySkills 
    'skills-title': 'Skills',
    'skills-dda-kpi-title': 'Total number of identified skills SBA',
    'skills-dda-kpi-help-title': 'Total number of identified skills SBA',
    'skills-dda-kpi-help-message': 'This indicator represents the number of skills identified by the whasqers since the beginning of the activity.',
    'skills-part-kpi-title': 'Percentage of special skills identified',
    'skills-part-kpi-help-title': 'Percentage of special skills identified',
    'skills-part-kpi-help-message': 'This indicator represents the ratio of the number of special skills that have been identified by the whasqers since the begining of the activity in relation to the number of existing talents.',
    'skills-evolution-title': 'Evolution of the number of identified skills in the whasqs',
    'skills-evolution-help-title': 'Evolution of the number of identified skills in the whasqs',
    'skills-evolution-help-message': 'This indicator represents the number of identified skills in the whasq.',
    'most-used-cats-whasqs-kpi-title': 'Top 5 most used categories in the whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 most used categories in the wahsqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'In this table, you will find 5 categories that contain the most used skills in the whasqs.',
    'most-used-cats-whasqs-kpi-help-message-2': 'The coloured points represent the number of used skills in the whasqs for the corresponding category.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 most used skills in the whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 most used skills in the whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'In this table, you will find the 5 most used skills in the whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'The coloured points represent the number of use of each skill in the whasqs.',
    'most-used-whasqers-kpi-title': 'Top 5 most used skills by the whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 most used skills by the whasqers',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers dans leur profil.', /* TODO */
    'most-used-whasqers-kpi-help-message-2': 'The coloured points represent the number of identification of each skill by the whasqers.',
    'less-used-whasqers-kpi-title': 'Top 5 least used skills by the whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 least used skills by the whasqers',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés par les whasqers dans leur profil.', /* TODO */
    'less-used-whasqers-kpi-help-message-2': 'The coloured points represent the number of identification of each talent by the whasqers.',

    // TimeSavings 
    'time-savings-title': 'Time saving - {month}',
    'minutes-earned-kpi-title': 'Minutes won this month',
    'minutes-earned-kpi-help-title': 'Minutes won this month',
    'minutes-earned-kpi-help-message': 'This indicator represents the number of minutes won during the month "{month}".',
    'minutes-earned-dda-kpi-title': 'Minutes won SBA',
    'minutes-earned-dda-kpi-help-title': 'Minutes won SBA',
    'minutes-earned-dda-kpi-help-message': 'This indicator represents the number of minutes won since the beginning of the activity.',
    'minutes-earned-month-kpi-title': 'Minutes won this month',

    // Podium 
    'podium-title': 'Podium',
    'whasqers-of-month': 'Whasqers of',
    'no-podium-for-selected-month': 'The podium is not available for the selected month',

    // Card-user 
    'answers-label': 'ANSWERS',
    'solutions-label': 'SOLUTIONS',
    'see-profile': 'See the profile',
    
    // Search 
    'search-title': 'Search',
    'search-by-name-placeholder': 'Search by name...',
    'no-result-select-criteria': 'No result. Please select at least one character.',

    // CategoriesSearchBlock 
    'dynamic-search-title': 'Dynamic search',

    // SkillsCategories 
    'skills-categories-title': 'Skills and Categories',
    'update-cat-for-lang': 'Update the category for the language {lang}',
    'update-skill-for-cat-and-lang-fr': 'Update the skill for the category "{cat}" and the language EN',
    'add-cat-for-lang-fr': 'Add category for EN language',
    'add-skill-for-cat-and-lang-fr': 'Add skill for the category "{cat}" for EN language',
    'delete-cat-confirm-message': 'Are you sure you want to delete this category?',
    'delete-skill-confirm-message': 'Are you sure you want to delete this talent?',
    'choose-lang': 'Choose the language',
    'add-lang': 'Add a language',
    'add-cat': 'Add a category',

    // InfoMessage 
    'cat-deleted': 'The category "{cat}" has been deleted.',
    'error-deleting-cat': 'Something happened during the removal of the category "{cat}".',
    'skill-deleted': 'The talent "{skill}" has been deleted.',
    'error-deleting-skill': 'Something happened during the removal of the skill "{skill}".',

    // SkillCategoriesModal 
    'already-existing-cat': 'Already existing category/categories',
    'already-existing-skill': 'Already existing skill(s)',
    'no-existing-cat': 'No existing category',
    'no-existing-skill': 'No existing skill',

    // CreateLanguageModal 
    'add-new-lang': 'Add a new language',
    'already-implemented-langs': 'Languages already implemented',

    // WhasqsList 
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Are you sure you want to block this whasq?',
    'unblock-whasq-confirm-message': 'Are you sure you want to unblock this whasq?',
    'ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'unban-user-confirm-message': 'Are you sure you want to remove the ban for this user?',
    'remove-whasq-confirm-message': 'Are you sure you want to delete this whasq?',
    'add-whasq': 'Add a Whasq',
    'whasqs-list': 'List of Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creation',
    'whasqs-column-update': 'Update',
    'whasqs-column-title': 'Title',
    'whasqs-column-status': 'Status',
    'whasqs-column-urgent': 'Urgent',
    'whasqs-column-answers': 'Answers',
    'whasqs-column-read': 'Read',
    'whasqs-column-creator': 'Author',
    'whasqs-column-skills': 'Skills',
    'whasqs-column-actions': 'Actions',
    'whasq-resolved-by': 'Resolved by',
    'whasq-resolved-at': 'on',
    'whasqs-action-save-updates': 'Save the updates',
    'whasqs-action-edit-whasq': 'Edit the whasq',
    'whasqs-action-unblock-whasq': 'Unblock the whasq',
    'whasqs-action-block-whasq': 'Block the whasq',
    'whasqs-action-see-whasq-channel': 'See the discussion of the whasq',
    'whasqs-action-unban-user': 'Remove the ban of the user',
    'whasqs-action-ban-user': 'Ban the user',
    'whasqs-action-remove-whasq': 'Removal of the whasq',
    'whasqs-notify-around': 'Notify around me',
    'whasqs-language': 'Language',

    // WhasqChannelModal 
    'whasq-channel-title': 'Whasq title "{whasq-title}"',
    'usefull-answer': 'useful',
    'champion-answer': 'CHAMPION',
    'whasq-channel-edit-whasq-title': 'Title',
    'whasq-channel-edit-whasq-message': 'Message',
    'whasq-channel-edit-answer-message': 'Message',
    'whasq-channel-block-answer-confirm': 'Are you sure you want to block this answer?',
    'whasq-channel-unblock-answer-confirm': 'Are you sure you want to unblock this answer?',
    'whasq-channel-delete-answer-confirm': 'Are you sure you want to delete this answer?',
    
    // AddWhasqModal 
    'add-whasq-title': 'Add a new whasq',
    'add-whasq-item-title': 'Title',
    'add-whasq-item-message': 'Message',
    'add-whasq-item-exchange': 'Exchange',
    'add-whasq-item-optionnal': 'Optional',
    'add-whasq-item-channel': 'Channel',
    'add-whasq-item-first-skill': 'First skill',
    'add-whasq-item-second-skill': 'Second skill',
    'add-whasq-item-third-skill': 'Third skill',
    'add-whasq-item-notify-around': 'Notify around you?',
    'add-whasq-item-urgent': 'Urgent?',
    'add-whasq-item-send-everyone': 'Send to everyone?',
    'add-whasq-skill-required': 'You have to choose at least one skill.',
    'add-whasq-title-required': 'The title field is required.',
    'add-whasq-message-required': 'The message field is required.',

    // WhasqsReports 
    'whasqs-reports-title': 'Reported Whasqs',
    'whasqs-reports-unblock-whasq-confirm-message': 'Are you sure you want to unblock this whasq?',
    'whasqs-reports-unban-user-confirm-message': 'Are you sure you want to remove this ban of this user?',
    'whasqs-reports-ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'whasqs-reports-remove-whasq-confirm-message': 'Are you sure you want to delete this whasq?',
    'whasqs-reports-list': 'List of reported Whasqs ',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Creation date',
    'whasqs-reports-column-last-update': 'Last update',
    'whasqs-reports-column-title': 'Title',
    'whasqs-reports-column-status': 'Status',
    'whasqs-reports-column-urgent': 'Urgent',
    'whasqs-reports-column-answers': 'Answers',
    'whasqs-reports-column-creator': 'Author',
    'whasqs-reports-column-reported-by': 'Reported by',
    'whasqs-reports-column-actions': 'Actions',
    'whasq-reports-resolved-by': 'Resolved by',
    'whasq-reports-resolved-at': 'on',
    'whasqs-reports-action-save-updates': 'Save the updates',
    'whasqs-reports-action-edit-whasq': 'Edit the whasq',
    'whasqs-reports-action-unblock-whasq': 'Unblock the whasq',
    'whasqs-reports-action-see-whasq-channel': 'See the discussion of the whasq',
    'whasqs-reports-action-unban-user': 'Remove the ban of this user',
    'whasqs-reports-action-ban-user': 'Ban this user',
    'whasqs-reports-action-remove-whasq': 'Removal of the whasq',

    // AnswersReports 
    'answers-reports-title': 'Reported answers',
    'answers-reports-unblock-answer-confirm-message': 'Are you sure you want to unblock this answer?',
    'answers-reports-unban-user-confirm-message': 'Are you sure you want to remove the ban of this user?',
    'answers-reports-ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'answers-reports-remove-answer-confirm-message': 'Are you sure you want to delete this answer?',
    'answers-reports-list': 'List of the reported answers',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Creation date',
    'answers-reports-column-last-update': 'Last update',
    'answers-reports-column-message': 'Message',
    'answers-reports-column-usefull-count': 'Number of likes',
    'answers-reports-column-champion': 'Champion?',
    'answers-reports-column-creator': 'Author',
    'answers-reports-column-reported-by': 'Reported by',
    'answers-reports-column-actions': 'Actions',
    'answers-reports-action-save-updates': 'Save the updates',
    'answers-reports-action-edit-answer': 'Edit the answer',
    'answers-reports-action-unblock-answer': 'Unblock the answer',
    'answers-reports-action-see-whasq-channel': 'See the discussion of the whasq',
    'answers-reports-action-unban-user': 'Remove the ban of the user',
    'answers-reports-action-ban-user': 'Ban the user',
    'answers-reports-action-remove-answer': 'Removal of the answer',

    // Users 
    'users-title': 'Users',
    'users-ban-confirm-message': 'Are you sure you want to ban this user?',
    'users-unban-confirm-message': 'Are you sure you to remove the ban of this user?',
    'users-archive-confirm-message': 'Are you sure you want to archive this user?',
    'users-import-csv': 'Import CSV',
    'users-list': 'List of Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Registration date',
    'users-column-last-connection': 'Last connection',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Full Name',
    'users-column-title': 'Title',
    'users-column-email': 'Email',
    'users-column-actions': 'Actions',
    'users-action-see-profile': 'See the profile',
    'users-action-unban-user': 'Remove the ban of the user',
    'users-action-ban-user': 'Ban the user',
    'users-action-archive-user': 'Archive a user',
    'users-import-starting': 'The import of contacts has begun',
    'users-action-consider-user-admin': 'Consider this user as an administrator',
    'users-action-stop-consider-user-admin': 'Do not consider this user as an administrator anymore',
    'users-confirm-consider-admin': 'Are you sure you want to consider this user as an administrator?',
    'users-confirm-dont-consider-admin': 'Are you sure you do not want to consider this user as an administrator anymore?',
    'users-action-consider-user-admin-success': 'The user with the id {userId} is now administrator.',
    'users-action-stop-consider-user-admin-success': 'The user with the id {userId} is no longer an administrator.',
    'users-action-switch-role': 'Changer le rôle de cet utilisateur', /* TODO */
    'users-column-geolocated': 'Geolocated',
    'error-file-format': 'The file format is not correct',
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
    'users-import-title': 'Import contacts',
    'import-users-file-limit': 'Only the CSV files smaller than 1Mo are accepted',
    'import-users-error': 'Something went wrong during the import. Please try again.',
    'import-users-btn': 'Import contacts',
    'import-users-expected-format': 'Expected format',
    'import-users-fullname': 'Full name',
    'import-users-email': 'Email',
    'import-users-job-position': 'Job position',
    'import-users-phone': 'Number phone',
    'import-users-download-exemple': 'Télécharger l\'exemple', /* TODO */
    'import-users-instructions-part-1': 'Compléter l\'exemple téléchargé et sauvegardez le en format csv (valeurs séparées par des point-virgules)', /* TODO */
    'import-users-instructions-part-2': '(4 colonnes SEULEMENT dans l\'ordre DEFINI)', /* TODO */

    // Targets 
    'targets-title': 'Objectives and Gamification',
    'targets-update-message': 'The objective "{target}" has been updated',
    'targets-geoloc-perimeter-updated': 'The geolocalization perimeter has been updated',
    'targets-points-atribution-updated': 'The attribution of points has been updated',
    'targets-target': 'Objectives',
    'targets-trimester': '3 months',
    'targets-bimester': '6 months',
    'targets-year': '12 months',
    'targets-active-users': 'active users',
    'targets-geoloc-perimeter': 'Geolocalization perimeter',
    'targets-perimeter': 'Perimeter',
    'targets-gamification': 'Gamification',
    'targets-approved-answer': 'approved answer',
    'targets-usefull-answer': 'Useful answer',
    'targets-recommended-skill': 'Recommended skill',
    'targets-points': 'points',

    // Header 
    'header-profile': 'Profile',
    'header-logout': 'Sign out',
    'french': 'French',
    'english': 'English',
    'spanish': 'Spanish',
    'italian': 'Italian',
    'russian': 'Russian',
    'portuguese': 'Portuguese',

    // Sidebar 
    'sidebar-navigation': 'Navigation',

    // Profile 
    'profile': 'Profile',
    'profile-title': 'User’s profile',
    'profile-ban-user-confirm-message': 'Are you sure you want to block this user?',
    'profile-edit-skill-confirm-message': 'Be carreful, the skill editing will be done for all the users. Are you sure you want to continue?',
    'profile-remove-skill-confirm-message': 'Are you sure you want to remove this skill from this user?',
    'profile-archive-user-confirm-message': 'Are you sure you want to archive this user?',
    'whasqer-profile': 'Whasqer’s profile',
    'profile-account-creation': 'Account creation',
    'profile-last-connection': 'Last connection',
    'profile-last-update': 'Last update',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'ANSWERS',
    'profile-solutions-column': 'SOLUTIONS',
    'profile-block-button': 'Block',
    'profile-archive-button': 'Archive',
    'profile-user-archived': 'This user has been archivated',
    'profile-skills-subtitle': 'His/Her talents',
    'profile-no-listed-skill': 'No talent listed',
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
    'add-skill-for-user': 'Add a skill for {fullname}',
    'already-existing-skills-for-user': 'Already existing skill(s) for this user',
    'available-skills-for-user': 'Available skill(s) for this user',

    // SuperAdminStores 
    'store-selection': 'Choice of the store',
    'store-choice-validation': 'Validate the choice of the store',

    // StoreLogoUpload 
    'choose-company-logo': 'Choose the logo of your company',
    'drop-file-here-or-click': 'Drop your file here or click to select the file to import',
    'company-logo-size-limit': 'Only image files smaller than 1mo are accepted',
    'company-logo-square-required': 'The image must have a square format.',
    'error-importing-company-logo': 'Something happened during the import. Please try again.',
    'import-company-logo': 'Import the logo',

    // Notifications
    'notifications-title': 'Notifications',
    'notifications-list': 'Notifications list',
    'notifications-column-id': 'ID',
    'notifications-column-type': 'Type',
    'notifications-column-data': 'Data',
    'notifications-column-owner': 'Owner', 
    'notifications-column-shared': 'Shared?',
    'notifications-column-creation': 'Creation date', 
    'notifications-column-message': 'Message',
    'notifications-no-data': 'You have no notification',
    
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
