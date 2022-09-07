import './user-reviews.css';
import userImg from '../../images/bg.jpg'
import reviewPattern from '../../images/review-pattern.svg'
const UserReviews = () => {
  return (
    <section class="user-review-container">
      <header>
        <h2>User Reviews</h2>
        <p>
          Over 200+ Tenant on hiyalo and over 100+ Agent has properties listed
          and managed on Hiyalo
        </p>
      </header>

      <main class="user-reviews">
        <div class="user-review" id="review-inactive-1">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>Olakunbi Olabode</p>
              <small>Tenant</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              sit amet luctus venenatis, lectus agna fringilla urna, porttitor
              rhoncus dolor purus non porttitor rhoncus dolor purus non enim
              lectus magna fringilla urna, porttitor rhoncus dolor purus non
              porttitor rhoncus dolor purus non enim
            </p>
          </article>
        </div>

        <div class="user-review">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>Olakunbi Olabode</p>
              <small>Tenant</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus agna fringilla
              urna, porttitor rhoncus dolor purus non porttitor rhoncus dolor
              purus non enim lectus magna fringilla urna, porttitor rhoncus
              dolor purus non porttitor rhoncus dolor purus non enim
            </p>
          </article>
        </div>
        <div class="user-review" id="review-inactive-1">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>Olakunbi Olabode</p>
              <small>Tenant</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus agna fringilla
              urna, porttitor rhoncus dolor purus non porttitor rhoncus dolor
              purus non enim lectus magna fringilla urna, porttitor rhoncus
              dolor purus non porttitor rhoncus dolor purus non enim
            </p>
          </article>
        </div>
      </main>

      <aside>
        <img src={reviewPattern} alt="" />
      </aside>
    </section>
  );
};

export default UserReviews;