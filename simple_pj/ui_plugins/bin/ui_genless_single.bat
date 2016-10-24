@setlocal

cd %~dp0

set PROJECT_CONF=..\\pjconf\\genless\\single.json

node "..\\node_modules\\nablarch-dev-tool-uibuild\\bin\\ui_build.js" %PROJECT_CONF% nablarchDevelopMode genless
