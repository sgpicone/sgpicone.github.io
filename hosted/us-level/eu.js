const LOCAL_STORAGE = localStorage;
const Win = window;
const doc = document;
const documentElement = document.documentElement;
const firstElement = doc.head;
const newElement = name => doc.createElement(name);
const newImage = _ => new Image();
const addEventMonitor = (element, event, callback) => element[`on${event}`] = callback;// element.addEventListener(事件,callback);
const getElementPosition = element => element.getBoundingClientRect();
const messages = {
    English: {
        message: {
            data_level_5: 'Lived Here',
            data_level_4: 'Stayed Here',
            data_level_3: 'Visited Here',
            data_level_2: 'Stopped Here',
            data_level_1: 'Passed Here',
            data_level_0_alt: 'Want to be Here',
            data_level_0: 'Never Been Here',
            pt: 'pt | pts',
        },
        country_name: {
            UK: 'UK',
            Ireland: 'Ireland',
            Belgium: 'Belgium',
            Netherlands: 'Netherlands',
            Spain: 'Spain',
            France: 'France',
            Andorra: 'Andorra',
            Portugal: 'Portugal',
            Austria: 'Austria',
            Germany: 'Germany',
            Luxembourg: 'Luxembourg',
            Switzerland: 'Switzerland',
            Slovenia: 'Slovenia',
            Croatia: 'Croatia',
            Bosnia_and_Herzegovina: 'Bosnia and Herzegovina',
            Denmark: 'Denmark',
            Norway: 'Norway',
            Sweden: 'Sweden',
            Finland: 'Finland',
            Estonia: 'Estonia',
            Latvia: 'Latvia',
            Ukraine: 'Ukraine',
            Belarus: 'Belarus',
            Lithuania: 'Lithuania',
            Poland: 'Poland',
            Czechia: 'Czech Republic',
            Slovakia: 'Slovakia',
            Hungary: 'Hungary',
            Serbia: 'Serbia',
            Montenegro: 'Montenegro',
            Greece: 'Greece',
            North_Macedonia: 'North Macedonia',
            Albania: 'Albania',
            Italy: 'Italy',
            Bulgaria: 'Bulgaria',
            Romania: 'Romania',
            Moldova: 'Moldova',
            Liechtenstein: 'Liechtenstein',
            Turkey: 'Turkey',
            Cyprus: 'Cyprus',
            Vatican_City: 'Vatican City',
            San_Marino: 'San Marino',
            Iceland: 'Iceland',
            Russia: 'Russia',
            Georgia: 'Georgia',
            Azerbaijan: 'Azerbaijan',
            Armenia: 'Armenia',
            Monaco: 'Monaco',
            Malta: 'Malta',
            Kosovo: 'Kosovo',
        }
    },
    Danish: {
        message: {
            data_level_5: 'Boede her',
            data_level_4: 'Overnattet her',
            data_level_3: 'Besøgte her',
            data_level_2: 'Stoppede her',
            data_level_1: 'Passerede her',
            data_level_0_alt: 'Ville gerne bo her',
            data_level_0: 'Har ikke været her',
            pt: 'pnt | pnt',
        },
        country_name: {
            UK: 'Storbritannien',
            Ireland: 'Irland',
            Belgium: 'Belgien',
            Netherlands: 'Holland',
            Spain: 'Spainen',
            France: 'Frankrig',
            Andorra: 'Andorra',
            Portugal: 'Portugal',
            Austria: 'Østrig',
            Germany: 'Tyskland',
            Luxembourg: 'Luxembourg',
            Switzerland: 'Schweiz',
            Slovenia: 'Slovenien',
            Croatia: 'Kroatien',
            Bosnia_and_Herzegovina: 'Bosnien og herzegovina',
            Denmark: 'Danmark',
            Norway: 'Norge',
            Sweden: 'Sverige',
            Finland: 'Finland',
            Estonia: 'Estland',
            Latvia: 'Letland',
            Ukraine: 'Ukraine',
            Belarus: 'Hviderusland',
            Lithuania: 'Litauen',
            Poland: 'Polen',
            Czechia: 'Tjekkiet',
            Slovakia: 'Slovakiet',
            Hungary: 'Ungarn',
            Serbia: 'Serbien',
            Montenegro: 'Montenegro',
            Greece: 'Grækenland',
            North_Macedonia: 'Nordmakedonien',
            Albania: "Albanien",
            Italy: 'Italien',
            Bulgaria: 'bulgarien',
            Romania: 'Rumænien',
            Moldova: 'Molodova',
            Liechtenstein: 'Liechtenstein',
            Turkey: 'Tyrkiet',
            Cyprus: 'Cypern',
            Vatican_City: 'Vatikanstaten',
            San_Marino: 'San Marino',
            Iceland: 'island',
            Russia: 'Rusland',
            Georgia: 'Georgien',
            Azerbaijan: 'Aserbajdsjan',
            Armenia: 'Armenien',
            Monaco: 'Monaco',
            Malta: 'Malta',
            Kosovo: 'Kosovo',

        }
    },
    简体中文: {
        message: {
            data_level_5: '居住过',
            data_level_4: '住宿过',
            data_level_3: '游玩过',
            data_level_2: '中转过',
            data_level_1: '路过',
            data_level_0_alt: '想要去',
            data_level_0: '没去过',
            pt: '分',
        },
        country_name: {
            UK: '英国',
            Ireland: '爱尔兰',
            Belgium: '比利时',
            Netherlands: '荷兰',
            Spain: '西班牙',
            France: '法国',
            Andorra: '安道尔',
            Portugal: '葡萄牙',
            Austria: '奥地利',
            Germany: '德国',
            Luxembourg: '卢森堡',
            Switzerland: '瑞士',
            Slovenia: '斯洛文尼亚',
            Croatia: '克罗地亚',
            Bosnia_and_Herzegovina: '波斯尼亚和黑塞哥维纳',
            Denmark: '丹麦',
            Norway: '挪威',
            Sweden: '瑞典',
            Finland: '芬兰',
            Estonia: '爱沙尼亚',
            Latvia: '拉脱维亚',
            Ukraine: '乌克兰',
            Belarus: '白俄罗斯',
            Lithuania: '立陶宛',
            Poland: '波兰',
            Czechia: '捷克',
            Slovakia: '斯洛伐克',
            Hungary: '匈牙利',
            Serbia: '塞尔维亚',
            Montenegro: '黑山',
            Greece: '希腊',
            North_Macedonia: '北马其顿',
            Albania: '阿尔巴尼亚',
            Italy: '意大利',
            Bulgaria: '保加利亚',
            Romania: '罗马尼亚',
            Moldova: '摩尔多瓦',
            Liechtenstein: '列支敦士登',
            Turkey: '土耳其',
            Cyprus: '塞浦路斯',
            Vatican_City: '梵蒂冈',
            San_Marino: '圣马力诺',
            Iceland: '冰岛',
            Russia: '俄罗斯',
            Georgia: '格鲁吉亚',
            Azerbaijan: '阿塞拜疆',
            Armenia: '亚美尼亚',
            Monaco: '摩纳哥',
            Malta: '马耳他',
            Kosovo: '科索沃',
        }
    },
    繁體中文: {
        message: {
            data_level_5: '居住過',
            data_level_4: '住宿過',
            data_level_3: '遊玩過',
            data_level_2: '中轉過',
            data_level_1: '路過',
            data_level_0_alt: '想要去',
            data_level_0: '沒去過',
            pt: '分',
        },
        country_name: {
            UK: '英國',
            Ireland: '愛爾蘭',
            Belgium: '比利時',
            Netherlands: '荷蘭',
            Spain: '西班牙',
            France: '法國',
            Andorra: '安道爾',
            Portugal: '葡萄牙',
            Austria: '奧地利',
            Germany: '德國',
            Luxembourg: '盧森堡',
            Switzerland: '瑞士',
            Slovenia: '斯洛維尼亞',
            Croatia: '克羅埃西亞',
            Bosnia_and_Herzegovina: '波士尼亞與赫塞哥維納',
            Denmark: '丹麥',
            Norway: '挪威',
            Sweden: '瑞典',
            Finland: '芬蘭',
            Estonia: '愛沙尼亞',
            Latvia: '拉脫維亞',
            Ukraine: '烏克蘭',
            Belarus: '白俄羅斯',
            Lithuania: '立陶宛',
            Poland: '波蘭',
            Czechia: '捷克',
            Slovakia: '斯洛伐克',
            Hungary: '匈牙利',
            Serbia: '塞爾維亞',
            Montenegro: '蒙特内哥羅',
            Greece: '希臘',
            North_Macedonia: '北馬其頓',
            Albania: '阿爾巴尼亞',
            Italy: '義大利',
            Bulgaria: '保加利亞',
            Romania: '羅馬尼亞',
            Moldova: '摩爾多瓦',
            Liechtenstein: '列支敦斯登',
            Turkey: '土耳其',
            Cyprus: '賽普勒斯',
            Vatican_City: '梵蒂岡',
            San_Marino: '聖馬力諾',
            Iceland: '冰島',
            Russia: '俄羅斯',
            Georgia: '喬治亞',
            Azerbaijan: '亞塞拜然',
            Armenia: '亞美尼亞',
            Monaco: '摩納哥',
            Malta: '馬爾他',
            Kosovo: '科索沃',
        }
    },
    日本語: {
        message: {
            data_level_5: '住居',
            data_level_4: '宿泊',
            data_level_3: '訪問',
            data_level_2: '接地',
            data_level_1: '通過',
            data_level_0_alt: '行きたい',
            data_level_0: '未踏',
            pt: '点',
        },
        country_name: {
            UK: 'イギリス',
            Ireland: 'アイルランド',
            Belgium: 'ベルギー',
            Netherlands: 'オランダ',
            Spain: 'スペイン',
            France: 'フランス',
            Andorra: 'アンドラ',
            Portugal: 'ポルトガル',
            Austria: 'オーストリア',
            Germany: 'ドイツ',
            Luxembourg: 'ルクセンブルク',
            Switzerland: 'スイス',
            Slovenia: 'スロベニア',
            Croatia: 'クロアチア',
            Bosnia_and_Herzegovina: 'ボスニア・ヘルツェゴビナ',
            Denmark: 'デンマーク',
            Norway: 'ノルウェー',
            Sweden: 'スウェーデン',
            Finland: 'フィンランド',
            Estonia: 'エストニア',
            Latvia: 'ラトビア',
            Ukraine: 'ウクライナ',
            Belarus: 'ベラルーシ',
            Lithuania: 'リトアニア',
            Poland: 'ポーランド',
            Czechia: 'チェコ',
            Slovakia: 'スロバキア',
            Hungary: 'ハンガリー',
            Serbia: 'セルビア',
            Montenegro: 'モンテネグロ',
            Greece: 'ギリシャ',
            North_Macedonia: '北マケドニア',
            Albania: 'アルバニア',
            Italy: 'イタリア',
            Bulgaria: 'ブルガリア',
            Romania: 'ルーマニア',
            Moldova: 'モルドバ',
            Liechtenstein: 'リヒテンシュタイン',
            Turkey: 'トルコ',
            Cyprus: 'キプロス',
            Vatican_City: 'バチカン',
            San_Marino: 'サンマリノ',
            Iceland: 'アイスランド',
            Russia: 'ロシア',
            Georgia: 'ジョージア',
            Azerbaijan: 'アゼルバイジャン',
            Armenia: 'アルメニア',
            Monaco: 'モナコ',
            Malta: 'マルタ',
            Kosovo: 'コソボ',
        }
    },
    Español: {
        message: {
            data_level_5: 'Vivido aquí',
            data_level_4: 'Quedado aquí',
            data_level_3: 'Visitado aquí',
            data_level_2: 'Parado aquí',
            data_level_1: 'Pasé por aquí',
            data_level_0_alt: 'Quiero ir',
            data_level_0: 'Nunca he estado',
            pt: 'pt | pts',
        },
        country_name: {
            UK: 'Reino Unido',
            Ireland: 'Irlanda',
            Belgium: 'Bélgica',
            Netherlands: 'Holanda',
            Spain: 'España',
            France: 'Francia',
            Andorra: 'Andorra',
            Portugal: 'Portugal',
            Austria: 'Austria',
            Germany: 'Alemania',
            Luxembourg: 'Luxemburgo',
            Switzerland: 'Suiza',
            Slovenia: 'Eslovenia',
            Croatia: 'Croacia',
            Bosnia_and_Herzegovina: 'Bosnia y Herzegovina',
            Denmark: 'Dinamarca',
            Norway: 'Noruega',
            Sweden: 'Suecia',
            Finland: 'Finlandia',
            Estonia: 'Estonia',
            Latvia: 'Latvia',
            Ukraine: 'Ukrania',
            Belarus: 'Bielorrusia',
            Lithuania: 'Lituania',
            Poland: 'Polonia',
            Czechia: 'República Checa',
            Slovakia: 'Eslovaquia',
            Hungary: 'Hungaria',
            Serbia: 'Serbia',
            Montenegro: 'Montenegro',
            Greece: 'Grecia',
            North_Macedonia: 'Macedonia del Norte',
            Albania: 'Albania',
            Italy: 'Italia',
            Bulgaria: 'Bulgaria',
            Romania: 'Romania',
            Moldova: 'Moldova',
            Liechtenstein: 'Liechtenstein',
            Turkey: 'Turquía',
            Cyprus: 'Chipre',
            Vatican_City: 'Ciudad del Vaticano',
            San_Marino: 'San Marino',
            Iceland: 'Islandia',
            Russia: 'Rusia',
            Georgia: 'Georgia',
            Azerbaijan: 'Azerbaiyán',
            Armenia: 'Armenia',
            Monaco: 'Mónaco',
            Malta: 'Malta',
            Kosovo: 'Kosovo',
        }
    },
    Russian: {
        message: {
            data_level_5: 'Жил',
            data_level_4: 'Оставался',
            data_level_3: 'Посещал',
            data_level_2: 'Останавливался',
            data_level_1: 'Проезжал',
            data_level_0_alt: 'Хочу побывать',
            data_level_0: 'Никогда не был',
            pt: 'ед.',
        },
        country_name: {
            UK: 'Великобритания',
            Ireland: 'Ирландия',
            Belgium: 'Бельгия',
            Netherlands: 'Нидерланды',
            Spain: 'Испания',
            France: 'Франция',
            Andorra: 'Андорра',
            Portugal: 'Португалия',
            Austria: 'Австрия',
            Germany: 'Германия',
            Luxembourg: 'Люксембург',
            Switzerland: 'Швейцария',
            Slovenia: 'Словения',
            Croatia: 'Хорватия',
            Bosnia_and_Herzegovina: 'Босния и Герцеговина',
            Denmark: 'Дания',
            Norway: 'Норвегия',
            Sweden: 'Швеция',
            Finland: 'Финляндия',
            Estonia: 'Эстония',
            Latvia: 'Латвия',
            Ukraine: 'Украина',
            Belarus: 'Беларусь',
            Lithuania: 'Литва',
            Poland: 'Польша',
            Czechia: 'Чехия',
            Slovakia: 'Словакия',
            Hungary: 'Венгрия',
            Serbia: 'Сербия',
            Montenegro: 'Черногория',
            Greece: 'Греция',
            North_Macedonia: 'Северная Македония',
            Albania: 'Албания',
            Italy: 'Италия',
            Bulgaria: 'Болгария',
            Romania: 'Румыния',
            Moldova: 'Молдова',
            Liechtenstein: 'Лихтенштейн',
            Turkey: 'Турция',
            Cyprus: 'Кипр',
            Vatican_City: 'Город Ватикан',
            San_Marino: 'Сан-Марино',
            Iceland: 'Исландия',
            Russia: 'Россия',
            Georgia: 'Грузия',
            Azerbaijan: 'Азербайджан',
            Armenia: 'Армения',
            Monaco: 'Монако',
            Malta: 'Мальта',
            Kosovo: 'Косово',
        }
    },
    עברית: {
        message: {
            data_level_5: 'גרת פו',
            data_level_4: 'נשאר',
            data_level_3: 'ביקר',
            data_level_2: 'עצר',
            data_level_1: 'עברה את הארץ',
            data_level_0_alt: 'רוצה לבקר',
            data_level_0: 'מעולם לא הייתי',
            pt: 'יח',
        },
        country_name: {
            UK: 'בריטניה הגדולה',
            Ireland: 'אירלנד',
            Belgium: 'בלגיה',
            Netherlands: 'הולנד',
            Spain: 'סְפָרַד',
            France: 'צָרְפַת',
            Andorra: 'אנדורה',
            Portugal: 'פּוֹרטוּגָל',
            Austria: 'אוֹסְטְרֵיָה',
            Germany: 'גֶרמָנִיָה',
            Luxembourg: 'לוקסמבורג',
            Switzerland: 'שוויץ',
            Slovenia: 'סלובניה',
            Croatia: 'קרואטיה',
            Bosnia_and_Herzegovina: 'בוסניה והרצגובינה',
            Denmark: 'דנמרק',
            Norway: 'נורווגיה',
            Sweden: 'שבדיה',
            Finland: 'פינלנד',
            Estonia: 'אסטוניה',
            Latvia: 'לטביה',
            Ukraine: 'אוקראינה',
            Belarus: 'בלארוס',
            Lithuania: 'ליטא',
            Poland: 'פּוֹלִין',
            Czechia: 'צכית',
            Slovakia: 'סלובקיה',
            Hungary: 'הונגריה',
            Serbia: 'סרביה',
            Montenegro: 'מונטנגרו',
            Greece: 'יוון',
            North_Macedonia: 'צפון מקדוניה',
            Albania: 'אלבניה',
            Italy: 'איטליה',
            Bulgaria: 'בולגריה',
            Romania: 'רומניה',
            Moldova: 'מולדובה',
            Liechtenstein: 'ליכטנשטיין',
            Turkey: 'טורקיה',
            Cyprus: 'קפריסין',
            Vatican_City: 'עיר הותיקן',
            San_Marino: 'סן מרינו',
            Iceland: 'איסלנד',
            Russia: 'רוסיה',
            Georgia: 'גאורגיה',
            Azerbaijan: 'אזרבייגן',
            Armenia: 'ארמניה',
            Monaco: 'מונקו',
            Malta: 'מלטה',
            Kosovo: 'קוסובו',
        }
    }
}
const i18n = VueI18n.createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages,
})
const app1 = Vue.createApp().use(i18n).mount("#Layer_4")
const app2 = Vue.createApp().use(i18n).mount("#settingLevel")
const app3 = Vue.createApp().use(i18n).mount("#Texts")

