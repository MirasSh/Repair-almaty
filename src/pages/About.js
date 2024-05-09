import React from "react"
import Contacts from "../components/Contacts"
import Star from "../images/icon/starburst.png"
import Many from "../images/icon/icons.png"
import Iconmessege from "../images/icon/free-icon-dialogue-4542697.png"
import Docum from "../images/icon/free-icon-accept-5266833.png"
import Header from "../components/header"

import Projects from "../components/Projects"
import WatsapComponent from "../components/WatsapComponent"
export default function About() {
  return (
    <>
      <Header />
      <title>Ремонт телефонов Алматы</title>
      <div>
        <div>
          <div className="bacground2  aboutbagrounds">
            <div className="size-spisok">
              <h1 className="left-3 top3 font-sizw-catalog">
                О Ком<span className="colorNew">паний</span>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="bloc-80 header90">
            <div className="about-us flex flexdirection2 ">
              <div className="size-spisok wiaht-100">
                <div className="bloc-80">
                  <h1 className="color font-sizw-about">
                    <span className="colorNew">
                      Ремонт сотовых телефонов в Алматы
                    </span>
                  </h1>
                </div>
                <div className="bloc-80">
                  <div className="flex-text ">
                    <p className="top5 color smoll3">
                      Мобильный телефон является современным гаджетом,
                      сочетающим в себе огромный функционал, тем самым заменяя
                      камеру, часы и даже систему оплаты.
                      <br />
                      <p className="top5 color smoll3">
                        Однако девайс имеет свойство ломаться, что затрудняет
                        последующее использование смартфона. В таких случаях
                        следует произвести ремонт сотовых телефонов, чтобы
                        быстро восстановить работоспособность техники и быть
                        всегда на связи.
                      </p>
                    </p>
                  </div>
                </div>
                <div className="bloc-80">
                  <div className="flex-text ">
                    <p className="top5 color smoll3">
                      Самостоятельная починка устройства – не самый лучший
                      вариант, если, конечно, это не банальный сбой в системе,
                      решаемый посредством перезагрузки гаджета.
                      <br />
                      <p className="top5 color smoll3">
                        {" "}
                        Своевременное обращение в сервисный центр позволяет
                        сразу выявить поломку и причины ее возникновения, и в
                        самые короткие сроки устранить имеющуюся проблему.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="top5 buttom">
                <div>
                  <div className="flex-spicok width15 flex-column">
                    <div className="blor-flex2">
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex ">
                          <img className="width20" alt="" src={Star}></img>
                          <p className="small5">
                            Лидер на рынке Казахстана по учебному оборудованию
                          </p>
                        </div>
                      </div>
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img className="width20" alt="" src={Many}></img>
                          <p className="small5">
                            Выгодные условия сотрудничества
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blor-flex2">
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img
                            className="width20"
                            alt=""
                            src={Iconmessege}
                          ></img>
                          <p className="small5">Поддержка и консультация</p>
                        </div>
                      </div>
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img className="width20" alt="" src={Docum}></img>
                          <p className="small5">Юридическая поддержка</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ценности компании */}
        <div className="bloc-bagraund heght">
          <div className="widht-messege width15 color-white ">
            <div className="width90 margin-auto vh60">
              <h1 className="font-sizw-catalog left-3">
                К числу частых неисправностей относят:
              </h1>

              <div className="about-us flexdirection2">
                <div className="margin-auto flex flex-widht">
                  <div className="container2 ">
                    <h1 className="one">1</h1>
                    <p className="padding10 fontsize05rem">
                      <b>Поломан порт зарядки:</b> В таких ситуациях телефон не
                      заряжается или же зарядка нестабильна. Самыми видимыми
                      причинами плохой работоспособности свидетельствует
                      расшатанный порт или его потеря. Однако в отдельных
                      случаях видимые повреждения могут отсутствовать, и тогда
                      следует провести диагностику.
                    </p>
                  </div>
                  <div className="container2">
                    <h1 className="one">2</h1>
                    <p className="padding10 fontsize05rem">
                      <b>Выход из строя динамика:</b> Некорректное
                      функционирование динамика замечается сразу же, и явными
                      признаками поломки является нарушение качества звука и
                      воспроизведения. Это происходит в следствие загрязнения
                      или попадания воды в деталь, а также ввиду скачков
                      напряжения в момент зарядки техники.
                    </p>
                  </div>
                </div>
                <div className="margin-auto flex flex-widht">
                  <div className="container2 ">
                    <h1 className="one">3</h1>
                    <p className="padding10 fontsize05rem">
                      <b> Разбит дисплей:</b> Эта проблема видна невооруженным
                      глазом. Дисплей телефона может быть разбит по причине
                      падения гаджета или неаккуратного использования.
                      Поврежденное стекло – еще пол беды, а вот если задеты
                      внутренние элементы, то экран может перестать работать, и
                      потребуется его замена.
                    </p>
                  </div>
                  <div className="container2">
                    <h1 className="one">4</h1>
                    <p className="padding10 fontsize05rem">
                      <b> Попадание жидкости в устройство:</b> Жидкость легко и
                      быстро попадает в незащищенные отверстия гаджета. Если
                      вовремя не предпринять соответствующие меры, имеется риск
                      образования коррозии, короткого замыкания или поломки
                      дорогих электронных компонентов. Поэтому стоит как можно
                      скорее обратиться в сервис.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      {/* Контакты */}
      <Contacts />
      <WatsapComponent />
    </>
  )
}
