<script>
  import Projects from '../components/Projects.svelte';
  import { t } from 'svelte-i18n';

  $: projects = [
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
    {
      name: $t('projects.projectThree.name'),
      description: $t('projects.projectThree.description'),
      image: $t('projects.projectThree.image'),
      githubLink: $t('projects.projectThree.github'),
      color: $t('projects.projectThree.color'),
    },
  ];
</script>

<svelte:head>
  <title>{$t('projects.title')}</title>
  <meta name="description" content={$t('projects.description')} />
</svelte:head>

<Projects {projects} />