const settingLevelTitle = settingLevel.children[0];

const color = ['#F9CDC7', '#C5F9CB', '#CDE8F4', '#FDE8C4', '#D0DCD7', '#E1CEF5', '#D6D6D6'];
const color_randomizer = Math.floor(Math.random() * 7);
documentElement.style.backgroundColor = color[color_randomizer]
addEventMonitor(documentElement, 'click', e => {
    if (e.target == doc.body) {
        const colorA = Math.floor(Math.random() * 50) + 176;
        const colorB = Math.floor(Math.random() * 50) + 176;
        const colorC = Math.floor(Math.random() * 50) + 176;
        documentElement.style.backgroundColor = '#' + colorA.toString(16) + colorB.toString(16) + colorC.toString(16)
    }
})

const fullyClose = _ => {
    setLevelStyle.display = '';
    setLanguageStyle.display = '';
};
const data = {};
const getAllProvincialElements = _ => [...area.children];
const getAllProvincialLevels = _ => getAllProvincialElements().map(el => +el.getAttribute('level') || 0);
const localStorageLevelKeys = 'eu-levels';
const savedLevels = _ => {
    let localStorageValue = ""
    for (const provincialElement of getAllProvincialElements()) {
        if (provincialElement.getAttribute('alt') == "true") {
            localStorageValue += '-'
        }
        else localStorageValue += provincialElement.getAttribute('level') || 0
    }
    LOCAL_STORAGE.setItem(localStorageLevelKeys, localStorageValue);
};
const provincialLevelRegex = /^[\d|-]{50}$/;
const getLevelsAndUpdate = _ => {
    let gradeString = LOCAL_STORAGE.getItem(localStorageLevelKeys);
    console.log(gradeString.length)
    if (/^[\d|-]{49}$/.test(gradeString)) gradeString += '0'; // handling legacy localstorage
    console.log(gradeString)
    if (!provincialLevelRegex.test(gradeString)) return;
    const level = gradeString.split('');
    getAllProvincialElements().forEach((element, value) => {
        element.setAttribute('level', level[value] == '-' ? '0' : level[value])
        if (level[value] == '-') element.setAttribute('alt', true);
        if (element.nodeName == 'g') {
            for (const child of element.children) {
                child.setAttribute('level', level[value] == '-' ? '0' : level[value]);
                if (level[value] == '-') child.setAttribute('alt', true);
            }
        }
    })
};
const graphic = doc.querySelector('svg');
const setLevelStyle = settingLevel.style;
const minDistance = 6;
addEventMonitor(graphic, 'click', e => {
    fullyClose()
    e.stopPropagation();

    let { target: provincialElement } = e;
    if (provincialElement.parentElement.id == provincialElement.id) {
        provincialElement = provincialElement.parentElement
    }
    const provincialElementRotation = getElementPosition(provincialElement);
    const { id } = provincialElement;
    data.provincialElement = provincialElement;
    data.id = id;

    settingLevelTitle.innerHTML = messages[Lang.textContent].country_name[id]
    setLevelStyle.display = 'block';
    const setLevelOfLevelElement = getElementPosition(settingLevel);

    let left = Math.round(provincialElementRotation.left + provincialElementRotation.width / 2 - setLevelOfLevelElement.width / 2);
    left = Math.min(
        left,
        document.body.offsetWidth - setLevelOfLevelElement.width - minDistance
    );
    left = Math.max(
        left,
        minDistance
    );

    let top = Math.round(provincialElementRotation.top + provincialElementRotation.height / 2 - setLevelOfLevelElement.height / 2);
    top = Math.min(
        top,
        document.body.offsetHeight - setLevelOfLevelElement.height - minDistance
    );
    top = Math.max(
        top,
        minDistance
    );

    setLevelStyle.left = left + 'px';
    setLevelStyle.top = top + 'px';
});
addEventMonitor(doc, 'click', fullyClose);
const updateScore = _ => {
    const sum = getAllProvincialLevels().reduce((sum, current) => {
        return +sum + current;
    }, 0);
    Total.innerHTML = `Europe Level ${sum}`;
    webtitle.innerHTML = `Europe Level ${sum}`;
}
addEventMonitor(settingLevel, 'click', e => {
    e.stopPropagation();
    const grade = e.target.getAttribute('data-level');
    if (!grade) return false;
    if (data.provincialElement.nodeName == "g") {
        for (const child of data.provincialElement.children) {
            child.setAttribute('level', grade)
        }
    }
    data.provincialElement.setAttribute('level', grade);
    const alt = e.target.hasAttribute('alt');
    if (data.provincialElement.nodeName == "g") {
        for (const child of data.provincialElement.children) {
            if (alt) child.setAttribute('alt', true)
            else child.setAttribute('alt', false);
        }
    }
    if (alt) data.provincialElement.setAttribute('alt', true)
    else data.provincialElement.setAttribute('alt', false);
    fullyClose();
    updateScore();
    savedLevels();
})
addEventMonitor(Reset, 'click', e => {
    getAllProvincialElements().forEach((element, 下标) => {
        element.setAttribute('level', '0')
        element.setAttribute('alt', false);
        if (element.nodeName == 'g') {
            for (const child of element.children) {
                child.setAttribute('level', '0');
                child.setAttribute('alt', false);
            }
        }
    })
    fullyClose();
    updateScore();
    savedLevels();
})

