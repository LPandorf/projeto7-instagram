import React from "react";
import Usuario from "./Usuario";

function Sugestao(props){
    console.log(props);
    //mini bonus <3 -> mudar de seguir para seguindo
    const [follow, setFollow] = React.useState('Seguir');
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>
            <div class="seguir" onClick={()=> setFollow('Seguindo') } >{follow}</div>
        </div>
    )
}
//easter egg https://www.youtube.com/watch?v=k3zimSRKqNw
const sugestoes=[
    {nome:'bad.vibes.memes', imagem:'assets/img/bad.vibes.memes.svg', razao:'Segue você'},
    {nome:'chibirdart', imagem:'assets/img/chibirdart.svg', razao:'Segue você'},
    {nome:'razoesparaacreditar', imagem:'assets/img/razoesparaacreditar.svg', razao:'Novo no Instagram'},
    {nome:'adorable_animals', imagem:'assets/img/adorable_animals.svg', razao:'Segue você'},
    {nome:'smallcutecats', imagem:'assets/img/smallcutecats.svg', razao:'Segue você'}

]
export default function Sidebar(){
    return (
        <div class="sidebar">
            <Usuario/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map((sugestao) =>(
                    <Sugestao nome={sugestao.nome} imagem={sugestao.imagem} razao={sugestao.razao} />
                ))}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}