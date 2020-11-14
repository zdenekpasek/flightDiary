import { useState } from 'react';
import moment from 'moment';

export default () => {
  const [startMissionDateTime, setStartMissionDateTime] = useState(
    moment().format('lll')
  );
  const [endMissionDateTime, setEndMissionDateTime] = useState(
    moment().format('lll')
  );
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(
    false
  );
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (chosenDate) => {
    setStartMissionDateTime(moment(chosenDate).format('lll'));
    hideStartDatePicker();
  };

  const handleEndDateConfirm = (chosenDate) => {
    setEndMissionDateTime(moment(chosenDate).format('lll'));
    hideEndDatePicker();
  };

  return [
    showStartDatePicker,
    showEndDatePicker,
    hideStartDatePicker,
    hideEndDatePicker,
    handleStartDateConfirm,
    handleEndDateConfirm,
    startMissionDateTime,
    endMissionDateTime,
    isStartDatePickerVisible,
    isEndDatePickerVisible,
  ];
};
