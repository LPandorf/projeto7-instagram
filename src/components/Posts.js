import React from 'react';

function Post(props){
    console.log(props);
    const [curtida, setCurtida] = React.useState(props.curtida);
    function postCurtido(){
        setCurtida(!curtida);
    }
    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} />
                {props.usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.imgpostada} onClick={postCurtido}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  {curtida ?(
                    <ion-icon name="heart" class="curtida" onClick={postCurtido}></ion-icon>
                  ):(
                    <ion-icon name="heart-outline" onClick={postCurtido}></ion-icon>
                  )}  
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imgcurtiu} />
                <div class="texto">
                  Curtido por <strong>{props.curtidopor}</strong> e <strong>outras {props.pessoas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}
const posts = [
    {user: 'meowed',img:'assets/img/meowed.svg',imgpost:'assets/img/gato-telefone.svg',imgc:'assets/img/respondeai.svg',curtp:'respondeai',pes:'101.523',curtida:false},
    {user: 'barked',img:'assets/img/barked.svg',imgpost:'assets/img/dog.svg',imgc:'assets/img/adorable_animals.svg',curtp:'adorable_animals',pes:'99.159',curtida:false},
]
export default function Posts(){
    return (
        <div class="posts">
          {posts.map((post) =>(
            <Post usuario={post.user} imagem={post.img} imgpostada={post.imgpost} imgcurtiu={post.imgc} curtidopor={post.curtp} pessoas={post.pes} curtida={post.curtida} />
          ))}
        </div>
    )
}