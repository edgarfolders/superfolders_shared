import React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from 'react';
import App from "/imports/ui/App";
import NuclearItem3 from "../imports/components/NuclearItem3";


const container = document.getElementById("react-target");
const root = createRoot(container);
root.render(<App />);
