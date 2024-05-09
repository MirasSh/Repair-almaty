import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from "./header"
import Messege from "./Messege"
import "../style/layout.css"
import "../style/Adaptation.css"

import Company1 from "../images/company/png-clipart-apple-logo-apple-logo-material-logo-computer-wallpaper.png"
import Company2 from "../images/company/Acer_logo_logotype_emblem-2048x490.png"
import Company3 from "../images/company/Asus-Logo-2048x1152.png"
import Company4 from "../images/company/avtech_logo-600x148.png"
import Company5 from "../images/company/cooltool_logo-1.png"
import Company6 from "../images/company/8z9kangg32oy395zvthxwq2cofcc9t9h.png"
import Company7 from "../images/company/lego-logo-png-9-300x300.png"
import Company8 from "../images/company/logo_horizontal-2c76d65ddf-600x214.png"
import Company9 from "../images/company/logo_p1-600x213.png"
import Company10 from "../images/company/logo_roqed-600x128.png"
import Company11 from "../images/company/logo5.png"
import Company12 from "../images/company/logo-gigo-1.png"
import Company13 from "../images/company/modular-robotics-Cubelets_black-600x158.png"
import Company14 from "../images/company/zmorph_logo-1-1.png"
import Company15 from "../images/company/zspace-600x167.png"

import Star from "../images/icon/starburst.png"
import Many from "../images/icon/icons.png"
import Iconmessege from "../images/icon/free-icon-dialogue-4542697.png"
import Docum from "../images/icon/free-icon-accept-5266833.png"
import Aboutcompany from "./About-company"
import WatsapComponent from "./WatsapComponent"

const Slide = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">
              РЕМОНТ ТЕЛЕФОНОВ <br />
              <span className="colorNew">АЛМАТЫ</span>
            </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  Мастер с опытом 12 лет, выполнит ремонт за 1 день!!
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Slide2 = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">
              ТЕЛЕФОНДАРДЫ ЖӨНДЕУ <br />
              <span className="colorNew">АЛМАТЫДА</span>{" "}
            </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  12 жылдық тәжірибесі бар шебер 1 күнде жөндеу жұмыстарын
                  жүргізеді!!
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                КЕҢЕС АЛЫҢЫЗ
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Slide3 = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">
              PHONE REPAIR <br />
              <span className="colorNew">Almaty</span>{" "}
            </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  A master with 12 years of experience will perform repairs in 1
                  day!!
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                GET A CONSULTATION
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  pauseOnHover: false,
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <title>Ремонт телефонов Алматы</title>
        <Slider {...settings}>
          <Slide />
          <Slide2 />
          <Slide3 />
        </Slider>
        <div className="top5 buttom">
          <div>
            <div className="flex-spicok2 width15">
              <div className="blok-about" id="contacts1">
                <div className="max-80 auto-flex ">
                  <img className="width20" alt="" src={Star}></img>
                  <p className="rem09">№1 на рынке</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Many}></img>
                  <p>Выгодные цены</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Iconmessege}></img>
                  <p>Поддержка и консультация</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Docum}></img>
                  <p className="">Гарантия от 365 дней</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bloc-bagraund">
          <div className="bloc-80">
            <Messege />
          </div>
        </div>
        <div className="bloc-80">
          <div className="bacground2">
            <div className="size-spisok">
              <h1 className="left-3 top5 color font-sizw-catalog">
                Ремонтируем телефоны всех брендов
              </h1>
              <div className="flex-spicok">
                <div className="flex-column">
                  <div className="container2 container222">
                    <div className="widht-110">
                      <img
                        className="width601 width15 widht-100"
                        alt=""
                        src={Company1}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company2}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company3}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company5}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company4}
                      ></img>
                    </div>
                  </div>
                  <div className="container2 container222">
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company6}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company7}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company8}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company9}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company10}
                      ></img>
                    </div>
                  </div>
                  <div className="container2 container222">
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company11}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company12}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company13}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company14}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company15}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Aboutcompany />
        <WatsapComponent />
      </div>
    </>
  )
}

export default Layout
