import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  var colors = ["red", "limegreen", "blue", "yellow", "violet", "cyan", "goldenrod", "purple", "pink", "darkgreen", "darkorange", "lightskyblue", "brown", "gold", "darkslateblue", "darkgoldenrod"]
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
