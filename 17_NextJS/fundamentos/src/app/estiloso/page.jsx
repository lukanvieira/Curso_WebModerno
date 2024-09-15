import Layout from '@/components/Layout';
import style from '../styles/Estiloso.module.css'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={style.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}