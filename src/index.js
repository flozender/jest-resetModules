Object.assign(exports, { getMain, requireFromMain });

function getMain() {
  return require.main;
}

function requireFromMain(pkg) {
  return getMain().require(pkg);
}
