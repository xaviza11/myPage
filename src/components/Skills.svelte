<script>
  import { faReact, faVuejs, faCss3Alt, faJs, faHtml5, faNode, faGitAlt, faDocker, faPython, faLinux, faRust } from "@fortawesome/free-brands-svg-icons";
  import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { t } from "svelte-i18n"; // Importamos la función para traducciones dinámicas

  let activeIndex = 0;
  const containers = ["frontend-container", "backend-container", "other-container"];
  let isAnimating = true;
  let intervalId;

  const next = () => {
    activeIndex = (activeIndex + 1) % containers.length;
  };

  const previous = () => {
    activeIndex = (activeIndex - 1 + containers.length) % containers.length;
  };

  const toggleAnimation = () => {
    isAnimating = !isAnimating;
    if (isAnimating) {
      startAutoChange();
    } else {
      clearInterval(intervalId);
    }
  };

  const startAutoChange = () => {
    intervalId = setInterval(() => {
      next();
    }, 4000);
  };

  import { onMount } from 'svelte';
  onMount(() => {
    startAutoChange();
  });
</script>

<div id="skills-container">
  <div class="carousel-content" style="--active-index: {activeIndex}">
    <div id="frontend-container" class="section">
      <h2>{$t('skills.frontend.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faReact} size="3x" />
        <FontAwesomeIcon class="icon" icon={faVuejs} size="3x" />
        <FontAwesomeIcon class="icon" icon={faCss3Alt} size="3x" />
        <FontAwesomeIcon class="icon" icon={faJs} size="3x" />
        <FontAwesomeIcon class="icon" icon={faHtml5} size="3x" />
      </div>
    </div>
    <div id="backend-container" class="section">
      <h2>{$t('skills.backend.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faNode} size="3x" />
        <FontAwesomeIcon class="icon" icon={faDatabase} size="3x" />
        <FontAwesomeIcon class="icon" icon={faPython} size="3x" />
        <FontAwesomeIcon class="icon" icon={faRust} size="3x" />
      </div>
    </div>
    <div id="other-container" class="section">
      <h2>{$t('skills.other.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faGitAlt} size="4x" />
        <FontAwesomeIcon class="icon" icon={faDocker} size="4x" />
        <FontAwesomeIcon class="icon" icon={faTerminal} size="4x" />
        <FontAwesomeIcon class="icon" icon={faLinux} size="4x" />
      </div>
    </div>
  </div>
  <div class="controls">
    <button on:click={previous}>{$t('controls.previous')}</button>
    <button on:click={next}>{$t('controls.next')}</button>
  </div>
  <div>
    <button class="toggle-btn" on:click={toggleAnimation}>
      {isAnimating ? $t('controls.stop') : $t('controls.restart')}
    </button>
  </div>
</div>

<style>
  #skills-container {
    height: 38vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    #skills-container {
      height: 86vh;
    }
  }

  .carousel-content {
    display: flex;
    transform: translateX(calc(-100% * var(--active-index)));
    transition: transform 0.5s ease;
    width: 300%;
  }

  .section {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
  }

  .icons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3vw;
  }

  .controls {
    display: flex;
    gap: 2rem;
    margin-top: 3vh;
  }

  button {
    color: white;
    border: solid 1px var(--green-highlight);
    border-radius: 4px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  h2 {
    color: var(--green-highlight);
  }

  .toggle-btn {
    margin-top: 1rem;
    background-color: var(--green-highlight);
    border: none;
    padding: 0.4rem 1rem;
    cursor: pointer;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  @media (orientation: landscape) {
    #skills-container {
      height: 75vh;
    }
  }
</style>
