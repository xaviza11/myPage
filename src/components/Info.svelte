<script>
  import { t } from 'svelte-i18n';
  import Lazy from 'svelte-lazy';

  const profile = {
    name: "Xavier",
    photo: "/myPage/images/cover.png"
  };
</script>

<div id="info-container">
  <div id="personal-container">
    <Lazy height={300}>
    <img src={profile.photo} alt="profile-photo" id="profile-photo" />
    </Lazy>
    <div id="profile-container">
      <h1>{profile.name}</h1>
      <h3 class="subtitle">{$t('profile.subtitle')}</h3>
    </div>
  </div>
  <div id="about-container">
    <p>{$t('profile.aboutTextPart1')} <span class="highlight">{profile.name}</span>, {$t('profile.aboutTextPart2')}<span class="highlight">{$t('profile.aboutHightLight')}</span>{$t('profile.aboutTextPart3')}</p>
  </div>
</div>

<style>

#profile-container {
    width: 100vw;
  }

  #info-container {
    width: 100%;
    width: 50vw;
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
    margin-left: 1vw;
  }

  .subtitle {
    color: white;
    font-style: italic;
    margin: 0;
  }

  #about-container p {
    color: white;
    width: 30vw;
    line-height: 1.5;
    margin: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  @media (orientation: landscape) {
    #info-container {
      height: 75vh;
    }
  }

  @media (orientation: portrait) {
    #personal-container {
    width: 45vw;
  }
  #about-container p {
    width: 45vw;
  }
  #info-container {
    gap: 1vh
  }
  }
</style>
