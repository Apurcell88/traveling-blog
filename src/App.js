import './App.css';
import data from './data.js'
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((location) => {
        return (
          <Card
            location={location.location}
            title={location.title}
            googleMapsUrl={location.googleMapsUrl}
            startDate={location.startDate}
            endDate={location.endDate}
            description={location.description}
            imageUrl={location.imageUrl}
           />
        )
      })}
    </div>
  );
}

export default App;
