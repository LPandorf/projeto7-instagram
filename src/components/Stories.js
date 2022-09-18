function Story(props) {
    console.log(props);
    return(
        <div class="story">
            <div class="imagem">
              <img src={props.imagem} />
            </div>
            <div class="usuario">
              {props.usuario}
            </div>
        </div>
    )
}
const stories = [
  {img:'assets/img/9gag.svg', user:'9gag'},
  {img:'assets/img/meowed.svg', user:'meowed'},
  {img:'assets/img/barked.svg', user:'barked'},
  {img:'assets/img/nathanwpylestrangeplanet.svg', user:'nathanwpylestrangeplanet'},
  {img:'assets/img/wawawicomics.svg', user:'wawawicomics'},
  {img:'assets/img/respondeai.svg', user:'respondeai'},
  {img:'assets/img/filomoderna.svg', user:'filomoderna'},
  {img:'assets/img/memeriagourmet.svg', user:'memeriagourmet'},
]
export default function Stories(){
    return (
        <div class="stories">
          {stories.map((story) =>(
            <Story imagem={story.img} usuario={story.user}  />
          ))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}