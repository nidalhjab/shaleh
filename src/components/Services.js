import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Coocktail",
        info: "hshs shshsh shshsh shshsh shshs shshs shshs sh sh sh sh s"
      },
      {
        icon: <FaHiking />,
        title: "Free Coocktail",
        info: "hshs shshsh shshsh shshsh shshs shshs shshs sh sh sh sh s"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Coocktail",
        info: "hshs shshsh shshsh shshsh shshs shshs shshs sh sh sh sh s"
      },
      {
        icon: <FaBeer />,
        title: "Free Coocktail",
        info: "hshs shshsh shshsh shshsh shshs shshs shshs sh sh sh sh s"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
