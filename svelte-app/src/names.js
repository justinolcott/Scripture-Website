const bom_abbreviations = {
    '1 Nephi': '1-ne',
    '2 Nephi': '2-ne',
    'Jacob': 'jacob',
    'Enos': 'enos',
    'Jarom': 'jarom',
    'Omni': 'omni',
    'Words of Mormon': 'w-of-m',
    'Mosiah': 'mosiah',
    'Alma': 'alma',
    'Helaman': 'hel',
    '3 Nephi': '3-ne',
    '4 Nephi': '4-ne',
    'Mormon': 'morm',
    'Ether': 'ether',
    'Moroni': 'moro'
};

export function getAbbreviation(key) {
    return bom_abbreviations[key];
}



