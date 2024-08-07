const dictionaries = {
  en: () => import('@/dictionaries/en.js').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.js').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.js').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
