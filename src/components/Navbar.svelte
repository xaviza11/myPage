<script>
  import { afterUpdate } from 'svelte';
  import { t } from 'svelte-i18n';

  let currentPath = '';

  const updateCurrentPath = () => {
    currentPath = window.location.hash || '#/';
  };

  updateCurrentPath();
  window.addEventListener('hashchange', updateCurrentPath);
</script>

<style>
  #navbar {
    background-color: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    z-index: 100;
    border-bottom: 1px white solid;
  }

  #navbar a {
    color: white;
    text-decoration: none;
    margin: 0 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  #navbar a.active {
    color: #aaa;
    text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6);
  }
</style>

<div id="navbar">
  <a href="#/" class="{currentPath === '#/' ? 'active' : ''}"><h4>{$t('navbar.home')}</h4></a>
  <a href="#/projects" class="{currentPath === '#/projects' ? 'active' : ''}"><h4>{$t('navbar.projects')}</h4></a>
  <a href="#/about" class="{currentPath === '#/about' ? 'active' : ''}"><h4>{$t('navbar.about')}</h4></a>
</div>
