import React from "react";
import paris from "../../assets/paris.jpg";
import london from "../../assets/london.jpg";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";
import traveler1 from "../../assets/user1.jpg";
import traveler2 from "../../assets/user2.jpg";
import traveler3 from "../../assets/user3.jpg";
import traveler4 from "../../assets/user4.jpg";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Abdelrahman ALi",
    socialLink: "@AbdelrahmanALi939",
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: "Osama Mohamed",
    socialLink: "@Osama87",
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: "Eman Ahmed",
    socialLink: "@MomoAhmed",
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName: "salma Osama",
    socialLink: "@SalmaKing",
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2
          data-aos="fade-down"
          data-aos-duration="2500">
          Top Travelers of this month!
        </h2>
        <div className="travelersContainer grid">
          {travelers.map((traveler) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="singleTraveler"
              key={traveler.id}>
              <img
                src={traveler.destinationImage}
                className="destinationImage"
              />
              <div className="travelerDetails">
                <div className="travelerPic">
                  <img
                    src={traveler.travelerImage}
                    className="travelerImage"
                  />
                </div>
                <div className="travelerName">
                  <span>
                    {traveler.travelerName}
                  </span>
                  <p>{traveler.socialLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
