*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${APP_URL}    http://localhost:3000/register
${BROWSER}    chrome

*** Keywords ***
เข้าหน้าแรก
  Open Browser    ${APP_URL}    ${BROWSER}