<script>
  import { t } from 'svelte-i18n';

  const profile = {
    name: "Xavier",
    photo: "https://via.placeholder.com/150"
  };
</script>

<div id="info-container">
  <div id="personal-container">
    <img src={profile.photo} alt="Foto de perfil" id="profile-photo" />
    <div>
      <h1>{profile.name}</h1>
      <p class="subtitle">{$t('profile.subtitle')}</p>
    </div>
  </div>
  <div id="about-container">
    <p>{$t('profile.aboutTextPart1')} <span class="highlight">{profile.name}</span> {$t('profile.aboutTextPart2')}</p>
  </div>
</div>

<style>
  #info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5vw;
    padding-right: 5vw;
    text-align: center;
    gap: 3vh;
    text-align: left;
  }

  #personal-container {
    width: 30vw;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #profile-photo {
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  #personal-container h1 {
    color: var(--green-highlight);
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  .subtitle {
    color: white;
    font-size: 0.9rem;
    font-style: italic;
    margin: 0;
  }

  #about-container p {
    color: white;
    width: 30vw;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  .highlight {
    color: var(--green-highlight);
    font-weight: bold;
  }

  @media (orientation: landscape) {
    #info-container {
      height: 75vh;
    }
  }

  @media (orientation: portrait) {
    #personal-container {
    width: 68vw;
  }
  #about-container p {
    width: 70vw;
  }
  #info-container {
    gap: 1vh
  }
  }

  @media (max-width: 767px) {
    #about-container p {
      font-size: 0.6rem;
    }
  }
</style>
