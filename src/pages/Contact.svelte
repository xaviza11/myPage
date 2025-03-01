<script>
    import Contact from "../components/Contact.svelte";
    import { t } from "svelte-i18n";
  </script>
  
  <svelte:head>
    <title>{$t('about.seoTitle')}</title>
    <meta name="description" content={$t('about.seoDescription')} />
  </svelte:head>
  
  <div class="contact-container">
    <Contact />
  </div>
  
  <style>
    .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  </style>
  