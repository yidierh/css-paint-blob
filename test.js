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

        // 修改我们定义的参数
        const RADIUS = size.width / 2;
        const CenterX = size.width / 2;
        const CenterY = size.height / 2;
        const N = parseInt(properties.get('--n'));
        const B = parseFloat(properties.get('--b'));

        // ... 其他代码不需要改动
    }
}

