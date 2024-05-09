import React from "react"
import "../style/messege.css"
import Location from "../images/free-icon-location-5988775.png"

import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xaygzgar")

  if (state.succeeded) {
    return (
      <>
        <title>Ремонт телефонов Алматы</title>

        <div className="bloc-bagraund2">
          <div className="widht-messege width15 ">
            <p className="color-none">.</p>
            <h2 className="about1 top-text20 top100 text-align">
              Сообщение отправлено!
              <br /> Вам перезвонят в ближайшее время
            </h2>

            <div className="flex-contact">
              <div className="widht-messege">
                <div></div>
                <div className="text-size-contact">
                  <h3 className="text-color-messege">
                    <a className="text-color-messege" href="tel:+77273178549">
                      {" "}
                      + 7 (727) 317-85-49
                      <br />
                    </a>
                    <a className="text-color-messege" href="tel:+77024813949">
                      {" "}
                      + 7 (702) 481-39-49
                      <br />
                    </a>
                    <a className="text-color-messege" href="tel:+77028053347">
                      {" "}
                      + 7 (702) 805-33-47
                      <br />
                    </a>
                    <a className="text-color-messege" href="tel:+77751676040">
                      {" "}
                      + 7 (775) 167-60-40
                      <br />
                    </a>
                  </h3>
                </div>
                <div>
                  <div>
                    <h1 className="text-color-messege">
                      <a className="new-class" href="mailto:info@goldenstar.kz">
                        info@goldenstar.kz
                      </a>
                      <br />
                      <a
                        className="new-class"
                        href="mailto:a.janat@hotmail.com"
                      >
                        a.janat@hotmail.com
                      </a>
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-color-messege">
                      {" "}
                      <img
                        className="location"
                        alt=""
                        src={Location}
                      ></img>{" "}
                      <a
                        className="new-class"
                        href="https://go.2gis.com/ef5eb4i"
                      >
                        Бокейханова 152
                      </a>{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="bloc-bagraund2">
        <div className="widht-messege width15 ">
          <p className="color-none">.</p>
          <h2 className="about1 top-text20 top100">Наши контакты </h2>

          <div className="flex-contact new-flex-text">
            <form
              className="color-white widht-messege widht-110 "
              onSubmit={async e => {
                await handleSubmit(e)
                // Сбросить поля формы при успешной отправке
                if (state.succeeded) {
                  reset()
                }
              }}
            >
              <div className="flex-text "></div>
              <div className="flex-text">
                <p id="Lol" className="buttom-contact">
                  .
                </p>
              </div>
              <label htmlFor="name">Ваше имя</label>
              <input id="name" type="name" name="name" autoComplete="on" />

              <label htmlFor="email">Ваш Email адрес</label>
              <input id="email" type="email" name="email" autoComplete="on" />

              <label htmlFor="message">Введите сообщение</label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <textarea id="message" name="message" />

              <button
                className="button1"
                type="submit"
                disabled={state.submitting}
              >
                Отправить
              </button>
              <p className="buttom-contact">.</p>
            </form>
            <div className="widht-messege">
              <div></div>
              <div className="text-size-contact">
                <h3 className="text-color-messege"></h3>
              </div>
              <div>
                <div>
                  <h1 className="text-color-messege">
                    <a className="text-color-messege" href="tel:+77273178549">
                      {" "}
                      + 7 (706) 601-09-65
                    </a>
                    <br />
                    <a
                      className="new-class font1rem"
                      href="mailto:yberdagaliyev@mail.ru"
                    >
                      yberdagaliyev@mail.ru
                    </a>
                  </h1>
                </div>
                <div>
                  <h2 className="text-color-messege">
                    <img className="location" alt="" src={Location}></img>
                    <a className="new-class" href="https://go.2gis.com/23zq9">
                      пр-т. Сейфуллина 521
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="none1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.7400077134084!2d76.92945111222949!3d43.25687047100329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eba50dc1d0d%3A0xd4c161a3ca935ec6!2z0L_RgC3Rgi4g0KHQtdC50YTRg9C70LvQuNC90LAgNTIxLCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1714752502387!5m2!1sru!2skz"
        style={{
          margin: "0 auto",
          border: "0",
          title: "Google Карта",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}

function Contacts() {
  return <ContactForm />
}

export default Contacts
