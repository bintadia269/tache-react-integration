class Navbar extends React.Component{
 constructor(props){
  super(props)
 }
 render(){
  return <div className="navbar">
    <h1>Mon site React</h1>
    <ul>
      <li>Home</li>
      <li>A propos</li>
      <li>Service</li>
      <li>contact</li> 
    </ul>
  </div>
 }
}
 
class Card extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <div className="card">
      <div className="card-image">
        <div className="image">
        <img src={this.props.imageSRC} alt={this.props.imageAlt} />
        </div>
        <div className="card-content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
                
      </div>
    </div>
     

  }
}


class Pays extends React.Component {
  render() {
    const { pays } = this.props;

    return (
      <div className="pays-liste">
        {pays.map((p) => (
          <div className="pays-carte" key={p.name}>
            <img src={p.png} alt={`Drapeau de ${p.name}`} className="pays-drapeau"/>
            <div className="pays-infos">
              <h2>{p.name}</h2>
              <p>Population : {p.population}</p>
              <p>Continent : {p.continent}</p>
              <p>Capitale : {p.capital}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pays: [
        {
          name: "Mauritanie",
          population: 5.022,
          capital: "Nouakchott",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/mr.png", 
        },
        {
          name: "Senegal",
          population: 18032473,
          capital: "Dakar",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/sn.png", 
        },
        {
          name: "Mali",
          population: 22.30,
          capital: "Bamako",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/ml.png", 
        },
        {
          name: "Canada",
          population: 40.1,
          capital: "Ottawa",
          continent: "Amérique",
          png: "https://flagcdn.com/w320/ca.png", 
        },
        {
          name: "Norvege",
          population: 5608317,
          capital: "Oslo",
          continent: "Europe",
          png: "https://flagcdn.com/w320/no.png", 
        },
        {
          name: "Angleterre",
          population: 68.72,
          capital: "Londres",
          continent: "Europe",
          png: "https://flagcdn.com/w320/gb.png", 
        },
        {
          name: "Japon",
          population: 126000000,
          capital: "Tokyo",
          continent: "Asie",
          png: "https://flagcdn.com/w320/jp.png",
        },
        {
          name: "Brésil",
          population: 212000000,
          capital: "Brasilia",
          continent: "Amérique du Sud",
          png: "https://flagcdn.com/w320/br.png" 
        },
        {
          name: "Australie",
          population: 25000000,
          capital: "Canberra",
          continent: "Océanie",
          png: "https://flagcdn.com/w320/au.png",
        },
        {
          name: "Inde",
          population: 1380000000,
          capital: "New Delhi",
          continent: "Asie",
          png: "https://flagcdn.com/w320/in.png",
        },
        {
          name: "Mexique",
          population: 128000000,
          capital: "Mexico",
          continent: "Amérique du Nord",
          png: "https://flagcdn.com/w320/mx.png", 
        },
        {
          name: "Égypte",
          population: 102000000,
          capital: "Le Caire",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/eg.png",
        },
        {
          name: "Afrique du Sud",
          population: 59000000,
          capital: "Pretoria",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/za.png",
        },
        {
          name: "Chine",
          population: 1440000000,
          capital: "Beijing",
          continent: "Asie",
          png: "https://flagcdn.com/w320/cn.png",
        },
        {
          name: "Italie",
          population: 60000000,
          capital: "Rome",
          continent: "Europe",
          png: "https://flagcdn.com/w320/it.png",
        },
        {
          name: "Allemagne",
          population: 83000000,
          capital: "Berlin",
          continent: "Europe",
          png: "https://flagcdn.com/w3220/de.png",
        },
        {
          name: "France",
          population: 67000000,
          capital: "Paris",
          continent: "Europe",
          png: "https://flagcdn.com/w320/fr.png",
        },
        {
          name: "Russie",
          population: 144000000,
          capital: "Moscou",
          continent: "Europe",
          png: "https://flagcdn.com/w320/ru.png", 
        },
        {
          name: "Corée du Sud",
          population: 51000000,
          capital: "Séoul",
          continent: "Asie",
          png: "https://flagcdn.com/w320/kr.png",
        },
        {
          name: "Turquie",
          population: 84000000,
          capital: "Ankara",
          continent: "Asie",
          png: "https://flagcdn.com/w320/tr.png",
        },
        {
          name: "Nigeria",
          population: 206000000,
          capital: "Abuja",
          continent: "Afrique",
          png: "https://flagcdn.com/w320/ng.png",
        },
        {
          name: "Indonésie",
          population: 273000000,
          capital: "Jakarta",
          continent: "Asie",
          png: "https://flagcdn.com/w320/id.png",
        },
        {
          name: "Pakistan",
          population: 220000000,
          capital: "Islamabad",
          continent: "Asie",
          png: "https://flagcdn.com/w320/pk.png",
        },
        {
           name: "Bangladesh",
          population: 164000000,
          capital: "Dhaka",
          continent: "Asie",
          png: "https://flagcdn.com/w320/bd.png",
        },
      ],
    };
  }


  // componentDidMount() {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((r) => r.json())
  //     .then((body) => {
  //       this.setState({ pays: body });
  //       console.log(body)
  //     })
  //     .catch((error) => console.error("error:", error));
  // }

  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then((r) => r.json())
  // .then((body) => console.log(body));
  render() {
    return (
      <div className="app">
        <Navbar />
        
        <div className="cards-container"> {}
                    <Card
                        imageSRC="images/photo.jpeg"
                        imageAlt="Texte"
                        title="Photographe"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo quaerat ullam mollitia laborum, aspernatur illum,
                         totam ab ratione obcaecati delectus beatae vero nihil. Veritatis,
                         laborum a nesciunt error repellendus ut?"
                    />
                    <Card
                        imageSRC="images/photo2.jpeg"
                        imageAlt="Texte"
                        title="Photographe"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo quaerat ullam mollitia laborum, aspernatur illum,
                         totam ab ratione obcaecati delectus beatae vero nihil. Veritatis,
                         laborum a nesciunt error repellendus ut?"
                    />
                    <Card
                        imageSRC="images/photo3.jpeg"
                        imageAlt="Texte"
                        title="Photographe"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo quaerat ullam mollitia laborum, aspernatur illum,
                         totam ab ratione obcaecati delectus beatae vero nihil. Veritatis,
                         laborum a nesciunt error repellendus ut?"
                    />
                    <Card
                        imageSRC="images/photo4.jpeg"
                        imageAlt="Texte"
                        title="Photographe"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo quaerat ullam mollitia laborum, aspernatur illum,
                         totam ab ratione obcaecati delectus beatae vero nihil. Veritatis,
                         laborum a nesciunt error repellendus ut?"
                    />
                </div>
        <h1>Liste des pays</h1>
        <Pays pays={this.state.pays} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));