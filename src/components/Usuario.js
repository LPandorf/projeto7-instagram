import React from 'react';
function Perfil(props){
    console.log(props);
    function mudarNome(){
        nome=prompt("Digite seu novo nome:");
    }
    return (
        <div class="ladinho">
            <img src={props.foto} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil" onClick={()=>mudarNome()}></ion-icon>
                </span>
            </div>
        </div>
    )
}
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