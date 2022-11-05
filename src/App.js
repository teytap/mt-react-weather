import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/teytap/mt-weather-react"
          target="_blank"
          rel="noreferrer"
          class="github-link"
        >
          Open source code
        </a>{" "}
        by Mehtap Tataroğlu
      </footer>
    </div>
  );
}

export default App;
