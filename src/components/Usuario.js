import React from 'react';
function Perfil(props){
    console.log(props);
    const [nome, setNome] = React.useState(props.nome);
    function mudarNome(){
        const novoNome=prompt("Digite seu novo nome:");
        setNome(novoNome);    
    }
    const [foto, setFoto] = React.useState(props.foto);
    function mudarFoto(){
        const novaFoto=prompt("Coloque o link da sua nova foto de perfil:");
        setFoto(novaFoto); 
    }    
    return (
        <div class="ladinho">
            <img src={foto} onClick={mudarFoto}/>
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
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