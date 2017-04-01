TS_FILES := $(shell find . -name "*.ts" -not -path "./node_modules/*" -not -name "bundle.js")
TSX_FILES := $(shell find . -name "*.tsx" -not -path "./node_modules/*")
LESS_FILES := $(shell find . -name "*.less" -not -path "./node_modules/*")

.PHONY: start-dev copy_static_assets test lint $(TESTS)

copy_static_assets:
	rm -rf ./__build
	mkdir ./__build
	cp -r ./public/* ./__build

start-dev: copy_static_assets
	@npm run-script dev-server

lint:
	@echo "Linting files..."
	./node_modules/.bin/tslint $(TS_FILES)
	./node_modules/.bin/tslint $(TSX_FILES)
	./node_modules/.bin/eslint --max-warnings 0 -c .eslintrc.yml $(TS_FILES)
	./node_modules/.bin/eslint --max-warnings 0 -c .eslintrc.yml $(TSX_FILES)
	./node_modules/.bin/stylelint $(LESS_FILES)

test: lint
	@echo "Running unit tests..."
	npm test
