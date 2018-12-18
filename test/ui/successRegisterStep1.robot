*** Settings ***
Resource    resources.robot
Suite Teardown    Close All Browsers

*** Variable ***
${firstname_th_input}       //input[@id="firstname_th"]
${firstname_th}             ฟลุ๊ค อาสา

*** Test Cases ***
เข้าหน้าแรกได้สำเร็จ
  Open Browser    ${APP_URL}   ${BROWSER}
  Title Should Be    WIP Camp #11 | Register

กรอกชื่อจริงไทยสำเร็จ
  Set Selenium Implicit Wait  20
  # Element Should Be Visible   ${firstname_th_input}
  Input Text                  ${firstname_th_input}       ${firstname_th}