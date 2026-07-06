import { Card } from "./componentes/Card/Card";
import { ProvedorTema } from "./componentes/ProvedorTema/ProverdorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Tipografia } from "./componentes/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema >
      <Estilos />
      <Cabecalho>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
      </Cabecalho>
      <Card>
        <Tipografia variante="body" componente="body">
          Freelando
        </Tipografia>
      </Card>
    </ProvedorTema>
  );
}

export default App;