const language = doc.querySelector('#Lang');
const setLanguageStyle = Set_Lang.style;
addEventMonitor(language, 'click', e => {
    fullyClose()
    e.stopPropagation();

    setLanguageStyle.display = 'block';
    const setLanguageOrientation = getElementPosition(Set_Lang);
    const langBtnPosition = getElementPosition(language);
    const currentLanguage = Lang.textContent;
    for (const child of Set_Lang.children) {
        if (child.getAttribute('lang') == currentLanguage) {
            child.style.background = "#aaa";
        }
        else {
            child.style.background = "#fff";
        }
    }

    let left = Math.round(langBtnPosition.left + langBtnPosition.width / 2 - setLanguageOrientation.width / 2);
    left = Math.min(
        left,
        document.body.offsetWidth - setLanguageOrientation.width - minDistance
    );
    left = Math.max(
        left,
        minDistance
    );

    let top = Math.round(langBtnPosition.top - setLanguageOrientation.height - minDistance);
    top = Math.min(
        top,
        document.body.offsetHeight - setLanguageOrientation.height - minDistance
    );
    top = Math.max(
        top,
        minDistance
    );

    setLanguageStyle.left = left + 'px';
    setLanguageStyle.top = top + 'px';
});
const changeLanguage = (newLang) => {
    i18n.global.locale = newLang
}
addEventMonitor(Set_Lang, 'click', e => {
    e.stopPropagation();
    const language = e.target.getAttribute('lang');
    if (!language) return false;
    Lang.textContent = language;
    fullyClose();
    changeLanguage(language);
})

