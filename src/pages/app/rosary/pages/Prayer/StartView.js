import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const StartView = ({ todaysMystery, onStartPrayer }) => {
  const { t } = useTranslation();

  const todaysDate = new Date();

  return (
    <>
      <h2>{t(todaysMystery.label)}</h2>
      <Moment format="D MMMM, YYYY">{todaysDate}</Moment>
      <div className="mt-4">
        <Button color="info" onClick={onStartPrayer}>
          {t("start.label")}
        </Button>
      </div>
    </>
  );
};

StartView.propTypes = {
  todaysMystery: PropTypes.shape().isRequired,
  onStartPrayer: PropTypes.func.isRequired,
};

export default StartView;
