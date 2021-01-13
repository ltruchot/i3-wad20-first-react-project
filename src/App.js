import { Children } from "react";
import "./App.scss";
import DivChemicalElement from "./DivChemicalElement/DivChemicalElement";

// https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/periodic-table-lookup.json"

function App() {

  // 1- lors du survol de n'importequel element, il devient bg noir, text blanc, en 2 seconds
  // 2- lors du survol, le nom complet de l'élement apparaît en douceur (opacity), en 2s
  const elements = [
    { symbol: "Ne", color: "bg-red-300", nomComplet:"Neon" },
    { symbol: "B", color: "bg-green-200", nomComplet:"Beryum"  },
    { symbol: "C", color: "bg-yellow-100", nomComplet:"Cocorum"  },
    { symbol: "N", color: "bg-red-300", nomComplet:"Niatou"  },
    { symbol: "O" , color: "bg-blue-100", nomComplet:"Neon"  },
    { symbol: "Li" , color: "bg-blue-100", nomComplet:"Neon"  },
    { symbol: "Sc" , color: "bg-green-100", nomComplet:"Neon"  },
    { symbol: "Ti" , color: "bg-blue-100", nomComplet:"Neon"  },
    { symbol: "V" , color: "bg-blue-100", nomComplet:"Neon"  },
    { symbol: "Cr" , color: "bg-yellow-100", nomComplet:"Neon"  },
    { symbol: "Mn" , color: "bg-blue-100", nomComplet:"Neon"  },
    { symbol: "Fe" , color: "bg-red-100", nomComplet:"Neon"  },
  ];

  /*
  const divElements = [];
  for (const element of elements) {
    divElements.push(
      <DivChemicalElement 
        el={element.symbol} 
        color={element.color} nc={element.nomComplet} />
    );
  }
  */
/*
  const exemples = [
    { nom: "truchot", prenom: "loic" },
    { nom: "lenoir", prenom: "nicole" },
  ];
  const expemplesTransformes = exemples.map(function (personne) {
    return personne.prenom;
  });
  console.log(expemplesTransformes); // ["loic", "nicole"]


  const doubles = [1, 3, 9].map((n) => n * 2);
  console.log(doubles); // [2, 6, 18];
  */

  // 1- utiliser la même mécanique avec votre <Element> et en jouant avec "Array.map"
  // 2- creer un element contenant tous les autres, et l'instancier une fois dans App !
  // Bonus: existe-il un moyen en React de dire:
  // « Récupère ce qu'il y a entre les balises, STP ? »
  // ex: <DivChemicalElement>{el.nom}</DivChemicalElement> <-- recupère "el.nom" dans le cpt

  /*
  const body = [
    { 
      tag: "div", 
      props: {
        className: "bg-blue text-center",
        id: "app"
      },
      chidren: [
        {
          tag: "div",
          props: {}
        },
        {
          tag: "div",
          props: {
            id: "toto"
          },
          Children: []
        },
        {
          tag: "DivChemicalElement",
          props: {
            el: "N",
            color: "bg-white"
          }
        }
      ]
    },
    {
      tag: "footer",
      props: {},
      chidren: []
    }
  ];
*/
  return (
    <div className="bg-blue-500" id="app">
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <a href="#">ceci est un lien<span>top secret</span></a>


      <p className="text-white uppercase">Bonjour</p>
      <div className="flex justify-between">
        <DivChemicalElement el="H" color="bg-yellow-100">
          du texte enfant
        </DivChemicalElement>
        <DivChemicalElement el="He" color="bg-red-400" />
      </div>
      <div className="flex flex-wrap">
        {elements.map(element => <DivChemicalElement 
          el={element.symbol} 
          color={element.color} 
          nc={element.nomComplet}
        />)}
      </div>
      <div className="flex">
        <div className="w-1/2 md:w-1/4 lg:w-1/6">H</div>
      </div>
      {/*
      1ere: éléments H et He respectivement à gauche et à droite
      2ème: Ne, B, C, N, O, Li (6 sur grand ecran, 4 moyen, 2 mobile)
      3ème: idem pour Sc, Ti, V, Cr, Mn, Fe
      4ème (bonus): Au est seul sur la dernière ligne, mais bien à gauche
      bonus 2: vos elements sont 1 seul composant react instancié plusieurs fois
      bonus 3: il sont issue d'un .map, basé sur un array d'objets
      */}
    </div>
  );
}

export default App;

/*

function Yo ({toto, titi}) {
  console.log(toto, titi); 
}

<Yo toto="salut" titi="aurevoir" /> // version JSX

Yo({
  toto: "salut",
  titi: "aurevoir"
}); // version JS

*/

// exemple de recursion 
/*
const family = [
  { 
    nom: "toto", 
    enfants: [
      { 
        nom: "tutu", 
        enfants: [
          { nom: "toutou"}, 
          { nom: "tata"}
        ]
      }
    ]
  }, 
  { nom: "titi" },
  { 
    nom: "tyty", 
    enfants: [
      { nom: "tautau"}, 
      { nom: "tiatia"}
    ]
  }
];

const arrOfNames = [];
function getAllNames (enfants) {
  for (const enfant of enfants) {
    arrOfNames.push(enfant.nom);
    if (typeof enfant.enfants !== "undefined" && enfant.enfants.length > 0) {
      getAllNames(enfant.enfants);
    }
  }
}

getAllNames(family);
console.log(arrOfNames);
*/
