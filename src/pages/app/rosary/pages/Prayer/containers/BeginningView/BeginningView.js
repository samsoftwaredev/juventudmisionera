import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const BeginningView = ({ currentMystery, onStartPrayer }) => {
  const { t } = useTranslation();

  const todaysDate = new Date();

  return (
    <>
      <h2>{t(currentMystery.label)}</h2>
      <Moment format="D MMMM, YYYY">{todaysDate}</Moment>
      <div className="mt-4">
        <Button size="lg" color="info" onClick={onStartPrayer}>
          {t("start.label")}
        </Button>
      </div>
    </>
  );
};

BeginningView.propTypes = {
  currentMystery: PropTypes.shape().isRequired,
  onStartPrayer: PropTypes.func.isRequired,
};

export default BeginningView;