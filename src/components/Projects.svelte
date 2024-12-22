<script lang="ts">
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  export let projects: any = [];
</script>

<style>
  #projects-container {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
  }

  .project {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    scroll-snap-align: start; 
    padding: 4rem;
    color: white;
    font-family: Arial, sans-serif;
  }

  .project-content {
    flex: 1;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .project h2 {
    font-size: 2rem;
    margin: 0;
  }

  .project p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .project img {
    flex: 1;
    height: 50vh;
    width: 30vw;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (orientation: portrait) {
    .project {
      display: flex;
      flex-direction: column-reverse;
    }
    .project img {
      width: 70vw;
    }
  }

  .project a {
    margin-top: 1rem;
    color: #fff;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .project a:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  #projects-container::-webkit-scrollbar {
    width: 8px;
  }
  #projects-container::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
</style>

<div id="projects-container">
  {#each projects as project}
    <div 
      class="project" 
      style="background-color: {project.color || '#333'}"
    >
      {#if project.image}
        <img src={project.image} alt={project.name} />
      {/if}
      <div class="project-content">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {#if project.githubLink}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" /> Github
        </a>
        {/if}
      </div>
    </div>
  {/each}
</div>
