<script>
  import AboutMeInfo from "../components/AboutMeInfo.svelte";
  import SkillsList from "../components/SkillsList.svelte";
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t('about.seoTitle')}</title>
  <meta name="description" content={$t('about.seoDescription')} />
</svelte:head>

<div id="about-container">
  <AboutMeInfo />
  <SkillsList />
</div>

<style>
  #about-container {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    padding-top: 15vh;
    padding-bottom: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
  }
</style>
