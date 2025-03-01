<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import Lazy from 'svelte-lazy';
  import { t } from 'svelte-i18n';

  export const email = "xaviza11@gmail.com";
  export const phone = "+34 610 45 27 64";
  export const github = "https://github.com/xaviza11";

  let buttonPressed = false;
</script>

<div class="contact-container">
  {#if !buttonPressed}
  <div class="thanks-container">
    <h2> {$t('contact.thanks')}😊</h2>
    <button on:click={() => buttonPressed = true}>{$t('contact.press')}</button>
  </div>
  {:else}
    <div class="social-links">
      <a href="mailto:{email}" target="_blank" title="Correo">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>{email}</p>
      </a>
      <a href="tel:{phone}" title="Teléfono">
        <FontAwesomeIcon icon={faPhone} />
        <p>{phone}</p>
      </a>
      <a href={github} target="_blank" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
        <p>{github}</p>
      </a>
    </div>
  {/if}
</div>

<style>
  .thanks-container {
    display: flex;
    flex-direction: column;
    gap: 4vh;
  }
  .contact-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    margin-top: 2vh;
  }

  .social-links a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.3s, color 0.3s;
  }

  .social-links a:hover {
    transform: scale(1.05);
    color: var(--soft-gray);
  }
</style>