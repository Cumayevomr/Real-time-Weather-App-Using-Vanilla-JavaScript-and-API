/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Fab",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date .getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date .getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {*number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam non odit fuga consectetur! Aliquid."
    },
    2: {
        level: "Fair",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente, illum in soluta commodi voluptatem vel molestiae esse, dicta eaque ipsum error recusandae aperiam reiciendis asperiores, hic temporibus"
    },
    3: {
        level: "Moderate",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente, illum in soluta commodi voluptatem  hic temporibus"
    },
    4: {
        level: "Poor",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente, illum in soluta commodi voluptatem vel molestiae esse, dicta eaque  hic temporibus"
    },
    5: {
        level: "Very Poor",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dicta eaque cumque asperiores, hic temporibus"
    }
}