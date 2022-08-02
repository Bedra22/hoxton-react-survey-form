import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState([]);



  const initialForm = {
    review: '',
    email: '',
    username: '',
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <ul>
          {address.map((item) => (
            <li>
              <article className="answer">
                <div className="answer__line">
                  <h3 className="name">{item.username} said:  </h3>
                  <p className="Ans-p">
                    <em>
                      What would you say that are the best features of your rubber duck?
                    </em>
                    {item.bestFeatures}
                  </p>
                  <p className="Ans-p">
                    <em>
                      What would you say that are the worst nags of your rubber duck?
                    </em>
                    {item.worstFeatures}
                  </p>
                  <p className="Ans-p">
                    <em>How do you rate your rubber duck consistency?</em>
                    {item.consistency}
                  </p>
                  <p className="Ans-p">
                    <em>How do you rate your rubber duck colour?</em>
                    {item.colour}
                  </p>
                  <p className="Ans-p">
                    <em>How do you rate your rubber duck logo?</em>
                    {item.logo}
                  </p>
                  <p className="Ans-p">
                    <em>How do you like to spend time with your rubber duck?</em>
                    {item.timeSpent}
                  </p>
                  <p className="Ans-p">
                    <em>What else have you got to say about your rubber duck?</em>
                    {item.review}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <li>
          <article className="answer">
            <h3>{initialForm.username} said:  </h3>
            <p>
              <em>
                What would you say that are the best features of your rubber duck?
              </em>
              {/* <ItemsList list={bestFeatures} /> */}
            </p>
            <p>
              <em>
                What would you say that are the worst nags of your rubber duck?
              </em>
              {/* <ItemsList list={worstFeatures} /> */}
            </p>
            <p>
              <em>How do you rate your rubber duck consistency?</em>
              {/* <span className="answer__line">{consistency}</span> */}
            </p>
            <p>
              <em>How do you rate your rubber duck colour?</em>
              {/* <span className="answer__line">{colour}</span> */}
            </p>
            <p>
              <em>How do you rate your rubber duck logo?</em>
              {/* <span className="answer__line">{logo}</span> */}
            </p>
            <p>
              <em>How do you like to spend time with your rubber duck?</em>
              {/* <ItemsList list={timeSpent} /> */}
            </p>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              {/* <span className="answer__line">{review}</span> */}
            </p>
          </article>
        </li>

      </section>
      <section className="main__form">
        <form className="form"
          onSubmit={event => {
            event.preventDefault()

            const bestFeatures = [
              ...document.querySelectorAll('input[name="features"]:checked')
            ].map(input => input.value)

            const worstFeatures = [
              ...document.querySelectorAll('input[name="bits"]:checked')
            ].map(input => input.value)

            const timeSpent = [
              ...document.querySelectorAll('input[name="spent time"]:checked')
            ].map(input => input.value)

            let adress = {
              review: event.target.text.value,
              email: event.target.email.value,
              username: event.target.usersname.value,
              consistency: event.target.consistancy.value,
              colour: event.target.color.value,
              logo: event.target.logo.value,
              bestFeatures: bestFeatures,
              worstFeatures: worstFeatures,
              timeSpent: timeSpent
            }


            setAddress([...address, adress])

          }}
        >

          <h2>Tell us what you think about your rubber duck</h2>


          <h3>What would you say that are the best features of your rubber duck</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name='features' value="It's yellow!" />
                <span>
                  It's yellow!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='features' value="It squeaks!" />
                <span>
                  It squeaks!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='features' value="It has a logo!" />
                <span>
                  It has a logo!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='features' value="It's big!" />
                <span>
                  It's big!
                </span>
              </label>
            </li>
          </ul>

          <h3>What would you say that are the worst bits of your rubber duck</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name='bits' value="It's yellow!" />
                <span>
                  It's yellow!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='bits' value="It squeaks!" />
                <span>
                  It squeaks!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='bits' value="It has a logo!" />
                <span>
                  It has a logo!
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='bits' value="It's big!" />
                <span>
                  It's big!
                </span>
              </label>
            </li>
          </ul>

          <h3>How youd you rate your rubber duck consistancy</h3>
          <ul className="form__group radio">
            <li>
              <input
                type="radio"
                id="consistancy-1"
                name="consistancy"
                value='1' />
              <label htmlFor="consistancy-1">
                1
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="consistancy-2"
                name="consistancy"
                value='2' />
              <label htmlFor="consistancy-2">
                2
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="consistancy-3"
                name="consistancy"
                value='3' />
              <label htmlFor="consistancy-3">
                3
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="consistancy-4"
                name="consistancy"
                value='4' />
              <label htmlFor="consistancy-4">
                4
              </label>
            </li>
          </ul>

          <h3>How youd you rate your rubber duck color</h3>
          <ul className="form__group radio">
            <li>
              <input
                type="radio"
                id="color-1"
                name="color"
                value='1' />
              <label htmlFor="color-1">
                1
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="color-2"
                name="color"
                value='2' />
              <label htmlFor="color-2">
                2
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="color-3"
                name="color"
                value='3' />
              <label htmlFor="color-3">
                3
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="color-4"
                name="color"
                value='4' />
              <label htmlFor="color-4">
                4
              </label>
            </li>
          </ul>

          <h3>How youd you rate your rubber duck logo</h3>
          <ul className="form__group radio">
            <li>
              <input
                type="radio"
                id="logo-1"
                name="logo"
                value='1' />
              <label htmlFor="logo-1">
                1
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="logo-2"
                name="logo"
                value='2' />
              <label htmlFor="logo-2">
                2
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="logo-3"
                name="logo"
                value='3' />
              <label htmlFor="logo-3">
                3
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="logo-4"
                name="logo"
                value='4' />
              <label htmlFor="logo-4">
                4
              </label>
            </li>
          </ul>

          <h3>How youd would you like to spent time with your rubber duck</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name='spent time' value='Swimming' />
                <span>
                  Swimming
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='spent time' value='Bathing' />
                <span>
                  Bathing
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='spent time' value='Chatting' />
                <span>
                  Chatting
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name='spent time' value="I don't like spending time with it" />
                <span>
                  I don't like spending time with it
                </span>
              </label>
            </li>
          </ul>

          <p>What else would you say about your rubber duck</p>
          <label>
            <textarea name="text" id="saymore" rows={10}></textarea>
          </label>

          <p>Put your name (If you feel like):</p>
          <label  >
            <input name='usersname' type="text" />
          </label>

          <p>Leave us your email please??</p>
          <label  >
            <input name='email' type="email" />
          </label>

          <button className="form__submit">Submit Survey!
          </button>

        </form>

      </section>
    </main >
  );
}

export default Main;
