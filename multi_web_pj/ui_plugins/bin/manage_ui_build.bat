@setlocal

cd %~dp0

set PROJECT_CONF=..\\manage_pjconf.json

node "..\\node_modules\\nablarch-dev-tool-uibuild\\bin\\ui_build.js" %PROJECT_CONF%

pause
