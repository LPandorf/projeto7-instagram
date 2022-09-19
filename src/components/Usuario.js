import React from 'react';
function Perfil(props){
    console.log(props);
    
    return (
        <div class="ladinho">
            <img src={props.foto} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
}
// falta alterar nome e foto
//onClick="mudarFoto()" onClick="mudarNome()"
//function mudarFoto(){
//    prompt("Coloque o link da sua nova foto de perfil:");
//}
//function mudarNome(){
//    nome=prompt("Digite seu novo nome:");
//}
const perfil =[
    {user:'catanacomics', nome:'Catana', foto:'assets/img/catanacomics.svg'}
]

export default function Usuario(){
    return (
        <div class="usuario">
            {perfil.map((profile) =>(
                <Perfil user={profile.user} nome={profile.nome} foto={profile.foto} />
            ))}
        </div>
    )
}