// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var player = videojs('my-video');

    document.getElementById('pickFile').addEventListener('click', function() {
        // For Android
        fileChooser.open(function(uri) {
            player.src({type: 'video/mp4', src: uri});
        });
    });
}
