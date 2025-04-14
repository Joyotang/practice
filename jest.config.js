/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest/presets/default-esm',  // 使用 ts-jest 的 ESM 预设
  testEnvironment: 'node',                // 在 Node.js 环境中运行测试
  extensionsToTreatAsEsm: ['.ts'],        // 将 .ts 文件视为 ES Modules
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',         // 处理导入路径中的 .js 扩展名
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],  // 使用 ts-jest 并启用 ESM
  },
};