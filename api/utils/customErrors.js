exports.custom = (message, status) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

exports.invalidId = () => {
  const error = new Error('Invalid id');
  error.status = 400;
  return error;
};

exports.docNotExist = () => {
  const error = new Error('Document with such id doesn\'t exist');
  error.status = 400;
  return error;
};
