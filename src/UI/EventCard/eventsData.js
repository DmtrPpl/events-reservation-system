// eventsData.js
import previewImage from "../../UI/EventCard/assets/preview.png";
import authorImage from "../../UI/EventCard/assets/profile_small.png";
import img from "../../styles/assetsArtists/melissa.jpg"
import ims from "../../UI/EventCard/assets/imm.png"

export const events = [
  {
    id: 1,
    type: 'Web Dev',
    latestArticle: 'Latest Article',
    title: 'Using Fetch API For Executing GraphQL Queries And Mutations',
    previewImage: previewImage,
    content: `
      GraphQL is a powerful tool for querying data from remote servers and my preferred way of building APIs (Application
      Programming Interface). For some people, it might be difficult to learn as the tutorials are usually written using
      tools such as Apollo or Relay. These tools are great but often suited for more complicated projects. In certain
      scenarios, there might be better to choose a more lightweight approach and not increase bundle size with additional
      libraries. In this quick tutorial, we will use fetch, commonly available in your browser. Let’s first quickly revise
      what fetch is and how it is usually used with REST API, then we can move to simple GraphQL queries execution.
    `,
    author: {
      name: 'David Mráz',
      image: authorImage,
    },
    link: '/my-blog',
  },

  {
    id: 2,
    type: 'Web Dev',
    latestArticle: 'Latest Article',
    title: 'Using Fetch API For Executing GraphQL Queries And Mutations',
    previewImage: previewImage,
    content: `
      GraphQL is a powerful tool for querying data from remote servers and my preferred way of building APIs (Application
      Programming Interface). For some people, it might be difficult to learn as the tutorials are usually written using
      tools such as Apollo or Relay. These tools are great but often suited for more complicated projects. In certain
      scenarios, there might be better to choose a more lightweight approach and not increase bundle size with additional
      libraries. In this quick tutorial, we will use fetch, commonly available in your browser. Let’s first quickly revise
      what fetch is and how it is usually used with REST API, then we can move to simple GraphQL queries execution.
    `,
    author: {
      name: 'David Mráz',
      image: authorImage,
    },
    link: '/my-blog',
  },

  {
    id: 3,
    type: 'Party',
    latestArticle: '5.01.2024',
    title: 'Amazing party with the night dj Mell',
    previewImage: ims,
    content: `
      The tradition of one of the most popular parties in Infinity will continue in 2024! All night long, the best Slovak and Czech hits from past years to the present directed by DJ BEZA, sexy dancers, great mood and atmosphere - all this awaits you at the first Party of 2024!
    `,
    author: {
      name: 'Melissa Taylor',
      image: img,
    },
    link: '/my-blog',
  },

  {
    id: 4,
    type: 'Party',
    latestArticle: '100$',
    title: 'Amazing party with the night dj Mell',
    previewImage: ims,
    content: `
      The tradition of one of the most popular parties in Infinity will continue in 2024! All night long, the best Slovak and Czech hits from past years to the present directed by DJ BEZA, sexy dancers, great mood and atmosphere - all this awaits you at the first Party of 2024!
    `,
    author: {
      name: 'Melissa Taylor',
      image: img,
    },
    link: '/my-blog',
  },
  // Add more events with unique IDs
];
