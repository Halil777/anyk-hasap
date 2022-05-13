import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
            "homePage":"Home page",
            "text1":"RELIABLE BUSINESS",
            "text2":"WIDE POSSIBILITIES",
            "Обязательныйаудит":"Compulsory audit  ",
            "Initiativeaudit":"Initiative audit ",
            "Taxconsulting": "Tax consulting ",
            "Calculation":"Calculation",
            "Internalcontrol":"Internal control system reliability assessment ",
            "Managementconsulting":"Management consulting ",
            "OurServices":"Our services",
            "Aboutus":"About us",
            "Contacts":"Contacts",
            "wheretrustmeetsstrategy": "Where trust meets strategy",
            "learnMore":"Learn more",
            "homeInfoTitle":"Pain",
            "homeInfoText":"The pain itself is love, the main storage system. Invalid Input",
            "TaxconsultingT":"Specialists of “Anyk Hasap” will take responsibility for the development of accounting policies and recommendations for optimizing taxation.",
            "CalculationT":"Preparation of a proposal for choosing a method for distributing costs, drawing up planned and actual calculations to determine the cost of work, services and manufactured products.",
            "InternalcontrolT":'Reliability control and the degree of detection and elimination of distortion in the information provided, as well as control over the timeliness of reporting.',
            "ManagementconsultingT":'"Anyk Hasap" assists the management of enterprises in improving the quality of work and manageability of the company, increasing the efficiency of its activities as a whole and increasing the individual productivity of each employee.',
            "InitiativeauditT":"Verification of the financial activities of the enterprise in preparation for the upcoming tax audit. Drawing up a report and a proposal for optimizing business processes, correcting existing imperfections and preventing possible omissions.",
            "ОбязательныйаудитT":"Annual independent verification of the financial and economic activities of the company. The completeness and correctness of the preparation of financial statements is checked as part of the statutory audit.",
            "homeUnderTitle":"The pain itself is love, the main storage system. Sed placerat scelerisque magna. Sed placerat scelerisque magna. Sed placerat scelerisque magna.",
            "homeAboutUsText":"The pain itself is love, the main storage system. The fear at the bow, the laughter and sometimes the chocolate in the backyard. In my Olympics that's not the price of the mass to suspend the eu. The curse of the elite is easy, the poverty of each person is a comprehensive, venenous bed.",
            "contactUs": "Contact us",
            "underContactUs":"If you have any questions or need any assistance  ",
            "customerReviews": "Customer Reviews",
            "sendMessage":"Successfully sended",
            "phone":"Phone",
            "adres":'Address',
            "send":'Send',
            "name":'Your name',
            "yourMess":'Your message',
            "workD":'Mon-Fri',
            "workH":"Working mode",
            "ahliHukuk":'All rights reserved.  ES "Anyk Hasap"',
            "address":"203 apartment, Oguzhan street, Ashgabat city",
            "aboutUsText1":'“Anyk Hasap” Auditing Company has been providing a wide range of services in the field of audit, accounting, taxation and management consulting since 2018.',
            "aboutUsText2":'“Anyk Hasap” auditors have more than 20 years of excellent work experience in organizations of various fields of activity. These are reliable professionals with knowledge and experience in various industries and projects.',
            "aboutUsText3":"“Anyk Hasap” is ready to work in today's complex commercial environment to protect your company from possible mistakes, reduce tax and financial risks, improve internal control systems and streamline work processes.",
            "aboutUsText4":'When choosing an audit company business reputation and experience play an important role along with the cost of services. Therefore, we strive to fulfill our obligations quickly, efficiently and with full responsibility and quality assurance!',
            "aboutUsText5":'“Anyk Hasap” aims to bring real value to your business.',
            "aboutUsText6":"We are looking forward to see you among our clients!",
            "aboutUsText7":"The license No. 1-17-29-50 to carry out audit activities was issued by the Ministry of Economy and Finance of Turkmenistan on December 28, 2021. ",
            "ourServicText":"The pain itself is love, the main storage system. The lake wants the arrows, until the main street is aligned with the venomous quiver. From the football, if not, the price is important.",
          }
      },
      tm: {
        translation: {
            "homePage":"Baş sahypa",
            "Обязательныйаудит":"Hökmany audit ",
            "Calculation":"Kalkulýasiýa ",
            "Taxconsulting": "Salgyt babatynda maslahat bermek  ",
            "Internalcontrol":"Içerki barlag ulgamynyň ykjamlylygyna baha bermek ",
            "Managementconsulting":"Dolandyryş maslahatlary ",
            "Initiativeaudit":"Başyny başlaýjylyk audity  ",
            "OurServices":"Hyzmatlarymyz",
            "Aboutus":"Biz barada",
            "adres":'Salgy',
            "name":'Siziň adyňyz',
            "Contacts":"Habarlaşmak",
            "wheretrustmeetsstrategy":"Bu ýerde ynam strategiýa laýyk gelýär",
            "learnMore":"Dowamyny oka",
            "homeInfoTitle":"Agyry",
            "workD":'Duş-Ann',
            "text1":"Ygtybarly işewürlik ",
            "text2":"giň mümkinçilikler",
            "homeInfoText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Nädogry giriş",
            "homeUnderTitle":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Sed placerat scelerisque magna. Sed placerat scelerisque magna.",
            "CalculationT":"Çykdajylary paýlamak usulyny saýlamak boýunça teklipleri taýýarlamak, işleriň, hyzmatlaryň we öndürilen önümleriň özüne düşýän gymmatyny kesgitlemek üçin meýilnama we hakyky kalkulýasiýany düzmek.",
            "InternalcontrolT":'Berilýän maglumatyň ykjamlylygyna we gyşarmalary ýüze çykarmak we aradan aýyrmak derejesine gözegçilik etmek, şeýle hem hasabatlaryň öz wagtynda berilmegini barlamak.',
            "ManagementconsultingT":"“Anyk hasap” kärhanalaryň ýolbaşçylaryna işiň hilini we kompaniýany dolandyrmagy gowulandyrmakda, onuň işiniň netijeliligini ýokarlandyrmakda we her bir işgäriň şahsy önümçilik zähmetini gowulandyrmakda ýardam berýär.",
            "TaxconsultingT":"“Anyk hasap” hünärmenleri salgyt salnyşy optimallaşdyrmak boýunça hasaba alyş syýasatyny we maslahatlary işläp taýýarlamak jogapkärçiligini öz üstüne alarlar.",
            "InitiativeauditT":"Geljekki salgyt barlagyna taýýarlyk üçin kärhananyň maliýe işiniň barlagy. Hasabaty we işewürlik-prosesleri optimallaşdyrmak boýunça teklipleri düzmek, bar bolan kämilsizlikleri düzetmek we mümkin bolan goýbermeleriň öňüni almak.",
            "ОбязательныйаудитT":"Kompaniýanyň maliýe-hojalyk işiniň ýyllyk garaşsyz barlagy. Hökmany audityň çäklerinde maliýe hasabatlylygy düzmegiň dolulygy we dogrulygy barlanylýar.",
            "homeAboutUsText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Ataýdaky gorky, gülki we käwagt howluda şokolad. Olimpiýa oýunlarymda eu-ny togtatmak köpçüligiň bahasy däl. Elitanyň näleti aňsat, her bir adamyň garyplygy hemme taraplaýyn, wena ýatagydyr.",
            "contactUs":"Habarlaşmak",
            "underContactUs":"Soraglaryňyz bar bolsa ýa-da kömek gerek bolsa",
            "customerReviews":"müşderi synlary",
            "sendMessage":"üstünlikli iberildi",
            "phone":"Telefon",
            "workH":'Iş günleri',
            "send":"Ugratmak",
            "yourMess":'Siziň hatyňyz',
            "ahliHukuk":'Ähli Hukuklary Goralan. HJ "Anyk Hasap" ',
            "aboutUsText1":'“Anyk hasap” auditorçylyk kompaniýasy 2018-nji ýyldan başlap audit, buhgalterçilik hasaba alyş, salgyt salmak we dolandyryş maslahatlary çygrynda hyzmatlaryň giň gerimini ýerine ýetirýär.',
            "aboutUsText2":'“Anyk hasap” auditorlary, işiň dürli çygyrlaryny guramakda ajaýyp iş tejribeleri bar. Bu dürli pudakda we taslamalarda bilimi we iş tejribesi bolan ynamly hünärmenler.',
            "aboutUsText3":'“Anyk hasap” – häzirkizaman çylşyrymly täjirçilik çygyrda siziň kärhanaňyzy mümkin bolan ýalňyşlyklardan goramak, salgyt we maliýe töwekgelçilikleri azaltmak, içerki barlag ulgamyny gowulandyrmak we iş proseslerini sazlamak üçin işlemäge taýýar.',
            "aboutUsText4":'Auditorçylyk kompaniýasy saýlanylanda, hyzmatlaryň gymmaty bilen bir hatarda işewürlik abraýy we tejribe wajyp orny eýeleýär. Şonuň üçin biz öz üstümize alan borçlarymyzy çalt, netijeli we doly jogapkärçilik hem-de hil kepillendirmesi bilen ýerine ýetirmäge çalyşýarys!',
            "aboutUsText5":'“Anyk hasap” siziň işewürligiňize hakyky peýdany getirmäge çemeleşýär.',
            "aboutUsText6":"Sizi, biziň müşderilerimiziň hatarynda görmäge şat bolarys!",
            "aboutUsText7":"28.12.2021 ýyldan 1-17-29-50 belgili auditorçylyk işini amala aşyrmaga ygtyýarnama Türkmenistanyň Ykdysadyýet we maliýe ministrligi tarapyndan berildi.",            "address":"Aşgabat şäheri, Oguzhan köçesi, 203-nji jaýy",
            "ourServicText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Köl esasy köçäni zäherli titreýänçä, oklary isleýär. Futboldan, bolmasa, bahasy möhümdir.",

        }
      },
      ru: {
        translation: {
            "homePage":"Главная",
            "text1":"НАДЁЖНЫЙ БИЗНЕС ",
            "text2":"ШИРОКИЕ ВОЗМОЖНОСТИ",
            "Обязательныйаудит": "Обязательный аудит ",
            "Calculation":"Калькуляции",
            "Managementconsulting":"Управленческое консультирование ",
            "Internalcontrol":"Оценка надёжности системы внутреннего контроля",
            "Taxconsulting": "Налоговое консультирование ",
            "Initiativeaudit":"Инициативный аудит ",
            "OurServices":"Наши услуги",
            "adres":'Адрес',
            "name":"Ваше имя",
            "yourMess":'Ваше сообщение',
            "address":"гор.Ашхабад, ул.Огузхана, дом 203",
            "Aboutus":"О нас",
            "send":'Отправить',
            "Contacts":"Контакты",
            "phone":"Телефон",
            "workD":"Пн - Пт",
            "workH":'Режим работы',
            "wheretrustmeetsstrategy": "где доверие встречается со стратегией",
            "learnMore":"узнать больше",
            "homeInfoTitle":"БОЛЬ",
            "homeInfoText":"Сама боль и есть любовь, главная система хранения. Некорректный ввод",
            "TaxconsultingT":"Специалисты «Anyk Hasap» возьмут на себя ответственность за разработку учетной политики и рекомендации по оптимизации налогообложения",
            "InternalcontrolT":'Контроль надежности и степень выявления и устранения искажении в предоставляемой информации, а также контроль своевременности предоставления отчетов.',
            "CalculationT":"Подготовка предложении по выбору метода распределения расходов, составление плановых и фактических калькуляций для определения себестоимости работ, услуг и произведенных продукции. ",
            "ManagementconsultingT":"«Anyk Hasap» содействует руководству предприятий в улучшении качества работы и управляемости компании, повышении эффективности ее деятельности в целом и увеличении индивидуальной производительности труда каждого сотрудника.",
            "InitiativeauditT":"Проверка финансовой деятельности предприятия для подготовки к предстоящей налоговой проверке. Составление отчёта и предложении по оптимизации бизнес-процессов, коррекции существующих несовершенств и профилактики возможных упущений",
            "ОбязательныйаудитT":"Ежегодная независимая проверка финансово-хозяйственной деятельности компании. В рамках обязательного аудита проверяется полнота и корректность составления финансовой отчетности.",
            "homeUnderTitle":"Сама боль и есть любовь, главная система хранения. Sed россыпь блестящая великая Sed россыпь блестящая великая Sed россыпь блестящая великая.",
            "homeAboutUsText":"Сама боль и есть любовь, главная система хранения. Страх на носу, смех и иногда шоколад на заднем дворе. В моей олимпиаде это не цена массы, чтобы приостановить действие ЕС. Проклятие элиты легкое, нищета каждого человека всеобъемлющее, ядовитое ложе.",
            "contactUs":"связаться с нами",
            "underContactUs":"Если у вас есть какие-либо вопросы или вам нужна помощь",
            "customerReviews":"Отзывы клиентов",
            "sendMessage":"успешно отправлено",
            "ahliHukuk": 'Все права зашищены.  ХО "Анык Хасап"',
            "aboutUsText1":'Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.',
            "aboutUsText2":'Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в организациях различных сфер деятельности. Это надёжные профессионалы со знаниями и опытом работы в различных отраслях и проектах.',
            "aboutUsText3":'«Anyk Hasap» - в современной сложной коммерческой среде готова работать, чтобы уберечь ваше предприятие от возможных ошибок, снизить налоговые и финансовые риски, улучшить системы внутреннего контроля и налаженность рабочих процессов.',
            "aboutUsText4":'При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы стремимся выполнить взятые на себя обязательства быстро, эффективно и с полной ответственностью и гарантией качества!',
            "aboutUsText5":'«Anyk Hasap» стремится принести реальную пользу вашему бизнесу.',
            "aboutUsText6":"Будем рады Вас видеть в числе наших клиентов!",
            "aboutUsText7":"Лицензия на осуществление аудиторской деятельности выдана Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года.",
            "ourServicText":"Сама боль и есть любовь, главная система хранения. Озеру нужны стрелы, пока главная улица не выровняется с ядовитым колчаном. От футбола, если нет, то цена важна.",
            
        }
      }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
  });

export {i18n};
