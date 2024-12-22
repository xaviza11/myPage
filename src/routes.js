import Home from './pages/Home.svelte';
import Projects from './pages/Projects.svelte';
import AboutMe from './pages/AboutMe.svelte';
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '/projects': Projects,
  '/about': AboutMe,
  '*': NotFound
};

export default routes;
