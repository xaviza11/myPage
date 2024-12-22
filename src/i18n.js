import { register, init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

import en from './locales/en.json'
import es from './locales/es.json'

addMessages('en', en)
addMessages('es', es)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
