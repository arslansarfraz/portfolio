import blogImg from "../../../assets/blog.png";
import recipeImg from "../../../assets/recipes.png";
import todoImg from "../../../assets/todo.png";
import restaurantImg from "../../../assets/restaurant.png";

export const portfolioContent = [
    {
        name: "Blog App",
        link: "https://live-react-blog-app.netlify.app/",
        imageSrc: blogImg,
        desc: "Blog App using React JS and Firebase as the backend. The app includes essential features such as user authentication, registration, and the ability to create new blog posts. The application provides a seamless experience for bloggers to share their content with ease.",
        github: 'https://github.com/arslansarfraz/blog-app-react',
        tag: ['React JS', 'Firebase'],
        itemPostion: 'row'
    },
    {
        name: "Recipe App",
        link: "https://my-recipe-app-react.netlify.app/",
        imageSrc: recipeImg,
        desc: "Using React JS, I designed a simple recipe search application that utilizes data fetched from an external API. I implemented all the API features, providing users with an easy-to-use interface to search for recipes based on their preferences. The app is a convenient tool for discovering new recipes and trying out new dishes.",
        github: 'https://github.com/arslansarfraz/Recipe-App',
        tag: ['React js', 'API'],
        itemPostion: 'row-reverse'
    },
    {
        name: "Task Manager React",
        link: "https://my-task-manager-react.netlify.app/",
        imageSrc: todoImg,
        desc: "I've been using this app so much that I had to display it here. It's simple and lightweight, allowing you to create, edit, and delete tasks effortlessly. You can also mark tasks as completed or incomplete and filter them by category. Feel free to play around with the app as it stores data using local storage.",
        github: 'https://github.com/arslansarfraz/task-manager-react',
        tag: ['React js', 'LocalStorage'],
        itemPostion: 'row'

    },
    {
        name: "Landing Page",
        link: "https://restaurant-design-react.netlify.app/",
        imageSrc: restaurantImg,
        desc: `Converting the "Gericht Landing Page" design to code using ReactJS and CSS Flexbox involves building a responsive webpage no functionality, using HTML, CSS, and JavaScript. The final product should closely match the original design and be optimized for various devices.`,
        github: 'https://github.com/arslansarfraz/Gericht-ui_ux_restaurant-app',
        tag: ['React JS', 'CSS Flex'],
        itemPostion: 'row-reverse'

    },
];