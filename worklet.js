registerPaint('blob', class {

  static get inputProperties() {
    return [
      '--n',
      '--b'
    ]
  }

  paint(ctx, size, properties) {
    var point = [];
    const RADIUS = size.width / 2;
    const cx = size.width / 2;
    const cy = size.height / 2;
    const N = parseInt(properties.get('--n'));
    const B = parseFloat(properties.get('--b'));

    var i;
    for (var i = 0; i < N; i++) {

      // 所有的点都有一个固定的位置（由形状的半径定义），但第一个点的位置是可变的，（RADIUS - B）。
      // 当鼠标经过时 B 从 0 变为 100，将我们的点移近中间，就会有 blob 的效果了。
      // if (i == 0)
      //   var r = RADIUS - B;
      // else
      //   var r = RADIUS

      // 我们这次只让偶数点可以收缩，其他的点固定不变
      var r = RADIUS - B * (i % 2);
      var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
      var y = Math.sin((i / N) * (2 * Math.PI)) * r + cy;
      point[i] = [x, y];
    }
    ctx.beginPath();
    var xc1 = (point[0][0] + point[N - 1][0]) / 2;
    var yc1 = (point[0][1] + point[N - 1][1]) / 2;

    ctx.moveTo(xc1, yc1);
    for (var i = 0; i < N - 1; i++) {
      var xc = (point[i][0] + point[i + 1][0]) / 2;
      var yc = (point[i][1] + point[i + 1][1]) / 2;
      ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
    }
    ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
    ctx.fillStyle = '#000';
    ctx.closePath();
    ctx.fill();
  }
})
