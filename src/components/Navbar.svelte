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
    padding-left: 12vw;
    padding-right: 12vw;
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

  @media (max-width: 768px) {
    #navbar {
      justify-content: space-around;
    }

    #navbar a {
      margin: 0
    }
  }
</style>

<div id="navbar">
  <a href="#/" class="{currentPath === '#/' ? 'active' : ''}">{$t('navbar.home')}</a>
  <a href="#/projects" class="{currentPath === '#/projects' ? 'active' : ''}">{$t('navbar.projects')}</a>
  <a href="#/skills" class="{currentPath === '#/skills' ? 'active' : ''}">{$t('navbar.skills')}</a>
  <a href="#/contact" class="{currentPath === '#/contact' ? 'active' : ''}">{$t('navbar.contact')}</a>
</div>
