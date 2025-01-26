import React, { useState } from "react";

export const getMonday = () => {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    return new Date(today.setDate(first));
  };
  
export const getSunday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    return new Date(today.setDate(today.getDate() - dayOfWeek));
};

  
export const getDate = (start: Date, index: number) => 
    new Date(new Date(start).setDate(start.getDate() + index));
  
export const areDatesOnSameDay = (first:Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
  





    