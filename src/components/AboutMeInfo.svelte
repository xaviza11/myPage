<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
  import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
  import { t } from 'svelte-i18n';

  export let email = "tucorreo@dominio.com";
  export let linkedin = "https://www.linkedin.com/in/tu-perfil";
  export let github = "https://github.com/tu-perfil";

  export let name = "Xavier Zamora Lorente";
  export let imageUrl = "https://via.placeholder.com/150";
  export let description = $t('profile.description');
</script>

<div class="about-container">
  <div class="about-header">
    <img src={imageUrl} alt="Tu Foto" />
    <h1>{name}</h1>
    <p class="description">{description}</p>
  </div>

  <div class="social-links">
    <a href="mailto:{email}" target="_blank" title="Correo">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a href={linkedin} target="_blank" title="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href={github} target="_blank" title="GitHub">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
</div>

<style>
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .about-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .about-header img {
    border: 3px solid white;
    border-radius: 50%;
    width: 18vh;
    height: 18vh;
    object-fit: cover;
  }

  .about-header h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }

  .description {
    font-size: 1rem;
    color: #d4d3d3;
    text-align: center;
    margin: 0;
    max-width: 300px; 
    line-height: 1.5;
  }

  .social-links {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .social-links a {
    color: white;
    font-size: 1.5rem;
    transition: transform 0.3s, color 0.3s;
  }

  .social-links a:hover {
    transform: scale(1.2);
    color: #d4d3d3;
  }
</style>
