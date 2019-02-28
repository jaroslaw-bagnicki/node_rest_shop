exports.PORT = process.env.PORT || 3000;

exports.RES_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Accept, Content-Type, Origin, Authorization'
};

exports.OPT_RES_HEADERS = {
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE'
};
