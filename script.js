document.addEventListener("DOMContentLoaded", () => {
  const details = [
    {
      id: 0,
      content:
        "Tried Mapro's Kakhra for the very first time, and I had to stop my kids from munching on them because they are too delicious! This is now without a doubt our go-to evening healthy snack.",
      name: "Kirti Menon",
      occupation: "Mother of 2",
    },
    {
      id: 1,
      content:
        "Love how the company keeps experimenting with new products! Range of Mazaana chocolates are great conversation starters and definitely the star of every party.",
      name: "Manoj Mundhra",
      occupation: "Product Manager",
    },
    {
      id: 2,
      content:
        "Mazaana is my favourite of all Mapro products. Packaging is superb. The taste of it is so good that I can never stop at just one chocolate.",
      name: "Jay Mistry",
      occupation: "Founder of Zazzy and Petara",
    },
  ];

  let carouselEl = document.querySelector(".carousel");
  let detailsEl = document.querySelector(".details");
  let flickity = new Flickity(carouselEl, {
    cellAlign: "left",
    pageDots: false,
    draggable: true,
    prevNextButtons: true,
    imagesLoaded: true,
  });

  const initialData = details[0];
  detailsEl.innerHTML = `
          <div class="content">
          <p class="person-info">${initialData.content}</p>
          <h1 class="person-name">${initialData.name}</h1>
          <p class="person-position">${initialData.occupation}</p>
          </div>
   
      `;

  flickity.prevButton.element.style.display = "none";
  // Manually trigger the change event to handle initial button visibility
  flickity.on("change", (index) => {
    handleButtonVisibility(index);
  });

  flickity.on("change", (index) => {
    const activeData = details[index];
    detailsEl.innerHTML = `
      <div class="content">
      <p class="person-info">${activeData.content}</p>
      <h1 class="person-name">${activeData.name}</h1>
      <p class="person-position">${activeData.occupation}</p>
      </div>
        `;

    handleButtonVisibility(index);
  });

  function handleButtonVisibility(index) {
    // Hide left button for first slide
    if (index === 0) {
      flickity.prevButton.element.style.display = "none";
    } else {
      flickity.prevButton.element.style.display = "block";
    }

    // Hide right button for last slide
    if (index === details.length - 1) {
      flickity.nextButton.element.style.display = "none";
    } else {
      flickity.nextButton.element.style.display = "block";
    }
  }
});
