<script>
  import Info from "../components/Info.svelte";
  import Skills from "../components/Skills.svelte";
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t('home.seoTitle')}</title>
  <meta name="description" content={$t('home.seoDescription')} />
</svelte:head>

<div class="index-container">
  <Info />
  <Skills />
</div>

<style>
  .index-container {
    height: 95vh;
    width: 78vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    animation: fadeInUp 1s ease-out;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(700px); 
    }
    100% {
      opacity: 1;
      transform: translateY(0); 
    }
  }

  @media (orientation: landscape) {
    .index-container {
      flex-direction: row;
      justify-content: space-between;
      gap: 2vw;
    }
  }

  @media (orientation: portrait) {
    .index-container {
      flex-direction: column;
      justify-content: center;
      gap: 4vh;
    }
  }

  @media (max-width: 916px) {
    .index-container {
      width: 90vw;
    }
}
</style>
