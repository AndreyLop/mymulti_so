"use strict";function onYouTubeIframeAPIReady(){player=new YT.Player("video__iframe",{})}var player=void 0;!function(){var e=document.getElementsByClassName("video__player")[0],d=document.getElementsByClassName("video__modal")[0],a=document.getElementsByClassName("video__close")[0],s=document.getElementsByTagName("body")[0],o=document.getElementsByClassName("video__modal")[0];document.getElementsByClassName("video__iframe")[0];e.addEventListener("click",function(){d.classList.remove("video__modal-hidden"),d.classList.add("video__modal-visible"),s.classList.add("body__overflow-hidden"),player.playVideo()}),o.addEventListener("click",function(e){e.target!=this&&e.target!=a||(d.classList.remove("video__modal-visible"),d.classList.add("video__modal-hidden"),s.classList.remove("body__overflow-hidden"),player.pauseVideo())})}();