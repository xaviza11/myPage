<script>
  export let percentage = 0;
  export let color = "blue";

  let currentPercentage = 0;

  import { onMount } from "svelte";
  onMount(() => {
    let interval = setInterval(() => {
      if (currentPercentage < percentage) {
        currentPercentage++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });
</script>

<div class="progress-item">
  <div class="progress-bar-container">
    <span class="progress-percentage">{currentPercentage}%</span>
    <div 
      class="progress-bar" 
      style="width: {currentPercentage}%; --bar-color: {color};">
    </div>
  </div>
</div>

<style>
  .progress-item {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress-bar-container {
    height: 2vh;
    min-height: 12px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .progress-bar {
    height: 100%;
    transition: width 0.3s ease-in-out;
    background-color: var(--bar-color);
    width: 0%;
    border-radius: 10px;
    position: absolute;
    left: 0;
  }

  .progress-percentage {
    background-color: rgb(255, 255, 255);
    padding-left: 1vw;
    padding-right: 1vw;
    border-radius: 4vh;
    position: absolute;
    z-index: 1;
    color: #000000;
    font-weight: bold;
    font-size: 12px;
    pointer-events: none;
  }
</style>
