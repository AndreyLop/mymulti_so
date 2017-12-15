
    let player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video__iframe', {});
    }


    (function() {
    const videoPlayer = document.getElementsByClassName('video__player')[0];
    const modal = document.getElementsByClassName('video__modal')[0];
    const closePlayer = document.getElementsByClassName('video__close')[0];
    const body = document.getElementsByTagName('body')[0];
    const modalContainer = document.getElementsByClassName('video__modal')[0];
    const videoIframe = document.getElementsByClassName('video__iframe')[0];

    function openModal() {
        modal.classList.remove('video__modal-hidden');
        modal.classList.add('video__modal-visible');
        body.classList.add('body__overflow-hidden');
        player.playVideo();
    };

    function closeModal() {
        modal.classList.remove('video__modal-visible');
        modal.classList.add('video__modal-hidden');
        body.classList.remove('body__overflow-hidden'); 
        player.pauseVideo();       
    };
    
    videoPlayer.addEventListener('click', openModal);
    modalContainer.addEventListener('click', function(e) {
        if(e.target == this || e.target == closePlayer) {
            closeModal();
        }
    });
})();
