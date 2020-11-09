$(document).ready(function () {

  //http://hubblesite.org/api/v3/external_feed/esa_feed
  var imgItems = [];
  var vidItems = [];
  var vidDesc = [];
  var newsItems = [];

  function getItems(item, count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/" + item + "/" + count,
      dataType: 'jsonp',
      success: function (data) {

        imgItems = '<div class="imgItem">' +
          '<div>' +
          '<img src="http:' + data.image_files[3].file_url + '" alt="">' +
          '<span>' +
          '<a href="imagesDetail.html?num=' + count + '">View This Image</a>' +
          '</span>' +
          '</div>' +
          '</div>';
        $(".imageBox").append(imgItems);
      }
    });
  }

  function getVideos(count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/video/" + count,
      dataType: 'jsonp',
      success: function (data) {
        vidItems = '<video class="video" autoplay muted controls playsinline>' +
          '<source src="http:' + data.video_files[2].file_url + '" type="video/mp4">' +
          '<source src="http:' + data.video_files[2].file_url + '" type="video/webm">' +
          '</video>';
        vidDesc = '<h1>' + data.name + '</h1>' +
          '<p>' + data.short_description + '</p>' +
          '<h2><b>Mission :</b> ' + data.mission + '</h2>' +
          '<h2><b>Collection :</b> ' + data.collection + '</h2>' +
          '<div class="btnBox">' +
          '<a href="videosDetail.html?num=' + count + '" class="btn">View This Video</a>' +
          '</div>';

        $(".videoSec").append(vidItems);
        $(".decSec").append(vidDesc);
      }
    });
  }

  getVideos(1)

  function getNews(count) {
    $.ajax({
      url: 'http://hubblesite.org/api/v3/external_feed/esa_feed',
      dataType: 'jsonp',
      success: function (data) {
        var newsTitle = data[count].title;
        var newsImage = data[count].thumbnail_large;

        newsItems = '<div class="slideItem">' +
          '<div>' +
          '<div class="slideImg">' +
          '<img src="http:' + newsImage + '" alt="">' +
          '</div>' +
          '<div class="slideTxt">' +
          '<p>' + newsTitle.substr(0, 50) + '...</p>' +
          '<div class="btnBox">' +
          '<a href="' + data[count].link + '" class="btn">View This Article</a>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
        $(".slideBox").append(newsItems);
      }
    });
  }

  for (var i = 1; i < 9; i++) {
    getItems("image", i);
    getNews(i);
  }

});