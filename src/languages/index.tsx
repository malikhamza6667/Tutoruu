import React, { useState } from 'react';
import en from "./en.json";
import es from "./es.json";

const Languages = {
  en: { texts: en, label: "English", value: "en" },
  es: { texts: es, label: "Español", value: "es" },
};
export default Languages;
