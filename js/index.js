const pagesHero = document.getElementById("page-hero");
const latestPosts = document.getElementById("latest-posts");
const morePostsContainer = document.getElementById("more-posts-container");

const renderHeroHtml = ({ displayTitle, shortDescription, mainImage }, heroPageSection) => {
  const { url } = mainImage.image.file;
  return (heroPageSection.innerHTML += `
     <figure class="page-hero__image-container">
      <img class="page-hero-image" src="${url}" alt="">
    </figure>
    <div class="page-hero-container-details">
      <h1 class="page-hero__title">${displayTitle}</h1>
      <p class="page-hero__description">${shortDescription}</p>
       <lottie-player id="scroll-indicator-el" class="page-hero__scroll-indicator" src="./images/animated-scroll-indicator.json" speed="0.5" style="width:50px; height:50px"  loop autoplay></lottie-player>
    </div> 
    `);
};

const renderLatestPostsHtml = ({ displayTitle }, latestData, latestPostsSection) => {
  const secondaryPostsContainer = document.createElement("section");
  secondaryPostsContainer.classList.add("secondary-posts-container");

  const mainPageHref = `https://www.wizardingworld.com/${displayTitle.toLowerCase()}/`;

  latestData.forEach((element, i) => {
    const { externalId, displayTitle, intro, mainImage } = element;
    const { url } = mainImage.image.file;
    if (i === 0) {
      latestPostsSection.innerHTML += `      
      <h2 class="latest__title">Latest & greatest</h2>
    <article class="latest-post">
      <figure class="latest-post__image-container"><img src="${url}" alt="" class="latest-post__image"></figure>
      <div class="latest-post__details-container"><h4 class="latest-post__subtitle">FEATURE SPOTLIGHT</h4> 
        <h3 class="latest-post__title">${displayTitle}</h3> 
        <p class="latest-post__details">${intro}</p> 
        <p class="latest-post__author">By The Wizarding World Team</p> 
        <a class="latest-post__button" href="${mainPageHref + externalId}" target="_blank" >Read Feature</a>
      </div>
    </article>  
     `;
    } else {
      secondaryPostsContainer.innerHTML += `
        <a  href="${mainPageHref + externalId}" target="_blank">
      <article class="secondary-post">
   
        <figure class="secondary-post__image-container"><img src="${url}" alt="" class="secondary-post__image"></figure>
        <h3 class="secondary-post__title">${displayTitle}</h3>
         <p class="secondary-post__author">By The Wizarding World Team</p>
         </article>
         </a>

`;
    }
    latestPostsSection.append(secondaryPostsContainer);
  });
};

const renderMoreSectionHtml = ({ displayTitle }, moreSectionData, pageSection) => {
  const mainPageHref = `https://www.wizardingworld.com/${displayTitle.toLowerCase()}/`;
  moreSectionData.forEach((element) => {
    const { displayTitle, externalId, mainImage } = element.body;
    const { url } = mainImage.image.file;
    pageSection.innerHTML += `
      <a href=${mainPageHref + externalId} target="_blank">
       <article class="more-post">
          <figure class="more-post__image-container"><img src="${url}" alt="" class="more-post__image"></figure >
          <h3 class="more-post__title">${displayTitle}</h3>
           <p class="more-post__author">By The Wizarding World Team</p>
        </article>
        </a>
      `;
  });
};

const bodyEl = document.querySelector(".body");
const isNews = bodyEl.classList.contains("news");
const isFeatures = bodyEl.classList.contains("features");

if (isNews || isFeatures) {
  bodyEl.classList.add("clear-theme");
}

const getPagesData = async () => {
  if (isNews || isFeatures) {
    try {
      let response;
      if (isNews) {
        response = await axios.get(
          "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/news/newsData.json"
        );
      } else if (isFeatures) {
        response = await axios.get(
          "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/features/featuresData.json"
        );
      }
      const data = response.data;

      const contentData = data.pageProps.content;
      const latestContentData = contentData.referencedContent;
      const moreContentData = data.pageProps.moreToExplore;

      renderHeroHtml(contentData, pagesHero);
      renderLatestPostsHtml(contentData, latestContentData, latestPosts);
      renderMoreSectionHtml(contentData, moreContentData, morePostsContainer);
    } catch (error) {
      console.log(error);
    }
  }
};

getPagesData();

// Blog - reproducir canción de Hogwarts

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

document.addEventListener("DOMContentLoaded", documentReady);
