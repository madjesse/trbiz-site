var other = document.getElementById('other'),
  otherChild = other.children;
var otherIndex = [].slice.call(otherChild);
var otherIndexFinal = otherIndex.indexOf(otherIndex[otherIndex.length - 1]);
var otherIndexLength = otherIndex.length;
var otherOuter = [].slice.call(otherIndex);
var otherOuterBtn = [].slice.call(otherIndex);
var ChBtn2 = [].slice.call(otherOuter);
ChBtn2.fill(0);
var AllHeight2 = 0;

console.log('other=', other);
console.log('=============================================');
console.log('otherIndex=', otherIndex);
console.log('=============================================');
//console.log('otherIndexFinal=', otherIndexFinal);
//console.log('=============================================');
//console.log('otherIndexLength=', otherIndexLength);
//console.log('=============================================');
console.log('otherChild=', otherChild);
console.log('=============================================');
console.log('otherOuter=', otherOuter);
console.log('=============================================');
//console.log('otherOuterBtn=', otherOuterBtn);
//console.log('=============================================');

for (var i = 0; i < otherIndex.length; i++) {
  otherOuter[i] = otherIndex[i].children;
  var otherOuterIndex = [].slice.call(otherOuter);
  otherOuterBtn[i] = otherOuterIndex[i][0];
  var otOuInChi = otherOuterIndex[0][1];

  var Staff = otOuInChi.children;
  var StaffWrap = [].slice.call(Staff);

  var StaffPloWrap = StaffWrap[0].children;
  var StaffPlo = [].slice.call(StaffPloWrap);

  var StaffPloBtn = StaffPlo[0].children;
  var StaffPloCont = [].slice.call(StaffPloBtn);

  var StaffCont = StaffPloCont;
  console.log(otherIndex[i]);
    
    
//    console.log('=============================================');
//    console.log(' otherOuterIndex[0-1]=', otherOuterIndex[i]);
//    console.log('=============================================');
//    console.log(' otOuInChi[]=', otOuInChi);
//    console.log('=============================================');
//    console.log(' otOuInChi[0]=', otOuInChi[0]);
//    console.log('=============================================');
//    console.log(' otOuInChi[1]=', otOuInChi[1]);
//    console.log(' Staff[]=', Staff);
//    console.log('=============================================');
//    console.log(' StaffWrap[]=', StaffWrap);
//    console.log('=============================================');
//    console.log(' StaffPloWrap[]=', StaffPloWrap);
//    console.log('=============================================');
//    console.log(' StaffPlo[]=', StaffPlo);
//    console.log('=============================================');
//    console.log(' StaffPloBtn[]=', StaffPloBtn);
//    console.log('=============================================');
//    console.log(' StaffPloCont[]=', StaffPloCont);
//    console.log('=============================================');


  otherOuterBtn[i].addEventListener('click', function () {
    var thisIs = otherOuterBtn.indexOf(this);
console.log('thisIs=',thisIs);


    PushButton(thisIs);
  });

};

function OpenAco(TheA) {
  var OpenNomber = TheA;
  var otherCont = [].slice.call(otherIndex[OpenNomber].children);
  var otherContChi = [].slice.call(otherCont[1].children);
  var otherContMago = otherContChi[0].children;
  var AllHeight2 = otherContMago[0].clientHeight;
  otherContChi[0].style.maxHeight = AllHeight2 + 'px';
};

function CloseAco(TheA) {
  var OpenNomber = TheA;
  var otherCont = [].slice.call(otherIndex[OpenNomber].children);
  var otherContChi = [].slice.call(otherCont[1].children);
  var otherContMago = [].slice.call(otherContChi[0].children);
  var AllHeight2 = otherContMago[0].clientHeight;
  otherContChi[0].style.maxHeight = '';
};

function PushButton(TheClicked) {
  var A = TheClicked;
  var ON = ChBtn2[A];
  switch (ON) {
    case 0:
      ChBtn2[A]++;
      OpenAco(A);
      break;
    case 1:
      ChBtn2[A]--;
      CloseAco(A);
      break;
  };
};
