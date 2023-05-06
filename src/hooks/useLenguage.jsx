import { useState, useEffect } from 'react';

function useLenguage() {
  const [text, setText] = useState("");

  const call = (lenguage, difficulty) => {

    let text = ''

        if(lenguage == "spanish")
        {
            text = "El perro corre por el parque y juega con otros animales. La naturaleza es hermosa, y debemos cuidarla. La educación es importante para el desarrollo de las personas y la sociedad. El trabajo en equipo es fundamental en cualquier proyecto. La música es una forma de arte que puede cambiar nuestro estado de ánimo. La literatura es una fuente de conocimiento y entretenimiento."+
            "La tecnología ha transformado nuestra forma de comunicarnos. La comida mexicana es deliciosa y variada. El amor es el sentimiento más puro y poderoso que existe. La familia es la base de la sociedad, y el hogar es donde se forjan los valores. El deporte es beneficioso para la salud y el bienestar emocional. El cine es una forma de escapar de la realidad y adentrarnos en otras historias." +
            "El mar es una maravilla natural que nos ofrece belleza y diversión. La ciencia es una herramienta para entender el mundo que nos rodea. El arte es una expresión de la creatividad humana y puede ser una forma de protesta y reflexión. El futuro es incierto, pero podemos construirlo juntos."
        }
        if(lenguage == "english")
        {
            text = "Dogs are friendly and loyal animals. They love to run and play, and they make great companions. Cats are also great pets, but they tend to be more independent and aloof. Pets can bring joy and companionship into our lives, and they can even improve our health by reducing stress and lowering blood pressure." + 
            "In addition to pets, spending time in nature can also have a positive impact on our well-being. Walking in the park, hiking in the mountains, or simply sitting by a river can help us feel more relaxed and grounded. Nature has a way of putting things in perspective and reminding us of the beauty and wonder of the world around us." +
            "It's important to take care of ourselves and our environment. Eating a balanced diet, getting enough sleep, and exercising regularly can help us feel our best. Recycling, conserving water, and reducing our carbon footprint can help protect the planet for future generations. We all have a role to play in creating a happier, healthier world."
        }
        if(lenguage == "german")
        {
            text = "Hunde sind freundliche und loyale Tiere. Sie lieben es zu rennen und zu spielen und sind tolle Begleiter. Katzen sind auch tolle Haustiere, aber sie neigen dazu, unabhängiger und distanzierter zu sein. Haustiere können Freude und Gesellschaft in unser Leben bringen und sogar unsere Gesundheit verbessern, indem sie den Stress reduzieren und den Blutdruck senken." +
            "Neben Haustieren kann auch die Zeit in der Natur einen positiven Einfluss auf unser Wohlbefinden haben. Spazieren im Park, wandern in den Bergen oder einfach am Fluss sitzen kann uns helfen, uns entspannter und geerdeter zu fühlen. Die Natur hat eine Art, Dinge ins rechte Licht zu rücken und uns an die Schönheit und das Wunder der Welt um uns herum zu erinnern." + 
            "Es ist wichtig, auf uns selbst und unsere Umwelt aufzupassen. Eine ausgewogene Ernährung, ausreichend Schlaf und regelmäßige Bewegung können uns dabei helfen, uns am besten zu fühlen. Recycling, Wassersparen und Reduzierung unseres CO2-Fußabdrucks können dazu beitragen, den Planeten für zukünftige Generationen zu schützen."
        }
        if(lenguage == "french")
        {
            text = "Les chiens sont des animaux amicaux et loyaux. Ils aiment courir et jouer, et font de grands compagnons. Les chats sont également de bons animaux de compagnie, mais ils ont tendance à être plus indépendants et distants. Les animaux de compagnie peuvent apporter de la joie et de la compagnie dans notre vie, et même améliorer notre santé en réduisant le stress et en abaissant la tension artérielle." +
            "En plus des animaux de compagnie, passer du temps dans la nature peut également avoir un impact positif sur notre bien-être. Marcher dans le parc, faire de la randonnée en montagne ou simplement s'asseoir au bord d'une rivière peut nous aider à nous sentir plus détendus et ancrés. La nature a un moyen de remettre les choses en perspective et de nous rappeler la beauté et l'émerveillement du monde qui nous entoure." +
            " Manger une alimentation équilibrée, dormir suffisamment et faire de l'exercice régulièrement peut nous aider à nous sentir au mieux de notre forme. Le recyclage, la conservation de l'eau et la réduction de notre empreinte carbone peuvent aider à protéger la planète pour les générations futures."
        }
        if(lenguage == "italian")
        {
            text = "Il cane corre nel parco e gioca con altri animali. La natura è bellissima e dobbiamo prendercene cura. L'istruzione è importante per lo sviluppo delle persone e della società. Il lavoro di squadra è fondamentale in qualsiasi progetto. La musica è una forma d'arte che può cambiare il nostro stato d'animo. La letteratura è una fonte di conoscenza e di intrattenimento. La tecnologia ha trasformato il nostro modo di comunicare."+
             "La cucina messicana è deliziosa e varia. L'amore è il sentimento più puro e potente che esista. La famiglia è la base della società e la casa è dove si formano i valori. Lo sport è benefico per la salute e il benessere emotivo. Il cinema è un modo per sfuggire alla realtà ed entrare in altre storie. Il mare è una meraviglia naturale che ci offre bellezza e divertimento. La scienza è uno strumento per capire il mondo che ci circonda."+
             " L'arte è un'espressione della creatività umana e può essere una forma di protesta e di riflessione. Il futuro è incerto, ma possiamo costruirlo insieme."
        }
        if(lenguage == "portuguese")
        {
            text = "O cachorro corre pelo parque e brinca com outros animais. A natureza é linda e devemos cuidar dela. A educação é importante para o desenvolvimento das pessoas e da sociedade. O trabalho em equipe é fundamental em qualquer projeto."+
             "A música é uma forma de arte que pode mudar nosso humor. A literatura é uma fonte de conhecimento e entretenimento. A tecnologia transformou nossa forma de comunicação. A comida mexicana é deliciosa e variada. O amor é o sentimento mais puro e poderoso que existe."+
              "A família é a base da sociedade e o lar é onde os valores são formados. O esporte é benéfico para a saúde e o bem-estar emocional. O cinema é uma forma de escapar da realidade e mergulhar em outras histórias. O mar é uma maravilha natural que nos oferece beleza e diversão. A ciência é uma ferramenta para entender o mundo ao nosso redor. A arte é uma expressão da criatividade humana e pode ser uma forma de protesto e reflexão. O futuro é incerto, mas podemos construí-lo juntos."
        }
     
        if (difficulty === "easy") {
            // Convertir a minúsculas y quitar puntos y tildes
            text = text.toLowerCase().replace(/\./g, "").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
            text = text.replace(/\b(\w+),/g, "$1");

          } 
          else if (difficulty === "medium") {
            // Quitar sólo los puntos
            text = text.replace(/\./g, "");
          }
          setText(text)
    }
    useEffect(() => {
        call();
      }, []);
    return { text, call };
}
export default useLenguage;