import moment from "moment";

import { IDealers } from "@/interfaces/dealers.interface";

type status = {
  [key: string]: string 
};

type storeStatus = {
  isOpen: boolean;
  isAfterClosingTime: boolean;
  isBeforeOpeningTime: boolean;
};

/**
 * We are using this function to get the status of the dealer.
 * first we will check if the day is sunday then we know the next opening day will be monday
 * we are getting the data fromthe server and we passing to the next functions
 * @param {dealer} dealer - Array of dealers.
 * @returns status.
 */
export const getDealerOfficeStatus = (dealer: Array<IDealers>): status => {
  const status: status = {
    status: '',
    information: '',
  };
  let [selectedDealer] = dealer;
  if (moment().day() === 0) {
    const nextDay = moment().day(1).format("dddd");
    if (nextDay in selectedDealer.openingHours) {
      status.status = "CLOSED";
      status.information = getOpeningTime(selectedDealer.openingHours[nextDay]);
    }
  } else {
    const currentDay = moment().format("dddd");
    if (currentDay in selectedDealer.openingHours) {
      status.status = "CLOSED";
      status.information = getOpeningTime(
        selectedDealer.openingHours[currentDay]
      );
    }
  }
  return status;
};

/**
 * We are using this function to get the opening time in a formated text.
 * first we will the opena nd close times from the timeobj and we split it 
 * and we will check if it's after closing time or before opening time
 * @param {timeObj} timeObj - opening and closing times.
 * @returns string format of formatted text.
 */
const getOpeningTime = (timeObj: { [key: string]: string }): string => {
  let formattedText: string = "";
  const { open, closes } = timeObj;
  const [hour, minute] = open.split(":");
  const getCurrentStatus = status(open, closes);
  if (getCurrentStatus.isAfterClosingTime) {
    formattedText = formatDurationText(hour, minute);
  } else if (getCurrentStatus.isBeforeOpeningTime) {
    formattedText = formatDurationText(hour, minute);
  }
  return formattedText;
};

/**
 * We are using this function to set the status.
 * we are checking here is it open or is it after closing time or before opening time
 * @param {openingTime closingTime} closingTime openingTime.
 * @returns status.
 */
const status = (openingTime: string, closingTime: string) => {
  const storeStatus: storeStatus = {
    isOpen: false,
    isAfterClosingTime: false,
    isBeforeOpeningTime: false,
  };
  const [openHours, openMinutes] = openingTime.split(":");
  const [closingHours, closingMinutes] = closingTime.split(":");
  const currentHour = moment().hour();
  if (Number(openHours) < currentHour && currentHour < Number(closingHours)) {
    storeStatus.isOpen = true;
  } else if (currentHour > Number(closingHours)) {
    storeStatus.isAfterClosingTime = true;
  } else if (currentHour < Number(openHours)) {
    storeStatus.isBeforeOpeningTime = true;
  }
  return storeStatus;
};

/**
 * We are using this function to format the text.
 * @param {hour minute} hour minute.
 * @returns string.
 */
const formatDurationText = (hour: string, minute: string): string => {
  const currentTime = moment();
  const nextDay = moment().day();
  const targetDate = moment()
    .day(nextDay + 1)
    .set({ hour: Number(hour), minute: Number(minute) });
  const duration = moment.duration(
    moment(targetDate, "h:m:s").diff(moment(currentTime, "h:m:s"))
  );
  return `Opening in ${duration.hours()} hours and ${duration.minutes()} minutes`;
};
