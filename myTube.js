var arrayTubes = new Array(
    {
        id: 'WYy2fROj7uU',
        title: '[MV] Han Dong Geun(한동근) _ Amazing You(그대라는 사치)',
        author: 'Han Dong Geun'
    },
    {
        id: 'KK-1xrOsqXI',
        title: '[MV] Han Dong Geun(한동근) _ Crazy(미치고 싶다)',
        author: 'Han Dong Geun'
    },
    {
        id: 'xxa1NcVVGSw',
        title: '[MV] Han Dong Geun(한동근) _ Undoable(안 될 사랑)',
        author: 'Han Dong Geun'
    },
    {
        id: 'rzNNIYy-AUM',
title: '[MV] 한동근(Han Dong Geun) _ 이 소설의 끝을 다시 써보려 해(Making a new ending for this story)',
    author: 'Han Dong Geun'
}
);
var myTubes = document.getElementById('myTubes');
if (myTubes != null){
    for (var i = 0; i <arrayTubes.length ; i++) {
        var listTubes =  '<div class="tube-item" style="float: left; margin: 20px">'+
            '<iframe width="600" height="500" src="https://www.youtube.com/embed/' + arrayTubes[i].id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
            '<h3>' + arrayTubes[i].title + '</h3>' +
            '<h3>' + arrayTubes[i].author + '</h3>' +
            '</div>';
        myTubes.innerHTML += listTubes;
    }
}