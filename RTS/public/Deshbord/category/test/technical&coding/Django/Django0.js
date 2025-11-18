const questions=[
  {
    "num": 1,
    "question_en": "What is Django?",
    "question_hi": "Django क्या है?",
    "options_en": ["A web framework", "A database", "A programming language", "A web server"],
    "options_hi": ["एक वेब फ्रेमवर्क", "एक डेटाबेस", "एक प्रोग्रामिंग भाषा", "एक वेब सर्वर"],
    "answer_en": "A web framework",
    "answer_hi": "एक वेब फ्रेमवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Django is written in which programming language?",
    "question_hi": "Django किस प्रोग्रामिंग भाषा में लिखा गया है?",
    "options_en": ["Python", "Java", "C++", "Ruby"],
    "options_hi": ["Python", "Java", "C++", "Ruby"],
    "answer_en": "Python",
    "answer_hi": "Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which command is used to create a new Django project?",
    "question_hi": "नया Django प्रोजेक्ट बनाने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["django-admin startproject", "django-admin startapp", "python manage.py runserver", "python setup.py"],
    "options_hi": ["django-admin startproject", "django-admin startapp", "python manage.py runserver", "python setup.py"],
    "answer_en": "django-admin startproject",
    "answer_hi": "django-admin startproject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which command creates a new Django app?",
    "question_hi": "नया Django ऐप बनाने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["python manage.py startapp", "django-admin createapp", "python manage.py runapp", "django-admin newapp"],
    "options_hi": ["python manage.py startapp", "django-admin createapp", "python manage.py runapp", "django-admin newapp"],
    "answer_en": "python manage.py startapp",
    "answer_hi": "python manage.py startapp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which file contains the settings of a Django project?",
    "question_hi": "Django प्रोजेक्ट की सेटिंग्स किस फाइल में होती हैं?",
    "options_en": ["settings.py", "manage.py", "urls.py", "views.py"],
    "options_hi": ["settings.py", "manage.py", "urls.py", "views.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which file defines URL patterns in Django?",
    "question_hi": "Django में URL पैटर्न किस फाइल में परिभाषित किए जाते हैं?",
    "options_en": ["urls.py", "views.py", "models.py", "settings.py"],
    "options_hi": ["urls.py", "views.py", "models.py", "settings.py"],
    "answer_en": "urls.py",
    "answer_hi": "urls.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to render templates in Django views?",
    "question_hi": "Django views में टेम्पलेट रेंडर करने के लिए कौन-सा फंक्शन उपयोग किया जाता है?",
    "options_en": ["render()", "template()", "response()", "display()"],
    "options_hi": ["render()", "template()", "response()", "display()"],
    "answer_en": "render()",
    "answer_hi": "render()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "In Django, which file defines the structure of a database table?",
    "question_hi": "Django में डेटाबेस टेबल की संरचना किस फाइल में परिभाषित की जाती है?",
    "options_en": ["models.py", "views.py", "urls.py", "admin.py"],
    "options_hi": ["models.py", "views.py", "urls.py", "admin.py"],
    "answer_en": "models.py",
    "answer_hi": "models.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Django command is used to apply database migrations?",
    "question_hi": "डेटाबेस माइग्रेशन लागू करने के लिए कौन-सा Django कमांड उपयोग किया जाता है?",
    "options_en": ["python manage.py migrate", "python manage.py makemigrations", "python manage.py runserver", "python manage.py startapp"],
    "options_hi": ["python manage.py migrate", "python manage.py makemigrations", "python manage.py runserver", "python manage.py startapp"],
    "answer_en": "python manage.py migrate",
    "answer_hi": "python manage.py migrate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the default database used by Django?",
    "question_hi": "Django द्वारा उपयोग किया जाने वाला डिफ़ॉल्ट डेटाबेस कौन-सा है?",
    "options_en": ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
    "options_hi": ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
    "answer_en": "SQLite",
    "answer_hi": "SQLite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which command creates migration files in Django?",
    "question_hi": "Django में माइग्रेशन फाइलें बनाने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["python manage.py makemigrations", "python manage.py migrate", "python manage.py collectstatic", "python manage.py startapp"],
    "options_hi": ["python manage.py makemigrations", "python manage.py migrate", "python manage.py collectstatic", "python manage.py startapp"],
    "answer_en": "python manage.py makemigrations",
    "answer_hi": "python manage.py makemigrations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Django file is responsible for running the server?",
    "question_hi": "कौन-सी Django फाइल सर्वर चलाने के लिए जिम्मेदार है?",
    "options_en": ["manage.py", "settings.py", "urls.py", "views.py"],
    "options_hi": ["manage.py", "settings.py", "urls.py", "views.py"],
    "answer_en": "manage.py",
    "answer_hi": "manage.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is Django ORM?",
    "question_hi": "Django ORM क्या है?",
    "options_en": ["Object Relational Mapper", "Online Resource Manager", "Object Rendering Model", "Open Resource Mapping"],
    "options_hi": ["ऑब्जेक्ट रिलेशनल मैपर", "ऑनलाइन रिसोर्स मैनेजर", "ऑब्जेक्ट रेंडरिंग मॉडल", "ओपन रिसोर्स मैपिंग"],
    "answer_en": "Object Relational Mapper",
    "answer_hi": "ऑब्जेक्ट रिलेशनल मैपर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Django file is used to register models in admin?",
    "question_hi": "Django में मॉडल्स को एडमिन में रजिस्टर करने के लिए कौन-सी फाइल उपयोग होती है?",
    "options_en": ["admin.py", "models.py", "apps.py", "urls.py"],
    "options_hi": ["admin.py", "models.py", "apps.py", "urls.py"],
    "answer_en": "admin.py",
    "answer_hi": "admin.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which file is used to define Django middleware?",
    "question_hi": "Django मिडलवेयर को परिभाषित करने के लिए कौन-सी फाइल उपयोग होती है?",
    "options_en": ["settings.py", "middleware.py", "views.py", "urls.py"],
    "options_hi": ["settings.py", "middleware.py", "views.py", "urls.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Django file contains URL routing configuration?",
    "question_hi": "Django में URL रूटिंग कॉन्फ़िगरेशन किस फाइल में होता है?",
    "options_en": ["urls.py", "views.py", "settings.py", "apps.py"],
    "options_hi": ["urls.py", "views.py", "settings.py", "apps.py"],
    "answer_en": "urls.py",
    "answer_hi": "urls.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which template engine is used by default in Django?",
    "question_hi": "Django में डिफ़ॉल्ट रूप से कौन-सा टेम्पलेट इंजन उपयोग होता है?",
    "options_en": ["Django Template Language", "Jinja2", "Mako", "Liquid"],
    "options_hi": ["Django Template Language", "Jinja2", "Mako", "Liquid"],
    "answer_en": "Django Template Language",
    "answer_hi": "Django Template Language",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which setting specifies installed apps in Django?",
    "question_hi": "Django में इंस्टॉल किए गए ऐप्स को कौन-सी सेटिंग निर्दिष्ट करती है?",
    "options_en": ["INSTALLED_APPS", "REGISTERED_APPS", "ACTIVE_APPS", "PROJECT_APPS"],
    "options_hi": ["INSTALLED_APPS", "REGISTERED_APPS", "ACTIVE_APPS", "PROJECT_APPS"],
    "answer_en": "INSTALLED_APPS",
    "answer_hi": "INSTALLED_APPS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which command starts the Django development server?",
    "question_hi": "Django डेवलपमेंट सर्वर शुरू करने के लिए कौन-सा कमांड उपयोग होता है?",
    "options_en": ["python manage.py runserver", "python manage.py startserver", "django-admin run", "python manage.py serve"],
    "options_hi": ["python manage.py runserver", "python manage.py startserver", "django-admin run", "python manage.py serve"],
    "answer_en": "python manage.py runserver",
    "answer_hi": "python manage.py runserver",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Django command creates a superuser?",
    "question_hi": "Django में सुपरयूजर बनाने के लिए कौन-सा कमांड उपयोग होता है?",
    "options_en": ["python manage.py createsuperuser", "python manage.py superuser", "python manage.py adduser", "python manage.py admin"],
    "options_hi": ["python manage.py createsuperuser", "python manage.py superuser", "python manage.py adduser", "python manage.py admin"],
    "answer_en": "python manage.py createsuperuser",
    "answer_hi": "python manage.py createsuperuser",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of the apps.py file in Django?",
    "question_hi": "Django में apps.py फाइल का क्या उद्देश्य है?",
    "options_en": ["App configuration", "Database connection", "URL routing", "Template rendering"],
    "options_hi": ["ऐप कॉन्फ़िगरेशन", "डेटाबेस कनेक्शन", "URL रूटिंग", "टेम्पलेट रेंडरिंग"],
    "answer_en": "App configuration",
    "answer_hi": "ऐप कॉन्फ़िगरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Django file stores WSGI configuration?",
    "question_hi": "Django में WSGI कॉन्फ़िगरेशन किस फाइल में होता है?",
    "options_en": ["wsgi.py", "manage.py", "urls.py", "apps.py"],
    "options_hi": ["wsgi.py", "manage.py", "urls.py", "apps.py"],
    "answer_en": "wsgi.py",
    "answer_hi": "wsgi.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Django file contains ASGI configuration?",
    "question_hi": "Django में ASGI कॉन्फ़िगरेशन किस फाइल में होता है?",
    "options_en": ["asgi.py", "wsgi.py", "manage.py", "settings.py"],
    "options_hi": ["asgi.py", "wsgi.py", "manage.py", "settings.py"],
    "answer_en": "asgi.py",
    "answer_hi": "asgi.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is used for static files in Django?",
    "question_hi": "Django में स्थिर फाइलों के लिए इनमें से कौन-सा उपयोग होता है?",
    "options_en": ["STATIC_URL", "MEDIA_URL", "TEMPLATE_URL", "APP_URL"],
    "options_hi": ["STATIC_URL", "MEDIA_URL", "TEMPLATE_URL", "APP_URL"],
    "answer_en": "STATIC_URL",
    "answer_hi": "STATIC_URL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which directory is used to store templates in Django apps?",
    "question_hi": "Django ऐप्स में टेम्पलेट्स को स्टोर करने के लिए कौन-सी डायरेक्टरी उपयोग होती है?",
    "options_en": ["templates", "static", "media", "html"],
    "options_hi": ["templates", "static", "media", "html"],
    "answer_en": "templates",
    "answer_hi": "templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which file defines database configuration in Django?",
    "question_hi": "Django में डेटाबेस कॉन्फ़िगरेशन किस फाइल में परिभाषित होती है?",
    "options_en": ["settings.py", "models.py", "apps.py", "urls.py"],
    "options_hi": ["settings.py", "models.py", "apps.py", "urls.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does the collectstatic command do in Django?",
    "question_hi": "Django में collectstatic कमांड क्या करता है?",
    "options_en": ["Collects static files into one directory", "Deletes old migrations", "Creates new app", "Starts the server"],
    "options_hi": ["सभी स्थिर फाइलों को एक डायरेक्टरी में एकत्र करता है", "पुरानी माइग्रेशन हटाता है", "नया ऐप बनाता है", "सर्वर शुरू करता है"],
    "answer_en": "Collects static files into one directory",
    "answer_hi": "सभी स्थिर फाइलों को एक डायरेक्टरी में एकत्र करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is NOT a valid Django field type?",
    "question_hi": "निम्नलिखित में से कौन-सा वैध Django फील्ड प्रकार नहीं है?",
    "options_en": ["CharField", "ImageField", "VideoField", "IntegerField"],
    "options_hi": ["CharField", "ImageField", "VideoField", "IntegerField"],
    "answer_en": "VideoField",
    "answer_hi": "VideoField",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which setting defines the root URL configuration?",
    "question_hi": "कौन-सी सेटिंग रूट URL कॉन्फ़िगरेशन को परिभाषित करती है?",
    "options_en": ["ROOT_URLCONF", "BASE_URL", "DEFAULT_URL", "MAIN_URL"],
    "options_hi": ["ROOT_URLCONF", "BASE_URL", "DEFAULT_URL", "MAIN_URL"],
    "answer_en": "ROOT_URLCONF",
    "answer_hi": "ROOT_URLCONF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which file handles app initialization in Django?",
    "question_hi": "Django में ऐप इनिशियलाइज़ेशन को कौन-सी फाइल संभालती है?",
    "options_en": ["apps.py", "settings.py", "urls.py", "views.py"],
    "options_hi": ["apps.py", "settings.py", "urls.py", "views.py"],
    "answer_en": "apps.py",
    "answer_hi": "apps.py",
    "attempted": false,
    "selected": ""
  },






    {
    "num": 31,
    "question_en": "What architecture pattern does Django primarily use?",
    "question_hi": "Django मुख्य रूप से किस आर्किटेक्चर पैटर्न का उपयोग करता है?",
    "options_en": ["MVT", "MVVM", "MVC", "MVP"],
    "options_hi": ["MVT", "MVVM", "MVC", "MVP"],
    "answer_en": "MVT",
    "answer_hi": "MVT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which file stores the list of middleware in Django?",
    "question_hi": "Django में मिडलवेयर की सूची किस फाइल में होती है?",
    "options_en": ["settings.py", "middleware.py", "config.py", "views.py"],
    "options_hi": ["settings.py", "middleware.py", "config.py", "views.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Django file contains configuration for templates?",
    "question_hi": "Django में टेम्पलेट्स का कॉन्फ़िगरेशन किस फाइल में होता है?",
    "options_en": ["settings.py", "urls.py", "models.py", "views.py"],
    "options_hi": ["settings.py", "urls.py", "models.py", "views.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which Django command shows all available commands?",
    "question_hi": "कौन-सा Django कमांड सभी उपलब्ध कमांड दिखाता है?",
    "options_en": ["python manage.py help", "python manage.py list", "django-admin commands", "python manage.py show"],
    "options_hi": ["python manage.py help", "python manage.py list", "django-admin commands", "python manage.py show"],
    "answer_en": "python manage.py help",
    "answer_hi": "python manage.py help",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "In Django, which file is used to register signals?",
    "question_hi": "Django में सिग्नल रजिस्टर करने के लिए कौन-सी फाइल उपयोग की जाती है?",
    "options_en": ["signals.py", "apps.py", "models.py", "views.py"],
    "options_hi": ["signals.py", "apps.py", "models.py", "views.py"],
    "answer_en": "signals.py",
    "answer_hi": "signals.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Django model field is used to store large text?",
    "question_hi": "बड़े टेक्स्ट को स्टोर करने के लिए कौन-सा Django मॉडल फील्ड उपयोग होता है?",
    "options_en": ["TextField", "CharField", "LargeField", "ParagraphField"],
    "options_hi": ["TextField", "CharField", "LargeField", "ParagraphField"],
    "answer_en": "TextField",
    "answer_hi": "TextField",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Django component handles HTTP requests?",
    "question_hi": "HTTP अनुरोधों को Django का कौन-सा कंपोनेंट संभालता है?",
    "options_en": ["View", "Model", "Template", "Static"],
    "options_hi": ["View", "Model", "Template", "Static"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which field automatically saves the current timestamp on create?",
    "question_hi": "कौन-सा फील्ड निर्माण के समय स्वतः टाइमस्टैंप सेव करता है?",
    "options_en": ["DateTimeField(auto_now_add=True)", "DateField()", "TimeField()", "TimestampField()"],
    "options_hi": ["DateTimeField(auto_now_add=True)", "DateField()", "TimeField()", "TimestampField()"],
    "answer_en": "DateTimeField(auto_now_add=True)",
    "answer_hi": "DateTimeField(auto_now_add=True)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Django feature prevents SQL injection?",
    "question_hi": "कौन-सी Django विशेषता SQL इंजेक्शन को रोकती है?",
    "options_en": ["ORM", "Middleware", "Template Engine", "Signals"],
    "options_hi": ["ORM", "Middleware", "Template Engine", "Signals"],
    "answer_en": "ORM",
    "answer_hi": "ORM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which setting is used to define media file URLs?",
    "question_hi": "मीडिया फाइल URLs को परिभाषित करने के लिए कौन-सी सेटिंग उपयोग होती है?",
    "options_en": ["MEDIA_URL", "STATIC_URL", "FILE_URL", "UPLOAD_URL"],
    "options_hi": ["MEDIA_URL", "STATIC_URL", "FILE_URL", "UPLOAD_URL"],
    "answer_en": "MEDIA_URL",
    "answer_hi": "MEDIA_URL",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which folder stores static files inside an app?",
    "question_hi": "एक ऐप के अंदर static फाइलें किस फ़ोल्डर में रखी जाती हैं?",
    "options_en": ["static", "assets", "public", "files"],
    "options_hi": ["static", "assets", "public", "files"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which special variable stores metadata of a Django model?",
    "question_hi": "Django मॉडल का मेटाडेटा कौन-सा विशेष वेरिएबल स्टोर करता है?",
    "options_en": ["class Meta", "class Info", "class Data", "class Settings"],
    "options_hi": ["class Meta", "class Info", "class Data", "class Settings"],
    "answer_en": "class Meta",
    "answer_hi": "class Meta",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method saves data to the database in Django models?",
    "question_hi": "Django मॉडल में कौन-सा मेथड डेटा को डेटाबेस में सेव करता है?",
    "options_en": ["save()", "store()", "insert()", "write()"],
    "options_hi": ["save()", "store()", "insert()", "write()"],
    "answer_en": "save()",
    "answer_hi": "save()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Django class is used to create forms manually?",
    "question_hi": "मैन्युअली फॉर्म बनाने के लिए कौन-सी Django क्लास उपयोग होती है?",
    "options_en": ["forms.Form", "forms.Model", "forms.Template", "forms.Input"],
    "options_hi": ["forms.Form", "forms.Model", "forms.Template", "forms.Input"],
    "answer_en": "forms.Form",
    "answer_hi": "forms.Form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Django form class is linked directly to models?",
    "question_hi": "कौन-सी Django फॉर्म क्लास सीधे मॉडल से जुड़ी होती है?",
    "options_en": ["forms.ModelForm", "forms.Form", "forms.FieldForm", "forms.LinkedForm"],
    "options_hi": ["forms.ModelForm", "forms.Form", "forms.FieldForm", "forms.LinkedForm"],
    "answer_en": "forms.ModelForm",
    "answer_hi": "forms.ModelForm",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which file is used to configure CORS in Django?",
    "question_hi": "Django में CORS कॉन्फ़िगर करने के लिए कौन-सी फाइल उपयोग होती है?",
    "options_en": ["settings.py", "urls.py", "cors.py", "admin.py"],
    "options_hi": ["settings.py", "urls.py", "cors.py", "admin.py"],
    "answer_en": "settings.py",
    "answer_hi": "settings.py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Django object represents an HTTP response?",
    "question_hi": "Django में कौन-सा ऑब्जेक्ट HTTP प्रतिक्रिया का प्रतिनिधित्व करता है?",
    "options_en": ["HttpResponse", "ViewResponse", "WebResponse", "ClientResponse"],
    "options_hi": ["HttpResponse", "ViewResponse", "WebResponse", "ClientResponse"],
    "answer_en": "HttpResponse",
    "answer_hi": "HttpResponse",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which decorator is used for requiring login in Django?",
    "question_hi": "Django में लॉगिन आवश्यक करने के लिए कौन-सा डेकोरेटर उपयोग होता है?",
    "options_en": ["login_required", "auth_required", "user_required", "check_login"],
    "options_hi": ["login_required", "auth_required", "user_required", "check_login"],
    "answer_en": "login_required",
    "answer_hi": "login_required",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which setting is used to configure the default primary key type?",
    "question_hi": "डिफ़ॉल्ट प्राथमिक कुंजी प्रकार को कॉन्फ़िगर करने के लिए कौन-सी सेटिंग उपयोग होती है?",
    "options_en": ["DEFAULT_AUTO_FIELD", "PRIMARY_KEY_TYPE", "AUTO_ID", "PK_FIELD"],
    "options_hi": ["DEFAULT_AUTO_FIELD", "PRIMARY_KEY_TYPE", "AUTO_ID", "PK_FIELD"],
    "answer_en": "DEFAULT_AUTO_FIELD",
    "answer_hi": "DEFAULT_AUTO_FIELD",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "Which method is used to filter query results in Django ORM?",
    "question_hi": "Django ORM में परिणाम फ़िल्टर करने के लिए कौन-सा मेथड उपयोग होता है?",
    "options_en": ["filter()", "find()", "search()", "locate()"],
    "options_hi": ["filter()", "find()", "search()", "locate()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },

  
]





let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}


////////////////////////////////////////////////////////////////////////////////////////////


// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////