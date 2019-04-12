var info = document.getElementById('info'),
    infoChild = info.children;
var infoIndex = [].slice.call(infoChild);
var infoIndexFinal = infoIndex.indexOf(infoIndex[infoIndex.length - 1]);
var infoIndexLength = infoIndex.length;
var infoOuter = [].slice.call(infoIndex);
var infoOuterBtn = [].slice.call(infoIndex);
var ChBtn1 = [].slice.call(infoOuter);
ChBtn1.fill(0);
var AllHeight;
for (var i = 0; i < infoIndex.length; i++) {
    infoOuter[i] = infoIndex[i].children;
    var infoOuterIndex = [].slice.call(infoOuter);
    infoOuterBtn[i] = infoOuterIndex[i][0];
    infoOuterBtn[i].addEventListener('click', function () {
        var thisIs = infoOuterBtn.indexOf(this);

        PushButton1(thisIs);
    });
};

function OpenAco1(TheA) {
    var OpenNomber = TheA;
    var infoCont = [].slice.call(infoIndex[OpenNomber].children);
    var infoContChi = [].slice.call(infoCont[1].children);
    var infoContMago = infoContChi[0].children;
    var AllHeight = infoContMago[0].clientHeight;
    infoContChi[0].style.maxHeight = AllHeight + 'px';
};

function CloseAco1(TheA) {
    var OpenNomber = TheA;
    var infoCont = [].slice.call(infoIndex[OpenNomber].children);
    var infoContChi = [].slice.call(infoCont[1].children);
    var infoContMago = [].slice.call(infoContChi[0].children);
    var AllHeight = infoContMago[0].clientHeight;
    infoContChi[0].style.maxHeight = '';
};

function PushButton1(TheClicked) {
    var A = TheClicked;
    var ON = ChBtn1[A];
    switch (ON) {
        case 0:
            ChBtn1[A]++;
            OpenAco1(A);
            break;
        case 1:
            ChBtn1[A]--;
            CloseAco1(A);
            break;
    };
};
