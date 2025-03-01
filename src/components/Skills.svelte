<script>
  import { faReact, faVuejs, faCss3Alt, faJs, faHtml5, faNode, faGitAlt, faDocker, faPython, faLinux, faRust } from "@fortawesome/free-brands-svg-icons";
  import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { t } from "svelte-i18n";

  let activeIndex = 0;
  const containers = ["frontend-container", "backend-container", "other-container"];
  let isAnimating = true;
  let intervalId = 0;

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

<div class="skills-container">
  <div class="carousel-content" style="--active-index: {activeIndex}">
    <div class="frontend-container section">
      <h2>{$t('skills.frontend.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faReact} size="2x" />
        <FontAwesomeIcon class="icon" icon={faVuejs} size="2x" />
        <FontAwesomeIcon class="icon" icon={faCss3Alt} size="2x" />
        <FontAwesomeIcon class="icon" icon={faJs} size="2x" />
        <FontAwesomeIcon class="icon" icon={faHtml5} size="2x" />
      </div>
    </div>
    <div class="backend-container section">
      <h2>{$t('skills.backend.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faNode} size="2x" />
        <FontAwesomeIcon class="icon" icon={faDatabase} size="2x" />
        <FontAwesomeIcon class="icon" icon={faPython} size="2x" />
        <FontAwesomeIcon class="icon" icon={faRust} size="2x" />
      </div>
    </div>
    <div class="other-container section">
      <h2>{$t('skills.other.title')}</h2>
      <div class="icons-container">
        <FontAwesomeIcon class="icon" icon={faGitAlt} size="2x" />
        <FontAwesomeIcon class="icon" icon={faDocker} size="2x" />
        <FontAwesomeIcon class="icon" icon={faTerminal} size="2x" />
        <FontAwesomeIcon class="icon" icon={faLinux} size="2x" />
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
  .skills-container {
    height: 38vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .skills-container {
      height: 40vh;
      width: 50vw;
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
    .skills-container {
      height: 75vh;
    }
  }
</style>