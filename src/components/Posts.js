function Post(props){
    console.log(props);
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
              <img src={props.imgpostada} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
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
    {user: 'meowed',img:'assets/img/meowed.svg',imgpost:'assets/img/gato-telefone.svg',imgc:'assets/img/respondeai.svg',curtp:'respondeai',pes:'101.523'},
    {user: 'barked',img:'assets/img/barked.svg',imgpost:'assets/img/dog.svg',imgc:'assets/img/adorable_animals.svg',curtp:'adorable_animals',pes:'99.159'},
]
export default function Posts(){
    return (
        <div class="posts">
          {posts.map((posts) =>(
            <Post usuario={posts.user} imagem={posts.img} imgpostada={posts.imgpost} imgcurtiu={posts.imgc} curtidopor={posts.curtp} pessoas={posts.pes} />
          ))}
        </div>
    )
}