const BlobClass = class {
  // 声明变量
  static get inputProperties() {
    return [
      '--n',
      '--b'
    ]
  }
  /**
    * @param {*} ctx : 可以使用部分 canvas api
    * @param {*} size :img size
    * @param {*} properties :css 中的属性
    */
  paint(ctx, size, properties) {

    // 将刚才的代码移进来 并用 properties 获取我们的变量
    var point = [];
    const RADIUS = size.width / 2;
    const CenterX = size.width / 2;
    const CenterY = size.height / 2;
    const N = parseInt(properties.get('--n'));
    const B = parseFloat(properties.get('--b'));

    for (let i = 0; i < N; i++) {
      const r = RADIUS - B * (i % 2);
      const x = Math.cos((i / N) * (2 * Math.PI)) * r + CenterX;
      const y = Math.sin((i / N) * (2 * Math.PI)) * r + CenterY;
      point[i] = [x, y];
    }
    ctx.beginPath();
    const xc1 = (point[0][0] + point[N - 1][0]) / 2;
    const yc1 = (point[0][1] + point[N - 1][1]) / 2;

    ctx.moveTo(xc1, yc1);
    for (let j = 0; j < N - 1; j++) {
      const xc = (point[j][0] + point[j + 1][0]) / 2;
      const yc = (point[j][1] + point[j + 1][1]) / 2;
      ctx.quadraticCurveTo(point[j][0], point[j][1], xc, yc)
    }
    ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
    ctx.fillStyle = '#000';
    ctx.closePath();
    ctx.fill();
  }
}

registerPaint('blob', BlobClass)
