/*
Copyright 2016 Google, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

registerPaint('hoge', class {
    static get inputProperties() {
      return ['--hoge-foo', '--hoge-color'];
    }

    paint(ctx, geom, properties) {
      const cssValue = properties.get('--hoge-foo').cssText;
      console.log('hoge', cssValue);

      const hogeColor = properties.get('--hoge-color').cssText;

      ctx.fillStyle = hogeColor;
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.fill();
    }
});
