import Home from './pages/Home.svelte';
import Projects from './pages/Projects.svelte';
import Skills from './pages/Skills.svelte';
import NotFound from './pages/NotFound.svelte'
import Contact from './pages/Contact.svelte'

const routes = {
  '/': Home,
  '/projects': Projects,
  '/skills': Skills,
  '/contact': Contact,
  '*': NotFound
};

export default routes;
