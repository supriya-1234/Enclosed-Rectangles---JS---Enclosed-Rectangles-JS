//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1, rec2) {
  //write your code
  if (
    rec1.top > rec2.top &&
    rec1.left > rec2.left &&
    rec1.height > rec2.height &&
    rec1.width > rec2.width
  ) {
    return "Completely contained";
  } else if (
    rec1.top === rec2.top &&
    rec1.left === rec2.left &&
    rec1.height === rec2.height &&
    rec1.width === rec2.width
  ) {
    return "Totally overlapping";
  } else if (
    rec1.top < rec2.top &&
    rec1.left < rec2.left &&
    rec1.height < rec2.height &&
    rec1.width < rec2.width
  ) {
    return "Completely contained";
  } else {
    return "does not mathch";
  }
}

module.exports = updateStructure;
