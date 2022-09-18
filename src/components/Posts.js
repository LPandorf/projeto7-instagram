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

export default function Posts(){
    return (
        <div class="posts">
          <Post usuario="meowed" imagem="assets/img/meowed.svg" imgpostada="assets/img/gato-telefone.svg" imgcurtiu="assets/img/respondeai.svg" curtidopor="respondeai" pessoas="101.523" />
          <Post usuario="barked" imagem="assets/img/barked.svg" imgpostada="assets/img/dog.svg" imgcurtiu="assets/img/adorable_animals.svg" curtidopor="adorable_animals" pessoas="99.159" />
        </div>
    )
}