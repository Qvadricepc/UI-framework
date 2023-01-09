import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
// import css from 'rollup-plugin-import-css'
// import css from 'rollup-plugin-css-only'
import postcss from 'rollup-plugin-postcss';
import bundleSize from 'rollup-plugin-bundle-size';
import svgr from '@svgr/rollup';
import postcssUrl from 'postcss-url';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['/*.woff', '/*.woff2', '/*.eot', '/*.ttf', '**/*.svg'],
      }),
      // postcssUrl(),
      // postcssUrl({
      //   url: 'copy',
      //   basePath: path.resolve('public/assets'),
      //   assetPath: 'dist/assets'
      // }),
      // postcssUrl({
      //   url (asset) {
      //     const rebasedUrl = dist/${path.basename(asset.absolutePath)}
      //
      //     return ${rebasedUrl}${asset.search}${asset.hash}
      //   }
      // }),
      postcss({
        extensions: ['.css'],
      }),

      // https://react-svgr.com/docs/rollup/#using-with-rollupplugin-url
      svgr({
        icon: true,
        svgoConfig: {
          // to skip adding prefixIds
          plugins: [],
        },
      }),
      image(),
      typescript(),
      bundleSize(),
      del({ targets: ['dist/*'] }),
      copy({
        targets: [
          {
            src: 'public/assets',
            dest: 'dist',
          },
        ],
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    treeshake: {
      // moduleSideEffects: ['./public/assets/svg/icomoon/svgxuse', 'normalize.css']
      moduleSideEffects: ['no-treeshake'],
    },
  },
];
