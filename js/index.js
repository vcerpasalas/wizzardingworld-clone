
const pagesHero = document.getElementById("page-hero");
const latestPosts = document.getElementById("latest-posts");

const renderHeroHtml = ({ displayTitle, shortDescription, mainImage }, heroPage) => {
  const { url } = mainImage.image.file;
  return (heroPage.innerHTML += `
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

const renderLatestPostsHtml = () => {
  latestPosts.innerHTML += `

    <h2 class="latest__title">Latest & greatest</h2>
    <article class="latest-post">
      <figure class="latest-post__image-container"><img src="https://images.ctfassets.net/usf1vwtuqyxm/7c9HY7fJFyYNW8GrqC6UVv/bb777280eb100a1d723952520a0de23e/spells-hogwarts-legacy-approved-still.jpg?w=700&h=700&fit=fill&f=top&fm=webp" alt="" class="latest-post__image"></figure>
      <div class="latest-post__details-container"><h4 class="latest-post__subtitle">FEATURE SPOTLIGHT</h4> 
        <h3 class="latest-post__title">Everything we’re excited about from the Hogwarts Legacy gameplay reveal</h3> 
        <p class="latest-post__details">This week, Warner Bros. Games presented an exciting 14-minute preview of what to expect from Hogwarts Legacy’s gameplay – so we dived straight in to pick out some of our favourite moments.</p> 
        <p class="latest-post__author">By The Wizarding World Team</p> 
        <button class="latest-post__button">Read Feature</button>
      </div>
    </article>
    <section class="secondary-posts-container">
      <article class="secondary-post">
        <figure class="secondary-post__image-container"><img src="https://images.ctfassets.net/usf1vwtuqyxm/61Sv1uHFt9jfEYllf6jP8B/44e80498dea6c1eacc11f19b6923f361/hogwarts-legacy-gameplay-still-potions-web-landscape?w=315&h=315&fit=fill&fm=webp" alt="" class="secondary-post__image"></figure>
        <h3 class="secondary-post__title">Go behind the scenes of Hogwarts Legacy with a new featurette</h3>
         <p class="secondary-post__author">By The Wizarding World Team</p>
      </article>
      <article class="secondary-post">
        <figure class="secondary-post__image-container"><img src="https://images.ctfassets.net/usf1vwtuqyxm/6Dzvr1iTOJVmCy3L0QZyg8/bfd92f50e68727b628bfdc5b7d09bbd4/dumbledore-crest.jpg?w=315&h=315&fit=fill&fm=webp" alt="" class="secondary-post__image"></figure>
        <h3 class="secondary-post__title">First look at MinaLima’s Fantastic Beasts: The Secrets of Dumbledore graphic art prints</h3>
         <p class="secondary-post__author">By The Wizarding World Team</p>
      </article>
    </section>
    <div class="separator">
      <hr class="separator-hr">
      <figure class="separator-ornament__image-container"><img src="./images/ornament.svg" alt="" class="separator-ornament__image"></figure>
      <hr class="separator-hr">
    </div>
 `;
};

renderLatestPostsHtml();

// TODO validación para la pagina correspondiente que queramos
const getPagesData = async () => {
  try {
    const response = await axios.get("../json/news/newsData.json");
    const data = response.data;
    const contentData = data.pageProps.content;

    const referencedContentData = contentData.referencedContent;
    console.log(referencedContentData);
    renderHeroHtml(contentData, pagesHero);
  } catch (error) {
    console.log(error);
  }
};

getPagesData();
