module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "standard/computed-property-even-spacing": "off",
		"generator-star-spacing": "off",
		"no-unused-expressions": [
			0,
			{
				"allowShortCircuit": true,
				"allowTernary": true
			}
		],
		"no-undef": "warn",
		"no-unused-vars": "warn",
		"@typescript-eslint/no-unused-vars": ["error", {
			"vars": "all",
			"args": "none",
			"ignoreRestSiblings": false
		  }],
		// "no-use-before-define": ["error", { "typedefs": false }],
    // "@typescript/no-use-before-define": "warn",
    // "@typescript/no-unused-vars": "warn",
    "prettier/prettier": ["error", {
      "semi": false,
      "singleQuote": true,
			"printWidth": 80,
			"bracketSpacing": true,
			"eslintIntegration": true
		}],

		// 整个文件的长度
		"max-lines":  ["error", {"max": 800,  "skipBlankLines": true, "skipComments": true}],
		// 有多少层if else嵌套
		"max-depth": ["error", 4],
		// 单行代码的长度
		"max-len": [
			"error",
			{
				"code": 200,
				"ignoreComments": true,
				"ignoreUrls": true,
				"ignoreTrailingComments": true,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true
			}
		], 
		// function的长度
		"max-lines-per-function":[
			"error", 
			{
				"max": 70,  
				"skipBlankLines": true, 
				"skipComments": true,
				"IIFEs": true
			}
		],
		// 有多少层回调
		"max-nested-callbacks": ["error", 4],
		// function多少个请求参数
		"max-params": ["error", 4],
		// 分析复杂度
		"complexity": ["error",  { "max": 15 }]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
