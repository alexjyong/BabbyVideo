import videojs from 'video.js';
import 'video.js/dist/video-js.css';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var player = videojs('my-video');

    document.getElementById('pickFile').addEventListener('click', function() {
        // For Android
        fileChooser.open(function(uri) {
            // Convert URI to a native file path
            window.FilePath.resolveNativePath(uri, function(nativePath) {
                player.src({ type: 'video/mp4', src: nativePath });
            }, function(error) {
                console.error("Error resolving file path: ", error);
            });
        });
    });
}
