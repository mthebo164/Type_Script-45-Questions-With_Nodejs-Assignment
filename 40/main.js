// Creating A Function
function making_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling Three Functions And Creating Three Variables With Different Values
var album1 = making_album("Ahmed", "Album Title 1");
var album2 = making_album("Atif", "Album Title 2");
// Calling A Function With Number Parameter
var album3 = making_album("Ali", "Album Title", 3);
// Printing Variables
console.log(album1);
console.log(album2);
console.log(album3);
