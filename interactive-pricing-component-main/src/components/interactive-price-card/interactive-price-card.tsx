import React from "react";
import { Card, CardBody, CardHeader, Divider } from "../common/common";
import SlideRanger from "../slide-ranger/slide-ranger";
import IconCheck from "../../assets/images/icon-check.svg";
import Toggle from "../toggle/toggle";

const InteractivePriceCard = () => {
  return (
    <Card>
      <CardHeader>
        <div>
          <span>100k PAGEVIEWS</span>
          <SlideRanger />
          <h3>
            $16.00<span> /month</span>
          </h3>
          <div>
            <div>Monthy Billing</div>
            <Toggle />
            <div>
              Yearly Billing <span>-25%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <ul>
            <li>
              <img src={IconCheck} alt="" />
              <h4>Unlimited websites</h4>
            </li>
            <li>
              <img src={IconCheck} alt="" />
              <h4>100% data ownership</h4>
            </li>
            <li>
              <img src={IconCheck} alt="" />
              <h4>Email reports</h4>
            </li>
          </ul>
          <button>Start my trial</button>
        </div>
      </CardBody>
    </Card>
  );
};

export default InteractivePriceCard;
