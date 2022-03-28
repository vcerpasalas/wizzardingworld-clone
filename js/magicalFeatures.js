const magicalFeaturesFeatures = document.getElementById("magicalFeaturesFeatures");
const magicalFeaturesFeaturesFirst = document.getElementById("magicalFeaturesFeaturesFirst");
const magicalFeaturesFeaturesSecond = document.getElementById("magicalFeaturesFeaturesSecond");

const renderMagicalFeaturesFirst = (src, alt, href, paragraph, elemento) => {
  const fragment = document.createDocumentFragment();

  const magicalFeaturesFeature = document.createElement("div");
  magicalFeaturesFeature.classList.add("magical-features__feature");

  const magicalFeaturesImageContainer = document.createElement("figure");
  magicalFeaturesImageContainer.classList.add("magical-features__image-container");

  const magicalFeaturesImage = document.createElement("img");
  magicalFeaturesImage.setAttribute("src", src);
  magicalFeaturesImage.setAttribute("alt", alt);
  magicalFeaturesImage.classList.add("magical-features__image");

  const magicalFeaturesLinkText = document.createElement("a");
  magicalFeaturesLinkText.setAttribute("href", href);
  magicalFeaturesLinkText.classList.add("magical-features__link-text");

  const magicalFeaturesText = document.createElement("p");
  magicalFeaturesText.textContent = paragraph;
  magicalFeaturesText.classList.add("magical-features__text");

  magicalFeaturesFeature.appendChild(magicalFeaturesImageContainer);
  magicalFeaturesImageContainer.appendChild(magicalFeaturesImage);
  magicalFeaturesLinkText.appendChild(magicalFeaturesText);
  magicalFeaturesFeature.appendChild(magicalFeaturesLinkText);
  fragment.appendChild(magicalFeaturesFeature);
  elemento.appendChild(fragment);
};

const renderMagicalFeaturesSecond = (src, alt, href, paragraph, elemento) => {
  const fragment = document.createDocumentFragment();

  const magicalFeaturesFeature = document.createElement("div");
  magicalFeaturesFeature.classList.add("magical-features__feature");

  const magicalFeaturesImageContainer = document.createElement("figure");
  magicalFeaturesImageContainer.classList.add("magical-features__image-container");

  const magicalFeaturesImage = document.createElement("img");
  magicalFeaturesImage.setAttribute("src", src);
  magicalFeaturesImage.setAttribute("alt", alt);
  magicalFeaturesImage.classList.add("magical-features__image");

  const magicalFeaturesLinkText = document.createElement("a");
  magicalFeaturesLinkText.setAttribute("href", href);
  magicalFeaturesLinkText.classList.add("magical-features__link-text");

  const magicalFeaturesText = document.createElement("p");
  magicalFeaturesText.textContent = paragraph;
  magicalFeaturesText.classList.add("magical-features__text");

  magicalFeaturesFeature.appendChild(magicalFeaturesImageContainer);
  magicalFeaturesImageContainer.appendChild(magicalFeaturesImage);
  magicalFeaturesLinkText.appendChild(magicalFeaturesText);
  magicalFeaturesFeature.appendChild(magicalFeaturesLinkText);
  fragment.appendChild(magicalFeaturesFeature);
  elemento.appendChild(fragment);
};

const loadedMagicalFeatures = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/main/json/magicalFeatures.json"
    );
    data = await res.json();
    //console.log(data);

    for (let index = 0; index < data.length; index++) {
      if (index <= 1) {
        renderMagicalFeaturesFirst(
          data[index].src,
          data[index].alt,
          data[index].href,
          data[index].paragraph,
          magicalFeaturesFeaturesFirst
        );
      } else {
        renderMagicalFeaturesSecond(
          data[index].src,
          data[index].alt,
          data[index].href,
          data[index].paragraph,
          magicalFeaturesFeaturesSecond
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

loadedMagicalFeatures();
