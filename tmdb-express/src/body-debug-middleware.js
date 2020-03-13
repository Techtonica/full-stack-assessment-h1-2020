function bodyDebugMiddleware(req, _, next) {
  if (req.is('json')) {
    console.log(`
-> body for ${req.method} ${req.path}
  ${JSON.stringify(req.body)}
<- body for ${req.method} ${req.path}`);
  }
  next();
}

module.exports = bodyDebugMiddleware;
