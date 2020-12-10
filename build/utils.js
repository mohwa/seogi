import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export const OUTPUT_PATH = 'dist';

export function mergeEntryConfig(options = {}) {
  const plugins = options.plugins || [];
  const output = options.output || {};

  delete options.plugins;
  delete options.output;

  return {
    input: 'src/index.js',
    output: {
      freeze: false,
      interop: false,
      sourcemap: true,
      ...output,
    },
    plugins: [
      babel({ runtimeHelpers: true }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**/*',
        sourceMap: true,
        dynamicRequireTargets: [
          // colors 모듈의 경우, dynamic require(동적 import) 또는 circular dependencies(순환 참조)로 인해, 모듈이 정상 처리되지않아,
          // 아래처럼 dynamicRequireTargets 배열 목록에 포함합니다.
          // 이 기능을 통해, 더 나은 최적화가 이루어진다.
          'node_modules/colors/**/*.js',
        ],
      }),
      ...plugins,
    ],
    ...options,
  };
}
