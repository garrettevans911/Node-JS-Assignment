const url = require('url');

exports.readweather = function(req) {
  let parsedUrl = url.parse(req.url);

  console.log(parsedUrl);
  console.log(parsedUrl.query);

  if (parsedUrl.query != null)
  if (parsedUrl.query.id != null) {
    return parsedUrl.query.id;
  } else {
    return null;
  } else {
    return '';


}