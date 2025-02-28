<script>
  import ProgressBar from "./ProgressBar.svelte";
  import { t } from "svelte-i18n";

  export let frontendSkills = [
    { name: $t("skills.frontend.js"), percentage: 90, color: "yellow" },
    { name: $t("skills.frontend.ts"), percentage: 90, color: "#339fff" },
    { name: $t("skills.frontend.react"), percentage: 95, color: "#72c3ff" },
    { name: $t("skills.frontend.svelte"), percentage: 90, color: "red" },
    { name: $t("skills.frontend.vue"), percentage: 95, color: "green" },
    {
      name: $t("skills.frontend.reactNative"),
      percentage: 80,
      color: "#72c3ff",
    },
    { name: $t("skills.frontend.css"), percentage: 90, color: "#0068d1" },
    { name: $t("skills.frontend.tailwind"), percentage: 90, color: "#4ca5ff" },
  ];

  export let backendSkills = [
    { name: $t("skills.backend.nestJs"), percentage: 90, color: "#ff1f00" },
    { name: $t("skills.backend.fastify"), percentage: 95, color: "#464646" },
    { name: $t("skills.backend.fastApi"), percentage: 90, color: "#01961a" },
    { name: $t("skills.backend.express"), percentage: 95, color: "#464646" },
  ];

  export let databaseSkills = [
    { name: $t("skills.database.mongoDb"), percentage: 95, color: "#00914f" },
    { name: $t("skills.database.sqlite"), percentage: 85, color: "#23b9ff" },
  ];

  export let otherSkills = [
    { name: $t("skills.other.git"), percentage: 90, color: "#ff650d" },
    { name: $t("skills.other.docker"), percentage: 79, color: "#029fff" },
    { name: $t("skills.other.rust"), percentage: 70, color: "#da0000" },
  ];
</script>

<div class="skills-section">
  <h2 class="skill-title">{$t("skills.frontend.title")}</h2>
  <div class="skills-list">
    {#each frontendSkills as skill}
      <div class="skill">
        <label for="{skill.name.toLowerCase()}-progress">{skill.name}</label>
        <ProgressBar percentage={skill.percentage} color={skill.color} />
      </div>
    {/each}
  </div>
</div>

<div class="skills-section">
  <h2 class="skill-title">{$t("skills.backend.title")}</h2>
  <div class="skills-list">
    {#each backendSkills as skill}
      <div class="skill">
        <label for="{skill.name.toLowerCase()}-progress">{skill.name}</label>
        <ProgressBar percentage={skill.percentage} color={skill.color} />
      </div>
    {/each}
  </div>
</div>

<div class="skills-section">
  <h2 class="skill-title">{$t("skills.database.title")}</h2>
  <div class="skills-list">
    {#each databaseSkills as skill}
      <div class="skill">
        <label for="{skill.name.toLowerCase()}-progress">{skill.name}</label>
        <ProgressBar percentage={skill.percentage} color={skill.color} />
      </div>
    {/each}
  </div>
</div>

<div class="skills-section">
  <h2 class="skill-title">{$t("skills.other.title")}</h2>
  <div class="skills-list">
    {#each otherSkills as skill}
      <div class="skill">
        <label for="{skill.name.toLowerCase()}-progress">{skill.name}</label>
        <ProgressBar percentage={skill.percentage} color={skill.color} />
      </div>
    {/each}
  </div>
</div>

<style>
  .skills-list {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6vh;
  }

  .skill-title {
    margin-bottom: 2vh;
    color: var(--green-highlight);
  }

  @media (max-width: 916px) {
    .skill-title {
      font-size: 1.5rem;
    }
  }

  .skill {
    width: 50vw;
  }
</style>
