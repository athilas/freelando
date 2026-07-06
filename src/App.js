import { Card } from "./componentes/Card/Card";
import { ProvedorTema } from "./componentes/ProvedorTema/ProverdorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";

function App() {
  return (
    <ProvedorTema >
      <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
