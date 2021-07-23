// ==UserScript==
// @name         Phonin Site - Amoled
// @namespace    https://phonin.github.io/
// @version      0.1
// @description  Enables Amoled on the Phonin Github Pages Site
// @author       0J3
// @match        https://phonin.github.io/*
// @icon         https://phonin.github.io/Branding/icons/small.svg
// @grant        none
// ==/UserScript==

const setThemeAttribute = (attr)=>{document.querySelector('html').setAttribute('data-'+attr,'true');document.querySelector('html').setAttribute('data-userscript-'+attr,'true')};
setThemeAttribute('amoled');
setThemeAttribute('fulldark');
