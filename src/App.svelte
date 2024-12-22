<script>
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import './i18n'

  import Footer from './components/Footer.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<div id="app-container">
<Navbar />
  <main>
    <Router {routes} />
  </main>
  <Footer />
</div>

<style>
  main{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.207);
  }
</style>