getLevelsAndUpdate();
updateScore();

const readFilesFromUrl = (rawData, callback) => {
    const reader = new FileReader();
    reader.onload = e => callback(e.target.result);
    reader.readAsDataURL(rawData);
};
const getFontDataUrl = (url, callback) => {
    fetch(url).then(r => r.blob()).then(rawData => readFilesFromUrl(rawData, callback));
};
const getFontStyle = (fontName, callback) => {
    getFontDataUrl(`${fontName}.woff?v=9`, url => callback(`@font-face {
        font-family: ${fontName};
        src: url(${url});
    };`));
};
getFontStyle('slice', styleString => {
    graphic.querySelector('style').innerHTML = styleString;
    const styleElement = newElement('style');
    styleElement.innerHTML = styleString;
    firstElement.appendChild(styleElement);
    setTimeout(_ => documentElement.removeAttribute('data-loading'), 2e3);
});

const width = 1618;
const height = 1249;
const compare = 2;

const canvas = newElement('canvas');

canvas.width = width * compare;
canvas.height = width * compare;

const context = canvas.getContext('2d');

const newGraphicFromDocument = document => {
    const rawData = new Blob([document], { type: 'image/svg+xml' });
    return URL.createObjectURL(rawData);
};
const isSocialMedia = /weibo|qq/i.test(navigator.userAgent);
// alert(navigator.userAgent)
const downloadFile = (link, fileName, element = newElement('a')) => {
    if (!isSocialMedia) {
        element.download = fileName;
    }
    element.href = link;
    element.click();
};
const urlChangeImageElements = (url, callback) => {
    const pic = newImage();
    addEventMonitor(pic, 'load', _ => callback(pic));
    pic.src = url;
};
const log = _ => (newImage()).src = `https://lab.magiconch.com/api/china-ex/log?levels=${getAllProvincialLevels().join('')}`;

const saveImage = _ => {
    const document = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}px" height="${height}px">${graphic.innerHTML}</svg>`;
    const dataUrl = newGraphicFromDocument(document);
    urlChangeImageElements(dataUrl, pic => {
        context.fillStyle = documentElement.style.backgroundColor; //'#b4b4ef';
        context.fillRect(
            0, 0,
            width * compare, width * compare
        );
        context.drawImage(
            pic,
            0, 0,
            width, height,
            0, (width - height) * compare / 2,
            width * compare, height * compare
        );
        canvas.toBlob(elementData => {
            const url = URL.createObjectURL(elementData);
            downloadFile(url, `Europe Level 0.png`);

            outputImage.style.display = '';
            outputImage.querySelector('img').src = url;

        }, 'image/png');
    });
    log();
};

addEventMonitor(keep, 'click', saveImage);

addEventMonitor(outputImage.querySelector('a'), 'click', _ => {
    outputImage.style.display = 'none'
});
