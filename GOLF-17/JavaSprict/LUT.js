'use strict';

/* global THREE, dat */

function main() {
  // const renderInputElement = document.querySelector('#main_image_bottom')
  // const lutInputElement = document.querySelector('#lutInput')
  const canvasElement = document.querySelector('#output_canvas')

  async function render() {



    const renderImage = new Image()
    renderImage.src = "webgpu-vs-webgl.png"
    await new Promise(resolve => renderImage.onload = resolve)

    // let blob2 = new Blob(["lut.png"], { type: 'text/plain' });
    // const lutSrc = window.webkitURL.createObjectURL(blob2)
    const lutImage = new Image()
    lutImage.src = "lut.png";
    // lutImage = blob2
    await new Promise(resolve => lutImage.onload = resolve)

    window.lutFilter({
      canvas: canvasElement,
      image: renderImage,
      filterImage: lutImage
    })
  }

  render();
  // URL.revokeObjectURL(objectURL);
}
