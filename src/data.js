import { v4 as uuidv4 } from 'uuid';

const DATA = [
    {
        name:"Kakashi Hatake",
        img:"https://i.pinimg.com/736x/bd/a3/ba/bda3baa4e1cff583222c36830c8e7cd2.jpg",
        team:"Team-7",
        about:"Kakashi Hatake is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno.",
        firstAppearance:"Naruto chapter 3: Enter Sasuke! (1999)",
        id:uuidv4()        

    },
    {
        name:"Naruto Uzumaki",
        img:"https://i.pinimg.com/736x/47/03/63/4703634166f6decda6a5707db74dc387.jpg",
        team:"Team-7",
        about:"Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure.",
        firstAppearance:"Naruto chapter 1: Uzumaki Naruto! (1999)",
        id:uuidv4()        
    },
    {
        name:"Shino Aburame",
        img:"https://i.pinimg.com/736x/d2/f2/79/d2f2793bf06be1a8460c1b37a9785b0f.jpg",
        team:"Team-8",
        about:"Shino Aburame is one of the main supporting characters in the Naruto anime/manga series and the Boruto: Naruto Next Generations anime/manga series. He is a friend of Naruto and a few others such as Shikamaru and Hinata.",
        firstAppearance:"Naruto chapter 34: Intruders?! (2001)",
        id:uuidv4()        
    }
];

export default DATA;