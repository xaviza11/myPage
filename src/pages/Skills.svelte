<script>
  import SkillsList from "../components/SkillsList.svelte";
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t('about.seoTitle')}</title>
  <meta name="description" content={$t('about.seoDescription')} />
</svelte:head>

<div class="about-container">
  <SkillsList />
</div>

<style>
  .about-container {
    padding-top: 20vh;
    padding-bottom: 20vh;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
  }
</style>
