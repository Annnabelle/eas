import newsImage from "../src/assets/newsImageEas.JPG";
import productOne from '../src/assets/23.jpg'
import productTwo from '../src/assets/19.jpg'
import productImageOne from '../src/assets/21.jpg'
import productImageTwo from '../src/assets/18.jpg'
import productImageThree from '../src/assets/20.jpg'
import productImageFour from '../src/assets/25.jpg'
import productImageFive from '../src/assets/27.jpg'
import productImageSix from '../src/assets/9.jpg'
import productImageSeven from '../src/assets/11 (1).jpg'
import productImageEight from '../src/assets/13.jpg'
import productImageNine from '../src/assets/airFender.png'
import productImageTen from '../src/assets/airFender.png'
import productImageEleven from '../src/assets/airFender.png'
import productImageTwelve from '../src/assets/12.jpg'
import productImageTirteen from '../src/assets/carNewImage.png'

export const productData = [
    {
        id: 1,
        title: 'EAS-ADS "AIR SHIELD-1C',
        text: {
            en: "Detection, direction finding, and electronic frequency jamming of control channels, data transmission, and navigation of drones (small UAVs).",
            ru: "Обнаружение, пеленгация и радиоэлектронная блокировка частот каналов управления, передачи данных и навигации дронов (малоразмерных БПЛА).",
            uz: "Dronlarni (kichik o'lchamli UUA) boshqaruv kanallari, ma'lumot uzatish va navigatsiya chastotalarini aniqlash, yo'naltirish va radioelektron bloklash.",
        },
        image: productTwo,
        images: [
            productTwo,
            productImageOne,
            productImageTwo,
            productImageThree,
            productImageOne,
            productTwo,
            productImageOne,
            productImageTwo,
            productImageThree,
            productImageOne,
        ],
        description:[
            {id: 1, 
                title: {
                    ru: "Главные характеристики",
                    en: "Main characteristics",
                    uz: "Asosiy xususiyatlar",
                }, 
                text: {
                    ru: [
                        'Температура -25C; +70С',
                        'Масса: 9.5кг',
                        'Жизненный цикл батареи: 40 часов',
                        'Дальность подавления: до 3 км',
                        'Рабочая частота: 70–6000 MHz'
                    ],
                    en: [
                        'Temperature -25C; +70С',
                        'Weight: 9.5 kg',
                        'Battery life: 40 hours',
                        'Radio jamming range: up to 3 km',
                        'Operating frequency: 70–6000 MHz'
                    ],
                    uz: [
                        "Harorat: -25°C; +70°C",
                        "Og'irlik: 9.5 kg",
                        "Batareyaning hayotiy davri: 40 soat",
                        "Bloklash masofasi: +3 km",
                        "Ishchi chastota: 70-6000 MHz"
                    ]
            }},
            {id: 2, 
                title: {
                    ru: "Главные характеристики",
                    en: "Main characteristics",
                    uz: "Asosiy xususiyatlar"
                }, 
                text: {
                    ru: [
                        'Температура: +70°C',
                        'Масса: 12 кг',
                        'Жизненный цикл батареи: 40',
                        'Дальность подавления: +2 км',
                        'Рабочая частота: 433 MHz, 900 MHz, 1.5 GHz, 5.2 GHz, 1.2 GHz, 2.4 GHz, 5.8 GHz'
                    ],
                    en: [
                        'Temperature: +70°C',
                        'Weight: 12 kg',
                        'Battery life: 40',
                        'Radio jamming range: +2 km',
                        'Operating frequency: 433 MHz, 900 MHz, 1.5 GHz, 5.2 GHz, 1.2 GHz, 2.4 GHz, 5.8 GHz'
                    ],
                    uz: [
                        "Harorat: +70°C",
                        "Og'irlik: 12 kg",
                        "Batareyaning hayotiy davri: 40",
                        "Bloklash masofasi: +2 km",
                        "Ishchi chastota: 433 MHz, 900 MHz, 1.5 GHz, 5.2 GHz, 1.2 GHz, 2.4 GHz, 5.8 GHz"
                    ]                    
                },
            },  
        ]
    },
    {
        id: 2,
        title: 'EAS-ADE-2 "AIRWALL',
        text: {
            en: "Detection, direction finding and electronic frequency blocking of control channels, data transmission and navigation of drones (small UAVs)",
            ru: "Обнаружение, пеленгация и радиоэлектронная блокировка частот каналов управления, передачи данных и навигации дронов (малоразмерными БПЛА)",
            uz: "Dronlarni (kichik o'lchamli UUAni) boshqaruv kanallari, ma'lumot uzatish va navigatsiya chastotalarini aniqlash, yo'naltirish va radioelektron bloklash",
        },
        image: productImageFour,
        images: [
            productImageFive,
            productImageFour,
            productImageSix,
            productImageSeven,
        ],
        description:[
            {id: 1, title: {
                ru: "Главные характеристики",
                en: "Main characteristics",
                uz: "Asosiy xususiyatlar"
            }, text: {
                ru: [
                    'Радиус обнаружения: 360',
                    'Масса: 12кг',
                    'Температура: -30С; +70C',
                    'Разведывательный диапазон: +8км',
                    'Частота радиоподпвления: 400-6000MHz'
                ],
                en: [
                    'Detection radius: 360',
                    'Weight: 12kg',
                    'Temperature: -30С; +70C',
                    'Reconnaissance range: +8km',
                    'Frequency range: 400-6000MHz'
                ],
                uz: [
                    "Aniqlash radiusi: 360",
                    "Og'irlik: 12kg",
                    "Harorat: -30C; +70C",
                    "Razvedka diapazoni: +8km",
                    "Radio bloklash chastotasi: 400-6000MHz"
                ]
            }},
        ]
    },
    {
        id: 3,
        title: 'EAS-1 "FOWLER',
        text: {
            en: "Radio-electronic frequency blocking of control channels, data transmission and navigation of drones (small UAVs)",
            ru: "Радиоэлектронная блокировка частот каналов управления, передачи данных и навигации дронов (малоразмерными БПЛА)",
            uz: "Dronlarni (kichik o'lchamli UUAni) boshqaruv kanallari, ma'lumot uzatish va navigatsiya chastotalarini radioelektron bloklash",
        },
        image: productImageEight,
        images: [
            productImageNine,
            productImageEight,
            productImageEleven,
            productImageTwelve,
            productImageTen,
        ],
        description:[
            {id: 1, title: {
                ru: "Главные характеристики",
                en: "Main characteristics",
                uz: "Asosiy xususiyatlar"
            }, text: {
                ru: [
                    'Температура: -30С; +55C',
                    'Масса: 6.5кг',
                    'Жизненный цикл батареи: 40',
                    'Дальность подавления: +1.5км',
                    'Каналы подавления: 433MHz, 900MHz, 1.2GHz, 1.5GHz, 5.8GHz, 1.5GHz, 2.4GHz'
                ],
                en: [
                    'Temperature: -30С; +55C',
                    'Weight: 6.5kg',
                    'Battery life: 40',
                    'Radio jamming range: +1.5km',
                    'Supperssion Channels: 433MHz, 900MHz, 1.2GHz, 1.5GHz, 5.8GHz, 1.5GHz, 2.4GHz'
                ],
                uz: [
                    "Harorat: -30C; +55C",
                    "Og'irlik: 6.5kg",
                    "Batareyaning hayotiy davri: 40",
                    "Bloklash masofasi: +1.5km",
                    "Bloklash kanallari: 433MHz, 900MHz, 1.2GHz, 1.5GHz, 5.8GHz, 1.5GHz, 2.4GHz"
                ]
            }},
        ]
    },
    {
        id: 4,
        title: 'EAS-2 "AIRFENDER',
        text: {
            en: "Radio-electronic frequency blocking of control channels, data transmission and navigation of drones (small UAVs)",
            ru: "Радиоэлектронная блокировка частот каналов управления, передачи данных и навигации дронов (малоразмерными БПЛА)",
            uz: "Dronlarni (kichik o'lchamli UUAni) boshqaruv kanallari, ma'lumot uzatish va navigatsiya chastotalarini radioelektron bloklash",
        },
        image: productImageEleven,
        // images: [
        //     productImageNine,
        //     productImageEight,
        //     productImageEleven,
        //     productImageTwelve,
        //     productImageTen,
        // ],
        description:[
            {id: 1, title: {
                ru: "Главные характеристики",
                en: "Main characteristics",
                uz: "Asosiy xususiyatlar"
            }, text: {
                ru: [
                    'Температура: -30С; +55C',
                    'Масса: 2.5кг',
                    'Жизненный цикл батареи: 40',
                    'Дальность подавления: +1км',
                    'Каналы подавления:  1.2GHz, 1.5GHz, 2.4GHz, 5.8GHz'
                ],
                en: [
                    'Temperature: -30С; +55C',
                    'Weight: 2.5kg',
                    'Battery life: 40',
                    'Radio jamming range: +1km',
                    'Supperssion Channels: 1.2GHz, 1.5GHz, 2.4GHz, 5.8GHz'
                ],
                uz: [
                    "Harorat: -30C; +55C",
                    "Og'irlik: 2.5kg",
                    "Batareyaning hayotiy davri: 40",
                    "Bloklash masofasi: +1km",
                    "Bloklash kanallari: 1.2GHz, 1.5GHz, 2.4GHz, 5.8GHz"
                ]
            }},
        ]
    },
    {
        id: 5,
        title: 'EAS-ADS "AIR SHIELD - 1CM',
        text: {
            en: "The stationary system is designed for detection, direction finding, determination of flight direction and radio-electronic frequency blocking of control channels, data transmission and navigation of drones (small unmanned aerial vehicles).",
            ru: "Стационарная система предназначена для обнаружения, пеленгования, оприделение направления полета и радиоэлектроная блокировка частот каналов управления, перидачи данных и навигации дронов (малоразмерных беспилотных летатильных фпаратов).",
            uz: "Stasionar tizim dronlarni (kichik o'lchamli UUAni) boshqaruv kanallari, ma'lumot uzatish va navigatsiya chastotalarini aniqlash, yo'naltirish, parvoz yo'nalishini aniqlash va radioelektron bloklash uchun mo'ljallangan.",
        },
        image: productImageTirteen,
        // images: [
        //     productImageTirteen,
        //     productImageTirteen,
        //     productImageTirteen,
        //     productImageTirteen,
        //     productImageTirteen,
        // ],
        description:[
            {id: 1, title: {
                ru: "Главные характеристики",
                en: "Main characteristics",
                uz: "Asosiy xususiyatlar"
            }, text: {
                ru: [
                    'Стандарты надежности автомобилей',
                    'Полусферическая защита. Без защитных слепых зон',
                    'Одновременное обнаружение и подавления',
                    'Способность определять направление движение БПЛА',
                    'Интеграция автономного и ручного режимов'
                ],
                en: [
                    'Vehicle Reliability Standards',
                    'Hemispherical protection. No protective blind spots',
                    'Simultaneous detection and suppression',
                    'The ability to determine the direction of movement of a UAV',
                    'Integration of autonomous and manual modes'
                ],
                uz: [
                    "Avtomobil ishonchliligi standartlari",
                    "Yarimsferik himoya. Himoyasiz ko'r joylar yo'q",
                    "Bir vaqtning o'zida aniqlash va bloklash",
                    "BPLA harakat yo'nalishini aniqlash qobiliyati",
                    "Avtonom va qo'lda boshqarish rejimlarini integratsiya qilish"
                ]
            }},
        ]
    },
]


