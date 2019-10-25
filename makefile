.PHONY: init dev  build buildTest buildPre clean
# 初始化项目
init:
	yarn

# 开发
dev: init
	yarn serve

# 提交commit
commit:
	yarn commit

# 正式打包
build: clean
	yarn
	yarn run build

# 打包测试
buildTest: clean
	yarn
	yarn run build:test

# 打包预生产
buildPre: clean
	yarn
	yarn run build:pre

clean:
	rm -rf dist


