export default {
    loading: {
        color: 'blue',
        height: '5px'
    },
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'dacc.uz',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/style/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugin/i18n.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios

        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        'nuxt-leaflet',

        [
            '@nuxtjs/i18n',
            {
                seo: false,
                locales: [{
                        code: "uz",
                        name: "O'zbek"
                    },
                    {
                        code: "ru",
                        name: "Рус"
                    },
                    {
                        code: "en",
                        name: "English"
                    }
                ],
                defaultLocale: "uz",
                vueI18n: {
                    fallbackLocale: "en",
                    messages: {
                        uz: {
                            title: 'Aloqa',
                            description: "Agarda sizda loyiha mavjud bo'lsa, biz bilan bog'laning",
                            title1: 'Tahlil',
                            description1: "Loyiha talablarini aniqlashtirish uchun siz bilan bog'lanamiz",
                            title2: 'Jamoa',
                            description2: "Sizning talabingizga mos jamoa yig'amiz",
                            title3: 'Start',
                            description3: "Siz jamoa bilan tanishasiz va biz boshlaymiz",
                            about: "Biz haqimizda",
                            services: "BIZNING XIZMATLARIMIZ",
                            projects: "Bizning loyihalarimiz",
                            more: "Ko'proq o'qish",
                            more_project: "Barcha loyihalarni ko'rish",
                            works: "BIZ QANDAY ISHLAB CHIQARAMIZ!",
                            quiz: "Agar savollar bo'lsa",
                            quiz_description: "Biz sizning savolingizni o'qib chiqamiz va imkon qadar tezroq javob bilan telefon orqali bog'lanamiz.",
                            send: "Jo'natish",
                            name: "F.I.SH",
                            email: "Elektron pochta",
                            message: "Xabar",
                            test: "Sayt test rejimida ishlaydi",
                            main_a: "MARKAZNING ASOSIY MAQSADLARI",
                            send: "Rezyume yuborish",
                            cover: " O'zingiz haqida qisqa",
                            resume: "Rezyume",
                            managements: "Rahbariyat",
                            departments: "Markaz bo'limlari",
                            portfolio: "Markaz loyihalari",
                            careers: "Ishga marhamat",
                            open_data: "Ochiq ma'lumotlar",
                            d_career: "BIZNING JAMOAGA QO'SHILIShGA TAYYORMISIZMI?",
                            bt_text: "Vazifalar",
                            phone: "Telefon raqami",
                            address: "Manzil"

                        },
                        en: {
                            title: 'Contact',
                            description: "Send us your project request or project idea",
                            title1: 'Analysis',
                            description1: "We will contact you to clarify your project requirements",
                            title2: 'Team',
                            description2: "We provide a team for your requirements",
                            title3: 'Start',
                            description3: "You will get to know the team and we'll get started",
                            about: "About",
                            services: "Services",
                            projects: "Projects",
                            more: "More",
                            more_project: "More projects",
                            works: "HOW WE ARE WORKING",
                            quiz: "IF ANY QUESTIONS PLEASE",
                            quiz_description: "We will read your question and contact you by phone with an answer as soon as possible.",
                            send: "Send",
                            name: "Full name",
                            email: "Email",
                            message: "Message",
                            test: "This site runs in a test mode",
                            main_a: "MAIN OBJECTIVES OF THE CENTER",
                            send: "Send us your cv",
                            cover: " Cover letter (Anything you want to talk about)",
                            resume: "Resume",
                            managements: "Management",
                            departments: "Departments",
                            portfolio: "Portfolio",
                            careers: "Careers",
                            open_data: "Open data",
                            d_career: "READY TO JOIN OUR TEAM?",
                            bt_text: "Tasks",
                            phone: "Phone",
                            address: "Address"
                        },
                        ru: {
                            title: 'Связь',
                            description: "Отправьте нам свой запрос на проект или идею проекта",
                            title1: 'Анализ',
                            description1: "Мы свяжемся с вами, чтобы уточнить ваши требования к проекту",
                            title2: 'Команда',
                            description2: "Мы выделяем команду под ваши требования",
                            title3: 'Старт',
                            description3: " Вы познакомитесь с командой, и мы начнем",
                            about: "О нас ",
                            services: "НАШИ УСЛУГИ",
                            projects: "НАШИ ПРОЕКТЫ",
                            more: "Подробнее",
                            more_project: "Просмотр всех проектов",
                            works: "КАК МЫ РАБОТАЕМ!",
                            quiz: "Если есть вопросы, пожалуйста",
                            quiz_description: "Мы прочитаем ваш вопрос и в ближайшее время свяжемся с вами по телефону и сообщим вам ответ.",
                            send: "Отправить",
                            name: "Ф.И.О",
                            email: "Электронная почта",
                            message: "Cообщение",
                            test: "Сайт работает в тестовом режиме",
                            main_a: "ОСНОВНЫЕ ЗАДАЧИ ЦЕНТРА",
                            send: "Отправить резюме",
                            cover: "Сообщение",
                            resume: "Резюме",
                            managements: "РУКОВОДСТВО",
                            departments: "ОТДЕЛ",
                            portfolio: "ПОРТФОЛИО",
                            careers: "КАРЬЕРА В КОМАНДЕ DACC",
                            open_data: "ОТКРЫТЫЕ ДАННЫЕ",
                            d_career: "ГОТОВЫ ПРИСОЕДИНИТЬСЯ К НАШЕЙ КОМАНДЕ?",
                            bt_text: "Задачи",
                            phone: "Телефон",
                            address: "Aдрес"
                        }
                    }
                }
            }
        ],
        '@nuxtjs/axios'
    ],
    // i18n: {
    //     locales: ['uz', 'ru', 'en'],
    //     strategy: 'prefix_except_default',

    //     detectBrowserLanguage: {
    //         useCookie: true,
    //         cookieKey: 'lang'
    //     },
    //     defaultLocale: 'uz',

    //     vueI18n: {
    //         fallbackLocale: 'en',

    //     }
    // },

    axios: {
        baseURL: 'http://backend.dacc.uz/api/v1/',
    },

    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    build: {
        postcss: null
    }
}