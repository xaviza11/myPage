<script>
  import { t } from 'svelte-i18n';
  import {locale} from 'svelte-i18n'

  const changeLanguage = (newLanguage) => {
    locale.set(newLanguage)
  };
</script>

<style>
  #footer {
    background-color: #000000;
    display: flex;
    justify-content: center;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 4vh;
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
  }

  #footer span:hover {
    color: #aaa;
    text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6); 
  }

  #footer .language-selector {
    cursor: pointer;
  }

  #footer .language-selector:hover {
    color: #aaa;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    #footer {
      height: 8vh;
    }
  }

  @media (max-width: 768px) and (orientation: portrait) {
    #footer {
      height: 4vh;
    }
  }
</style>

<div id="footer">
  <span class="language-selector" on:click={() => changeLanguage('es')}><h4>{$t('footer.es')}</h4></span>
  <span> | </span> 
  <span class="language-selector" on:click={() => changeLanguage('en')}><h4>{$t('footer.in')}</h4></span>
</div>
