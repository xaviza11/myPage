<script>
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$t('notFound.seoTitle')}</title>
  <meta name="description" content={$t('notFound.seoDescription')} />
</svelte:head>

<main>
  <h1>{$t('notFound.title')}</h1>
  <p>{$t('notFound.message')}</p>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #f0f0f0;
  }
</style>
