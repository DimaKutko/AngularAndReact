import { Injectable } from '@angular/core';
import { IAuthor } from '../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getGallery(): IAuthor[]{
    return [
      {
        id: '0',
        name: 'Salvador Dalí',
        arts: [
          {
            id: '0',
            title: 'The Great Masturbator',
            year: 1929,
            size: "110 cm × 150 cm",
            link: "https://upload.wikimedia.org/wikipedia/en/9/90/DaliGreatMasturbator.jpg",
            position: "Museo Nacional Centro de Arte Reina Sofía" 
          },
          {
            id: '1',
            title: 'The Hallucinogenic Toreador',
            year: 1970,
            size: "398.8 cm × 299.7 cm",
            link: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Hallucinogenic_Toreador.png",
            position: "Salvador Dalí Museum" 
          },
          {
            id: '2',
            title: 'Soft Construction with Boiled Beans',
            year: 1936,
            size: "100 x 99 cm",
            link: "https://upload.wikimedia.org/wikipedia/en/8/89/SalvadorDali-SoftConstructionWithBeans.jpg",
            position: "Philadelphia Museum of Art" 
          }
        ]
      },
      {
        id: '1',
        name: 'Pablo Picasso',
        arts: [
          {
            id: '3',
            title: 'Les Demoiselles d\'Avignon',
            year: 1907,
            link: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/579px-Les_Demoiselles_d%27Avignon.jpg",
            position: "Museum of Modern Art, New York" 
          },
          {
            id: '4',
            title: 'Head (Tête)',
            year: 1913,
            size: "43.5 × 33 cm",
            link: "https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28Tête%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg",
            position: "Scottish National Gallery of Modern Art, Edinburgh" 
          },
          {
            id: '5',
            title: 'Pierrot',
            year: 1918,
            size: "92.7 × 73 cm",
            link: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Pablo_Picasso%2C_1918%2C_Pierrot%2C_oil_on_canvas%2C_92.7_x_73_cm%2C_Museum_of_Modern_Art.jpg/1024px-Pablo_Picasso%2C_1918%2C_Pierrot%2C_oil_on_canvas%2C_92.7_x_73_cm%2C_Museum_of_Modern_Art.jpg",
            position: "Museum of Modern Art, New York" 
          }
        ]
      },
      {
        id: '2',
        name: 'Vincent van Gogh',
        arts: [
          {
            id: '6',
            title: 'Henri de Toulouse-Lautrec',
            year: 1887,
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Toulouse-Lautrec_de_Henri_Vincent_van_Gogh_Sun.jpg/504px-Toulouse-Lautrec_de_Henri_Vincent_van_Gogh_Sun.jpg",
            position: "Van Gogh Museum, Amsterdam" 
          },
          {
            id: '7',
            title: 'The Yellow House',
            year: 1888,
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/773px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg",
            position: "Van Gogh Museum, Amsterdam" 
          },
          {
            id: '8',
            title: "The Night Café",
            year: 1888,
            size: "92.7 × 73 cm",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Le_café_de_nuit_%28The_Night_Café%29_by_Vincent_van_Gogh.jpeg/1520px-Le_café_de_nuit_%28The_Night_Café%29_by_Vincent_van_Gogh.jpeg",
            position: "New Haven, Connecticut" 
          }
        ]
      }
    ];
  }
}
