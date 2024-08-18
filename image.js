import css from '../component/image.jpg';
function image(){
    return(
        <div id="slide3" class="slide ,content">
        <img classname="image"src={css} alt=""/>
        <div class="item-card">
                <h2>Movies</h2>
                <img classname="image"src={css} alt=""/>
                <p>
                    <a href="#">See more</a>
                </p>
            </div>
    </div>
)
}
export default Image;