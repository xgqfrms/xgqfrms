(function () {
  var re = /x/;
  var i = 0;
  // console.log(re);

  re.toString = function () {
    return '第 ' + (++i) + ' 次打开控制台';
  };
})();

