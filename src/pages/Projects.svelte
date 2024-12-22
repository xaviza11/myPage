<script>
  import Projects from '../components/Projects.svelte';
  import { t } from 'svelte-i18n';

  const projects = [
    {
      name: $t('projects.projectOne.name'),
      description: $t('projects.projectOne.description'),
      image: $t('projects.projectOne.image'),
      githubLink: $t('projects.projectOne.github'),
      color: $t('projects.projectOne.color'),
    },
    {
      name: $t('projects.projectTwo.name'),
      description: $t('projects.projectTwo.description'),
      image: $t('projects.projectTwo.image'),
      githubLink: $t('projects.projectTwo.github'),
      color: $t('projects.projectTwo.color'),
    },
  ];
</script>

<svelte:head>
  <title>{$t('projects.title')}</title>
  <meta name="description" content={$t('projects.description')} />
</svelte:head>

<Projects {projects} />
