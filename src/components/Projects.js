import React from "react"
import MainLogo4 from "../images/Gg/pixelik.jpg"
import MainLogo5 from "../images/Gg/foto.png"
import MainLogo6 from "../images/Gg/pixelikz-photo.png"
import MainLogo7 from "../images/Gg/pixelikz-photo-remon.jpg"
import MainLogo8 from "../images/Gg/01.png"
import MainLogo9 from "../images/Gg/shutterstock_433163122-scaled.jpg"

export default function Projects() {
  return (
    <div>
      <div>
        <div className="bacground2 width70 bloc-80">
          <div className="size-spisok wiaht-100">
            <h1 className="left-3 color font-sizw-catalog">
              Частые поломки телефонов, которые ремонтирует наш{" "}
              <span className="colorNew">
                <br />
                Сервис Центр
              </span>
            </h1>
            <div className="flex-spicok">
              <div className="flex-column">
                <div className="container2 container222">
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo8}
                      ></img>
                    </a>
                  </div>
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo9}
                      ></img>
                    </a>
                  </div>
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo7}
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="container2 container222">
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo4}
                      ></img>
                    </a>
                  </div>
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo5}
                      ></img>
                    </a>
                  </div>
                  <div className="widht-110">
                    <a href="#contacts1">
                      <img
                        className="width64 widht-100"
                        alt=""
                        src={MainLogo6}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
