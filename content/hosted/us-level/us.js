const LOCAL_STORAGE = localStorage;
const Win = window;
const doc = document;
const documentElement = document.documentElement;
const firstElement = doc.head;
const newElement = 名 => doc.createElement(名);
const newImage = _ => new Image();
const addEventMonitor = (element, event, callback) => element[`on${event}`] = callback;// element.addEventListener(event,callback);
const getElementPosition = element => element.getBoundingClientRect();
const messages = {
    English: {
        message: {
            data_level_1_min: 'Will not go here',
            data_level_5: 'Lived Here',
            data_level_4: 'Stayed Here',
            data_level_3: 'Visited Here',
            data_level_2: 'Stopped Here',
            data_level_1: 'Passed Here',
            data_level_0_alt: 'Want to visit here',
            data_level_0: 'Never Been Here',
            pt: 'pt | pts',
        },
        country_name: {
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'California',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'South Dakota',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'New Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'New York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'New Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'West Virginia',
            Kentucky: 'Kentucky',
            North_Carolina: 'North Carolina',
            Tennessee: 'Tennessee',
            South_Carolina: 'South Carolina',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'North Dakota',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregon',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'New Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Northern Mariana Islands',
            American_Samoa: 'American Samoa',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'US Virgin Islands',
        }
    },
    简体中文: {
        message: {
            data_level_1_min: '从不想参观',
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
            Maryland: '马里兰',
            Ohio: '俄亥俄',
            California: '加利福尼亚',
            Utah: '犹他',
            Idaho: '爱达荷',
            South_Dakota: '南达科他',
            Nebraska: '内布拉斯加',
            Oklahoma: '俄克拉荷马',
            Missouri: '密苏里',
            Illinois: '伊利诺伊',
            Maine: '缅因',
            New_Hampshire: '新罕布什尔',
            Vermont: '佛蒙特',
            Massachusettes: '马萨诸塞',
            Connecticut: '康涅狄格',
            New_York: '纽约',
            Rhode_Island: '罗德岛',
            Pennsylvania: '宾夕法尼亚',
            New_Jersy: '新泽西',
            Delaware: '特拉华',
            Virginia: '弗吉尼亚',
            DC: '华盛顿特区',
            West_Virginia: '西弗吉尼亚',
            Kentucky: '肯塔基',
            North_Carolina: '北卡罗莱纳',
            Tennessee: '田纳西',
            South_Carolina: '南卡罗莱纳',
            Georgia: '乔治亚',
            Alabama: '阿拉巴马',
            Indiana: '印第安纳',
            Wisconsin: '威斯康辛',
            Louisiana: '路易斯安那',
            Arkansas: '阿肯色',
            Mississippi: '密西西比',
            Iowa: '爱荷华',
            Minnesota: '明尼苏达',
            Kansas: '堪萨斯',
            North_Dakota: '北达科他',
            Colorado: '科罗拉多',
            Wyoming: '怀俄明',
            Montana: '蒙大拿',
            Arizona: '亚利桑那',
            Oregon: '俄勒冈',
            Washington: '华盛顿',
            Texas: '得克萨斯',
            New_Mexico: '新墨西哥',
            Michigan: '密歇根',
            Florida: '佛罗里达',
            Alaska: '阿拉斯加',
            Hawaii: '夏威夷',
            Puerto_Rico: '波多黎各',
            Guam: '关岛',
            Northern_Mariana_Islands: '北马里亚纳群岛',
            American_Samoa: '美属萨摩亚',
            Nevada: '内华达',
            US_Virgin_Islands: '美属维京群岛',
        }
    },
    繁體中文: {
        message: {
            data_level_1_min: '永遠不想參觀',
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
            Maryland: '馬里蘭',
            Ohio: '俄亥俄',
            California: '加利福尼亞',
            Utah: '猶他',
            Idaho: '愛達荷',
            South_Dakota: '南達科他',
            Nebraska: '内布拉斯加',
            Oklahoma: '奧克拉荷馬',
            Missouri: '密蘇里',
            Illinois: '伊利諾伊',
            Maine: '緬因',
            New_Hampshire: '新罕布夏',
            Vermont: '佛蒙特',
            Massachusettes: '麻薩諸塞',
            Connecticut: '康乃狄克',
            New_York: '紐約',
            Rhode_Island: '羅德島',
            Pennsylvania: '賓夕法尼亞',
            New_Jersy: '紐澤西',
            Delaware: '德拉瓦',
            Virginia: '維吉尼亞',
            DC: '華盛頓哥倫比亞特區',
            West_Virginia: '西維吉尼亞',
            Kentucky: '肯塔基',
            North_Carolina: '北卡羅來納',
            Tennessee: '田納西',
            South_Carolina: '南卡羅來納',
            Georgia: '喬治亞',
            Alabama: '阿拉巴馬',
            Indiana: '印第安納',
            Wisconsin: '威斯康辛',
            Louisiana: '路易斯安那',
            Arkansas: '阿肯色',
            Mississippi: '密西西比',
            Iowa: '愛荷華',
            Minnesota: '明尼蘇達',
            Kansas: '堪薩斯',
            North_Dakota: '北達科他',
            Colorado: '科羅拉多',
            Wyoming: '懷俄明',
            Montana: '蒙大拿',
            Arizona: '亞利桑那',
            Oregon: '奧勒岡',
            Washington: '華盛頓',
            Texas: '德克薩斯',
            New_Mexico: '新墨西哥',
            Michigan: '密西根',
            Florida: '佛羅里達',
            Alaska: '阿拉斯加',
            Hawaii: '夏威夷',
            Puerto_Rico: '波多黎各',
            Guam: '關島',
            Northern_Mariana_Islands: '北馬利安納群島',
            American_Samoa: '美屬薩摩亞',
            Nevada: '内華達',
            US_Virgin_Islands: '美屬維京群島',
        }
    },
    日本語: {
        message: {
            data_level_1_min: '絶対に訪れたくない',
            data_level_5: '住居',
            data_level_4: '宿泊',
            data_level_3: '訪問',
            data_level_2: '接地',
            data_level_1: '通過',
            data_level_0_alt: '行きたい',
            data_level_0: '未踏',
            pt: '分',
        },
        country_name: {
            Maryland: 'メリーランド',
            Ohio: 'オハイオ',
            California: 'カリフォルニア',
            Utah: 'ユタ',
            Idaho: 'アイダホ',
            South_Dakota: 'サウスダコタ',
            Nebraska: 'ネブラスカ',
            Oklahoma: 'オクラホマ',
            Missouri: 'ミズーリ',
            Illinois: 'イリノイ',
            Maine: 'メイン',
            New_Hampshire: 'ニューハンプシャー',
            Vermont: 'バーモント',
            Massachusettes: 'マサチューセッツ',
            Connecticut: 'コネチカット',
            New_York: 'ニューヨーク',
            Rhode_Island: 'ロードアイランド',
            Pennsylvania: 'ペンシルベニア',
            New_Jersy: 'ニュージャージー',
            Delaware: 'デラウェア',
            Virginia: 'バージニア',
            DC: 'ワシントンD.C.',
            West_Virginia: 'ウェストバージ',
            Kentucky: 'ケンタッキー',
            North_Carolina: 'ノースカロライナ',
            Tennessee: 'テネシー',
            South_Carolina: 'サウスカロライナ',
            Georgia: 'ジョージア',
            Alabama: 'アラバマ',
            Indiana: 'インディアナ',
            Wisconsin: 'ウィスコンシン',
            Louisiana: 'ルイジアナ',
            Arkansas: 'アーカンソー',
            Mississippi: 'ミシシッピ',
            Iowa: 'アイオワ',
            Minnesota: 'ミネソタ',
            Kansas: 'カンザス',
            North_Dakota: 'ノースダコタ',
            Colorado: 'コロラド',
            Wyoming: 'ワイオミング',
            Montana: 'モンタナ',
            Arizona: 'アリゾナ',
            Oregon: 'オレゴン',
            Washington: 'ワシントン',
            Texas: 'テキサス',
            New_Mexico: 'ニューメキシコ',
            Michigan: 'ミシガン',
            Florida: 'フロリダ',
            Alaska: 'アラスカ',
            Hawaii: 'ハワイ',
            Puerto_Rico: 'プエルトリコ',
            Guam: 'グアム',
            Northern_Mariana_Islands: '北マリアナ諸島',
            American_Samoa: '米領サモア',
            Nevada: 'ネバダ',
            US_Virgin_Islands: '米領ヴァージン諸島',
        }
    },
    Español: {
        message: {
            data_level_1_min: 'Nunca quiero visitar',
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
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'California',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'Dakota del Sur',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'Nuevo Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'Nueva York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'Nueva Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'Virginia Occidental',
            Kentucky: 'Kentucky',
            North_Carolina: 'Carolina del Norte',
            Tennessee: 'Tennessee',
            South_Carolina: 'Carolina del Sur',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'Dakota del Norte',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregón',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'Nuevo Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Islas Marianas del Norte',
            American_Samoa: 'Samoa Americana',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'Islas Virgenes de los Estados Unidos',
        }
    },
    Danish: {
        message: {
            data_level_1_min: 'Aldrig ønsker at besøge',
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
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'Californien',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'South Dakota',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'New Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'New York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'New Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'West Virginia',
            Kentucky: 'Kentucky',
            North_Carolina: 'North Carolina',
            Tennessee: 'Tennessee',
            South_Carolina: 'South Carolina',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'North Dakota',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregon',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'New Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Nordmarianerne',
            American_Samoa: 'Amerikansk Samoa',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'Amerikanske Jomfruøer',
        }
    },
    עברית: {
        message: {
            data_level_1_min: 'לעולם לא רוצה לבקר',
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
            Maryland: 'מרילנד',
            Ohio: 'אוהיו',
            California: 'קליפורניה',
            Utah: 'יוטה',
            Idaho: 'איידהו',
            South_Dakota: 'דקוטה הדרומית',
            Nebraska: 'נברסקה',
            Oklahoma: 'אוקלהומה',
            Missouri: 'מיזורי',
            Illinois: 'אילינוי',
            Maine: 'מיין',
            New_Hampshire: 'ניו המפשייר',
            Vermont: 'ורמונט',
            Massachusettes: "מסצ'וסטס",
            Connecticut: 'קונטיקט',
            New_York: 'ניו יורק',
            Rhode_Island: 'רוד איילנד',
            Pennsylvania: 'פנסילבניה',
            New_Jersy: "ניו ג'רזי",
            Delaware: 'דלאוור',
            Virginia: "וירג'יניה",
            DC: 'וושינגטון די. סי.',
            West_Virginia: "וירג'יניה המערבית",
            Kentucky: 'קנטקי',
            North_Carolina: 'קרוליינה הצפונית',
            Tennessee: 'טנסי',
            South_Carolina: 'קרוליינה הדרומית',
            Georgia: "ג'ורג'יה",
            Alabama: 'אלבמה',
            Indiana: 'אינדיאנה',
            Wisconsin: 'ויסקונסין',
            Louisiana: 'לואיזיאנה',
            Arkansas: 'ארקנסו',
            Mississippi: 'מיסיסיפי',
            Iowa: 'איווה',
            Minnesota: 'מינסוטה',
            Kansas: 'קנזס',
            North_Dakota: 'דקוטה הצפונית',
            Colorado: 'קולורדו',
            Wyoming: 'ויומינג',
            Montana: 'מונטנה',
            Arizona: 'אריזונה',
            Oregon: 'אורגון',
            Washington: 'וושינגטון',
            Texas: 'טקסס',
            New_Mexico: 'ניו מקסיקו',
            Michigan: 'מישיגן',
            Florida: 'פלורידה',
            Alaska: 'אלסקה',
            Hawaii: 'הוואי',
            Puerto_Rico: 'פוארטו ריקו',
            Guam: 'גואם',
            Northern_Mariana_Islands: 'איי מריאנה הצפוניים',
            American_Samoa: 'סמואה האמריקנית',
            Nevada: 'נבדה',
            US_Virgin_Islands: 'איי הבתולה של ארצות הברית',
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

const color = ['#F9CDC7', '#C5F9CB', '#CDE8F4', '#FDE8C4', '#D0DCD7', '#E1CEF5', '#D6D6D6', '#873e23'];
const color_randomizer = Math.floor(Math.random() * 8);
documentElement.style.backgroundColor = color[color_randomizer]
addEventMonitor(documentElement, 'click', e => {
    if (e.target == doc.body) {
        const colorA = Math.floor(Math.random() * 50) + 176;
        const colorB = Math.floor(Math.random() * 50) + 176;
        const colorC = Math.floor(Math.random() * 50) + 176;
        documentElement.style.backgroundColor = '#' + colorA.toString(16) + colorB.toString(16) + colorC.toString(16)
    }
})

const setLevelTitle = settingLevel.children[0];

const fullyClose = _ => {
    setLevelStyle.display = '';
    setLanguageStyle.display = '';
};
const data = {};
const getAllProvicialElements = _ => [...area.children];
const getAllProvincialLevels = _ => getAllProvicialElements().map(el => {
    if (el.getAttribute('id') === 'New_Jersy') {
        if(el.getAttribute('level') < 0)
            return -55*5;
        if(el.getAttribute('level') == 5)
            return 50;
    }
    return +el.getAttribute('level') || 0
});
const localStorageLevelKeys = 'us-levels';
const savedLevels = _ => {
    let localStorageValue = ""
    for (const provincialElement of getAllProvicialElements()) {
        if (provincialElement.getAttribute('alt') == "true") {
            localStorageValue += '-'
        }
        else localStorageValue += provincialElement.getAttribute('level') || 0
    }
    LOCAL_STORAGE.setItem(localStorageLevelKeys, localStorageValue);
};
const provincialLevelRegex = /^[\d|-]{56}$/;
const getLevelsAndUpdate = _ => {
    const gradeString = LOCAL_STORAGE.getItem(localStorageLevelKeys);
    if (!provincialLevelRegex.test(gradeString)) return;
    const level = gradeString.split('');
    getAllProvicialElements().forEach((element, value) => {
        element.setAttribute('level', level[value] == '-' ? '0' : level[value])
        if (level[value] == '-') element.setAttribute('alt', true);
    })
};
const graphic = doc.querySelector('svg');
const setLevelStyle = settingLevel.style;
const minDistance = 6;
addEventMonitor(graphic, 'click', e => {
    e.stopPropagation();

    const { target: provincialElement } = e;
    const provincialElementRotation = getElementPosition(provincialElement);
    const { id } = provincialElement;
    data.provincialElement = provincialElement;
    data.id = id;

    setLevelTitle.innerHTML = messages[Lang.textContent].country_name[id];
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
    Total.innerHTML = `US Level ${sum}`;
    webtitle.innerHTML = `US Level ${sum}`;
}
addEventMonitor(settingLevel, 'click', e => {
    e.stopPropagation();
    const grade = e.target.getAttribute('data-level');
    if (!grade) return false;
    data.provincialElement.setAttribute('level', grade);
    const alt = e.target.hasAttribute('alt');
    if (alt) data.provincialElement.setAttribute('alt', true)
    else data.provincialElement.setAttribute('alt', false);
    fullyClose();
    updateScore();
    savedLevels();
})
addEventMonitor(Reset, 'click', e => {
    getAllProvicialElements().forEach((element, 下标) => {
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

const width = 1150;
const height = 920;
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
            downloadFile(url, `US Level 0.png`);

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
