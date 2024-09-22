import Navegador from "@/components/Navegador";
import { wrap } from "lodash";
import Link from "next/link";

export default function Inicio() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap"
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      {/* Não funcionou como na aula */}
      <Navegador texto="Navegação" destino="/client" cor="darkblue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="darkslateblue" />
    </div>
  )
}