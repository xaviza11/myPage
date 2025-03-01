<script lang="ts">
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import Lazy from 'svelte-lazy';
  import { t } from "svelte-i18n";

  export let projects: any = [];
</script>

<style>
  .projects-container {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
  }

  .project {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    color: white;
    gap: 20vh;
  }

  .project-content {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1vh;
  }

  .img-container {
    height: 20vh;
    width: 30vh;
  }

  .project img {
    height: 20vh;
    width: 30vh;
    border-radius: 8px;
    object-fit: contain;
  }

  @media (orientation: portrait) {
    .project {
      display: flex;
      flex-direction: column-reverse;
      gap: 5vh
    }

  .img-container {
    width: 40vh;
  }

    .project img {
      width: 40vh;
    }

    .project-content {
      width: 65vw;
    }
  }

  @media (orientation: landscape) {

  .img-container {
    height: 45vh;
    width: 80vh;
  }

    .project img {
      width: 80vh;
      height: 45vh;
    }
    .project-content {
      width: 20vw;
    }
  }

  .project a {
    margin-top: 1rem;
    color: #fff;
    border: 1px solid white;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .project a:hover {
    background-color: rgba(42, 42, 42, 0.8);
  }
</style>

<div class="projects-container">
  {#each projects as project}
    <div class="project"> 
      <div class="project-content">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {#if project.githubLink}
        <a href={project.githubLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" /> Github
        </a>
        {/if}
      </div>
      {#if project.image}
      <div class="img-container">
      <Lazy height={300} placeholder={$t('projects.loading')}>
        <img src={project.image} alt={project.name} />
      </Lazy>
    </div>
      {/if}
    </div>
  {/each}
</div>