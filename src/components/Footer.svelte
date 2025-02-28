<script>
  import { t } from 'svelte-i18n';
  import {locale} from 'svelte-i18n'
  import Cookies from 'js-cookie'

  const changeLanguage = (newLanguage) => {
    locale.set(newLanguage)
    Cookies.set('locale', newLanguage, { expires: 365 })
  };
</script>

<style>
  #footer {
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 4.5vh;
    border-top: 1px white solid;
    z-index: 2;
  }

  #footer span {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    margin-left: 0.4vw;
    margin-right: 0.4vw;
    font-family: 'Lato';
  }

  #footer span:hover {
    color: #aaa;
    text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6); 
  }
  #footer .language-selector {
    cursor: pointer;
    background: none;
    border: none;
  }
</style>

<div id="footer">
  <button class="language-selector" on:click={() => changeLanguage('es')}><h4>{$t('footer.es')}</h4></button>
  <span><h4> | </h4></span> 
  <button class="language-selector" on:click={() => changeLanguage('en')}><h4>{$t('footer.in')}</h4></button>
</div>
