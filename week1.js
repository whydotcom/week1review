

const destinations = [
    {  city:'Tokyo',
       country: 'Japan',
       price: 400,
       description: "A bustling city where futuristic technology meets centuries-old traditions. Explore neon-lit streets, incredible food, and peaceful temples.",
       image: "Tokyo_image.jpg"
    },
    {   country: 'Colombia',
        city: 'Medellin',
        price: 120,
        description: "Known as the City of Eternal Spring, Medellín offers pleasant weather, vibrant neighborhoods, mountain views, and a thriving cultural scene.",
        image: "Medellin_image.jpg"
    },
    {   country: 'USA',
        city: 'New York',
        price: 80,
        description: "The city that never sleeps, packed with iconic landmarks, world-class museums, Broadway shows, and diverse neighborhoods.",
        image: "Newyork_image.jpg"
    },
];


const container = document.querySelector("#container");

destinations.forEach(destination => {
    const card = document.createElement("div");

    card.classList.add("destination-card");

    const cardInfo = document.createElement("div");
    const cardImage = document.createElement("img");

    cardInfo.classList.add("card-info");

    cardImage.classList.add("card-image");

    const header = document.createElement("h2");
    const price = document.createElement("h3");
    const description = document.createElement("p");

    header.textContent = `${destination.country}, ${destination.city}`;

    price.textContent = `Ticket Price: $${destination.price}`;

    description.textContent = `${destination.description}`;

    

    cardInfo.appendChild(header);
    cardInfo.appendChild(price);
    cardInfo.appendChild(description);

    cardImage.src = `${destination.image}`;

    card.appendChild(cardInfo);
    card.appendChild(cardImage);
    container.appendChild(card);
});