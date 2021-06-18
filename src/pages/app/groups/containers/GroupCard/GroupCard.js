import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const GroupCard = ({
  image = "",
  eventName = "",
  institutionName = "",
  ages = "",
  online = "",
}) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex w-100 card mx-3 my-5 flex-fill">
      <div style={{ maxWidth: "200px", minHeight: "200px" }}>
        <img className="rounded img-fluid" src={image} alt={eventName} />
      </div>
      <div>
        <h5>{eventName}</h5>
        <p>{institutionName}</p>
        <p>
          {t("age.label")} {ages}
        </p>
        <p>{online ? "Is Online" : "In Person"}</p>
      </div>
    </div>
  );
};

GroupCard.propTypes = {
  image: PropTypes.string,
  eventName: PropTypes.string,
  institutionName: PropTypes.string,
  ages: PropTypes.string,
  online: PropTypes.string,
};

export default GroupCard;
