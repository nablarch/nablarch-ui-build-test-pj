@setlocal

REM remove plugins
cd %~dp0

set PROJECT_CONF=..\\pjconf\\scenario\\to_small_pj.json

node "..\\node_modules\\nablarch-dev-tool-uibuild\\bin\\ui_build.js" %PROJECT_CONF% nablarchDevelopMode genless
