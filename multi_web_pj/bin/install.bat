@setlocal

cd %~dp0
pushd ..\\..\\..\\nablarch_ui_plugin_bundle\\bin
set PROJECT_ROOT=../../nablarch_ui_plugins_build_test_pj/multi_web_pj
set UI_PLUGINS_DIRS=ui_plugins

node "..\\node_modules\\nablarch-dev-tool-installer\\bin\\installer.js"
popd