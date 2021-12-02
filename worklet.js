// 调用 registerPaint 注册 刚才在 css 中定义的 「blob」
registerPaint('blob', class {

  // 在这里声明 css 中定义的变量
  static get inputProperties() {
    return [
      '--n'
    ]
  }

  /**
   * @param {*} ctx : 可以使用部分 canvas api
   * @param {*} size :img size
   * @param {*} properties :css 中的属性
   */
  paint(ctx, size, properties) {
    var point = [];

    // 定义半径
    const RADIUS = size.width / 2;
    const cx = size.width / 2;
    const cy = size.height / 2;

    // 获取css 中定义的变量值 15
    const N = parseInt(properties.get('--n'));

    // 将刚才的代码移过来
    for (var i = 0; i < N; i++) {

      var r = RADIUS - Math.random() * 50;
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