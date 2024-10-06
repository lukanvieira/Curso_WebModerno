import Layout from "@/components/Layout";

// não funcionou
// export async function getStaticProps() {
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            {props.numero}
        </Layout>
    )
}