export const newsData = [
    {
      id: 1,
      image: newsImage,
      video: "https://eascompany.uz/media/exhibition.MOV",
      title: {
        ru: 'Международная выставка securex 2024',
        en: 'International exhibition securex 2024',
        uz: "Xalqaro Securex 2024 ko‘rgazmasi"
      },
      text: {
        ru: 'Выставка на которой мы сможем представить наш продукт для международных компаний. Будет проходить в Узбекистане в экспо центре. Ждите скорых подробностей.',
        en: 'An exhibition where we will be able to present our product to international companies. It will be held in Uzbekistan in the expo center. Wait for details soon.',
        uz: "Xalqaro kompaniyalar uchun mahsulotimizni namoyish eta oladigan ko‘rgazma. U O‘zbekistonda Expo markazida bo‘lib o‘tadi. Tez orada batafsil ma’lumotni kuting."
      },
    },
    {
        id: 2,
        image: newsImage,
        video: "https://eascompany.uz/media/exhibition.MOV",
        title: {
            ru: 'Международная выставка securex 2024',
            en: 'International exhibition securex 2024',
            uz: "Xalqaro Securex 2024 ko‘rgazmasi"
          },
          text: {
            ru: 'Выставка на которой мы сможем представить наш продукт для международных компаний. Будет проходить в Узбекистане в экспо центре. Ждите скорых подробностей.',
            en: 'An exhibition where we will be able to present our product to international companies. It will be held in Uzbekistan in the expo center. Wait for details soon.',
            uz: "Xalqaro kompaniyalar uchun mahsulotimizni namoyish eta oladigan ko‘rgazma. U O‘zbekistonda Expo markazida bo‘lib o‘tadi. Tez orada batafsil ma’lumotni kuting."
          },
      },
      {
        id: 3,
        image: newsImage,
        video: "https://eascompany.uz/media/exhibition.MOV",
        title: {
            ru: 'Международная выставка securex 2024',
            en: 'International exhibition securex 2024',
            uz: "Xalqaro Securex 2024 ko‘rgazmasi"
          },
          text: {
            ru: 'Выставка на которой мы сможем представить наш продукт для международных компаний. Будет проходить в Узбекистане в экспо центре. Ждите скорых подробностей.',
            en: 'An exhibition where we will be able to present our product to international companies. It will be held in Uzbekistan in the expo center. Wait for details soon.',
            uz: "Xalqaro kompaniyalar uchun mahsulotimizni namoyish eta oladigan ko‘rgazma. U O‘zbekistonda Expo markazida bo‘lib o‘tadi. Tez orada batafsil ma’lumotni kuting."
          },
      },
      {
        id: 4,
        image: newsImage,
        video: "https://eascompany.uz/media/exhibition.MOV",
        title: {
            ru: 'Международная выставка securex 2024',
            en: 'International exhibition securex 2024',
            uz: "Xalqaro Securex 2024 ko‘rgazmasi"
          },
          text: {
            ru: 'Выставка на которой мы сможем представить наш продукт для международных компаний. Будет проходить в Узбекистане в экспо центре. Ждите скорых подробностей.',
            en: 'An exhibition where we will be able to present our product to international companies. It will be held in Uzbekistan in the expo center. Wait for details soon.',
            uz: "Xalqaro kompaniyalar uchun mahsulotimizni namoyish eta oladigan ko‘rgazma. U O‘zbekistonda Expo markazida bo‘lib o‘tadi. Tez orada batafsil ma’lumotni kuting."
          },
      },
      {
        id: 5,
        image: newsImage,
        video: "https://eascompany.uz/media/exhibition.MOV",
        title: {
            ru: 'Международная выставка securex 2024',
            en: 'International exhibition securex 2024',
            uz: "Xalqaro Securex 2024 ko‘rgazmasi"
          },
          text: {
            ru: 'Выставка на которой мы сможем представить наш продукт для международных компаний. Будет проходить в Узбекистане в экспо центре. Ждите скорых подробностей.',
            en: 'An exhibition where we will be able to present our product to international companies. It will be held in Uzbekistan in the expo center. Wait for details soon.',
            uz: "Xalqaro kompaniyalar uchun mahsulotimizni namoyish eta oladigan ko‘rgazma. U O‘zbekistonda Expo markazida bo‘lib o‘tadi. Tez orada batafsil ma’lumotni kuting."
          },
      },
  ];