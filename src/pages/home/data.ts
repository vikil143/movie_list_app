import OneImage from "../../images/movie_one.jpg";
import TwoImage from "../../images/movie_two.jpg";
import ThreeImage from "../../images/movie_three.jpg";
import FourImage from "../../images/movie_four.jpg";



let id = 1;

interface Movie {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    rating: string;
  }
  

  interface Data extends Movie {
      id: number;
  }

const data: Array<Data> = [
    { 
        id: id++,
        title: "Spider Man 3",
        subtitle: "No way home",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        // image: require("../../images/movie_one.jpg"),
        image: OneImage,
        rating: "4" 
    },
    { 
        id: id++,
        title: "Spider Man 1",
        subtitle: "Home coming",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        // image: require("../../images/movie_two.jpg"),
        
        image: TwoImage,
        rating: "3" 
    },
    { 
        id: id++,
        title: "Iron 3",
        subtitle: "Subtitle",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        // image: require("../../images/movie_three.jpg"),
        image: ThreeImage,
        rating: "5" 
    },
    { 
        id: id++,
        title: "Spider Man 2",
        subtitle: "the amazing spiderman",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        // image: require("../../images/movie_four.jpg"),
        
        image: FourImage,
        rating: "1" 
    }
]

export {
    data
}