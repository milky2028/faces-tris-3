class FacesTris3 {
  async paint(ctx, geom, properties) {
    try {
      const colors = ['yellow', 'black', 'blue', 'red'];
      const size = 4;
      for(let y = 0; y < geom.height/size; y++) {
        for(let x = 0; x < geom.width/size; x++) {
          const color = colors[(x + y) % colors.length];
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.rect(x * size, y * size, size, size);
          ctx.fill();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}

registerPaint('faces-tris-3', FacesTris3);
